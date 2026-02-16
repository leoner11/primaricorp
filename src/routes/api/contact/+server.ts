import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

export const POST: RequestHandler = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, phone, company, productInterest, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Check if Resend API key is configured
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return json({ error: 'Email service not configured. Please contact us directly at admin@primaricorp.com' }, { status: 500 });
    }

    // Prepare email content
    const emailHtml = `
      <h2>New Contact Form Submission - Primari Corpora</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${productInterest ? `<p><strong>Product Interest:</strong> ${productInterest}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    // Send email using Resend
    const result = await resend.emails.send({
      from: 'Primari Corpora Website <onboarding@resend.dev>',
      to: ['davidson@primaricorp.com'
        
      ], // Your emails here
      subject: `New Contact Form Inquiry from ${name}`,
      html: emailHtml,
      // replyTo: email
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
    }

    return json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return json({ error: 'An unexpected error occurred. Please try again later.' }, { status: 500 });
  }
};