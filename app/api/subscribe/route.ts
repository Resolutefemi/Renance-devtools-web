import { NextResponse } from 'next/server';
import { saveEmail } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const success = saveEmail(email);

    if (!success) {
      return NextResponse.json({ error: 'Email already subscribed' }, { status: 409 });
    }

    return NextResponse.json({ message: 'Subscribed successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
