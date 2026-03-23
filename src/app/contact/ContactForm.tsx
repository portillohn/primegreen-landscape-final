'use client'
import { useState } from 'react'

type Form = {
  name: string
  email: string
  phone: string
  address: string
  service: string
  source: string
}

export default function ContactForm() {
  const [form, setForm]       = useState<Form>({
    name:'', email:'', phone:'', address:'', service:'', source:''
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

            {/* 2. Email */}
            <div>
              <label className={lbl}>
                Email Address{' '}
                <span className="text-red-500">*</span>
              </label>
              <input type="email" required
                placeholder="your@email.com"
                value={form.email} onChange={set('email')}
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
  )
}
