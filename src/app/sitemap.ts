import { MetadataRoute } from 'next';
import { serviceAreasData } from '@/lib/data';
import { blogPosts } from '@/lib/blogData';
import { siteConfig } from '@/lib/siteConfig';

const BASE_URL = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  const servicePages = [
    'lawn-mowing',
    'mulching',
    'yard-cleanup',
    'weed-removal',
    'edging-trimming',
    'seasonal-cleanup',
    'services/lawn-mowing-service-near-me',
  ].map((service) => ({
    url: `${BASE_URL}/${service}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const areaPages = Object.keys(serviceAreasData).map((city) => ({
    url: `${BASE_URL}/areas/${city}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const blogPages = Object.keys(blogPosts).map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...areaPages,
    ...blogPages,
  ];
}