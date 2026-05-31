import CounsellingForm from './CounsellingForm'
import FaqAccordion from './FaqAccordion'
import Image from 'next/image'

const achievements = [
  { value: '450+', label: 'Global &\nNational Ranks' },
  { value: '700+', label: 'Faculty &\nProgramme Experts' },
  { value: '100%', label: 'Placement Assistance' },
  { value: '185,000+', label: 'Lakshya Learners' },
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
    icon: 'https://lakshyamailerimages.s3.ap-south-1.amazonaws.com/_c_se__0_session-1.webp',
    label: 'Session Type',
    value: 'Personalised 1:1\nCounselling Session',
    highlight: true,
    sub: '(private, not group-based)',
  },
  {
    icon: 'https://lakshyamailerimages.s3.ap-south-1.amazonaws.com/c_se__1_session-2.webp',
    label: 'Mode',
    value: 'Offline at IIC Lakshya center /\nOnline via video call',
    highlight: true,
    sub: '',
  },
  {
    icon: 'https://lakshyamailerimages.s3.ap-south-1.amazonaws.com/c_se__2_session-3.webp',
    label: 'Session Duration',
    value: '30 to 60 Minutes',
    highlight: false,
  },
  {
    icon: 'https://lakshyamailerimages.s3.ap-south-1.amazonaws.com/c_se__3_session-4.webp',
    label: 'Cost',
    value: 'Completely FREE',
    highlight: true,
    sub: '(No registration or consultation charges)',
  },
]

const steps = [
  { num: 1, text: 'Fill out the form with\nyour basic details' },
  { num: 2, text: 'Get a Callback to schedule\nyour Free Online Session\nas per your convenience' },
  { num: 3, text: 'Attend the 1:1\nOnline Session with\na Career Specialist' },
  { num: 4, text: 'Start your\njourney with clarity' },
]

const footerAbout = [
  { label: 'Home', href: 'https://lakshyacommerce.com/' },
  { label: 'About Us', href: 'https://lakshyacommerce.com/about-us' },
  { label: 'Contact Us', href: 'https://lakshyacommerce.com/contact-us' },
  { label: 'Our Centers', href: 'https://lakshyacommerce.com/campus' },
  { label: 'Hiring Partners', href: 'https://lakshyacommerce.com/hiring-partners' },
  { label: 'Inside Lakshya', href: 'https://lakshyacommerce.com/inside-lakshya-events' },
  { label: 'Investor Relations', href: 'https://lakshyacommerce.com/' },
  { label: 'Lakshya UAE', href: 'https://lakshyacommerce.ae/' },
]
const footerCourses = [
  { label: 'MBA+ACCA', href: 'https://lakshyacommerce.com/course/mba-acca-integrated-course' },
  { label: 'CA', href: 'https://lakshyacommerce.com/course/chartered-accountancy-ca-course' },
  { label: 'ACCA', href: 'https://lakshyacommerce.com/course/acca-course' },
  { label: 'CMA USA', href: 'https://lakshyacommerce.com/course/cma-usa-course' },
  { label: 'Integrated ACCA Course', href: 'https://lakshyacommerce.com/course/acca-integrated-ug-pg-degree-course' },
  { label: 'Integrated CMA USA Course', href: 'https://lakshyacommerce.com/course/cma-usa-integrated-ug-pg-degree-course' },
  { label: 'CMA India', href: 'https://lakshyacommerce.com/course/cma-india-course' },
  { label: 'CS', href: 'https://lakshyacommerce.com/course/company-secretary-cs-course' },
  { label: 'CPA', href: 'https://lakshyacommerce.com/course/cpa-course' },
  { label: 'DipIFR', href: 'https://lakshyacommerce.com/course/dip-ifrs-course' },
]
const footerResources = [
  { label: 'Blogs', href: 'https://lakshyacommerce.com/blog' },
  { label: 'Academics', href: 'https://lakshyacommerce.com/academics' },
  { label: 'Commerce Formulas', href: 'https://lakshyacommerce.com/formulas' },
  { label: 'Master Class', href: 'https://lakshyacommerce.com/master-class' },
  { label: 'Sitemap', href: 'https://lakshyacommerce.com/sitemap.xml' },
]

