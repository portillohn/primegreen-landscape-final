import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /** Set to true when placed on a dark/image hero background */
  dark?: boolean;
}

export default function Breadcrumbs({ items, dark = true }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.primegreenlandscape.com"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `https://www.primegreenlandscape.com${item.href}`
      }))
    ]
  };

  const homeColor  = dark ? "text-white/50 hover:text-white/80" : "text-gray-400 hover:text-gray-600";
  const sepColor   = dark ? "text-white/25" : "text-gray-300";
  const linkColor  = dark ? "text-white/60 hover:text-white/90" : "text-gray-500 hover:text-gray-700";
  const activeColor = dark ? "text-white font-semibold" : "text-gray-800 font-semibold";

  return (
    <nav className="flex overflow-x-auto whitespace-nowrap" aria-label="Breadcrumb">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex items-center gap-1 text-xs tracking-wide">
        <li>
          <Link href="/" className={`transition-colors flex items-center gap-1 ${homeColor}`} aria-label="Home">
            <Home className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="hidden sm:inline text-xs tracking-wide">Home</span>
            <span className="sr-only sm:hidden">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <ChevronRight className={`w-3 h-3 flex-shrink-0 ${sepColor}`} />
            {index === items.length - 1 ? (
              <span className={activeColor}>{item.label}</span>
            ) : (
              <Link href={item.href} className={`transition-colors ${linkColor}`}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
