import { NextRequest, NextResponse } from 'next/server';
import { InsuranceApplicationSchema } from '@/lib/validations';
import { rateLimit } from '@/lib/rateLimit';
import { saveInsuranceApplication, getInsuranceApplications } from '@/lib/storage';
import { sendEmailNotification } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1';
    const rateLimitResult = rateLimit(ip, 5, 10 * 60 * 1000);

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please wait a few minutes before submitting.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const parseResult = InsuranceApplicationSchema.safeParse(body);

    if (!parseResult.success) {
      const errorMsg = parseResult.error.errors.map((e) => e.message).join(', ');
      return NextResponse.json({ error: errorMsg }, { status: 400 });
    }

    const validData = parseResult.data;
    const stored = await saveInsuranceApplication(validData);

    await sendEmailNotification({
      to: process.env.NOTIFICATION_TO_EMAIL || 'admin@mousetoclick.com',
      subject: `[New Insurance Assistance Request] ${validData.fullName}`,
      type: 'INSURANCE_APPLICATION',
      data: validData,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your assistance request has been received. A dedicated advocate will reach out to you.',
        id: stored.id,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Insurance Application Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your application.' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const authCookie = req.cookies.get('admin_token')?.value;
  const authHeader = req.headers.get('authorization');

  if (authCookie !== 'authenticated' && authHeader !== `Bearer ${process.env.ADMIN_PASSWORD || 'admin123'}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const items = await getInsuranceApplications();
  return NextResponse.json({ success: true, applications: items });
}

