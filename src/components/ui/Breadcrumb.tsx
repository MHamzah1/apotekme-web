import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-1.5 text-sm py-3">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-1.5">
          {item.href ? (
            <Link href={item.href} className="text-primary hover:underline">
              {item.label}
            </Link>
          ) : (
            <span className="text-navy font-medium">{item.label}</span>
          )}
          {idx < items.length - 1 && <ChevronRight size={14} className="text-navy/40" />}
        </div>
      ))}
    </nav>
  );
}