export default function Home() {
  return (
    <div className="font-sans text-[#1a3c6e] bg-white">

      {/* ── LOGO + HERO ── */}
      <div className="flex flex-col lg:h-[85vh]">
        {/* Logo bar */}
        <div className="flex justify-center py-2 bg-white flex-shrink-0">
          <Image
            src="https://lakshyamailerimages.s3.ap-south-1.amazonaws.com/Lg.webp"
            alt="IIC Lakshya Logo"
            width={220}
            height={55}
            priority
          />
        </div>

        {/* Hero */}
        <section
          className="relative overflow-hidden flex flex-1 items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #0d5c6e 0%, #0d7a6e 25%, #2a9a6e 55%, #7ac56e 80%, #a8d870 100%)',
          }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-5xl px-6 lg:px-10 gap-4 lg:gap-6 pt-8 pb-0 lg:py-0 lg:h-full">
            {/* Text */}
            <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
              <p className="text-white text-base lg:text-2xl font-normal mb-1">Book your</p>
              <h1 className="text-white font-normal leading-tight text-2xl lg:text-5xl">
                <span className="text-[#f5c518] font-extrabold">Free 1:1</span> Career
                <br />
                Counselling Session
              </h1>
              <p className="text-white text-sm lg:text-base mt-3 lg:mt-5 leading-6 lg:leading-5 max-w-xs mx-auto lg:mx-0 lg:max-w-sm">
                Confused about your next step in commerce?<br />
                Whether you&apos;re in school, just graduated, or<br />
                exploring a career shift, get expert guidance<br />
                from <span className="text-[#f5c518] font-bold">India&apos;s No.1</span> Commerce Institute.
              </p>
            </div>

            {/* Hero image */}
            <div className="flex-1 flex items-end justify-center h-full self-end">
              <Image
                src="https://lakshyamailerimages.s3.ap-south-1.amazonaws.com/1754805830979_cbanner_oline-header-img.webp"
                alt="Career Counselling Experts"
                width={700}
                height={440}
                className="object-contain object-bottom w-full max-w-[220px] lg:max-w-none mb-0 block"
                style={{ width: 'auto', height: '85%', maxHeight: '420px', verticalAlign: 'bottom' }}
                priority
              />
            </div>
          </div>
        </section>
      </div>

      {/* ── ACHIEVEMENTS ── */}
      <section className="py-10 lg:py-14 px-4 lg:px-6">
        <h2 className="text-center text-2xl lg:text-3xl font-normal text-[#1a3c6e] mb-6 lg:mb-10">Our Achievements</h2>
        <div className="grid grid-cols-2 gap-8 lg:gap-16 max-w-xs lg:max-w-2xl mx-auto text-center">
          {achievements.map((a) => (
            <div key={a.value}>
              <p className="text-4xl lg:text-7xl font-extrabold text-[#1a3c6e]">{a.value}</p>
              <p className="text-[#3a8fe8] text-sm lg:text-lg mt-2 lg:mt-3 leading-5 lg:leading-6 whitespace-pre-line">{a.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FORM ── */}
      <section id="form-section" className="bg-[#eaf4fd] py-8 lg:py-10 px-4 lg:px-10">
        <h2 className="text-center text-2xl lg:text-4xl font-normal text-[#1a3c6e] mb-5 lg:mb-6">Talk with Industry Experts</h2>
        <div className="max-w-2xl mx-auto">
          <CounsellingForm />
        </div>
      </section>

      {/* ── WHO IS THIS FOR ── */}
      <section className="py-10 lg:py-12 px-4 lg:px-6">
        <h2 className="text-center text-3xl lg:text-5xl font-bold text-[#3a8fe8] mb-2">
          Who is this<br />Counselling for?
        </h2>
        <div className="w-full mt-6 bg-gray-100 rounded-xl px-4 py-6 lg:px-24 lg:py-10">
          <ul className="space-y-4 lg:space-y-6 list-disc text-base lg:text-xl text-[#1a3c6e] leading-7 lg:leading-8 max-w-2xl mx-auto pl-6">
            {counsellingFor.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── WHAT WILL YOU GET ── */}
      <section className="py-10 lg:py-12 px-4 lg:px-6 bg-white">
        <h2 className="text-center text-3xl lg:text-5xl font-bold text-[#3a8fe8] mb-2">
          What will you get<br />in the counselling?
        </h2>
        <div className="w-full mt-6 bg-gray-100 rounded-xl px-4 py-6 lg:px-24 lg:py-10">
          <ul className="space-y-5 lg:space-y-8 text-base lg:text-2xl text-gray-800 leading-7 lg:leading-8 max-w-2xl mx-auto pl-0">
          {whatYouGet.map((item, i) => (
            <li key={i} className="flex gap-3 lg:gap-4 items-start">
              <span className="flex-shrink-0 w-6 h-6 lg:w-7 lg:h-7 rounded-full border-2 border-[#3a8fe8] flex items-center justify-center text-[#3a8fe8] text-sm lg:text-base mt-0.5">✓</span>
              <span>{item}</span>
            </li>
          ))}
          </ul>
        </div>
      </section>

      {/* ── SESSION OVERVIEW ── */}
      <section className="bg-[#005486] py-10 lg:py-12 px-4 lg:px-6 text-white">
        <h2 className="text-center text-3xl lg:text-5xl font-bold mb-6 lg:mb-8">Session Overview</h2>
        <div className="max-w-sm mx-auto space-y-5 lg:space-y-6">
          {sessionOverview.map((item, i) => (
            <div key={i} className="flex items-center gap-4 lg:gap-6">
              <div className="w-16 h-16 lg:w-28 lg:h-28 rounded-full bg-[#003d63] flex items-center justify-center flex-shrink-0 overflow-hidden p-2 lg:p-4">
                <Image src={item.icon} alt={item.label} width={90} height={90} className="object-contain w-full h-full" />
              </div>
              <div>
                <p className="text-sm lg:text-lg italic text-white font-normal">{item.label}</p>
                <p className={`font-bold text-base lg:text-2xl whitespace-pre-line leading-tight ${item.highlight ? 'text-[#f5c518]' : 'text-white'}`}>
                  {item.value}
                </p>
                {item.sub && <p className="text-sm lg:text-2xl text-white font-normal lg:whitespace-nowrap">{item.sub}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* 10 Lakh+ banner */}
        <div className="max-w-4xl mx-auto mt-10 lg:mt-12 border border-[#c8b84a] rounded-2xl px-6 lg:px-16 py-6 lg:py-8 flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-6"
          style={{ background: 'rgba(0,30,60,0.5)' }}>
          <div className="flex items-baseline gap-2">
            <span className="font-extrabold text-5xl lg:text-8xl" style={{ color: '#3ab8c8' }}>10</span>
            <span className="font-extrabold text-5xl lg:text-8xl" style={{ background: 'linear-gradient(180deg, #5ec87a 0%, #b8d84a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Lakh+</span>
          </div>
          <div className="flex flex-col text-white text-lg lg:text-3xl font-normal leading-7 lg:leading-10 text-center lg:text-left">
            <span>Students Counselled</span>
            <span>Since 2011</span>
          </div>
        </div>
      </section>

      {/* ── 4-STEP JOURNEY ── */}
      <section className="py-10 lg:py-12 px-4 lg:px-6 bg-[#005486]">
        <h2 className="text-center text-3xl lg:text-6xl font-bold text-white mb-6 lg:mb-8">
          Your 4-Step Journey<br />to Career Clarity
        </h2>
        <div className="max-w-3xl mx-auto grid grid-cols-2 gap-4 lg:gap-6 mt-4 lg:mt-6 items-start">
          {steps.map((s) => (
            <div key={s.num} className="relative pt-5">
              <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-[#003d63] text-white text-xs lg:text-sm font-bold flex items-center justify-center mx-auto absolute -top-0 left-1/2 -translate-x-1/2 z-10">
                {s.num}
              </div>
              <div
                className="rounded-2xl pt-8 pb-4 px-3 lg:pt-10 lg:pb-6 lg:px-6 text-center h-28 lg:h-36 flex items-center justify-center"
                style={{ border: '1px dashed #7ab8d8' }}
              >
                <p className="text-sm lg:text-xl text-white leading-6 lg:leading-8 whitespace-pre-line">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#005486] py-10 lg:py-12 px-4 lg:px-6 text-white">
        <div className="max-w-3xl mx-auto rounded-2xl px-4 py-8 lg:px-6 lg:py-12 space-y-4" style={{ background: '#0A5A8A' }}>
          <h2 className="text-center text-2xl lg:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <FaqAccordion />
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-10 lg:py-14 px-4 lg:px-6 text-center bg-[#005486]">
        <h2 className="text-3xl lg:text-6xl font-bold mb-4 lg:mb-6" style={{ color: '#7ab8d8' }}>
          Let&apos;s Talk About Your<br />Future One-on-One
        </h2>
        <p className="text-white text-base lg:text-2xl italic mb-5 lg:mb-6 leading-7 lg:leading-9">
          Book your free counselling session and take the<br />first step toward a career in commerce.
        </p>
        <a
          href="#form-section"
          className="inline-block bg-[#f5c518] hover:bg-[#e6b800] text-black font-bold py-4 lg:py-5 px-8 lg:px-16 rounded-full text-base lg:text-xl transition-colors"
        >
          Book your FREE 1:1 Session Now
        </a>
      </section>

      {/* ── STAY CONNECTED ── */}
      <section className="py-8 lg:py-10 px-4 lg:px-6 text-center bg-[#005486]">
        <p className="text-white font-normal text-2xl lg:text-4xl mb-1 lg:mb-2">Stay Connected</p>
        <p className="text-gray-200 text-lg lg:text-2xl mb-4">Follow us on</p>
        <div className="flex justify-center gap-6 lg:gap-10">
          {[
            { href: 'https://wa.me/919061277777', label: 'WhatsApp', img: 'https://lakshyamailerimages.s3.ap-south-1.amazonaws.com/cr1_whats-app.png' },
            { href: 'https://www.facebook.com/lakshyacac', label: 'Facebook', img: 'https://lakshyamailerimages.s3.ap-south-1.amazonaws.com/_cr2_facebook.png' },
            { href: 'https://www.instagram.com/iiclakshya/', label: 'Instagram', img: 'https://lakshyamailerimages.s3.ap-south-1.amazonaws.com/cr3_instragram.png' },
            { href: 'https://www.linkedin.com/company/indianinstituteofcommercelakshya/', label: 'LinkedIn', img: 'https://lakshyamailerimages.s3.ap-south-1.amazonaws.com/cr4_linkedines.png' },
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
              <Image src={s.img} alt={s.label} width={70} height={70} className="object-contain hover:scale-110 transition-transform duration-200 lg:w-[110px] lg:h-[110px]" />
            </a>
          ))}
        </div>
        <p className="text-gray-200 text-lg lg:text-2xl mt-4 lg:mt-6">Warm Regards IIC Lakshya</p>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#01508C] text-white pt-8 lg:pt-12 pb-6 lg:pb-8 px-6 lg:px-20">
        {/* Logo */}
        <div className="flex items-start pt-1 mb-6 lg:hidden">
          <Image
            src="https://lakshyamailerimages.s3.ap-south-1.amazonaws.com/IIC_Lakshya_16yr.webp"
            alt="IIC Lakshya"
            width={160}
            height={60}
            className="object-contain brightness-0 invert"
          />
        </div>

        {/* Mobile: 2-col nav grid | Desktop: hidden (rendered below) */}
        <div className="grid grid-cols-2 gap-6 text-sm mb-6 lg:hidden">
          <div>
            <p className="text-[#f5c518] font-semibold mb-3">About Lakshya</p>
            {footerAbout.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="block text-white mb-2 hover:text-gray-300">{l.label}</a>
            ))}
          </div>
          <div>
            <p className="text-[#f5c518] font-semibold mb-3">Courses</p>
            {footerCourses.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="block text-white mb-2 hover:text-gray-300">{l.label}</a>
            ))}
          </div>
          <div>
            <p className="text-[#f5c518] font-semibold mb-3">Resource</p>
            {footerResources.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="block text-white mb-2 hover:text-gray-300">{l.label}</a>
            ))}
          </div>
          <div className="text-sm space-y-4">
            <div className="flex gap-2">
              <span className="mt-0.5 flex-shrink-0">📍</span>
              <p className="text-white leading-6 text-xs">Coimbatore | Chennai | Kochi | Kozhikode | Perinthalmanna | Bengaluru | Thrissur | Trivandrum | Kottayam | Kannur | Dubai*</p>
            </div>
            <div className="flex gap-2">
              <span className="mt-0.5 flex-shrink-0">📞</span>
              <div>
                <p className="text-white font-semibold text-xs">🇮🇳 +91 90612 77777</p>
                <p className="text-white font-semibold text-xs">🇦🇪 +971 568631499</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="mt-0.5 flex-shrink-0">✉️</span>
              <p className="text-white font-semibold text-xs">info@iiclakshya.com</p>
            </div>
            <a href="https://lakshyacommerce.com/privacy-policy-and-terms-of-service" target="_blank" rel="noopener noreferrer" className="text-white text-xs hover:text-gray-300">T&amp;C and Privacy Policy</a>
          </div>
        </div>

        {/* Desktop: 5-column */}
        <div className="hidden lg:grid grid-cols-[220px_60px_1fr_1fr_1fr_1.6fr] gap-8 text-sm mb-8">
          {/* Logo */}
          <div className="flex items-start pt-1">
            <Image
              src="https://lakshyamailerimages.s3.ap-south-1.amazonaws.com/IIC_Lakshya_16yr.webp"
              alt="IIC Lakshya"
              width={200}
              height={80}
              className="object-contain brightness-0 invert"
            />
          </div>

          {/* Spacer */}
          <div />

          {/* About */}
          <div>
            <p className="text-[#f5c518] font-semibold mb-4">About Lakshya</p>
            {footerAbout.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="block text-white mb-3 hover:text-gray-300">{l.label}</a>
            ))}
          </div>

          {/* Courses */}
          <div>
            <p className="text-[#f5c518] font-semibold mb-4">Courses</p>
            {footerCourses.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="block text-white mb-3 hover:text-gray-300">{l.label}</a>
            ))}
          </div>

          {/* Resources */}
          <div>
            <p className="text-[#f5c518] font-semibold mb-4">Resource</p>
            {footerResources.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="block text-white mb-3 hover:text-gray-300">{l.label}</a>
            ))}
          </div>

          {/* Contact */}
          <div className="text-sm space-y-4">
            <div className="flex gap-2">
              <span className="mt-0.5 flex-shrink-0">📍</span>
              <p className="text-white leading-6">Coimbatore | Chennai | Kochi | Kozhikode | Perinthalmanna | Bengaluru | Thrissur | Trivandrum | Kottayam | Kannur | Dubai*</p>
            </div>
            <div className="flex gap-2">
              <span className="mt-0.5 flex-shrink-0">📍</span>
              <p className="text-white leading-6">D, D1, C & C1, 49/137,<br />Ponnurunni, Vyttila, Ernakulam,<br />Kerala 682019</p>
            </div>
            <div className="flex gap-2">
              <span className="mt-0.5 flex-shrink-0">📞</span>
              <div>
                <p className="text-white font-semibold">🇮🇳 +91 90612 77777</p>
                <p className="text-white font-semibold">🇦🇪 +971 568631499</p>
                <p className="text-gray-300 text-xs mt-1">Mon to Sun | 9am to 7pm</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="mt-0.5 flex-shrink-0">✉️</span>
              <div>
                <p className="text-white font-semibold">info@iiclakshya.com</p>
                <p className="text-gray-300 text-xs">Send us your query anytime!</p>
              </div>
            </div>
            <a href="https://lakshyacommerce.com/privacy-policy-and-terms-of-service" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">T&amp;C and Privacy Policy</a>
          </div>
        </div>

        {/* Bottom social icons */}
        <div className="flex items-center gap-4 lg:gap-5 mb-4 lg:mb-6 mt-2 flex-wrap">
          {[
            { href: 'https://x.com/iiclakshya', label: 'X', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
            { href: 'https://www.youtube.com/@iic_lakshya', label: 'YouTube', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
            { href: 'https://www.facebook.com/lakshyacac', label: 'Facebook', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
            { href: 'https://www.instagram.com/iiclakshya/', label: 'Instagram', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
            { href: 'https://www.reddit.com/r/IICLakshya/', label: 'Reddit', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg> },
            { href: 'https://www.quora.com/profile/IIC-LAKSHYA', label: 'Quora', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M11.94.01C5.326.01 0 5.33 0 11.944c0 6.616 5.326 11.937 11.94 11.937 1.786 0 3.476-.4 4.99-1.113.505.687 1.136 1.224 2.022 1.224h2.897c.195 0 .29-.14.193-.312l-1.38-2.46c1.458-1.8 2.338-4.1 2.338-6.573C23.88 5.33 18.55.01 11.94.01zm4.194 17.715c-.585-.96-1.31-1.73-2.5-1.73h-2.898c-.193 0-.29.14-.193.312l1.304 2.324a8.293 8.293 0 0 1-1.947.232c-4.58 0-8.3-3.72-8.3-8.3 0-4.58 3.72-8.3 8.3-8.3 4.58 0 8.3 3.72 8.3 8.3 0 2.545-.974 4.628-2.066 7.162z"/></svg> },
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-white hover:text-gray-300 transition-colors">
              {s.svg}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-[#1a6aaa] pt-4 text-xs text-gray-300 text-center">
          <p>Copyright © 2026 All rights reserved with Learnfluence Education Limited (Formerly known as Learnfluence Education Private Limited).<br />*Managed and operated by a separate legal entity.</p>
        </div>
      </footer>
    </div>
  )
}
