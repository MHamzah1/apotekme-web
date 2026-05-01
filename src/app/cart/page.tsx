'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus, Check } from 'lucide-react';
import { products } from '@/data/dummy';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ProductCard from '@/components/product/ProductCard';

interface CartItem {
  id: number;
  productId: number;
  brand: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  inStock: boolean;
  selected: boolean;
  savedForLater: boolean;
}

const initialCart: CartItem[] = [
  { id: 1, productId: 12, brand: 'OLAY', name: 'Olay retinol24 night serum with retinol & vitamin B3 (40ml)', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=200&h=200&fit=crop', price: 21.00, originalPrice: 26.00, quantity: 1, inStock: true, selected: true, savedForLater: false },
  { id: 2, productId: 1, brand: 'OLAY', name: 'Olay retinol24 night serum with retinol & vitamin B3 (40ml)', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=200&fit=crop', price: 21.00, quantity: 1, inStock: true, selected: true, savedForLater: false },
  { id: 3, productId: 6, brand: 'OLAY', name: 'Olay retinol24 night serum with retinol & vitamin B3 (40ml)', image: 'https://images.unsplash.com/photo-1556228852-80b6e5eeff06?w=200&h=200&fit=crop', price: 21.00, quantity: 1, inStock: true, selected: true, savedForLater: false },
  { id: 4, productId: 3, brand: 'OLAY', name: 'Olay retinol24 night serum with retinol & vitamin B3 (40ml)', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop', price: 21.00, originalPrice: 26.00, quantity: 1, inStock: true, selected: false, savedForLater: true },
  { id: 5, productId: 8, brand: 'OLAY', name: 'Olay retinol24 night serum with retinol & vitamin B3 (40ml)', image: 'https://images.unsplash.com/photo-1631214540242-5fff7088dd5e?w=200&h=200&fit=crop', price: 21.00, quantity: 2, inStock: true, selected: false, savedForLater: true },
  { id: 6, productId: 10, brand: 'OLAY', name: 'Olay retinol24 night serum with retinol & vitamin B3 (40ml)', image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=200&h=200&fit=crop', price: 21.00, quantity: 1, inStock: false, selected: false, savedForLater: true },
];

export default function CartPage() {
  const [items, setItems] = useState(initialCart);

  const cartItems = items.filter((i) => !i.savedForLater);
  const savedItems = items.filter((i) => i.savedForLater);

  const updateQty = (id: number, delta: number) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i))
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const toggleSelect = (id: number) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, selected: !i.selected } : i)));
  };

  const saveForLater = (id: number) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, savedForLater: true, selected: false } : i))
    );
  };

  const moveToCart = (id: number) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, savedForLater: false, selected: true } : i))
    );
  };

  const selectAll = () => {
    const allSelected = cartItems.every((i) => i.selected);
    setItems((prev) =>
      prev.map((i) => (!i.savedForLater ? { ...i, selected: !allSelected } : i))
    );
  };

  const clearCart = () => {
    setItems((prev) => prev.filter((i) => i.savedForLater));
  };

  const subtotal = cartItems.filter((i) => i.selected).reduce((sum, i) => sum + i.price * i.quantity, 0);
  const savings = 5;
  const total = subtotal - savings;

  return (
    <>
      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Cart' }]} />
        <h1 className="text-2xl md:text-3xl font-bold text-navy mb-6">
          Cart <span className="font-normal text-navy/60">({cartItems.length} items)</span>
        </h1>

        <div className="grid lg:grid-cols-[1fr_360px] gap-6">
          {/* Items List */}
          <div>
            <div className="mb-3">
              <p className="text-sm font-medium text-navy mb-1">{cartItems.length} Items in your cart</p>
              <button onClick={selectAll} className="text-xs text-primary hover:underline">
                Select All Items
              </button>
            </div>

            {cartItems.map((item) => (
              <div key={item.id} className="flex items-start gap-3 py-4 border-b border-gray-100">
                <button
                  onClick={() => toggleSelect(item.id)}
                  className={`w-5 h-5 mt-2 rounded border-2 flex items-center justify-center transition-colors ${
                    item.selected ? 'bg-navy border-navy' : 'bg-white border-gray-300'
                  }`}
                >
                  {item.selected && <Check size={12} className="text-white" />}
                </button>
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-navy/50 uppercase tracking-wider">{item.brand}</p>
                  <h3 className="text-sm font-medium text-navy">{item.name}</h3>
                  <p className="text-xs text-success mt-1">✓ In stock</p>
                  <div className="flex items-center gap-3 mt-2 text-xs">
                    <button onClick={() => removeItem(item.id)} className="text-primary hover:underline">Remove</button>
                    <button onClick={() => saveForLater(item.id)} className="text-primary hover:underline">Save for later</button>
                  </div>
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
                <div className="text-right ml-2">
                  <p className="text-sm font-bold text-navy">${(item.price * item.quantity).toFixed(2)}</p>
                  {item.originalPrice && (
                    <p className="text-xs text-navy/40 line-through">${(item.originalPrice * item.quantity).toFixed(2)}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex justify-center gap-3 mt-6">
              <button onClick={clearCart} className="btn-outline text-sm">Clear Cart</button>
              <Link href="/" className="btn-primary text-sm">Continue Shopping</Link>
            </div>

            {savedItems.length > 0 && (
              <div className="mt-10">
                <p className="text-sm font-medium text-navy mb-3">{savedItems.length} Items save for later</p>
                {savedItems.map((item) => (
                  <div key={item.id} className="flex items-start gap-3 py-4 border-b border-gray-100">
                    <button className="w-5 h-5 mt-2 rounded border-2 bg-white border-gray-300"></button>
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-[10px] font-bold text-navy/50 uppercase tracking-wider">{item.brand}</p>
                      <h3 className="text-sm font-medium text-navy">{item.name}</h3>
                      <p className={`text-xs mt-1 ${item.inStock ? 'text-success' : 'text-danger'}`}>
                        {item.inStock ? '✓ In stock' : '✕ Out of stock'}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        {item.inStock && (
                          <button onClick={() => moveToCart(item.id)} className="bg-primary text-white text-xs px-4 py-1.5 rounded-full hover:bg-primary-600">
                            Move to Cart
                          </button>
                        )}
                        <button onClick={() => removeItem(item.id)} className="text-primary text-xs hover:underline">Remove</button>
                      </div>
                    </div>
                    <div className="text-sm text-navy/60">Qty {item.quantity}</div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-navy">${item.price.toFixed(2)}</p>
                      {item.originalPrice && (
                        <p className="text-xs text-navy/40 line-through">${item.originalPrice.toFixed(2)}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Summary */}
          <div>
            <div className="bg-skyblue rounded-2xl p-5 sticky top-24">
              <div className="space-y-2 text-sm mb-3">
                <div className="flex justify-between text-navy">
                  <span>Subtotal <span className="text-navy/60">({cartItems.length} items)</span></span>
                  <span>${(subtotal + savings).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-navy">
                  <span>Savings</span>
                  <span className="text-danger">-${savings.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-navy">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
              </div>
              <div className="flex justify-between text-base font-bold text-navy pt-3 border-t border-primary/20">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Link href="/checkout" className="btn-primary w-full mt-4">Proceed to Checkout</Link>
              <div className="mt-4">
                <p className="text-sm text-navy mb-2">Have a promo code?</p>
                <div className="flex gap-2">
                  <input type="text" placeholder="Enter promo code" className="flex-1 px-3 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:border-primary" />
                  <button className="bg-navy text-white text-xs px-4 rounded-md hover:bg-navy-900">CTA Button</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended */}
        <section className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-navy text-center mb-6">Recommended with Your Order</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {products.slice(0, 5).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
