import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const correctPassword = process.env.ADMIN_PASSWORD || 'admin123';

    if (password !== correctPassword) {
      return NextResponse.json({ error: 'Invalid administrative password' }, { status: 401 });
    }

    const res = NextResponse.json({ success: true, message: 'Authentication successful' });

    // Set secure HTTP-only cookie
    res.cookies.set({
      name: 'admin_token',
      value: 'authenticated',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return res;
  } catch (error) {
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}

export async function DELETE() {
  const res = NextResponse.json({ success: true, message: 'Signed out' });
  res.cookies.delete('admin_token');
  return res;
}

