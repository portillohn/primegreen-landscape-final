"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { Phone, Mail, MapPin, Clock, CheckCircle2, AlertCircle, Loader2, CreditCard } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    lotSize: "",
    service: "",
    source: "",
    notes: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Title */}
      <section className="bg-brand-dark pt-[140px] md:pt-[152px] pb-16 text-center text-white border-b border-brand-accent/20">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Request a Free Quote</h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto px-4">
            Fill out the form below. We'll review your property details and contact you within 2 hours with a personalized estimate.
          </p>
        </FadeIn>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            {/* LEFT — FORM */}
            <div className="lg:col-span-2 bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">
              {submitStatus === "success" ? (
                <FadeIn className="text-center py-16">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-brand-dark mb-4">Quote Request Received!</h2>
                  <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                    Thanks <strong className="text-brand-dark">{formData.name}</strong>! We'll review your property details and contact you at <strong className="text-brand-dark">{formData.phone}</strong> within 2 hours with your personalized quote.
                  </p>
                  <p className="text-gray-500 mb-8">
                    Questions in the meantime? Text or call us at (571) 405-0031
                  </p>
                  <button 
                    onClick={() => {
                      setSubmitStatus("idle");
                      setFormData(prev => ({ ...prev, lotSize: "", service: "", notes: "" }));
                    }}
                    className="px-6 py-3 bg-gray-100 text-brand-dark font-semibold rounded-md hover:bg-gray-200 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </FadeIn>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitStatus === "error" && (
                    <div className="bg-red-50 text-red-700 p-4 rounded-md flex items-center gap-3 border border-red-100">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <p className="text-sm font-medium">Something went wrong. Please try again or call us directly at (571) 405-0031.</p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-colors"
                        placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-colors"
                        placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                      <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-colors"
                        placeholder="(571) 405-0031" />
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-1">Service Address *</label>
                      <input type="text" id="address" name="address" required value={formData.address} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-colors"
                        placeholder="123 Main St" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-1">City *</label>
                      <select id="city" name="city" required value={formData.city} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-colors bg-white">
                        <option value="" disabled>Select your city...</option>
                        <option value="Montgomery Village">Montgomery Village</option>
                        <option value="Gaithersburg">Gaithersburg</option>
                        <option value="Rockville">Rockville</option>
                        <option value="Germantown">Germantown</option>
                        <option value="Bethesda">Bethesda</option>
                        <option value="Silver Spring">Silver Spring</option>
                        <option value="Other">Other (Not Served)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="zip" className="block text-sm font-semibold text-gray-700 mb-1">ZIP Code *</label>
                      <input type="text" id="zip" name="zip" required value={formData.zip} onChange={handleChange} pattern="^\d{5}$" title="5 digit ZIP code"
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-colors"
                        placeholder="20886" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="lotSize" className="block text-sm font-semibold text-gray-700 mb-1">Approximate Lot Size *</label>
                      <select id="lotSize" name="lotSize" required value={formData.lotSize} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-colors bg-white">
                        <option value="" disabled>Select lot size...</option>
                        <option value="Small">Small — Under 5,000 sq ft (Starts at $45)</option>
                        <option value="Medium">Medium — 5,000 to 10,000 sq ft (Starts at $65)</option>
                        <option value="Large">Large — Over 10,000 sq ft (Starts at $95)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1">Preferred Schedule *</label>
                      <select id="service" name="service" required value={formData.service} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-colors bg-white">
                        <option value="" disabled>Select schedule...</option>
                        <option value="Weekly Mowing">Weekly Mowing</option>
                        <option value="Bi-Weekly Mowing">Bi-Weekly Mowing</option>
                        <option value="Monthly Mowing">Monthly Mowing</option>
                        <option value="One-Time Service">One-Time Service</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="source" className="block text-sm font-semibold text-gray-700 mb-1">How did you hear about us? (Optional)</label>
                    <select id="source" name="source" value={formData.source} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-colors bg-white">
                      <option value="">Select source...</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Google Maps">Google Maps</option>
                      <option value="Nextdoor">Nextdoor</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Referral">Friend or Neighbor Referral</option>
                      <option value="Yard Sign">Yard Sign</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-1">Additional Notes (Optional)</label>
                    <textarea id="notes" name="notes" rows={4} value={formData.notes} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-colors resize-none"
                      placeholder="e.g. I have a locked gate in the back, or I have a dog..." />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-brand-accent text-white font-extrabold text-lg rounded-md hover:bg-brand-dark transition-all shadow-md hover:shadow-lg disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="w-6 h-6 animate-spin" /> Sending...</>
                    ) : (
                      "Send My Quote Request →"
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* RIGHT — INFO */}
            <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-28">
              <FadeIn delay={0.1} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-6">
                <h3 className="text-xl font-bold text-brand-dark mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <a href="tel:+15714050031" className="flex items-start gap-4 text-gray-700 hover:text-brand-accent transition-colors group">
                    <div className="bg-brand-bg p-3 rounded-full group-hover:bg-brand-accent/10">
                      <Phone className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark">Call or Text Us</p>
                      <p className="text-xl font-bold">(571) 405-0031</p>
                    </div>
                  </a>

                  <a href="mailto:contact@primegreenlandscape.com" className="flex items-start gap-4 text-gray-700 hover:text-brand-accent transition-colors group">
                    <div className="bg-brand-bg p-3 rounded-full group-hover:bg-brand-accent/10">
                      <Mail className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark">Email Us</p>
                      <p className="break-all">contact@primegreenlandscape.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 text-gray-700">
                    <div className="bg-brand-bg p-3 rounded-full">
                      <Clock className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark">Our Hours</p>
                      <p>Mon–Sat: 7:00 AM – 7:00 PM</p>
                      <p className="text-sm text-gray-500">Closed Sundays</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 text-gray-700">
                    <div className="bg-brand-bg p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark">Service Area</p>
                      <p>Montgomery County, MD</p>
                    </div>
                  </div>
                </div>

                <hr className="my-8 border-gray-100" />
                
                <div className="mb-8">
                  <div className="flex items-center gap-2 text-brand-dark font-bold mb-3">
                    <CreditCard className="w-5 h-5 text-brand-accent" />
                    <span>How billing works:</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Once you become a client, we use <strong className="text-brand-dark">Yardbook</strong> to send you a secure online invoice after each service. Pay in seconds by card — no cash, no checks, no hassle.
                  </p>
                  <div className="px-4 py-2 bg-gray-100 rounded text-sm text-center font-bold text-gray-600">
                    Yardbook Invoice Partner
                  </div>
                </div>

                <hr className="my-8 border-gray-100" />

                <div>
                  <p className="font-semibold text-brand-dark mb-4">Currently serving 6 cities:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Montgomery Village", "Gaithersburg", "Rockville", "Germantown", "Bethesda", "Silver Spring"].map(city => (
                      <Link key={city} href={`/areas/${city.toLowerCase().replace(' ', '-')}`} className="bg-brand-bg text-brand-dark text-xs font-bold px-3 py-1.5 rounded-full hover:bg-brand-accent hover:text-white transition-colors">
                        {city}
                      </Link>
                    ))}
                  </div>
                </div>

              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
