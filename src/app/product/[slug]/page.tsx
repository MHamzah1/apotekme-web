'use client';

import { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import { Heart, Truck, Calendar, Plus, Minus, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { products, reviews } from '@/data/dummy';
import RatingStars from '@/components/ui/RatingStars';
import ProductCard from '@/components/product/ProductCard';
import Breadcrumb from '@/components/ui/Breadcrumb';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Normal');
  const [activeTab, setActiveTab] = useState<'reviews' | 'questions'>('reviews');

  const images = product.images || [product.image, product.image, product.image, product.image];
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 5);

  return (
    <>
      <div className="container-custom">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Personal Care', href: '/category/personal-care' },
          { label: 'Skin Care', href: '/category/skin-care' },
          { label: product.brand },
        ]} />
      </div>

      {/* Product Section */}
      <section className="container-custom pb-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image gallery */}
          <div className="grid grid-cols-[80px_1fr] gap-3">
            <div className="space-y-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-full aspect-square bg-skyblue rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === i ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="bg-skyblue rounded-2xl overflow-hidden">
              <img src={images[activeImage]} alt={product.name} className="w-full h-full object-cover aspect-square" />
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-xs font-bold text-navy/50 uppercase tracking-wider mb-1">{product.brand}</p>
            <h1 className="text-2xl md:text-3xl font-bold text-navy mb-3">{product.name}</h1>
            <RatingStars rating={product.rating} size={16} showCount count={product.reviewCount} className="mb-4" />
            <div className="flex items-baseline gap-3 mb-5">
              <span className="text-3xl font-bold text-navy">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-lg text-navy/40 line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>

            {/* Variant */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-medium text-navy">Variant:</span>
              <select
                value={variant}
                onChange={(e) => setVariant(e.target.value)}
                className="px-3 py-1.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-primary"
              >
                <option>Normal, Combination, Sensitive skin</option>
                <option>Dry skin</option>
                <option>Oily skin</option>
              </select>
            </div>

            {/* Quantity & Buttons */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-sm font-medium text-navy">Quantity:</span>
              <div className="flex items-center border border-gray-200 rounded-full">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="w-9 h-9 flex items-center justify-center text-navy"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 flex items-center justify-center text-navy"
                >
                  <Plus size={14} />
                </button>
              </div>
              <button className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-full text-navy hover:text-red-500 hover:border-red-500 transition-colors">
                <Heart size={18} />
              </button>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <button onClick={() => toast.success('Added to cart!')} className="btn-outline flex-1">
                Add to Cart
              </button>
              <button onClick={() => toast.success('Proceeding to checkout!')} className="btn-primary flex-1">
                Buy Now
              </button>
            </div>

            <p className="text-xs text-navy/60 mb-3">
              <span className="font-medium text-navy">Product Code:</span> #30344690
            </p>

            <div className="space-y-2 mb-5 text-sm">
              <div className="flex items-center gap-2 text-navy/70">
                <Truck size={16} className="text-primary" />
                <span><span className="font-medium text-navy">FREE delivery</span> Friday, 14 October on first order. <Link href="#" className="text-primary">Details</Link></span>
              </div>
              <div className="flex items-center gap-2 text-navy/70">
                <Calendar size={16} className="text-primary" />
                <span>Delivers in 3-7 Working Days. <Link href="#" className="text-primary">Learn More</Link></span>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-navy mb-2">Product Highlights:</p>
              <ul className="text-sm text-navy/70 space-y-1">
                <li>→ Moisturizes without leaving residue that can clog pores</li>
                <li>→ Suitable for all skin types</li>
                <li>→ Mild, non-irritating formulation that soothes skin</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="container-custom pb-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-navy mb-4">Description</h2>

            <div className="text-sm text-navy/70 space-y-4 mb-6 leading-relaxed">
              <p className="font-medium text-navy">Oil-free moisturizer with hyaluronic acid</p>
              <p>{product.description || 'Finding the right products for your skincare routine should come down to a few easy steps. Beauty cleansing and sun protection, a daily moisturizer is essential. We recommend looking for ingredients like hyaluronic acid and ceramides to help restore and maintain the skin\'s protective barrier.'}</p>
              <p>CeraVe Daily Moisturizing Lotion is a lightweight, oil-free moisturizer that helps hydrate the skin and restore its natural barrier. Formulated with 3 essential ceramides that work together to lock in moisture and help restore your skin\'s protective barrier. MVE technology encapsulates ceramides to ensure efficient delivery within the skin\'s barrier and slow release over time.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-base font-bold text-navy mb-2">Ingredients</h3>
              <p className="text-sm text-navy/70 leading-relaxed">{product.ingredients || 'Aqua / Water / Eau, Glycerin, Cetearyl Alcohol, Capric/Caprylic Triglyceride, Cetyl Alcohol, Ceramide NP, Petrolatum'}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-base font-bold text-navy mb-3">Key Benefits</h3>
              <ul className="text-sm text-navy/70 space-y-2">
                {(product.benefits || ['Moisturizes', 'Lightweight', 'Restores barrier']).map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-base font-bold text-navy mb-3">Specifications</h3>
              <table className="text-sm w-full">
                <tbody>
                  <tr><td className="py-1.5 text-navy/60 w-1/3">Skin Type</td><td className="py-1.5 text-navy">Dry</td></tr>
                  <tr><td className="py-1.5 text-navy/60">Features</td><td className="py-1.5 text-navy">Removable Cover</td></tr>
                  <tr><td className="py-1.5 text-navy/60">Brand</td><td className="py-1.5 text-navy">{product.brand}</td></tr>
                  <tr><td className="py-1.5 text-navy/60">Assembled Product Weight</td><td className="py-1.5 text-navy">16 oz</td></tr>
                  <tr><td className="py-1.5 text-navy/60">Manufacturer</td><td className="py-1.5 text-navy">Loreal</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-skyblue rounded-2xl p-4 grid grid-cols-3 gap-2 text-center">
              {[
                { icon: '🛡️', label: 'Authentic Products' },
                { icon: '💰', label: 'Great Savings' },
                { icon: '🏠', label: 'Home Delivery' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-3">
                  <p className="text-2xl mb-1">{item.icon}</p>
                  <p className="text-[10px] text-navy/70">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="border border-gray-100 rounded-2xl p-4">
              <h3 className="text-sm font-bold text-navy mb-3">Frequently Bought Together</h3>
              <div className="space-y-2">
                {products.slice(1, 3).map((p) => (
                  <div key={p.id} className="flex items-center gap-2">
                    <img src={p.image} alt={p.name} className="w-12 h-12 object-cover rounded-md" />
                    <div className="flex-1">
                      <p className="text-xs font-medium text-navy line-clamp-2">{p.name}</p>
                      <p className="text-xs font-bold text-navy">${p.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-navy/60 mt-3">Total for 2 items: <span className="font-bold text-navy">$45.99</span></p>
              <button className="btn-primary w-full mt-2 text-xs py-2">Add Both to Cart</button>
            </div>

            <div className="bg-primary rounded-2xl p-4 text-white">
              <p className="text-xs mb-1">Need Medical Advice?</p>
              <p className="font-bold mb-2 text-sm">Get consultation from our Doctors online</p>
              <button className="bg-white text-primary text-xs px-4 py-1.5 rounded-full">Ask Now</button>
            </div>

            <div className="border border-gray-100 rounded-2xl p-4">
              <p className="text-xs font-bold text-navy mb-2">Offers Just For You</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-skyblue rounded-md"></div>
                  <p className="text-xs text-navy/70 flex-1">Flat 15% Off on Skincare products + upto $10 cashback</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-skyblue rounded-md"></div>
                  <p className="text-xs text-navy/70 flex-1">Save up to 70% on Beauty products</p>
                </div>
              </div>
              <button className="btn-outline w-full mt-3 text-xs py-2">View All</button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="container-custom py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-8">Products You May Also like</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* More Items to Explore */}
      <section className="container-custom py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-8">More Items to Explore</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {products.slice(0, 5).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Reviews & Questions Tabs */}
      <section className="container-custom py-12">
        <div className="border-b border-gray-200 mb-6">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'reviews' ? 'border-navy text-navy' : 'border-transparent text-navy/50'
              }`}
            >
              Customer Reviews & Ratings
            </button>
            <button
              onClick={() => setActiveTab('questions')}
              className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'questions' ? 'border-navy text-navy' : 'border-transparent text-navy/50'
              }`}
            >
              Questions
            </button>
          </div>
        </div>

        {activeTab === 'reviews' ? (
          <>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-4xl font-bold text-navy mb-2">{product.rating} <span className="inline-flex"><RatingStars rating={product.rating} size={20} /></span></p>
                <p className="text-sm text-navy/60 mb-4">({product.reviewCount} reviews)</p>
                <button className="btn-outline text-sm">Write a Review</button>
              </div>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((star) => {
                  const count = star === 5 ? 12 : star === 4 ? 8 : star === 3 ? 10 : star === 2 ? 4 : 2;
                  const pct = (count / 36) * 100;
                  return (
                    <div key={star} className="flex items-center gap-3">
                      <span className="text-xs text-navy/60 w-3">{star}</span>
                      <RatingStars rating={1} size={10} className="!gap-0" />
                      <div className="flex-1 h-2 bg-gray-100 rounded overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${pct}%` }}></div>
                      </div>
                      <span className="text-xs text-navy/60 w-6 text-right">{count}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {reviews.map((r) => (
                <div key={r.id} className="border-b border-gray-100 pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-navy text-sm">{r.user}</p>
                    <span className="text-xs text-navy/50">{r.date}</span>
                  </div>
                  <RatingStars rating={r.rating} size={12} className="mb-2" />
                  <p className="font-bold text-navy mb-2 text-sm">{r.title}</p>
                  <p className="text-xs text-navy/70 leading-relaxed mb-2">{r.comment}</p>
                  {r.isVerified && (
                    <p className="text-xs text-primary flex items-center gap-1">
                      <span className="inline-block w-3 h-3 bg-primary text-white rounded-full text-[8px] flex items-center justify-center">✓</span>
                      Verified Buyer
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <button className="btn-primary">Load More</button>
            </div>
          </>
        ) : (
          <div className="text-center py-16 text-navy/60">
            <p>No questions yet. Be the first to ask!</p>
            <button className="btn-primary mt-4">Ask a Question</button>
          </div>
        )}
      </section>
    </>
  );
}
