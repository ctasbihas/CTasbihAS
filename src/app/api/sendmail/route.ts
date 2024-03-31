import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request, res: Response) {
    const { senderEmail, subject, text } = await req.json();

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    let info = await transporter.sendMail({
        from: "<tasbihhmd@gmail.com>",
        to: "ctasbihas+portfolio@gmail.com",
        subject,
        text,
    });

    return NextResponse.json({
        message: "Email sent",
        messageId: info.messageId,
        senderEmail,
    });
}
