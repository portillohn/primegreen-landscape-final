import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blogData';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, Leaf } from 'lucide-react';

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
    title: `${post.title} | Prime Green Landscape LLC`,
    description: post.excerpt,
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

  return (
    <>
      <article className="bg-white">
        {/* Post Cover Header */}
        <div className="relative h-[40vh] min-h-[400px] w-full pt-[64px] md:pt-[72px]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/60" />
          <div className="absolute inset-0 flex flex-col justify-end pb-16">
            <div className="max-w-4xl mx-auto px-4 w-full">
              <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight max-w-3xl">
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
        <div className="max-w-3xl mx-auto px-4 py-16">
          <div className="prose prose-lg prose-gray text-gray-700 font-normal">
            {parseContent(post.content)}
          </div>
        </div>
      </article>

      {/* End CTA */}
      <section className="bg-brand-bg py-16 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Need Professional Lawn Care in Montgomery County?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Let our experienced push mower team give your lawn the precision and care it needs to thrive this season.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-brand-accent text-white font-bold rounded-md hover:bg-brand-dark transition-colors shadow-sm text-lg">
            Request Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
