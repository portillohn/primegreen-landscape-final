# Prime Green Landscape LLC - Website

A complete, production-ready, highly-optimized marketing and lead-generation website for Prime Green Landscape LLC. Built with Next.js 14, App Router, TypeScript, and Tailwind CSS.

## 🚀 Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Copy `.env.example` to `.env.local` and fill in the values:
   ```bash
   cp .env.example .env.local
   ```
   * `RESEND_API_KEY`: Get a free API key at [resend.com](https://resend.com)
   * `CONTACT_EMAIL`: The personal or business email where you want to receive quote requests.

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## 🏗 Build & Deploy

This project is fully ready for Vercel deployment.
1. Run a local build test:
   ```bash
   npm run build
   ```
2. Push your code to a GitHub repository.
3. Import the exact repository directly into Vercel. Vercel will automatically detect Next.js and apply the correct build settings. Ensure you add `RESEND_API_KEY` and `CONTACT_EMAIL` in Vercel's Environment Variables panel before deploying.

## 📝 How to Add Content

**Add a New Service Area (City Page)**
Open `lib/data.ts`. Add a new key and object to the `serviceAreasData` dictionary.
The website's dynamic routing (`/areas/[city]`) and sitemap will automatically generate the new page during the next build!

**Add a New Blog Post**
Open `lib/blogData.ts`. Add a new slug key and object to the `blogPosts` dictionary. The blog index will automatically feature it, and the dynamic route (`/blog/[slug]`) will render the markdown-styled content.

## ✅ After Deployment Checklist
1. **Google Search Console**: Go to search.google.com and add `https://primegreenlandscape.com`. Submit your standard `sitemap.xml` URL.
2. **Google Business Profile**: Ensure your website link on your Google Maps listing matches this exact domain.
3. **Resend Domain Verification**: In your Resend dashboard, verify your custom domain so emails don't hit spam filters. Change the `from` email in `app/api/contact/route.ts` to `quotes@primegreenlandscape.com`.
# primegreenlandscape
