import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Prime Green Landscape LLC",
  description: "Privacy policy regarding the collection and use of personal data by Prime Green Landscape LLC in Montgomery County, MD.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-[112px] md:pt-[128px] pb-20">
      <h1 className="text-4xl font-bold text-brand-dark mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
        <p className="font-semibold">Last updated: March 2025</p>

        <p>
          At Prime Green Landscape LLC (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), your privacy is extremely important to us. This Privacy Policy outlines how we collect, use, and protect the personal information you provide when using our website and services.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">1. What Data We Collect</h2>
        <p>
          When you request a quote or contact us through our website, we collect the following personal information:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Full Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Service Address (including City and ZIP Code)</li>
          <li>Details regarding your property (e.g., lot size, requested services)</li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">2. How We Use It</h2>
        <p>
          The information we collect is used strictly for the following business purposes:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>To respond to your quote requests and inquiries.</li>
          <li>To assess your property and provide accurate service estimates.</li>
          <li>To communicate with you regarding scheduling, weather delays, and service updates.</li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">3. Data Sharing & Third Parties</h2>
        <p>
          <strong>We never sell your personal data to third parties.</strong> Your information is kept confidential and is only shared with trusted service providers necessary to operate our business.
        </p>
        <p>
          For invoicing and payments, we utilize <strong>Yardbook</strong>. Any payment data (such as credit card numbers) is processed directly and securely by Yardbook and their payment processors (e.g., Stripe). Prime Green Landscape LLC does not store your credit card information on our servers. You can review Yardbook&apos;s privacy policy on their website for more details on how they handle financial data.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">4. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect the personal information you submit to us from unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">5. Contact Us</h2>
        <p>
          If you have any questions or concerns regarding this Privacy Policy or how your data is handled, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> contact@primegreenlandscape.com<br />
          <strong>Phone:</strong> (571) 405-0031
        </p>
      </div>
    </div>
  );
}
