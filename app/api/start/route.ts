import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, firstMemory } = body
  if (!email || !name) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY

  try {
    const res = await fetch(`${supabaseUrl}/rest/v1/t4h_customer`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'apikey': supabaseKey!, 'Authorization': `Bearer ${supabaseKey}`, 'Prefer': 'return=representation' },
      body: JSON.stringify({ email, product_key: 'augmented_memories' }),
    })
    const customer = await res.json()
    const customerId = Array.isArray(customer) ? customer[0]?.id : customer?.id
    if (customerId) {
      await fetch(`${supabaseUrl}/rest/v1/t4h_usage_event`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'apikey': supabaseKey!, 'Authorization': `Bearer ${supabaseKey}` },
        body: JSON.stringify({ customer_id: customerId, product_key: 'augmented_memories', event_type: 'signup', payload: { name, hasFirstMemory: !!firstMemory } }),
      })
      await fetch(`${supabaseUrl}/rest/v1/t4h_evidence`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'apikey': supabaseKey!, 'Authorization': `Bearer ${supabaseKey}` },
        body: JSON.stringify({ product_key: 'augmented_memories', customer_id: customerId, evidence_type: 'signup', classification: 'PARTIAL' }),
      })
    }
  } catch (err) { console.error(err) }

  return NextResponse.json({ success: true })
}
