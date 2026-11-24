import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    // Validate RESEND_API_KEY at runtime
    const apiKey = process.env.RESEND_API_KEY as string | undefined;
    if (!apiKey) {
      return NextResponse.json({ error: 'Missing RESEND_API_KEY' }, { status: 500 });
    }
    const resend = new Resend(apiKey);

    const data = await request.json();

    // Honeypot field – if filled, silently succeed
    if (data.website_confirm && data.website_confirm.trim() !== '') {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const { name, email, phone, town, serviceOrPackage, message } = data;

    // Basic validation
    if (!name || !message || (!email && !phone)) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const emailContent = `Name: ${name}\nEmail: ${email || 'N/A'}\nPhone: ${phone || 'N/A'}\nTown: ${town}\nService/Package: ${serviceOrPackage}\nMessage: ${message}`;

    await resend.emails.send({
      from: 'no-reply@masterhoster.co.za',
      to: process.env.CONTACT_TO_EMAIL as string,
      subject: `New Inquiry from ${name}`,
      replyTo: email || undefined,
      text: emailContent,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
