import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as Record<string, string> | null
  if (!body?.name || !body.email || !body.message) {
    return NextResponse.json({ ok: false, error: 'Name, email, and message are required.' }, { status: 400 })
  }
  return NextResponse.json({
    ok: true,
    enquiry: {
      id: `ENQ-${Date.now()}`,
      name: body.name,
      email: body.email,
      timeframe: body.timeframe ?? '',
      travellers: body.travellers ?? '',
      message: body.message,
      status: 'New',
      source: 'public-website',
    },
  }, { status: 201 })
}
