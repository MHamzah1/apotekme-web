import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, products, brands } from '@/data/dummy';
import ProductCard from '@/components/product/ProductCard';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Newsletter from '@/components/layout/Newsletter';

const subCategories = [
  { name: 'Elderly Care', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop' },
  { name: 'Hair Care', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&h=200&fit=crop' },
  { name: 'Skin Care', image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=200&h=200&fit=crop' },
  { name: 'Women Care', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop' },
  { name: 'Men Care', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop' },
  { name: 'Oral Care', image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=200&h=200&fit=crop' },
];

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) notFound();

  return (
    <>
      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: category.name }]} />
      </div>

      {/* Category Banner */}
      <section className="bg-skyblue py-10">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-3">{category.name}</h1>
          <p className="text-sm text-navy/70 max-w-3xl mx-auto mb-6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
          </p>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
            {subCategories.map((sc, i) => (
              <div key={i} className="flex-shrink-0 text-center cursor-pointer group">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-2 group-hover:ring-2 ring-primary transition-all">
                  <img src={sc.image} alt={sc.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-xs font-medium text-navy">{sc.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Just What You Need */}
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-8">Just What You Need</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="md:row-span-2 rounded-2xl overflow-hidden relative min-h-[300px]">
              <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop" alt="Pamper" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">PAMPER YOURSELF</h3>
                <p className="text-xs mb-3">With Premium Skin & Hair Care Range</p>
                <button className="bg-white text-navy text-xs px-4 py-2 rounded-full w-fit">Shop Now</button>
              </div>
            </div>
            <div className="bg-skyblue rounded-2xl p-6 flex items-center gap-4 min-h-[140px]">
              <img src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=200&h=200&fit=crop" alt="Baby" className="w-24 h-24 object-cover rounded-xl" />
              <div className="flex-1">
                <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded-full mb-2">Upto 50% off</span>
                <h3 className="text-base font-bold text-navy mb-2">Best Care for You and Your Lil One</h3>
                <button className="bg-primary text-white text-xs px-4 py-2 rounded-full">Order Now</button>
              </div>
            </div>
            <div className="bg-primary rounded-2xl p-6 flex items-center gap-4 min-h-[140px] text-white">
              <div className="flex-1">
                <h3 className="text-3xl font-bold">30% SAVINGS</h3>
                <p className="text-sm mb-3">on medicine orders</p>
                <button className="bg-white text-primary text-xs px-4 py-2 rounded-full">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-8">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-8">Trending Health Care Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {products.slice(0, 5).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Black Friday Section */}
      <section className="bg-skyblue py-12 mt-8">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-8">Unmissable Black Friday Savings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Great offers', desc: 'Save up to 1/3 on selected La Roche Posay, CeraVe and Vichy', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop' },
              { title: 'Skincare steals', desc: '$18 worth of points when you buy advanced night repair 50ml or 75ml', img: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=300&h=300&fit=crop' },
              { title: 'Vitamins & Supplements', desc: 'Save upto 1/2 price on selected vitamins & supplements', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop' },
              { title: 'Treat yourself', desc: 'Save upto 1/2 price, plus FREE beauty hero bag, worth $25, when you spend $20+', img: 'https://images.unsplash.com/photo-1522335789203-aaa6f4cd0c08?w=300&h=300&fit=crop' },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden">
                <div className="relative">
                  <img src={card.img} alt={card.title} className="w-full h-40 object-cover" />
                  <span className="absolute top-2 right-2 bg-primary text-white text-[10px] px-2 py-1 rounded">Save up to 1/3 Price</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-navy mb-1">{card.title}</h3>
                  <p className="text-xs text-navy/60 mb-3 line-clamp-2">{card.desc}</p>
                  <button className="bg-primary text-white text-xs px-4 py-1.5 rounded-full w-full">Shop Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Brand */}
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-8">Shop by Brand</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {brands.slice(0, 6).map((brand) => (
              <div key={brand.id} className="bg-white border border-gray-100 rounded-lg p-4 flex items-center justify-center h-20 hover:shadow-card transition-shadow">
                <p className="text-base md:text-lg font-bold text-navy/70">{brand.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selling Out Fast */}
      <section className="pb-12">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-8">Selling out fast</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {products.slice(0, 10).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
