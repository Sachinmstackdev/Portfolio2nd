import { NextResponse } from 'next/server';

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;

    const name = (body.name || '').toString().trim();
    const email = (body.email || '').toString().trim();
    const message = (body.message || '').toString().trim();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN || '8217101956:AAF9OhfrRw2hp6zuZQZnbb5ZHRaDzyhEiSY';
    const chatId = process.env.TELEGRAM_CHAT_ID; // Channel username like @your_channel or numeric chat ID

    if (!token || !chatId) {
      return NextResponse.json({ ok: false, error: 'Server not configured: missing Telegram token or chat id' }, { status: 500 });
    }

    const text = [
      '📩 <b>New Contact Form Submission</b>',
      `\n<b>Name:</b> ${escapeHtml(name)}`,
      `\n<b>Email:</b> ${escapeHtml(email)}`,
      `\n<b>Message:</b>\n${escapeHtml(message)}`
    ].join('');

    const tgResp = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML', disable_web_page_preview: true })
    });

    const data = await tgResp.json();
    if (!data.ok) {
      return NextResponse.json({ ok: false, error: 'Telegram API error', details: data }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: 'Unexpected server error' }, { status: 500 });
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}


