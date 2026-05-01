'use client';

import { useState } from 'react';
import { Plus, Minus, Heart } from 'lucide-react';
import toast from 'react-hot-toast';
import Breadcrumb from '@/components/ui/Breadcrumb';
import AccountSidebar from '@/components/account/AccountSidebar';
import Link from 'next/link';

interface WishlistItem {
  id: number;
  brand: string;
  name: string;
  date: string;
  image: string;
  price: number;
  originalPrice: number;
  inStock: boolean;
  quantity: number;
}

const initialWishlist: WishlistItem[] = [
  { id: 1, brand: 'CERAVE', name: 'CeraVe Acne Resurfacing Retinol Face Serum', date: 'October 16, 2022', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop', price: 21.00, originalPrice: 26.00, inStock: true, quantity: 1 },
  { id: 2, brand: 'CERAVE', name: 'CeraVe Acne Resurfacing Retinol Face Serum', date: 'October 16, 2022', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=200&fit=crop', price: 21.00, originalPrice: 26.00, inStock: true, quantity: 1 },
  { id: 3, brand: 'CERAVE', name: 'Good Skin Club Oil-free Ultrahydrate Serum', date: 'October 16, 2022', image: 'https://images.unsplash.com/photo-1556228852-80b6e5eeff06?w=200&h=200&fit=crop', price: 21.00, originalPrice: 26.00, inStock: true, quantity: 1 },
  { id: 4, brand: 'CERAVE', name: 'CeraVe Acne Resurfacing Retinol Face Serum', date: 'October 16, 2022', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=200&h=200&fit=crop', price: 21.00, originalPrice: 26.00, inStock: false, quantity: 1 },
];

export default function WishlistPage() {
  const [items, setItems] = useState(initialWishlist);

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
    toast.success('Removed from wishlist');
  };

  const updateQty = (id: number, delta: number) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i))
    );
  };

  const addToCart = (id: number) => {
    toast.success('Added to cart!');
  };

  return (
    <div className="container-custom">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'My Account', href: '/account/orders' },
        { label: 'Wishlist' },
      ]} />

      <div className="flex flex-col lg:flex-row gap-6 pb-12">
        <AccountSidebar />

        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-navy mb-6">Wishlist</h1>

          {items.length > 0 ? (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex flex-wrap items-center gap-4 pb-4 border-b border-gray-100">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold text-navy/50 uppercase">{item.brand}</p>
                    <p className="text-sm font-medium text-navy">{item.name}</p>
                    <p className="text-xs text-navy/60">{item.date}</p>
                    <p className={`text-xs mt-1 ${item.inStock ? 'text-success' : 'text-danger'}`}>
                      {item.inStock ? '✓ In stock' : '✕ Out of stock'}
                    </p>
                  </div>
                  <div className="flex items-center border border-gray-200 rounded-full">
                    <button onClick={() => updateQty(item.id, -1)} className="w-7 h-7 flex items-center justify-center">
                      <Minus size={12} />
                    </button>
                    <span className="w-8 text-center text-sm">{item.quantity}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="w-7 h-7 flex items-center justify-center">
                      <Plus size={12} />
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-navy">${item.price.toFixed(2)}</p>
                    <p className="text-xs text-navy/40 line-through">${item.originalPrice.toFixed(2)}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      disabled={!item.inStock}
                      onClick={() => addToCart(item.id)}
                      className={`text-xs px-4 py-1.5 rounded-full transition-colors ${
                        item.inStock
                          ? 'bg-primary text-white hover:bg-primary-600'
                          : 'bg-skyblue text-navy/50 cursor-not-allowed'
                      }`}
                    >
                      {item.inStock ? 'Add to Cart' : 'Sold out'}
                    </button>
                    <button onClick={() => removeItem(item.id)} className="text-primary text-xs hover:underline text-center">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-skyblue/30 rounded-2xl">
              <Heart size={64} className="mx-auto text-primary/40 mb-4" />
              <h2 className="text-xl font-bold text-navy mb-2">Your Wishlist is empty</h2>
              <p className="text-sm text-navy/60 mb-6">Browse products and add them to your wishlist</p>
              <Link href="/" className="btn-primary">Start Shopping</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
