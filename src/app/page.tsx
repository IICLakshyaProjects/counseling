import CounsellingForm from './CounsellingForm'
import Image from 'next/image'

const achievements = [
  { value: '400+', label: 'Global &\nNational Ranks' },
  { value: '700+', label: 'Faculty &\nProgramme Experts' },
  { value: '100%', label: 'Placement Assistance' },
  { value: '165,000+', label: 'Lakshya Learners' },
]

const counsellingFor = [
  'Students who have completed Class 12 and are seeking structured guidance on their career path',
  'Graduates seeking expert guidance to identify the right career opportunities',
  'Working professionals seeking career growth, a domain shift, or a fresh start in future-ready industries',
  'Parents seeking trusted career guidance for their children',
  'Class 10 & 11 students of any stream exploring future career options',
]

const whatYouGet = [
  'A personalized 1-on-1 session with a Career Specialist',
  'Strategic career guidance to unlock high-potential opportunities both in India and globally',
  'Comprehensive insights into career pathways, earning potential, global opportunities, course timelines, and investment required',
  'A fully tailored career roadmap designed around your background, strengths, and professional aspirations',
]

const sessionOverview = [
  {
    icon: '👥',
    label: 'Session Type',
    value: 'Personalised 1:1\nCounselling Session',
    highlight: true,
    sub: '(private, not group-based)',
  },
  {
    icon: '💻',
    label: 'Mode',
    value: 'Online',
    highlight: true,
    sub: '(conducted via Zoom or Google Meet)',
  },
  {
    icon: '🕐',
    label: 'Session Duration',
    value: '30 to 60 Minutes',
    highlight: false,
  },
  {
    icon: '💰',
    label: 'Cost',
    value: 'Completely FREE',
    highlight: true,
    sub: '(No registration or consultation charges)',
  },
  {
    icon: '🌐',
    label: 'Session Language',
    value: 'English or\nRegional Language',
    highlight: true,
    sub: 'as per your preference',
  },
]

const steps = [
  { num: 1, text: 'Fill out the form with\nyour basic details' },
  { num: 2, text: 'Get a Callback to schedule\nyour Free Online Session\nas per your convenience' },
  { num: 3, text: 'Attend the 1:1\nOnline Session with\na Career Specialist' },
  { num: 4, text: 'Start your\njourney with clarity' },
]

const faqs = [
  {
    q: 'Is the counselling session really free?',
    a: 'Yes, absolutely! The 1:1 career counselling session is completely free of cost. There are no hidden charges or registration fees.',
  },
  {
    q: 'Who will I talk to?',
    a: 'You will speak directly with a qualified Career Specialist from Lakshya who has deep expertise in commerce and related career paths.',
  },
  {
    q: "What if I'm not ready to choose a course yet?",
    a: "That's perfectly fine! The session is designed to help you explore your options and gain clarity — you don't need to have already made a decision.",
  },
]

const footerAbout = ['Home', 'About Us', 'Contact Us', 'Our Centers', 'Hiring Partners', 'Inside Lakshya', 'Investor Relations', 'Lakshya UAE']
const footerCourses = ['MBA+ACCA', 'CA', 'ACCA', 'CMA USA', 'Integrated ACCA', 'Integrated CMA USA Course', 'CMA India', 'CS', 'CPA', 'DipIFR']
const footerResources = ['Blogs', 'Academics', 'Commerce Formulas', 'Master Class', 'Sitemap']

