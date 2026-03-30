import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, phone, address, service, source }
      = await req.json()

    if (!name || !email || !phone || !address || !service) {
      return NextResponse.json(
        { error: 'Missing fields' }, { status: 400 }
      )
    }

    // Initialize Resend inside the handler to avoid build-time key checks
    const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder')

    const { data, error } = await resend.emails.send({
      from: 'Prime Green Landscape <notifications@primegreenlandscape.com>',
      to: [process.env.CONTACT_EMAIL || 'kevin@primegreenlandscape.com'],
      subject: `🌿 New Quote Request — ${name} | ${service}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #edf2f7; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #1A4D1E; color: white; padding: 24px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Quote Request</h1>
          </div>
          <div style="padding: 24px; color: #1a202c;">
            <p style="font-size: 16px; margin-bottom: 24px;">You have a new lead from the website contact form.</p>
            <div style="background-color: #f7fafc; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
              <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 0 0 10px 0;"><strong>Phone:</strong> ${phone}</p>
              <p style="margin: 0 0 10px 0;"><strong>Address:</strong> ${address}</p>
              <p style="margin: 0 0 10px 0;"><strong>Service:</strong> ${service}</p>
              <p style="margin: 0;"><strong>Heard From:</strong> ${source || 'Not specified'}</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
       console.error('Resend error:', error)
       return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('API Error:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
