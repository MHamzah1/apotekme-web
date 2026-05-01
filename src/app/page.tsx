import Link from 'next/link';
import { ShieldCheck, Lock, BadgeDollarSign, Star, FileText, Stethoscope } from 'lucide-react';
import ProductCarousel from '@/components/product/ProductCarousel';
import Newsletter from '@/components/layout/Newsletter';
import { categories, featuredProducts, specialOffers, brands, testimonials } from '@/data/dummy';
import RatingStars from '@/components/ui/RatingStars';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-skyblue py-12 md:py-20">
        <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-navy/70 mb-2">Wellness Products for</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4 leading-tight">
              You + Your Family
            </h1>
            <p className="text-navy/70 mb-6 max-w-md">
              Lorem ipsum dolor sit amet consectetur. Tincidunt imperdiet metus pellentesque cras fermentum nibh.
            </p>
            <Link href="/category/health-care" className="btn-primary">
              Shop Now
            </Link>
          </div>
          <div className="relative grid grid-cols-3 gap-3 h-[380px]">
            <div className="rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=300&h=400&fit=crop" alt="Hero 1" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=400&fit=crop" alt="Hero 2" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-3">
              <div className="rounded-2xl overflow-hidden h-1/2">
                <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop" alt="Hero 3" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-1/2 bg-warning">
                <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=200&fit=crop" alt="Hero 4" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* USP Cards */}
        <div className="container-custom mt-10">
          <div className="bg-white rounded-2xl p-6 grid md:grid-cols-3 gap-6 shadow-card">
            {[
              { icon: ShieldCheck, title: 'Reliable', desc: 'All Products are 100% genuine and reliable' },
              { icon: Lock, title: 'Secure', desc: '128-bit SSL encryption to provide you a safe shopping experience' },
              { icon: BadgeDollarSign, title: 'Affordable', desc: 'Maximum discount and offers on products and services' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">{item.title}</h3>
                  <p className="text-xs text-navy/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <ProductCarousel title="Featured Products" products={featuredProducts} />

      {/* CTA Banners */}
      <section className="container-custom mb-12">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-skyblue rounded-2xl p-6 flex items-center gap-4 relative overflow-hidden">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center flex-shrink-0">
              <FileText className="text-primary" size={32} />
            </div>
            <div>
              <p className="text-xs text-navy/60 mb-1">Need Medicine?</p>
              <h3 className="font-bold text-navy text-lg mb-2">Upload prescription</h3>
              <p className="text-xs text-navy/60 mb-3">Upload prescription and we will deliver your medicines</p>
              <Link href="/upload-prescription" className="inline-block bg-primary text-white text-xs px-4 py-2 rounded-full hover:bg-primary-600 transition-colors">
                Upload Now
              </Link>
            </div>
          </div>
          <div className="bg-primary rounded-2xl p-6 flex items-center gap-4 relative overflow-hidden text-white">
            <div className="flex-1">
              <p className="text-xs text-white/80 mb-1">Need Medical Advice?</p>
              <h3 className="font-bold text-lg mb-2">Get consultation from our Doctors online</h3>
              <Link href="/doctors" className="inline-block bg-white text-primary text-xs px-4 py-2 rounded-full hover:bg-skyblue transition-colors">
                Join Now
              </Link>
            </div>
            <div className="w-24 h-24 flex-shrink-0">
              <Stethoscope className="text-white/80 w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Browse Top Categories */}
      <section className="bg-skyblue py-12">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-8">Browse Top Categories</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link key={cat.id} href={`/category/${cat.slug}`} className="group bg-white rounded-xl p-3 text-center hover:shadow-card-hover transition-shadow">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-50 mb-2">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <p className="text-xs font-semibold text-navy">{cat.name}</p>
                <p className="text-[10px] text-navy/50">{cat.productCount} Products</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <ProductCarousel title="Special Offers" products={specialOffers} />

      {/* Promo Banner Grid */}
      <section className="container-custom mb-12">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:row-span-2 rounded-2xl overflow-hidden relative h-full min-h-[300px] bg-gray-100">
            <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=600&fit=crop" alt="Pamper" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">PAMPER YOURSELF</h3>
              <p className="text-xs mb-3">With Premium Skin & Hair Care Range</p>
              <Link href="/category/skin-care" className="inline-block bg-white text-navy text-xs px-4 py-2 rounded-full w-fit hover:bg-skyblue transition-colors">Shop Now</Link>
            </div>
          </div>
          <div className="bg-skyblue rounded-2xl p-6 flex flex-col justify-between min-h-[140px]">
            <div>
              <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded-full mb-2">Upto 50% off</span>
              <h3 className="text-lg font-bold text-navy">Best Care for You and Your Lil One</h3>
            </div>
            <Link href="/category/mom-baby-care" className="inline-block bg-primary text-white text-xs px-4 py-2 rounded-full w-fit mt-3 hover:bg-primary-600 transition-colors">Order Now</Link>
          </div>
          <div className="bg-skyblue rounded-2xl p-6 flex flex-col justify-between min-h-[140px]">
            <div>
              <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded-full mb-2">Upto 40% Off</span>
              <h3 className="text-lg font-bold text-navy">It's Black Friday, only bigger.</h3>
            </div>
            <Link href="/offers" className="inline-block bg-primary text-white text-xs px-4 py-2 rounded-full w-fit mt-3 hover:bg-primary-600 transition-colors">Shop Now</Link>
          </div>
          <div className="bg-primary rounded-2xl p-6 flex flex-col justify-center text-white">
            <h3 className="text-3xl font-bold mb-1">30% SAVINGS</h3>
            <p className="text-sm mb-3">on medicine orders</p>
            <Link href="/offers" className="inline-block bg-white text-primary text-xs px-4 py-2 rounded-full w-fit hover:bg-skyblue transition-colors">Order Now</Link>
          </div>
          <div className="bg-skyblue rounded-2xl p-6">
            <p className="text-xs text-navy/60">Premium care</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-skyblue py-12">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-8">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-sm text-navy">{t.name}</p>
                  </div>
                </div>
                <p className="text-xs text-navy/70 leading-relaxed mb-3">{t.comment}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-navy/50">{t.date}</span>
                  <RatingStars rating={t.rating} size={12} />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-1.5 mt-6">
            <span className="w-8 h-1.5 bg-primary rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-primary/30 rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-primary/30 rounded-full"></span>
          </div>
          <div className="text-center mt-3 text-xs text-navy/60">
            Google rating score: <span className="font-bold text-navy">4.5</span> of 5, based on <span className="font-bold text-navy">26 reviews</span>
          </div>
        </div>
      </section>

      {/* Popular Brand */}
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-8">Popular Brand</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {brands.map((brand) => (
              <div key={brand.id} className="bg-white border border-gray-100 rounded-lg p-4 flex items-center justify-center h-20 hover:shadow-card transition-shadow">
                <p className="text-base md:text-lg font-bold text-navy/70">{brand.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </>
  );
}
