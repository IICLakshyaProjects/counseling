'use server'

import { Pool } from 'pg'

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

const UTM_KEYS = [
  'utm_adgroup', 'utm_campaign', 'utm_content',
  'utm_device', 'utm_medium', 'utm_region',
  'utm_source', 'utm_term',
]

const UTM_LSQ_MAP: Record<string, string> = {
  first_utm_adgroup: 'mx_first_utm_adgroup',
  first_utm_campaign: 'mx_first_utm_campaign',
  first_utm_content: 'mx_first_utm_content',
  first_utm_device: 'mx_first_utm_device',
  first_utm_medium: 'mx_first_utm_medium',
  first_utm_region: 'mx_first_utm_region',
  first_utm_source: 'mx_first_utm_source',
  first_utm_term: 'mx_first_utm_term',
  utm_adgroup: 'mx_utm_adgroup',
  utm_campaign: 'mx_utm_campaign',
  utm_content: 'mx_utm_content',
  utm_device: 'mx_utm_device',
  utm_medium: 'mx_utm_medium',
  utm_region: 'mx_utm_region',
  utm_source: 'mx_utm_source',
  utm_term: 'mx_utm_term',
}

async function ensureTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS counselling_leads (
      id SERIAL PRIMARY KEY,
      full_name VARCHAR(255) NOT NULL,
      mobile VARCHAR(20) NOT NULL,
      email VARCHAR(255),
      location VARCHAR(255),
      qualification VARCHAR(100) NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `)
}

async function pushToLeadSquared(
  full_name: string,
  mobile: string,
  email: string,
  location: string,
  qualification: string,
  utms: Record<string, string>,
  conversionRefUrl: string
) {
  const host = process.env.LSQ_HOST
  const accessKey = process.env.LSQ_ACCESS_KEY
  const secretKey = process.env.LSQ_SECRET_KEY

  if (!host || !accessKey || !secretKey) return

  const firstName = full_name.split(' ')[0]
  const lastName = full_name.split(' ').slice(1).join(' ') || ''

  const payload: { Attribute: string; Value: string }[] = [
    { Attribute: 'FirstName', Value: firstName },
    { Attribute: 'LastName', Value: lastName },
    { Attribute: 'Phone', Value: mobile },
    { Attribute: 'EmailAddress', Value: email || '' },
    { Attribute: 'mx_Nearest_IIC_Lakshya_Centre', Value: location },
    { Attribute: 'mx_Highest_Education_Qualification', Value: qualification },
    { Attribute: 'mx_Conversion_Ref_URL', Value: conversionRefUrl },
  ]

  // Add UTM fields
  Object.entries(utms).forEach(([key, val]) => {
    const lsqAttr = UTM_LSQ_MAP[key]
    if (lsqAttr && val) {
      payload.push({ Attribute: lsqAttr, Value: val })
    }
  })

  const params = new URLSearchParams({ accessKey, secretKey })
  // Lead.Capture automatically logs "Contact Capture" activity in LSQ
  const url = `${host}LeadManagement.svc/Lead.Capture?${params.toString()}`
  const body = JSON.stringify(payload)

  console.log('LSQ URL:', url)
  console.log('LSQ Payload:', body)

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  })

  const text = await res.text()
  console.log('LSQ Response status:', res.status)
  console.log('LSQ Response body:', text)

  if (!res.ok) {
    console.error('LeadSquared push failed:', res.status, text)
  }
}

export async function submitCounsellingForm(
  _prevState: { success: boolean; error: string } | null,
  formData: FormData
): Promise<{ success: boolean; error: string }> {
  const full_name = (formData.get('full_name') as string)?.trim()
  const mobile = (formData.get('mobile') as string)?.trim()
  const email = (formData.get('email') as string)?.trim() ?? ''
  const location = (formData.get('location') as string)?.trim()
  const qualification = (formData.get('qualification') as string)?.trim()

  if (!full_name || !mobile || !location || !qualification) {
    return { success: false, error: 'All fields are required.' }
  }

  const conversionRefUrl = (formData.get('conversion_ref_url') as string)?.trim() ?? ''

  // Collect UTM values from hidden fields
  const utms: Record<string, string> = {}
  const allUtmKeys = [
    ...UTM_KEYS,
    ...UTM_KEYS.map((k) => `first_${k}`),
  ]
  allUtmKeys.forEach((key) => {
    const val = (formData.get(key) as string)?.trim()
    if (val) utms[key] = val
  })

  try {
    await ensureTable()
    await pool.query(
      'INSERT INTO counselling_leads (full_name, mobile, email, location, qualification) VALUES ($1, $2, $3, $4, $5)',
      [full_name, mobile, email, location, qualification]
    )

    try {
      await pushToLeadSquared(full_name, mobile, email, location, qualification, utms, conversionRefUrl)
    } catch (e) {
      console.error('LSQ push failed:', e)
    }

    return { success: true, error: '' }
  } catch (err) {
    console.error('DB error:', err)
    return { success: false, error: 'Something went wrong. Please try again.' }
  }
}
