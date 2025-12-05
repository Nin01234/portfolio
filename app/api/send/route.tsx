import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend('re_WLkHWpU4_APD35RxBYZypMJ8yNf5rdBzt');

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['innocentgh10@gmail.com'],
            subject: `New Contact Form Submission from ${name}`,
            html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
            replyTo: email,
        });

        if (error) {
            console.error('Resend API Error:', error);
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        console.error('Server Error:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
