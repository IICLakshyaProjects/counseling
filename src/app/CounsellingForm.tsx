'use client'

import { useActionState } from 'react'
import { submitCounsellingForm } from './actions'

const inputClass =
  'w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-base text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm'

const selectClass =
  'w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-base text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm [&>option:not([disabled])]:text-gray-800'

export default function CounsellingForm() {
  const [state, action, pending] = useActionState(submitCounsellingForm, null)

  if (state?.success) {
    return (
      <div className="text-center py-10">
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <h3 className="text-xl font-semibold text-[#1a3c6e] mb-2">Thank You!</h3>
        <p className="text-gray-600 text-sm">
          We&apos;ve received your details. Our team will reach out to schedule your free session.
        </p>
      </div>
    )
  }

  return (
    <form action={action} className="flex flex-col gap-4">
      <input
        type="text"
        name="full_name"
        placeholder="Full Name:"
        required
        className={inputClass}
      />
      <input
        type="tel"
        name="mobile"
        placeholder="Mobile Number:"
        required
        className={inputClass}
      />
      <input
        type="email"
        name="email"
        placeholder="Email:"
        required
        className={inputClass}
      />
      <select name="location" required className={selectClass} defaultValue="">
        <option value="" disabled>Location:</option>
        <option value="Kannur">Kannur</option>
        <option value="Kozhikode(calicut)">Kozhikode(calicut)</option>
        <option value="Thrissur">Thrissur</option>
        <option value="Perinthalmanna">Perinthalmanna</option>
        <option value="Kochi">Kochi</option>
        <option value="Kottayam">Kottayam</option>
        <option value="Trivandrum">Trivandrum</option>
      </select>
      <select name="qualification" required className={selectClass} defaultValue="">
        <option value="" disabled>Qualification</option>
        <option value="Class 11 Student">Class 11 Student</option>
        <option value="Class 12 Student">Class 12 Student</option>
        <option value="Graduate & Above - No Experience">Graduate & Above - No Experience</option>
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
  )
}
