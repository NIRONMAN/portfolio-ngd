import { transporter } from "@/config/nodeMailer";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Schema validation for incoming contact form payload
const requestSchema = z.object({
  data: z.object({
    senderName: z.string().min(2, "Name must be at least 2 characters").max(100),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters").max(3000),
  }),
  token: z.string().min(10, "reCAPTCHA token is required"),
});

// Simple in-memory rate limiting map: IP -> timestamp array
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) ?? [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, validTimestamps);
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { message: "Too many requests. Please wait a few minutes before trying again." },
        { status: 429 }
      );
    }

    const rawBody = await req.json();
    const parseResult = requestSchema.safeParse(rawBody);

    if (!parseResult.success) {
      return NextResponse.json(
        { message: "Invalid form data.", errors: parseResult.error.flatten() },
        { status: 400 }
      );
    }

    const { data: body, token } = parseResult.data;
    const recaptchaKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!recaptchaKey) {
      console.warn("RECAPTCHA_SECRET_KEY is not configured in environment variables.");
    } else {
      const verifyUrl = "https://www.google.com/recaptcha/api/siteverify";
      const params = new URLSearchParams();
      params.append("secret", recaptchaKey);
      params.append("response", token);

      const verifyResponse = await axios.post(verifyUrl, params.toString(), {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      if (!verifyResponse.data?.success) {
        return NextResponse.json(
          { message: "CAPTCHA verification failed. Please try again." },
          { status: 400 }
        );
      }
    }

    const recipientEmail = process.env.EMAIL;
    if (!recipientEmail) {
      console.error("EMAIL configuration is missing from environment variables.");
      return NextResponse.json(
        { message: "Server email configuration is missing." },
        { status: 500 }
      );
    }

    // Clean inputs and dispatch email
    const safeSenderName = body.senderName.replace(/[\r\n]/g, " ").trim();
    const safeSenderEmail = body.email.replace(/[\r\n]/g, " ").trim();

    await transporter.sendMail({
      from: recipientEmail,
      to: recipientEmail,
      replyTo: safeSenderEmail,
      subject: `Portfolio Message from ${safeSenderName}`,
      text: `Name: ${safeSenderName}\nEmail: ${safeSenderEmail}\n\nMessage:\n${body.message}\n`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #111;">
          <h2 style="color: #2563eb; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">New Contact Submission</h2>
          <p><strong>Sender:</strong> ${safeSenderName}</p>
          <p><strong>Email:</strong> <a href="mailto:${safeSenderEmail}">${safeSenderEmail}</a></p>
          <div style="margin-top: 16px; padding: 14px; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
            <p style="white-space: pre-wrap; margin: 0;">${body.message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Your message has been sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to process contact form submission:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred while sending your message. Please try again." },
      { status: 500 }
    );
  }
}
