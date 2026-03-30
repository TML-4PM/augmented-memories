import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, firstMemory } = body
  if (!email || !name) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SERVICE_KEY
  if (!supabaseUrl || !supabaseKey) return NextResponse.json({ error: 'service_unavailable' }, { status: 503 })

  const supabase = createClient(supabaseUrl, supabaseKey)
  const campaignSlug = body.utm_campaign ?? 'augmem-w1'
  const dedupeKey = Buffer.from(`${email}::${campaignSlug}`).toString('base64').replace(/=/g, '').substring(0, 64)

  const { error } = await supabase.from('cap_leads').insert({
    biz_key: 'AMEM',
    campaign: campaignSlug,
    utm_campaign: campaignSlug,
    utm_source: body.utm_source ?? 'augmented-memories-website',
    utm_medium: body.utm_medium ?? 'web',
    offer_code: 'AUGMEM-PACK',
    source: 'augmented-memories-website',
    lead_type: 'paid',
    full_name: name,
    email,
    phone: body.phone ?? null,
    message: firstMemory ? `First memory: ${firstMemory}` : null,
    landing_page: body.landing_page ?? '/start',
    consent_terms: !!body.consent_terms,
    consent_marketing: !!body.consent_marketing,
    dedupe_key: dedupeKey,
    raw_payload: body,
  })

  if (error && error.code !== '23505') {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
