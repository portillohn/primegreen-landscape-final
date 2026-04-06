import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blogData';
import { siteConfig } from '@/lib/siteConfig';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, Leaf } from 'lucide-react';
import Breadcrumbs from "@/components/Breadcrumbs";

export const revalidate = 86400; // 24 hours ISR

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  if (!post) return {};
  
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${siteConfig.url}/blog/${params.slug}`,
    },
    openGraph: {
      title: `${post.title} | Prime Green Landscape LLC`,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${params.slug}`,
      images: [{
        url: `${siteConfig.url}${post.coverImage}`,
        width: 1200,
        height: 800,
        alt: post.title,
      }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Prime Green Landscape LLC`,
      description: post.excerpt,
      images: [`${siteConfig.url}${post.coverImage}`],
    },
  };
}

// Simple markdown parser to avoid adding heavy dependencies just for this specific text format
function parseContent(text: string) {
  // Split into paragraphs/sections
  const blocks = text.split('\n\n').filter(Boolean);
  
  return blocks.map((block, i) => {
    // Headers
    if (block.startsWith('## ')) {
      return <h2 key={i} className="text-3xl font-bold text-brand-dark mt-10 mb-6">{block.replace('## ', '')}</h2>;
    }
    // Lists
    if (block.startsWith('- ')) {
      const items = block.split('\n').filter(Boolean).map(item => item.replace('- ', ''));
      return (
        <ul key={i} className="list-disc pl-6 space-y-3 mb-6">
          {items.map((item, j) => {
            // Very simple bold parsing for `**text**`
            const boldParsed = item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            return <li key={j} dangerouslySetInnerHTML={{ __html: boldParsed }} />;
          })}
        </ul>
      );
    }
    
    // Links and Bold in normal paragraphs
    let htmlContent = block
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-brand-accent underline font-semibold hover:text-brand-dark">$1</a>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>');

    return <p key={i} className="mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  
  if (!post) {
    notFound();
  }

  // Auto-calculate read time (roughly 200 words per minute)
  const wordCount = post.content.split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": `${siteConfig.url}${post.coverImage}`,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "Prime Green Landscape LLC"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Prime Green Landscape LLC",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}/images/logo.png`
      }
    },
    "description": post.excerpt
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <article className="bg-white">
        {/* Post Cover Header */}
        <div className="relative h-[50vh] min-h-[500px] w-full pt-32">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/60" />
          
          <div className="absolute inset-0 flex flex-col justify-between pt-32 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <Breadcrumbs items={[
                { label: "Blog", href: "/blog" },
                { label: post.title, href: `/blog/${params.slug}` }
              ]} />
            </div>
            
            <div className="max-w-4xl mx-auto px-4 w-full">
              <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight max-w-3xl">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-gray-200 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <div className="bg-brand-accent p-1 rounded-full">
                    <Leaf className="w-4 h-4 text-white" />
                  </div>
                  <span>Prime Green Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 opacity-80" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 opacity-80" />
                  <span>{readTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
          <div className="prose prose-lg prose-gray text-gray-700 font-normal">
            {parseContent(post.content)}
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-100">
            <h3 className="text-xl font-bold text-brand-dark mb-6">Expert Services Mentioned:</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Precision Mowing", href: "/lawn-mowing" },
                { label: "Seasonal Cleanup", href: "/seasonal-cleanup" },
                { label: "Yard Restoration", href: "/yard-cleanup" },
                { label: "Weed Control", href: "/weed-removal" }
              ].map(s => (
                <Link key={s.href} href={s.href} className="px-5 py-2.5 bg-brand-bg text-brand-dark rounded-full text-sm font-bold border border-brand-accent/20 hover:border-brand-accent transition-colors">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Service Areas */}
      <section className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-sm font-black text-brand-accent uppercase tracking-widest mb-6">Serving Montgomery County Homeowners</h3>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {['Gaithersburg', 'Rockville', 'Montgomery Village', 'Germantown', 'Bethesda', 'Silver Spring'].map(city => (
              <Link key={city} href={`/areas/${city.toLowerCase().replace(' ', '-')}`} className="text-gray-500 hover:text-brand-dark font-medium transition-colors">
                Lawn Care in {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* End CTA */}
      <section className="bg-brand-dark py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
            Ready for a professional-grade lawn?
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light">
            Experience the push mower difference. Join hundreds of Montgomery County homeowners who trust Prime Green with their curb appeal.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-block px-10 py-5 bg-brand-accent text-white font-extrabold rounded-xl hover:bg-white hover:text-brand-dark transition-all shadow-xl text-lg uppercase tracking-tighter">
              Get Your Free Quote →
            </Link>
            <Link href="/services" className="inline-block px-10 py-5 bg-transparent border-2 border-white/20 text-white font-extrabold rounded-xl hover:bg-white/10 transition-all text-lg uppercase tracking-tighter">
              View Service Tiers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