export default function Home() {
  return (
    <div className="font-sans text-[#1a3c6e] bg-white">
      {/* ── HERO ── */}
      <section
        className="relative min-h-[340px] flex flex-col justify-center px-6 py-10"
        style={{
          background: 'linear-gradient(135deg, #0d7a6e 0%, #1a8c5a 30%, #5aaa6e 60%, #a8d8b0 100%)',
        }}
      >
        <div className="max-w-xl">
          <p className="text-white text-xl font-normal mb-1">Book your</p>
          <h1 className="text-white text-4xl font-extrabold leading-tight">
            <span className="text-[#f5c518]">Free 1:1</span> Career
            <br />
            Counselling Session
          </h1>
          <p className="text-white text-xs mt-4 max-w-xs leading-5">
            Confused about your next step in commerce? Whether you&apos;re in school, just graduated, or exploring a career shift, get expert guidance from{' '}
            <span className="font-bold">India&apos;s No.1 Commerce Institute.</span>
          </p>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section className="py-10 px-6">
        <h2 className="text-center text-2xl font-bold text-[#1a3c6e] mb-8">Our Achievements</h2>
        <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto text-center">
          {achievements.map((a) => (
            <div key={a.value}>
              <p className="text-4xl font-extrabold text-[#1a3c6e]">{a.value}</p>
              <p className="text-[#3a8fe8] text-xs mt-1 leading-5 whitespace-pre-line">{a.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FORM ── */}
      <section id="form-section" className="bg-[#eaf4fd] py-10 px-6">
        <h2 className="text-center text-2xl font-bold text-[#1a3c6e] mb-6">Talk with Industry Experts</h2>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm p-6">
          <CounsellingForm />
        </div>
      </section>

      {/* ── WHO IS THIS FOR ── */}
      <section className="py-12 px-6">
        <h2 className="text-center text-2xl font-bold text-[#1a3c6e] mb-2">
          Who is this<br />Counselling for?
        </h2>
        <div className="max-w-lg mx-auto mt-6 bg-gray-100 rounded-xl p-6">
          <ul className="space-y-4 list-disc list-inside text-sm text-[#1a3c6e] leading-6">
            {counsellingFor.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── WHAT WILL YOU GET ── */}
      <section className="py-10 px-6 bg-white">
        <h2 className="text-center text-2xl font-bold text-[#1a3c6e] mb-2">
          What will you get<br />in the counselling?
        </h2>
        <div className="max-w-lg mx-auto mt-6 space-y-4">
          {whatYouGet.map((item, i) => (
            <div key={i} className="flex gap-3 text-sm text-[#1a3c6e] leading-6">
              <span className="text-[#3a8fe8] mt-0.5 flex-shrink-0">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SESSION OVERVIEW ── */}
      <section className="bg-[#0d2b5e] py-12 px-6 text-white">
        <h2 className="text-center text-2xl font-bold mb-8">Session Overview</h2>
        <div className="max-w-lg mx-auto space-y-6">
          {sessionOverview.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1a3c6e] flex items-center justify-center text-xl flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-xs text-gray-300">{item.label}</p>
                <p className={`font-bold text-sm whitespace-pre-line ${item.highlight ? 'text-[#f5c518]' : 'text-white'}`}>
                  {item.value}
                </p>
                {item.sub && <p className="text-xs text-gray-300">{item.sub}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* 10 Lakh+ banner */}
        <div className="max-w-lg mx-auto mt-10 border-2 border-[#3a8fe8] rounded-xl px-6 py-5 text-center">
          <p className="text-2xl font-extrabold">
            <span className="text-[#3a8fe8]">10 Lakh+</span>{' '}
            <span className="text-white font-normal text-base">Students Counselled</span>
          </p>
          <p className="text-white text-sm mt-1">Since 2011</p>
        </div>
      </section>

      {/* ── 4-STEP JOURNEY ── */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-center text-2xl font-bold text-[#1a3c6e] mb-8">
          Your 4-Step Journey<br />to Career Clarity
        </h2>
        <div className="max-w-lg mx-auto grid grid-cols-2 gap-4">
          {steps.map((s) => (
            <div
              key={s.num}
              className="border-2 border-dashed border-[#3a8fe8] rounded-xl p-4 text-center"
            >
              <div className="w-7 h-7 rounded-full bg-[#3a8fe8] text-white text-xs font-bold flex items-center justify-center mx-auto mb-2">
                {s.num}
              </div>
              <p className="text-xs text-[#1a3c6e] leading-5 whitespace-pre-line">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#0d2b5e] py-12 px-6 text-white">
        <h2 className="text-center text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="max-w-lg mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-[#1a3c6e] rounded-xl">
              <summary className="px-5 py-4 text-sm font-medium cursor-pointer flex justify-between items-center list-none">
                {faq.q}
                <span className="text-lg ml-2">›</span>
              </summary>
              <p className="px-5 pb-4 text-xs text-gray-300 leading-6">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-14 px-6 text-center bg-white">
        <h2 className="text-2xl font-bold text-[#1a3c6e] mb-3">
          Let&apos;s Talk About Your<br />Future One-on-One
        </h2>
        <p className="text-gray-500 text-sm mb-6 leading-6">
          Book your free counselling session and take the<br />first step toward a career in commerce.
        </p>
        <a
          href="#form-section"
          className="inline-block bg-[#f5c518] hover:bg-[#e6b800] text-black font-bold py-4 px-10 rounded-full text-sm transition-colors"
        >
          Book your FREE 1:1 Session Now
        </a>
      </section>

      {/* ── STAY CONNECTED ── */}
      <section className="py-10 px-6 text-center bg-white border-t border-gray-100">
        <p className="text-[#1a3c6e] font-semibold mb-1">Stay Connected</p>
        <p className="text-gray-500 text-sm mb-4">Follow us on</p>
        <div className="flex justify-center gap-5">
          {[
            { href: 'https://wa.me/', bg: '#25d366', label: 'WhatsApp', icon: '💬' },
            { href: 'https://facebook.com/', bg: '#1877f2', label: 'Facebook', icon: 'f' },
            { href: 'https://instagram.com/', bg: '#e1306c', label: 'Instagram', icon: '📷' },
            { href: 'https://linkedin.com/', bg: '#0077b5', label: 'LinkedIn', icon: 'in' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold"
              style={{ background: s.bg }}
            >
              {s.icon}
            </a>
          ))}
        </div>
        <p className="text-gray-500 text-sm mt-6">Warm Regards IIC Lakshya</p>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0d2b5e] text-white pt-10 pb-6 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-white font-bold text-sm">Indian Institute of Commerce</div>
            <div className="text-[#f5c518] font-bold text-xs border border-[#f5c518] px-2 py-0.5 rounded">16+</div>
          </div>
          <div className="grid grid-cols-3 gap-6 text-xs mb-8">
            <div>
              <p className="font-semibold mb-3 text-sm">About Lakshya</p>
              {footerAbout.map((l) => (
                <p key={l} className="text-gray-300 mb-1.5 hover:text-white cursor-pointer">{l}</p>
              ))}
            </div>
            <div>
              <p className="font-semibold mb-3 text-sm">Courses</p>
              {footerCourses.map((l) => (
                <p key={l} className="text-gray-300 mb-1.5 hover:text-white cursor-pointer">{l}</p>
              ))}
            </div>
            <div>
              <p className="font-semibold mb-3 text-sm">Resources</p>
              {footerResources.map((l) => (
                <p key={l} className="text-gray-300 mb-1.5 hover:text-white cursor-pointer">{l}</p>
              ))}
            </div>
          </div>
          <div className="border-t border-[#1a3c6e] pt-6 text-xs text-gray-400 space-y-2">
            <p>📍 Coimbatore | Chennai | Kochi | Kozhikode | Perinthalmanna | Bengaluru | Thrissur | Trivandrum | Kottayam | Kannur | Dubai*</p>
            <p>🏢 D, D1, C & C1, 49/137, Ponnurunni, Vyttila, Ernakulam, Kerala 682019</p>
            <p>📞 +91 1800 4122 4555 &nbsp; +971 3808314550</p>
            <p>✉️ info@iiclakshya.com</p>
            <p className="text-gray-500 mt-4">
              Copyright © 2026 All rights reserved with Learnfluence Education Limited (Formerly known as Learnfluence Education Private Limited).
              <br />*Managed and operated by a separate legal entity.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
