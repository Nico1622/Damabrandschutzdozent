import { EmailTemplate } from '@/app/components/form/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { companyName, email, phone, message } = body;

  try {
    const data = await resend.emails.send({
      from: 'Damabrandschutzdozent <onboarding@resend.dev>',
      to: ["beyer.nico99@gmail.com"],
      subject: `Neue Nachricht von ${companyName}`,
      react: EmailTemplate({ companyName, email, phone, message }), // <-- dynamisch
    });

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Fehler beim Senden." }), { status: 500 });
  }
}
