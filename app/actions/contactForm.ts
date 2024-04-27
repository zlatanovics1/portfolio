"use server";

import { ContactForm, contactFormSchema } from "@/types/validation";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function contactMeSubmit(data: ContactForm) {
  const result = contactFormSchema.safeParse(data);
  if (!result.success) return { ok: false };

  try {
    await transporter.sendMail({
      from: `Portfolio Contact Me ${process.env.EMAIL}`,
      to: process.env.EMAIL,
      subject: `${data.name} just contacted you!`,
      text: `\n
        Email:  ${data.email}\n
        Name:  ${data.name}\n\n\n
        Message: ${data.message}
        `,
    });
    return { ok: true };
  } catch (err: any) {
    console.log(err);
    return { ok: false };
  }
}
