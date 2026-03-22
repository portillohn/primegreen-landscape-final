'use client'
import { useState } from 'react'

type Form = {
  name: string
  phone: string
  address: string
  service: string
  source: string
}

export default function ContactPage() {
  const [form, setForm]       = useState<Form>({
    name:'', phone:'', address:'', service:'', source:''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error,   setError]   = useState('')

  const set = (k: keyof Form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setSuccess(true)
    } catch {
      setError('Something went wrong. Please call us directly.')
    } finally {
      setLoading(false)
    }
  }

  const inp = `w-full h-14 px-4 text-base border border-gray-300
    rounded-xl bg-white placeholder-gray-400 text-gray-900
    focus:outline-none focus:border-green-500
    focus:ring-2 focus:ring-green-500/20 transition-colors`

  const lbl = `block text-sm font-semibold text-gray-700 mb-1.5`

  return (
    <>
      {/* HERO */}
      <section className="bg-[#1A4D1E] pt-[72px]">
        <div className="max-w-3xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-black
            text-white mb-3">
            Get Your Free Lawn Care Quote
          </h1>
          <p className="text-green-200 text-lg">
            5-second form · We call you back · No obligation
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8
          grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* FORM — spans 2 columns */}
          <div className="lg:col-span-2 bg-white rounded-2xl
            border border-gray-100 shadow-sm p-8">

            {success ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full
                  flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600"
                    fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path strokeLinecap="round"
                      strokeLinejoin="round" strokeWidth={2.5}
                      d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-black text-green-900 mb-3">
                  Quote Request Received! 🌿
                </h2>
                <p className="text-gray-600 mb-1">
                  Thanks <strong>{form.name}</strong>! We will call
                  you at <strong>{form.phone}</strong> within 2 hours.
                </p>
                <p className="text-sm text-gray-400 mt-4">
                  Questions? Text us at (571) 405-0031
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-black
                    text-green-900 mb-1">
                    Request a Free Quote
                  </h2>
                  <p className="text-sm text-gray-500">
                    Fill out the 5 fields below.
                    We respond within 2 hours.
                  </p>
                </div>

                <form onSubmit={submit} className="space-y-5">

                  {/* 1. Name */}
                  <div>
                    <label className={lbl}>
                      Full Name{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <input type="text" required
                      placeholder="Your full name"
                      value={form.name} onChange={set('name')}
                      className={inp}/>
                  </div>

                  {/* 2. Phone */}
                  <div>
                    <label className={lbl}>
                      Phone Number{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <input type="tel" required
                      placeholder="(571) 000-0000"
                      value={form.phone} onChange={set('phone')}
                      className={inp}/>
                    <p className="text-xs text-gray-400 mt-1.5">
                      We will call or text this number with your quote
                    </p>
                  </div>

                  {/* 3. Address */}
                  <div>
                    <label className={lbl}>
                      Service Address{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <input type="text" required
                      placeholder="123 Main St, Gaithersburg MD 20877"
                      value={form.address} onChange={set('address')}
                      className={inp}/>
                    <p className="text-xs text-gray-400 mt-1.5">
                      Helps us estimate your lot size for pricing
                    </p>
                  </div>

                  {/* 4. Service */}
                  <div>
                    <label className={lbl}>
                      Service Needed{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <select required
                      value={form.service} onChange={set('service')}
                      className={inp}>
                      <option value="">Select a service...</option>
                      <option>Weekly Mowing</option>
                      <option>Bi-Weekly Mowing</option>
                      <option>Monthly Mowing</option>
                      <option>One-Time Cleanup</option>
                    </select>
                  </div>

                  {/* 5. Source optional */}
                  <div>
                    <label className={lbl}>
                      How did you hear about us?{' '}
                      <span className="text-gray-400 font-normal">
                        (optional)
                      </span>
                    </label>
                    <select
                      value={form.source} onChange={set('source')}
                      className={inp}>
                      <option value="">Select...</option>
                      <option>Google Search</option>
                      <option>Google Maps</option>
                      <option>Nextdoor</option>
                      <option>Friend or Neighbor</option>
                      <option>Yard Sign</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Error */}
                  {error && (
                    <p className="text-sm text-red-600 bg-red-50
                      border border-red-200 rounded-xl px-4 py-3">
                      {error}
                    </p>
                  )}

                  {/* Submit */}
                  <button type="submit" disabled={loading}
                    className="w-full bg-green-600 hover:bg-green-700
                      disabled:opacity-60 text-white font-bold
                      text-lg py-4 rounded-xl transition-colors
                      flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <svg className="animate-spin w-5 h-5"
                          fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12"
                            cy="12" r="10" stroke="currentColor"
                            strokeWidth="4"/>
                          <path className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0
                            5.373 0 12h4z"/>
                        </svg>
                        Sending...
                      </>
                    ) : 'Get My Free Quote →'}
                  </button>

                  {/* Trust */}
                  <div className="flex justify-center gap-6 pt-1">
                    <span className="text-xs text-gray-400">
                      🔒 Private — no spam ever
                    </span>
                    <span className="text-xs text-gray-400">
                      ⚡ Response within 2 hours
                    </span>
                  </div>

                </form>
              </>
            )}
          </div>

          {/* SIDEBAR */}
          <div className="flex flex-col gap-4">

            {/* Phone CTA */}
            <a href="sms:+15714050031?body=Hello%2C%20I%27d%20like%20a%20free%20quote"
              aria-label="Send SMS to (571) 405-0031"
              className="flex items-center gap-4 bg-green-600
                hover:bg-green-700 text-white rounded-2xl p-5
                transition-colors">
              <div className="w-12 h-12 bg-white/20 rounded-full
                flex-shrink-0 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0
                    01.948.684l1.498 4.493a1 1 0 01-.502
                    1.21l-2.257 1.13a11.042 11.042 0 005.516
                    5.516l1.13-2.257a1 1 0 011.21-.502l4.493
                    1.498a1 1 0 01.684.949V19a2 2 0 01-2
                    2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs opacity-80">
                  Prefer to call or text?
                </p>
                <p className="text-xl font-black">
                  💬 (571) 405-0031
                </p>
              </div>
            </a>

            {/* Info */}
            <div className="bg-white rounded-2xl border
              border-gray-100 shadow-sm p-6 space-y-4">
              <h3 className="text-xs font-bold uppercase
                tracking-wider text-gray-500">
                Contact Info
              </h3>
              {([
                ['✉️','Email',
                 'contact@primegreenlandscape.com',
                 'mailto:contact@primegreenlandscape.com'],
                ['🕐','Hours','Mon–Sat: 7AM – 7PM', null],
                ['📍','Area','Montgomery County, MD', null],
                ['💳','Billing','Online via Yardbook', null],
              ] as const).map(([icon,label,val,href]) => (
                <div key={label} className="flex gap-3">
                  <span className="text-base mt-0.5">{icon}</span>
                  <div>
                    <p className="text-xs text-gray-400">{label}</p>
                    {href
                      ? <a href={href}
                          className="text-sm font-semibold
                            text-green-700 hover:underline break-all">
                          {val}
                        </a>
                      : <p className="text-sm font-semibold
                          text-gray-800">{val}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Cities */}
            <div className="bg-white rounded-2xl border
              border-gray-100 shadow-sm p-6">
              <h3 className="text-xs font-bold uppercase
                tracking-wider text-gray-500 mb-4">
                Areas We Serve
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Montgomery Village','Gaithersburg','Rockville',
                  'Germantown','Bethesda','Silver Spring'
                ].map(c => (
                  <span key={c} className="text-xs font-semibold
                    bg-green-50 text-green-800 border
                    border-green-100 rounded-full px-3 py-1.5">
                    {c}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
