import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
const fromEmail = process.env.NEXT_PUBLIC_FROM_EMAIL;
const siteName = process.env.NEXT_PUBLIC_SITE_NAME;
const audienceId = process.env.NEXT_PUBLIC_AUDIENCE_ID;

export async function POST(req: Response) {
  const body = await req.json();

  try {
    const sendEmail = await resend.emails.send({
      from: fromEmail as string,
      to: [body.email],
      subject: siteName as string,
      react: EmailTemplate(),
      headers: {
        'List-Unsubscribe': '<mailto:unsubscribe@aihunts.com?subject=Unsubscribe>, <http://localhost:3000/unsubscribe>',
        'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click'
      }
    });

    const addContact = await resend.contacts.create({
      email: body.email,
      unsubscribed: false,
      audienceId: audienceId as string,
    });

    return Response.json({
      sendEmail,
      addContact,
    });
  } catch (error) {
    return Response.json({ error });
  }
}
