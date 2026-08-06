"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Globe, Github, Linkedin, Loader2, Mail, Sparkles, Send, FileText } from "lucide-react";
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
    label: "niranjan.dabhade7@gmail.com",
    href: "mailto:niranjan.dabhade7@gmail.com",
    icon: <Mail size={18} className="text-blue-500" />,
  },
  {
    label: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/nironman/",
    icon: <Linkedin size={18} className="text-blue-600" />,
  },
  {
    label: "GitHub Profile",
    href: "https://github.com/NIRONMAN",
    icon: <Github size={18} className="text-purple-500" />,
  },
  {
    label: "LeetCode Profile",
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
      <p className="section-kicker">
        <Sparkles size={14} />
        Get In Touch
      </p>
      <h2 className="section-title">Let&apos;s discuss your next product, role, or collaboration.</h2>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left Column: Social Presence */}
        <div className="surface-panel p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-foreground">Connect Online</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              I am actively open to engineering roles, enterprise system discussions, and open-source software collaboration.
            </p>

            <div className="mt-6 space-y-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-secondary/50 px-4 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-card hover:border-primary/40 hover:scale-[1.02]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-background shadow-sm">
                    {item.icon}
                  </span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/60">
            <Link
              href="/Resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background px-5 py-2.5 text-xs font-semibold text-foreground shadow-sm transition hover:bg-secondary hover:scale-105"
            >
              <FileText size={16} className="text-primary" />
              View Resume Document
            </Link>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="surface-panel p-6 md:p-8">
          <h3 className="text-2xl font-bold text-foreground">Send a Message</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Share your goal, timeline, and scope. I&apos;ll get back with a clear response.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleOnSubmit)} className="mt-6 space-y-4">
              <FormField
                control={form.control}
                name="senderName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" className="rounded-xl border-border/60 bg-background/60 focus:ring-primary" {...field} />
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
                    <FormLabel className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Your Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" className="rounded-xl border-border/60 bg-background/60 focus:ring-primary" {...field} />
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
                    <FormLabel className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Message</FormLabel>
                    <FormControl>
                      <Textarea rows={5} placeholder="Tell me about your project or opportunity..." className="rounded-xl border-border/60 bg-background/60 focus:ring-primary" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-center overflow-x-auto py-2">
                <ReCaptcha sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} ref={captchaRef} />
              </div>

              <Button className="w-full rounded-full py-6 text-sm font-semibold shadow-md transition hover:scale-[1.01]" type="submit" disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>

              {submitState === "success" && (
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-center text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  Message sent successfully! I will reach back soon.
                </div>
              )}
              {submitState === "error" && (
                <div className="rounded-xl border border-rose-500/20 bg-rose-500/10 p-3 text-center text-sm font-medium text-rose-600 dark:text-rose-400">
                  Something went wrong while sending your message. Please try again.
                </div>
              )}
              {submitState === "captcha-error" && (
                <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 text-center text-sm font-medium text-amber-600 dark:text-amber-400">
                  Please complete the reCAPTCHA verification before submitting.
                </div>
              )}
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

