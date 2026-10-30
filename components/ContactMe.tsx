"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Loader2, Mail, Send, FileText, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";
import React, { useRef, useState } from "react";
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
  senderName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;
type SubmitState = "idle" | "success" | "error" | "captcha-error";

const contactLinks = [
  {
    label: "niranjan.dabhade7@gmail.com",
    href: "mailto:niranjan.dabhade7@gmail.com",
    channel: "Direct Email",
    icon: <Mail size={15} className="text-indigo-500" />,
  },
  {
    label: "linkedin.com/in/nironman",
    href: "https://www.linkedin.com/in/nironman/",
    channel: "LinkedIn",
    icon: <Linkedin size={15} className="text-sky-500" />,
  },
  {
    label: "github.com/NIRONMAN",
    href: "https://github.com/NIRONMAN",
    channel: "GitHub",
    icon: <Github size={15} className="text-purple-500" />,
  },
  {
    label: "leetcode.com/u/nironman",
    href: "https://leetcode.com/u/nironman/",
    channel: "LeetCode",
    icon: <Image src="/Leetcode.svg" alt="LeetCode" width={15} height={15} />,
  },
];

const ContactMe: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
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
    setErrorMessage("");

    const token = captchaRef.current?.getValue();
    if (!token && process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
      setSubmitState("captcha-error");
      setIsLoading(false);
      return;
    }

    try {
      await axios.post("/api/sendmail", { data, token: token || "bypass-token" });
      setSubmitState("success");
      form.reset();
      captchaRef.current?.reset();
    } catch (err: unknown) {
      setSubmitState("error");
      if (axios.isAxiosError(err) && err.response?.data?.message) {
        setErrorMessage(err.response.data.message);
      } else {
        setErrorMessage("Something went wrong while sending your message. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="section-shell">
      <div className="border-t border-border/80 pt-16 dark:border-white/[0.08]">
        <p className="section-kicker">04 / Contact</p>
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Open to backend engineering roles, cloud infrastructure challenges, and collaborative work.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Direct Channels */}
          <div className="space-y-4">
            <div className="surface-panel space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Direct Channels
              </h3>
              <div className="space-y-2">
                {contactLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg border border-border/80 bg-secondary/30 transition-all hover:bg-indigo-500/5 hover:border-indigo-500/30 dark:border-white/[0.06]"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {item.icon}
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-foreground truncate">{item.label}</p>
                        <p className="text-[10px] font-mono text-muted-foreground">{item.channel}</p>
                      </div>
                    </div>
                    <ArrowUpRight size={14} className="text-muted-foreground shrink-0" />
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-border/80 dark:border-white/[0.06]">
                <Link
                  href="/Resume.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  <FileText size={14} />
                  Download Official Resume (PDF)
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="surface-panel">
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4">
              Send a Note
            </h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleOnSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="senderName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs text-muted-foreground">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Alex Morgan"
                          className="rounded-lg border-border/80 bg-background/80 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-white/[0.08]"
                          {...field}
                        />
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
                      <FormLabel className="font-mono text-xs text-muted-foreground">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="alex@company.com"
                          className="rounded-lg border-border/80 bg-background/80 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-white/[0.08]"
                          {...field}
                        />
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
                      <FormLabel className="font-mono text-xs text-muted-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="Brief description of the opportunity or project..."
                          className="rounded-lg border-border/80 bg-background/80 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-white/[0.08]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
                  <div className="py-1">
                    <ReCaptcha sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} ref={captchaRef} />
                  </div>
                )}

                <Button
                  className="w-full rounded-lg py-2.5 text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm shadow-indigo-500/20"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="animate-spin" size={15} />
                  ) : (
                    <>
                      <Send size={13} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {submitState === "success" && (
                  <div className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 size={15} className="shrink-0" />
                    <span>Message delivered. I will respond to your email shortly.</span>
                  </div>
                )}
                {submitState === "error" && (
                  <div className="flex items-center gap-2 rounded-lg border border-rose-500/20 bg-rose-500/10 p-3 text-xs font-medium text-rose-600 dark:text-rose-400">
                    <AlertCircle size={15} className="shrink-0" />
                    <span>{errorMessage || "Failed to send message. Please try again."}</span>
                  </div>
                )}
                {submitState === "captcha-error" && (
                  <div className="flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/10 p-3 text-xs font-medium text-amber-600 dark:text-amber-400">
                    <AlertCircle size={15} className="shrink-0" />
                    <span>Please complete the reCAPTCHA verification before sending.</span>
                  </div>
                )}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
