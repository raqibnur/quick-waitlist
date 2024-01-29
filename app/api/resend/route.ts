import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
const fromEmail = process.env.NEXT_PUBLIC_FROM_EMAIL;
const siteName = process.env.NEXT_PUBLIC_SITE_NAME;

export async function POST(req: Response) {
  const body = await req.json();
  console.log(body.email, "api");
  try {
    const data = await resend.emails.send({
      from: fromEmail as string,
      to: [body.email],
      subject: siteName as string,
      react: EmailTemplate(),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
