"use server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import handlebars from "handlebars";

const SMTP_SERVER_HOST = process.env.NEXT_PUBLIC_SMTP_SERVER_HOST;
const SMTP_SERVER_SERVICE = process.env.NEXT_PUBLIC_SMTP_SERVER_SERVICE;
const SMTP_SERVER_USERNAME = process.env.NEXT_PUBLIC_AUDIENCE_ID;
const SMTP_SERVER_PASSWORD = process.env.NEXT_PUBLIC_SMTP_SERVER_PASSWORD;
const transporter = nodemailer.createTransport({
  service: SMTP_SERVER_SERVICE,
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: false,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

const renderTemplate = () => {
  const filePath = path.join(process.cwd(), "templates", `mail.hbs`);
  const source = fs.readFileSync(filePath, "utf8");
  const template = handlebars.compile(source);
  return template({});
};

export async function sendMail({
                                 sendTo,
                                 subject,
                               }: {
  sendTo: string;
  subject: string;
}) {
  try {
    const isVerified = await transporter.verify();
  } catch (error) {
    console.error("Something Went Wrong", SMTP_SERVER_USERNAME, SMTP_SERVER_PASSWORD, error);
    return;
  }
  const htmlContent = renderTemplate();
  return await transporter.sendMail({
    from: "support@wesendemail.online",
    to: sendTo,
    subject: subject,
    html: htmlContent,
  });
}