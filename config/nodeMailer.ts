import nodemailer from "nodemailer";

const user=process.env.EMAIL;
const pass=process.env.PASS;
export const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user,
        pass
    }
});

