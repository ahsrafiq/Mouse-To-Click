import { NextRequest, NextResponse } from 'next/server';
import { updateStatus } from '@/lib/storage';

export async function PATCH(req: NextRequest) {
  try {
    const authCookie = req.cookies.get('admin_token')?.value;
    const authHeader = req.headers.get('authorization');

    if (authCookie !== 'authenticated' && authHeader !== `Bearer ${process.env.ADMIN_PASSWORD || 'admin123'}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { type, id, status } = await req.json();

    if (!type || !id || !status) {
      return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
    }

    const updated = await updateStatus(type, id, status);

    if (!updated) {
      return NextResponse.json({ error: 'Record not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Status updated' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update record' }, { status: 500 });
  }
}

