'use server'

import { Pool } from 'pg'

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

async function ensureTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS counselling_leads (
      id SERIAL PRIMARY KEY,
      full_name VARCHAR(255) NOT NULL,
      mobile VARCHAR(20) NOT NULL,
      email VARCHAR(255) NOT NULL,
      location VARCHAR(255),
      qualification VARCHAR(100) NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `)
}

export async function submitCounsellingForm(
  _prevState: { success: boolean; error: string } | null,
  formData: FormData
): Promise<{ success: boolean; error: string }> {
  const full_name = (formData.get('full_name') as string)?.trim()
  const mobile = (formData.get('mobile') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const location = (formData.get('location') as string)?.trim()
  const qualification = (formData.get('qualification') as string)?.trim()

  if (!full_name || !mobile || !location || !qualification) {
    return { success: false, error: 'All fields are required.' }
  }

  try {
    await ensureTable()
    await pool.query(
      'INSERT INTO counselling_leads (full_name, mobile, email, location, qualification) VALUES ($1, $2, $3, $4, $5)',
      [full_name, mobile, email, location, qualification]
    )
    return { success: true, error: '' }
  } catch (err) {
    console.error('DB error:', err)
    return { success: false, error: 'Something went wrong. Please try again.' }
  }
}
