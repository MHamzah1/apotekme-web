'use client';

import { useState } from 'react';
import { Product } from '@/lib/types';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductCarouselProps {
  title: string;
  products: Product[];
  bgColor?: string;
}

export default function ProductCarousel({ title, products, bgColor }: ProductCarouselProps) {
  const [scrollIdx, setScrollIdx] = useState(0);
  const visibleCount = 5;
  const maxIdx = Math.max(0, products.length - visibleCount);

  return (
    <section className={`py-10 ${bgColor || ''}`}>
      <div className="container-custom">
        <div className="flex items-center justify-center relative mb-8">
          <button
            onClick={() => setScrollIdx(Math.max(0, scrollIdx - 1))}
            className="absolute left-0 w-9 h-9 border border-gray-200 rounded flex items-center justify-center hover:border-primary hover:text-primary transition-colors disabled:opacity-30"
            disabled={scrollIdx === 0}
          >
            <ChevronLeft size={18} />
          </button>
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center">{title}</h2>
          <button
            onClick={() => setScrollIdx(Math.min(maxIdx, scrollIdx + 1))}
            className="absolute right-0 w-9 h-9 border border-gray-200 rounded flex items-center justify-center hover:border-primary hover:text-primary transition-colors disabled:opacity-30"
            disabled={scrollIdx >= maxIdx}
          >
            <ChevronRight size={18} />
          </button>
        </div>
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${scrollIdx * (100 / visibleCount)}%)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
