import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blogData";
import { Calendar, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Lawn Care Tips & Advice | Montgomery County, MD Blog",
  description: "Expert lawn care tips, mowing advice, and landscaping guides for homeowners in Montgomery County, Maryland.",
  openGraph: {
    images: [{
      url: `${siteConfig.url}/images/blog/best-lawn-care-tips-maryland-homeowners.webp`,
      width: 1200,
      height: 800,
      alt: 'Prime Green Landscape lawn care blog cover image',
    }],
  },
  alternates: { canonical: '/blog' },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Prime Green Landscape Lawn Care Blog",
  "url": "https://www.primegreenlandscape.com/blog",
  "description": "Expert lawn care tips and landscaping guides for Montgomery County, MD.",
  "publisher": {
    "@type": "Organization",
    "name": "Prime Green Landscape LLC"
  }
};

export default function BlogIndex() {
  const posts = Object.values(blogPosts);
  const [featured, ...rest] = posts;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/blog/best-lawn-care-tips-maryland-homeowners.webp"
            alt="Lawn care tips for Maryland homeowners"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/88 via-brand-dark/70 to-brand-dark/40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-36 pb-20">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
          <div className="mt-6 max-w-2xl">
            <span className="text-brand-accent font-bold tracking-widest text-xs mb-3 block uppercase">Expert Lawn Care Advice</span>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight tracking-tighter">
              Lawn Care Tips for<br className="hidden md:block" /> Montgomery County
            </h1>
            <p className="text-lg text-gray-200 font-light max-w-lg leading-relaxed">
              Professional advice to keep your Maryland lawn healthy, thick, and beautifully green all season long.
            </p>
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured Post — full-width card */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} className="group block mb-12">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 md:grid md:grid-cols-2 md:min-h-[340px]">
                <div className="relative h-60 md:h-full overflow-hidden">
                  <Image
                    src={featured.coverImage}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-accent text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-xs text-gray-400 font-medium mb-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{featured.date}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-brand-dark mb-4 leading-snug group-hover:text-brand-accent transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">{featured.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-brand-accent font-bold text-sm group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Remaining posts grid */}
          {rest.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <article key={post.slug} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col group">
                  <Link href={`/blog/${post.slug}`} aria-hidden tabIndex={-1} className="relative h-52 block overflow-hidden flex-shrink-0">
                    <Image
                      src={post.coverImage}
                      alt=""
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </Link>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </div>
                    <h3 className="text-lg font-black text-brand-dark mb-3 group-hover:text-brand-accent transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`} className="hover:text-brand-accent transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      aria-label={`Read article: ${post.title}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-accent hover:text-brand-dark transition-colors"
                    >
                      Read Article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* BOTTOM CTA STRIP */}
      <section className="bg-brand-dark py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-brand-accent font-bold tracking-widest text-xs uppercase mb-4">Ready to elevate your lawn?</p>
          <h2 className="text-3xl font-black text-white mb-6 tracking-tight">
            Montgomery County&apos;s Push-Mower Specialists
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent text-white font-black rounded-xl hover:bg-white hover:text-brand-dark transition-all shadow-xl"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
