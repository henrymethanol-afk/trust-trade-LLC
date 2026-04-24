import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface RFQData {
  fullName: string;
  company: string;
  country: string;
  email: string;
  phone: string;
  product: string;
  volume: string;
  deliveryTerms: string;
  message: string;
}

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data: RFQData = await req.json();

    const {
      fullName, company, country, email, phone,
      product, volume, deliveryTerms, message,
    } = data;

    if (!fullName || !email || !company || !country) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; background: #F4F6F9; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
            .header { background: #0A1628; padding: 32px; text-align: center; }
            .header h1 { color: white; margin: 0; font-size: 24px; }
            .header span { color: #C9A84C; }
            .badge { display: inline-block; background: #C9A84C; color: #0A1628; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-top: 8px; }
            .body { padding: 32px; }
            .field { margin-bottom: 16px; padding: 12px 16px; background: #F4F6F9; border-radius: 8px; border-left: 3px solid #C9A84C; }
            .field label { display: block; font-size: 11px; color: #666; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
            .field span { color: #0A1628; font-weight: 500; }
            .footer { background: #0A1628; padding: 20px; text-align: center; }
            .footer p { color: rgba(255,255,255,0.5); font-size: 12px; margin: 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Trust Trade <span>LLC</span></h1>
              <div class="badge">New RFQ Received</div>
            </div>
            <div class="body">
              <h2 style="color: #0A1628; margin-top: 0;">Request for Quote Details</h2>

              <div class="field">
                <label>Full Name</label>
                <span>${fullName}</span>
              </div>
              <div class="field">
                <label>Company</label>
                <span>${company}</span>
              </div>
              <div class="field">
                <label>Country</label>
                <span>${country}</span>
              </div>
              <div class="field">
                <label>Email</label>
                <span>${email}</span>
              </div>
              <div class="field">
                <label>Phone</label>
                <span>${phone || 'Not provided'}</span>
              </div>
              <div class="field">
                <label>Product</label>
                <span>${product}</span>
              </div>
              <div class="field">
                <label>Estimated Volume (MT)</label>
                <span>${volume || 'Not specified'}</span>
              </div>
              <div class="field">
                <label>Delivery Terms</label>
                <span>${deliveryTerms}</span>
              </div>
              ${message ? `
              <div class="field">
                <label>Message</label>
                <span>${message}</span>
              </div>
              ` : ''}
            </div>
            <div class="footer">
              <p>Trust Trade LLC • Florida, USA • contact@trusttradellc.com</p>
            </div>
          </div>
        </body>
      </html>
    `;

    await resend.emails.send({
      from: 'TrustBot <noreply@trusttradellc.com>',
      to: ['contact@trusttradellc.com'],
      reply_to: email,
      subject: `New RFQ from ${fullName} — ${company} (${country})`,
      html: htmlContent,
    });

    await resend.emails.send({
      from: 'Trust Trade LLC <noreply@trusttradellc.com>',
      to: [email],
      subject: 'We received your quote request | Trust Trade LLC',
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: Arial, sans-serif; background: #F4F6F9; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden;">
              <div style="background: #0A1628; padding: 32px; text-align: center;">
                <h1 style="color: white; margin: 0;">Trust Trade <span style="color: #C9A84C;">LLC</span></h1>
              </div>
              <div style="padding: 32px;">
                <h2 style="color: #0A1628;">Hello ${fullName},</h2>
                <p style="color: #555; line-height: 1.6;">
                  Thank you for your interest in Trust Trade LLC. We have received your quote request for <strong>${product}</strong> and our team will review it promptly.
                </p>
                <p style="color: #555; line-height: 1.6;">
                  You can expect to hear from us within <strong>24-48 business hours</strong> with a detailed quote.
                </p>
                <div style="background: #F4F6F9; border-radius: 8px; padding: 16px; margin: 24px 0; border-left: 3px solid #C9A84C;">
                  <p style="margin: 0; color: #0A1628; font-weight: bold;">Your request summary:</p>
                  <p style="margin: 8px 0 0; color: #555;">Company: ${company}<br/>Volume: ${volume || 'TBD'}<br/>Terms: ${deliveryTerms}</p>
                </div>
                <p style="color: #555;">Best regards,<br/><strong style="color: #0A1628;">The Trust Trade LLC Team</strong></p>
              </div>
              <div style="background: #0A1628; padding: 20px; text-align: center;">
                <p style="color: rgba(255,255,255,0.5); font-size: 12px; margin: 0;">
                  Trust Trade LLC • Florida, USA • contact@trusttradellc.com
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
