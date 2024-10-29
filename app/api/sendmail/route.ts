import { transporter } from "@/config/nodeMailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
        const body=await req.json();
        
        try {
           const res=await transporter.sendMail({
                from:process.env.EMAIL,
                to:process.env.EMAIL,
                subject:"Hey, "+body.senderName+" have a messsage for you.",
                text:`${body.message} \n\nFrom ${body.email}`
            })
            return NextResponse.json({
                msg:"Success"
            },{status:200})

        } catch (error) {
            return NextResponse.json({
                msg:"Something went wrong"
            },{status:404})
        }
       
}