'use client'

import { useActionState } from 'react'
import { submitCounsellingForm } from './actions'

const inputClass =
  'w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400'

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
    <form action={action} className="flex flex-col gap-3">
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
      <select name="qualification" required className={inputClass + ' bg-white'} defaultValue="">
        <option value="" disabled>
          Qualification
        </option>
        <option value="Class 10">Class 10</option>
        <option value="Class 11">Class 11</option>
        <option value="Class 12">Class 12</option>
        <option value="Graduate">Graduate</option>
        <option value="Post Graduate">Post Graduate</option>
        <option value="Working Professional">Working Professional</option>
        <option value="Other">Other</option>
      </select>
      {state?.error && (
        <p className="text-red-500 text-xs">{state.error}</p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="mt-2 w-full bg-[#f5c518] hover:bg-[#e6b800] text-black font-bold py-4 rounded-full text-sm transition-colors disabled:opacity-60"
      >
        {pending ? 'Submitting...' : 'Book My Free 1:1 Counselling Session'}
      </button>
    </form>
  )
}
