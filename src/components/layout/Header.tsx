'use client';

import Link from 'next/link';
import { Search, User, ShoppingCart, Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

const navLinks = [
  { label: 'Pharmacy & Health', href: '/category/health-care' },
  { label: 'Beauty & Skincare', href: '/category/skin-care' },
  { label: 'Family Care', href: '/category/personal-care' },
  { label: 'Personal Care', href: '/category/personal-care' },
  { label: 'Health & Wellness', href: '/category/health-care' },
  { label: 'Offers', href: '/offers' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
      {/* Main bar */}
      <div className="container-custom">
        <div className="flex items-center justify-between py-4 gap-4">
          <Logo />

          {/* Search bar (desktop) */}
          <div className="hidden md:flex flex-1 max-w-2xl">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2.5 pr-12 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-primary text-sm"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-navy/60 hover:text-primary">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Action icons */}
          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden sm:flex w-10 h-10 bg-primary text-white rounded-full items-center justify-center hover:bg-primary-600 transition-colors">
              <User size={20} />
            </Link>
            <Link href="/cart" className="relative flex w-10 h-10 bg-primary text-white rounded-full items-center justify-center hover:bg-primary-600 transition-colors">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                3
              </span>
            </Link>
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search mobile */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 pr-10 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-primary text-sm"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-navy/60" size={18} />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-gray-100">
        <div className="container-custom">
          <ul className="hidden lg:flex items-center gap-8 py-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-navy hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile nav */}
          {mobileOpen && (
            <ul className="lg:hidden py-3 space-y-2 animate-fade-in">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm font-medium text-navy hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-gray-100">
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm font-medium text-primary"
                >
                  Login / Register
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
