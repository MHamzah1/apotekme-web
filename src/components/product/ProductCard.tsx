import Link from 'next/link';
import { Product } from '@/lib/types';
import RatingStars from '../ui/RatingStars';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="card relative p-3 md:p-4 h-full flex flex-col">
        {product.discount && (
          <span className="badge-discount">-{product.discount}%</span>
        )}
        <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <p className="text-[10px] font-bold text-navy/50 uppercase tracking-wider mb-1">{product.brand}</p>
          <h3 className="text-sm font-medium text-navy line-clamp-2 leading-tight mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <RatingStars rating={product.rating} size={12} showCount count={product.reviewCount} className="mb-2" />
          <div className="flex items-center gap-2 mt-auto">
            <span className="text-base font-bold text-navy">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-xs text-navy/40 line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
