import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://primegreenlandscape.com"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `https://primegreenlandscape.com${item.href}`
      }))
    ]
  };

  return (
    <nav className="flex mb-8 overflow-x-auto whitespace-nowrap pb-2" aria-label="Breadcrumb">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex items-center space-x-2 text-sm font-medium">
        <li>
          <Link href="/" className="text-gray-400 hover:text-brand-accent transition-colors flex items-center">
            <Home className="w-4 h-4 mr-1" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-300 mx-2 shrink-0" />
            {index === items.length - 1 ? (
              <span className="text-brand-dark font-bold italic underline decoration-brand-accent underline-offset-4 decoration-2">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="text-gray-400 hover:text-brand-accent transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
