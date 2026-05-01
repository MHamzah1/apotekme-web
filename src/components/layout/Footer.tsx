import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-skyblue mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Address */}
          <div>
            <Logo size="sm" />
            <div className="mt-4 text-sm text-navy/80 space-y-1">
              <p>685 Market Street</p>
              <p>San Francisco, CA 94105,</p>
              <p>United States</p>
            </div>
            <div className="flex items-center gap-3 mt-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-navy mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-navy/80">
              <li><Link href="#" className="hover:text-primary">About</Link></li>
              <li><Link href="#" className="hover:text-primary">All Products</Link></li>
              <li><Link href="#" className="hover:text-primary">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-primary">FAQs</Link></li>
              <li><Link href="#" className="hover:text-primary">Site Map</Link></li>
              <li><Link href="#" className="hover:text-primary">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-navy mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm text-navy/80">
              <li><Link href="#" className="hover:text-primary">Delivery Information</Link></li>
              <li><Link href="#" className="hover:text-primary">Returns Policy</Link></li>
              <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary">Cookie Policy</Link></li>
              <li><Link href="#" className="hover:text-primary">Secure Shopping</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-navy mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-navy/80">
              <li><Link href="/category/health-care" className="hover:text-primary">Pharmacy &amp; Health</Link></li>
              <li><Link href="/upload-prescription" className="hover:text-primary">Prescriptions</Link></li>
              <li><Link href="/category/beauty" className="hover:text-primary">Beauty</Link></li>
              <li><Link href="/category/mom-baby-care" className="hover:text-primary">Mother &amp; Baby</Link></li>
              <li><Link href="#" className="hover:text-primary">Fragrance</Link></li>
              <li><Link href="#" className="hover:text-primary">Toiletries</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-navy/60 flex items-center gap-2">
            <span className="inline-block w-1 h-3 bg-primary"></span>
            © 2022 - E-commerce by Kryptonyte
          </p>
          <div className="flex items-center gap-2">
            {['VISA', 'AMEX', 'DISCOVER', 'MASTERCARD'].map((card) => (
              <div key={card} className="px-2 py-1 bg-white rounded text-[10px] font-bold text-navy/70 border border-gray-200">
                {card}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
