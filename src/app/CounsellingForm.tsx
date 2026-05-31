'use client'

import { useActionState, useState, useEffect } from 'react'
import { submitCounsellingForm } from './actions'

const inputClass =
  'w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-base text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm'

const selectBase =
  'w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm [&>option:not([disabled])]:text-black'

const UTM_KEYS = [
  'utm_adgroup', 'utm_campaign', 'utm_content',
  'utm_device', 'utm_medium', 'utm_region',
  'utm_source', 'utm_term',
]

function ThankYouModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl px-10 py-10 max-w-sm w-full mx-4 text-center shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-9 h-9 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#1a3c6e] mb-2">Thank You!</h3>
        <p className="text-gray-500 text-sm leading-6">
          We&apos;ve received your details.<br />Our team will reach out to schedule your free session.
        </p>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-[#f5c518] hover:bg-[#e6b800] text-black font-bold py-3 rounded-full text-sm transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default function CounsellingForm() {
  const [state, action, pending] = useActionState(submitCounsellingForm, null)
  const [showModal, setShowModal] = useState(false)
  const [locationVal, setLocationVal] = useState('')
  const [qualVal, setQualVal] = useState('')
  const [utmValues, setUtmValues] = useState<Record<string, string>>({})
  const [pageUrl, setPageUrl] = useState('')
  const [mobile, setMobile] = useState('')
  const [mobileError, setMobileError] = useState('')

  useEffect(() => {
    // Capture current UTM params from URL
    const params = new URLSearchParams(window.location.search)
    const current: Record<string, string> = {}
    UTM_KEYS.forEach((key) => {
      const val = params.get(key)
      if (val) current[key] = val
    })

    // Store first_utm in localStorage (only on first visit with UTMs)
    UTM_KEYS.forEach((key) => {
      const firstKey = `first_${key}`
      if (current[key] && !localStorage.getItem(firstKey)) {
        localStorage.setItem(firstKey, current[key])
      }
    })

    // Merge first_utm from localStorage + current utm
    const merged: Record<string, string> = {}
    UTM_KEYS.forEach((key) => {
      const firstVal = localStorage.getItem(`first_${key}`)
      if (firstVal) merged[`first_${key}`] = firstVal
      if (current[key]) merged[key] = current[key]
    })

    setUtmValues(merged)
    setPageUrl(window.location.href)
  }, [])

  function handleMobileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value
    // Allow only digits and leading +
    const cleaned = raw.replace(/[^\d+]/g, '').replace(/(?!^)\+/g, '')
    setMobile(cleaned)

    if (!cleaned) {
      setMobileError('')
      return
    }
    if (cleaned.startsWith('+91')) {
      if (cleaned.length !== 13) setMobileError('Enter 10 digits after +91')
      else setMobileError('')
    } else if (/^\d+$/.test(cleaned)) {
      if (cleaned.length !== 10) setMobileError('Enter a valid 10-digit number')
      else setMobileError('')
    } else {
      setMobileError('Invalid number')
    }
  }

  useEffect(() => {
    if (state?.success) {
      setShowModal(true)
      setLocationVal('')
      setQualVal('')
    }
  }, [state])

  return (
    <>
      {showModal && <ThankYouModal onClose={() => setShowModal(false)} />}

      <form action={action} className="flex flex-col gap-4">
        {/* Hidden UTM + page URL fields */}
        {Object.entries(utmValues).map(([key, val]) => (
          <input key={key} type="hidden" name={key} value={val} />
        ))}
        {pageUrl && <input type="hidden" name="conversion_ref_url" value={pageUrl} />}

        <input
          type="text"
          name="full_name"
          placeholder="Full Name:"
          required
          className={inputClass}
        />
        <div>
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number:"
            required
            value={mobile}
            onChange={handleMobileChange}
            maxLength={13}
            inputMode="numeric"
            className={inputClass}
          />
          {mobileError && <p className="text-red-500 text-xs mt-1 pl-2">{mobileError}</p>}
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email:"
          className={inputClass}
        />
        <select
          name="location"
          required
          value={locationVal}
          onChange={(e) => setLocationVal(e.target.value)}
          className={selectBase}
          style={{ color: locationVal ? '#000000' : '#9ca3af' }}
        >
          <option value="" disabled>Location:</option>
          <option value="Kannur">Kannur</option>
          <option value="Kozhikode(calicut)">Kozhikode(calicut)</option>
          <option value="Thrissur">Thrissur</option>
          <option value="Perinthalmanna">Perinthalmanna</option>
          <option value="Kochi">Kochi</option>
          <option value="Kottayam">Kottayam</option>
          <option value="Trivandrum">Trivandrum</option>
        </select>
        <select
          name="qualification"
          required
          value={qualVal}
          onChange={(e) => setQualVal(e.target.value)}
          className={selectBase}
          style={{ color: qualVal ? '#000000' : '#9ca3af' }}
        >
          <option value="" disabled>Qualification</option>
          <option value="Class 11 Student">Class 11 Student</option>
          <option value="Class 12 Student">Class 12 Student</option>
          <option value="Graduate & Above - No Experience">Graduate &amp; Above - No Experience</option>
          <option value="0-1 Yr">0-1 Yr</option>
          <option value="2-5 Yrs">2-5 Yrs</option>
          <option value="5+ Yrs">5+ Yrs</option>
        </select>
        {state?.error && (
          <p className="text-red-500 text-xs">{state.error}</p>
        )}
        <button
          type="submit"
          disabled={pending}
          className="mt-1 w-full bg-[#f5c518] hover:bg-[#e6b800] text-black font-bold py-5 rounded-full text-base transition-colors disabled:opacity-60 shadow-sm"
        >
          {pending ? 'Submitting...' : 'Book My Free 1:1 Counselling Session'}
        </button>
      </form>
    </>
  )
}
