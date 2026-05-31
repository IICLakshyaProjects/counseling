'use client'

import { useState, useRef, useEffect } from 'react'

const faqs = [
  {
    q: 'Is the counselling session really free?',
    a: 'Yes, no charges, no commitment required.',
  },
  {
    q: 'Who will I talk to?',
    a: 'A commerce-qualified mentor with experience in career guidance.',
  },
  {
    q: "What if I'm not ready to choose a course yet?",
    a: "That's fine, we're here to explore with you, not pressure you.",
  },
]

function FaqItem({ faq, isOpen, onToggle }: { faq: { q: string; a: string }; isOpen: boolean; onToggle: () => void }) {
  const bodyRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(isOpen ? bodyRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  return (
    <div className="bg-white rounded-2xl overflow-hidden max-w-2xl mx-auto">
      <button
        className={`w-full px-4 py-4 text-sm font-semibold cursor-pointer flex justify-between items-center text-left transition-colors duration-200 ${isOpen ? 'text-[#0d2b5e]' : 'text-black'}`}
        onClick={onToggle}
      >
        {faq.q}
        <span
          className="ml-4 flex-shrink-0 w-4 h-4 border-b-2 border-r-2 border-black inline-block transition-transform duration-300"
          style={{
            transform: isOpen ? 'rotate(225deg)' : 'rotate(45deg)',
            marginBottom: isOpen ? '-4px' : '4px',
          }}
        />
      </button>
      <div
        ref={bodyRef}
        style={{ height: `${height}px`, transition: 'height 0.3s ease', overflow: 'hidden' }}
      >
        <p className="px-6 pb-5 text-sm text-black leading-6">{faq.a}</p>
      </div>
    </div>
  )
}

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <FaqItem
          key={i}
          faq={faq}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  )
}
