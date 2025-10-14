import { NextResponse } from 'next/server';

// Supports Vercel KV (or Upstash REST) if environment variables are set.
// KV_REST_API_URL/KV_REST_API_TOKEN (Vercel KV) OR
// UPSTASH_REDIS_REST_URL/UPSTASH_REDIS_REST_TOKEN (Upstash Redis)
const KV_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

export async function POST(request) {
  try {
    const { groupId, itemType, index } = await request.json();
    if (!groupId || !itemType) {
      return NextResponse.json({ ok: false, error: 'Missing parameters' }, { status: 400 });
    }

    const safeGroup = String(groupId).replace(/[^a-zA-Z0-9_-]/g, '');
    const safeType = String(itemType).replace(/[^a-zA-Z0-9_-]/g, '');
    const idx = typeof index === 'number' && index >= 0 ? index : undefined;

    const key = idx !== undefined
      ? `comments:copy:${safeGroup}:${safeType}:${idx}`
      : `comments:copy:${safeGroup}:${safeType}`;

    // If KV credentials are present, persist globally. Otherwise, noop success.
    if (KV_URL && KV_TOKEN) {
      const res = await fetch(`${KV_URL}/incr/${encodeURIComponent(key)}` , {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${KV_TOKEN}`,
          'Content-Type': 'application/json'
        }
      });
      if (!res.ok) {
        const text = await res.text();
        return NextResponse.json({ ok: false, error: 'KV error', details: text }, { status: 502 });
      }
      const data = await res.json().catch(() => ({}));
      return NextResponse.json({ ok: true, key, value: data.result ?? null });
    }

    return NextResponse.json({ ok: true, key, value: null, note: 'KV not configured; event accepted but not persisted.' });
  } catch (err) {
    return NextResponse.json({ ok: false, error: err?.message || 'Unexpected error' }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const keys = searchParams.getAll('keys');
    if (!keys.length) {
      return NextResponse.json({ ok: true, data: {} });
    }

    if (KV_URL && KV_TOKEN) {
      const results = {};
      for (const key of keys) {
        const res = await fetch(`${KV_URL}/get/${encodeURIComponent(key)}`, {
          headers: { Authorization: `Bearer ${KV_TOKEN}` }
        });
        if (res.ok) {
          const data = await res.json().catch(() => ({}));
          // Upstash returns {result:"123"}; Vercel KV returns {result:123} or value
          const raw = data?.result ?? data?.value ?? null;
          const num = raw == null ? null : Number(raw);
          results[key] = Number.isFinite(num) ? num : null;
        } else {
          results[key] = null;
        }
      }
      return NextResponse.json({ ok: true, data: results });
    }

    // No KV configured
    const empty = Object.fromEntries(keys.map((k) => [k, null]));
    return NextResponse.json({ ok: true, data: empty, note: 'KV not configured' });
  } catch (err) {
    return NextResponse.json({ ok: false, error: err?.message || 'Unexpected error' }, { status: 500 });
  }
}


