"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Globe, Github, Linkedin, Loader2, Mail } from "lucide-react";
import { useRef, useState } from "react";
import ReCaptcha from "react-google-recaptcha";
import type { ReCAPTCHA as ReCAPTCHAType } from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  senderName: z.string().min(2, { message: "Please enter your name." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Please add a short message." }),
});

type FormValues = z.infer<typeof formSchema>;

type SubmitState = "idle" | "success" | "error" | "captcha-error";

const socialLinks = [
  {
    label: "Email: niranjan.dabhade7@gmail.com",
    href: "mailto:niranjan.dabhade7@gmail.com",
    icon: <Mail size={18} className="text-primary" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nironman/",
    icon: <Linkedin size={18} className="text-primary" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/NIRONMAN",
    icon: <Github size={18} className="text-primary" />,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/nironman/",
    icon: <Image src="/Leetcode.svg" alt="LeetCode" width={18} height={18} />,
  },
];

const ContactMe: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const captchaRef = useRef<ReCAPTCHAType | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      senderName: "",
      email: "",
      message: "",
    },
  });

  const handleOnSubmit = async (data: FormValues) => {
    setIsLoading(true);
    setSubmitState("idle");

    const token = captchaRef.current?.getValue();
    if (!token) {
      setSubmitState("captcha-error");
      setIsLoading(false);
      return;
    }

    try {
      await axios.post("/api/sendmail", { data, token });
      setSubmitState("success");
      form.reset();
      captchaRef.current?.reset();
    } catch {
      setSubmitState("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="section-shell">
      <p className="section-kicker">Contact</p>
      <h2 className="section-title">Let&apos;s discuss your next product or collaboration.</h2>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="surface-panel p-6 md:p-7">
          <h3 className="text-2xl font-semibold">Find me online</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            I usually reply quickly on LinkedIn and email for project or internship opportunities.
          </p>

          <div className="mt-6 space-y-3">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border/80 bg-background/70 px-4 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/80 bg-card">
                  {item.icon}
                </span>
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/Resume.pdf"
            className="mt-5 inline-flex items-center rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-secondary"
            target="_blank"
          >
            Open Resume
          </Link>
        </div>

        <div className="surface-panel p-6 md:p-8">
          <h3 className="text-2xl font-semibold">Send a message</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Share your goal, timeline, and scope. I&apos;ll get back with a clear response.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleOnSubmit)} className="mt-6 space-y-4">
              <FormField
                control={form.control}
                name="senderName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea rows={6} placeholder="Tell me about your project" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-center overflow-x-auto py-1">
                <ReCaptcha sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} ref={captchaRef} />
              </div>

              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? <Loader2 className="animate-spin" /> : "Send Message"}
              </Button>

              {submitState === "success" && (
                <p className="text-center text-sm text-green-600 dark:text-green-400">
                  Message sent successfully.
                </p>
              )}
              {submitState === "error" && (
                <p className="text-center text-sm text-red-600 dark:text-red-400">
                  Something went wrong while sending your message.
                </p>
              )}
              {submitState === "captcha-error" && (
                <p className="text-center text-sm text-red-600 dark:text-red-400">
                  Please complete the captcha before submitting.
                </p>
              )}
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
