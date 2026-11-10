import { NextRequest, NextResponse } from 'next/server';
import { InquirySchema } from '@/lib/validations';
import { rateLimit } from '@/lib/rateLimit';
import { saveInquiry, getInquiries } from '@/lib/storage';
import { sendEmailNotification } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1';
    const rateLimitResult = rateLimit(ip, 5, 10 * 60 * 1000);

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please wait a few minutes before submitting another inquiry.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const parseResult = InquirySchema.safeParse(body);

    if (!parseResult.success) {
      const errorMsg = parseResult.error.errors.map((e) => e.message).join(', ');
      return NextResponse.json({ error: errorMsg }, { status: 400 });
    }

    const validData = parseResult.data;
    const finalDetails = validData.details || [
      validData.country ? `[Country: ${validData.country}]` : '',
      validData.message || '',
    ].filter(Boolean).join('\n\n');

    const stored = await saveInquiry({
      name: validData.name,
      email: validData.email,
      phone: validData.phone,
      service: validData.service,
      company: validData.company,
      details: finalDetails,
      consent: validData.consent ?? true,
    });

    // Send email notification
    await sendEmailNotification({
      to: process.env.NOTIFICATION_TO_EMAIL || 'admin@mousetoclick.com',
      subject: `[New Inquiry] ${validData.name} - ${validData.service.toUpperCase()}`,
      type: 'INQUIRY',
      data: validData,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been received. Our team will contact you shortly.',
        id: stored.id,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Inquiry Submission Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your request.' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  // Check admin session cookie or auth header
  const authCookie = req.cookies.get('admin_token')?.value;
  const authHeader = req.headers.get('authorization');

  if (authCookie !== 'authenticated' && authHeader !== `Bearer ${process.env.ADMIN_PASSWORD || 'admin123'}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const items = await getInquiries();
  return NextResponse.json({ success: true, inquiries: items });
}

