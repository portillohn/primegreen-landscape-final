import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Prime Green Landscape LLC",
  description: "Terms of Service and operating policies for Prime Green Landscape LLC in Montgomery County, MD.",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-[140px] md:pt-[152px] pb-20">
      <h1 className="text-4xl font-bold text-brand-dark mb-8">Terms of Service</h1>
      
      <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
        <p className="font-semibold">Last updated: March 2025</p>

        <p>
          Please read these Terms of Service ("Terms") carefully. By engaging Prime Green Landscape LLC ("we," "our," "us") for lawn care services, you ("Client," "you") agree to the following terms and conditions.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">1. Service Description and Scope</h2>
        <p>
          Prime Green Landscape LLC specializes in residential lawn mowing using push mowers. Our services (Basic Mow, Standard Care, Premium Manicure) include the specific tasks outlined in your accepted quote. Any additional landscaping requests outside of standard lawn mowing (e.g., mulching, planting, major cleanups) require a separate estimate and agreement.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">2. Payment Terms</h2>
        <p>
          We operate on a "pay-per-visit" structure unless a different arrangement is mutually agreed upon. 
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Invoicing:</strong> After each service is completed, an invoice will be generated and sent electronically via Yardbook to your provided email address.</li>
          <li><strong>Due Date:</strong> All invoices are due within seven (7) days of the invoice date.</li>
          <li><strong>Payment Methods:</strong> We accept credit/debit cards, Apple Pay, and Google Pay through the secure Yardbook payment link. We do not accept cash or personal checks.</li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">3. Cancellation Policy</h2>
        <p>
          We require a minimum of <strong>24 hours' notice</strong> to cancel or skip a scheduled service visit. If a cancellation is made with less than 24 hours' notice, or if our crew arrives and cannot access the property (e.g., locked gates, aggressive pets in the yard), a trip charge of 50% of your normal service rate may apply.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">4. Weather Delays</h2>
        <p>
          Lawn care is highly dependent on weather conditions. In the event of heavy rain or severe weather, your scheduled service will be postponed to the next available clear day (typically the following day). We will notify you of any weather-related schedule changes.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">5. Satisfaction Guarantee</h2>
        <p>
          We take immense pride in our precision and quality. If you are ever dissatisfied with a service, please contact us within 24 hours of the service completion. We will return to your property within 24 hours to correct the issue at no additional cost to you.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">6. Limitation of Liability</h2>
        <p>
          While we take every precaution to protect your property, we are not liable for damage to hidden or inadequately protected items in the turf (e.g., exposed irrigation heads, hidden dog toys, low-voltage lighting wires not buried properly). It is the Client's responsibility to unlatch gates, pick up pet waste, and clear the lawn of toys and debris prior to our arrival.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">7. Governing Law</h2>
        <p>
          These Terms of Service shall be governed by and construed in accordance with the laws of the State of Maryland, specifically pertaining to businesses operating within Montgomery County.
        </p>
      </div>
    </div>
  );
}
