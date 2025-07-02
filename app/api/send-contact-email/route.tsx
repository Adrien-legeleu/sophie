import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactEmail from '@/emails/ContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  const { prenom, email, telephone, sujet, message } = body;

  try {
    const data = await resend.emails.send({
      from: 'Sophie Dénériaz <contact@ikovaline.com>',
      to: ['contact@sophiedeneriaz.ch'],
      subject: sujet || 'Nouveau message de contact',
      react: ContactEmail({ prenom, email, telephone, sujet, message }),
      text: `
📥 Nouveau message reçu via le formulaire de contact :

Prénom : ${prenom}
Email : ${email}
Téléphone : ${telephone}
${sujet ? `Sujet : ${sujet}` : ''}
Message : ${message}

—
Sophie Dénériaz - ikovaline.com
      `,
    });

    return NextResponse.json({ status: 'ok', data });
  } catch (error) {
    console.error('Erreur email:', error);
    return NextResponse.json({ error });
  }
}
