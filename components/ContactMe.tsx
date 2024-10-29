"use client"
import { Globe, Book, FileText, Laptop, Code } from 'lucide-react';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Textarea } from "./ui/textarea"
import axios from "axios"
import { Loader2 } from "lucide-react"
import { SiLeetcode } from "react-icons/si"
import Image from "next/image"

const formSchema = z.object({
  senderName: z.string().min(2, {
    message: "You can't be serious!"
  }),
  email: z.string().email({ message: "Not a valid email." }),
  message: z.string({ message: "Enter text messsage." })

})

const ContactMe: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit } = useForm();
  const [formData, setFormData] = useState();
  const [iserror, setIsError] = useState<number>(-1);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      senderName: '',
      email: '',
      message: ''
    }
  })

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  const handleOnSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true)
    try {
      await axios.post("api/sendmail", data);
      console.log("Sent")
      setIsError(0);
    } catch (error: any) {
      console.log("Error", error.message)
      setIsError(1);
    }

    setIsLoading(false)

  };

  return (
    <div className="min-h-screen  flex-col justify-center items-center p-4 space-y-4 md:flex md:flex-row md:space-x-4">
      <div className="bg-white dark:bg-gray-800  w-full p-6 rounded-lg flex justify-center flex-col items-center space-y-4 max-w-lg ">
        <h1 className="pb-2 text-center text-xl font-bold">Contact Card</h1>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/niranjan-dabhade-b5b7a8215/"
          className="flex flex-row items-center bg-white dark:bg-slate-950 rounded-lg pr-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-slate-900 transition-colors">
          <img src="https://imgs.search.brave.com/B3dmoKTAgUkkbrvzAxFg_MfHAm5WmWy0N-4kH1AGWOo/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNGE1YzZjOWNj/NmNiODQ4NzI0ODg1/MGY5ZGQ2YzhjZTRm/N2NjOGIzZjc1NTlj/NDM2ZGI5Yjk3ZWI1/YzBmNzJmZS93d3cu/bGlua2VkaW4uY29t/Lw" alt="LinkedIn" className="w-10 h-10 mx-2 rounded-lg" />
          <span>LinkedIn</span>
        </a>

        {/* GitHub */}
        <a href="https://github.com/NIRONMAN"
          className="flex flex-row items-center bg-white dark:bg-slate-950 rounded-lg pr-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-slate-900 transition-colors">
          <img src="https://imgs.search.brave.com/xxsA4YxzaR0cl-DBsH9-lpv2gsif3KMYgM87p26bs_o/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYWQyNWM1NjA5/ZjZmZjNlYzI2MDNk/N2VkNmJhYjE2MzZl/MDY5ZTMxMDUzZmY1/NmU3NWIzNWVmMjk0/NTBjMjJjZi9naXRo/dWIuY29tLw" alt="LinkedIn" className="w-10 h-10 mx-2 rounded-lg bg-white" />
          <span>GitHub</span>
        </a>

        {/* LeetCode */}
        <a href="https://leetcode.com/u/user6665ve/"
          className="flex flex-row items-center bg-white dark:bg-slate-950 rounded-lg pr-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-slate-900 transition-colors">
          <img src="/Leetcode.svg" alt="Leetcode" className="w-10 h-10 mx-2 rounded-lg" />
          <span>LeetCode</span>
        </a>

        {/* Portfolio */}
        <a href="https://nironman.vercel.app/"
          className="flex flex-row items-center bg-white dark:bg-slate-950 rounded-lg pr-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-slate-900 transition-colors">
          <Globe className="w-10 h-10 mx-2" />
          <span>Portfolio</span>
        </a>

        {/* Resume */}
        <a href="https://niranjan-dabhade-resume.tiiny.site/"
          className="flex flex-row items-center bg-white dark:bg-slate-950 rounded-lg pr-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-slate-900 transition-colors">
          <FileText className="w-10 h-10 mx-2" />
          <span>Resume</span>
        </a>


      </div>
      <div className="max-w-lg w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden p-8">
        <h1 className=" text-center text-2xl font-semibold">Contact me</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleOnSubmit)} className=" space-y-4">
            <FormField
              control={form.control}
              name="senderName"
              render={senderItem}
            />
            <FormField
              control={form.control}
              name="email"
              render={emailItem}
            />
            <FormField
              control={form.control}
              name="message"
              render={messageItem}
            />

            <Button className=" w-full" type="submit">{isLoading ? <Loader2 className=" animate-spin"></Loader2> : "Send Email"}</Button>
            {
              iserror === 0 && <div className=" text-center text-green-400">Message sent successfully.</div>
            }
            {
              iserror === 1 && <div className=" text-center text-red-400">Something went wrong.</div>
            }
          </form>
        </Form>
      </div>
    </div>
  );
};

const senderItem = ({ field }: any) => (
  <FormItem>
    <FormLabel>
      Your Name
    </FormLabel>
    <FormControl>
      <Input placeholder="Enter your name..." {...field}></Input>
    </FormControl>
    {/* <FormDescription>
      Your name which will appear in the Email that you are sending.
    </FormDescription> */}
    <FormMessage></FormMessage>
  </FormItem>
)

const emailItem = ({ field }: any) => (
  <FormItem>
    <FormLabel>
      Your Email Address
    </FormLabel>
    <FormControl>
      <Input placeholder="Enter your email..." {...field}></Input>
    </FormControl>
    {/* <FormDescription>Your email address so that I can reply to you.</FormDescription> */}
    <FormMessage></FormMessage>
  </FormItem>
)
const messageItem = ({ field }: any) => (
  <FormItem>
    <FormLabel>
      Your Message to me
    </FormLabel>
    <FormControl>
      <Textarea rows={6} placeholder="Enter you message..."  {...field}></Textarea>
    </FormControl>
    {/* <FormDescription>The message that you want me to convey.</FormDescription> */}
    <FormMessage></FormMessage>
  </FormItem>
)

export default ContactMe;