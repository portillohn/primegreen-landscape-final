import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blogData";
import { Calendar, ChevronRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Lawn Care Blog | Prime Green Landscape LLC",
  description: "Expert lawn care tips, mowing advice, and landscaping guides for homeowners in Montgomery County, Maryland.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Prime Green Landscape Lawn Care Blog",
  "description": "Expert lawn care tips and landscaping guides for Montgomery County, MD.",
  "publisher": {
    "@type": "Organization",
    "name": "Prime Green Landscape LLC"
  }
};

export default function BlogIndex() {
  const posts = Object.values(blogPosts);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="bg-brand-dark pt-32 pb-16 border-b border-brand-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
          
          <div className="max-w-4xl mx-auto text-center text-white mt-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Lawn Care Tips for Montgomery County Homeowners
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
              Professional advice to keep your Maryland lawn healthy, thick, and beautifully green all season long.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <div key={post.slug} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
                <Link href={`/blog/${post.slug}`} className="relative h-56 block overflow-hidden group">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center text-sm text-gray-500 mb-4 font-medium">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-bold text-brand-dark mb-3 hover:text-brand-accent transition-colors leading-snug">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 mb-6 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center font-bold text-brand-accent hover:text-brand-dark transition-colors"
                  >
                    Read More <ChevronRight className="w-5 h-5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
