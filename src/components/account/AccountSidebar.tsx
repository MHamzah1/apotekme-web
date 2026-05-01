'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Heart, User, CreditCard, Activity, LogOut, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function AccountSidebar() {
  const pathname = usePathname();
  const [accountOpen, setAccountOpen] = useState(true);
  const [paymentsOpen, setPaymentsOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      {/* User card */}
      <div className="bg-skyblue/50 rounded-2xl p-4 mb-3 flex items-center gap-3">
        <img src="https://i.pravatar.cc/100?img=5" alt="Christine" className="w-12 h-12 rounded-full object-cover" />
        <div>
          <p className="text-xs text-navy/60">Hello,</p>
          <p className="font-bold text-navy text-sm">Christine A. Watkins</p>
        </div>
      </div>

      <nav className="bg-white border border-gray-100 rounded-2xl p-3 space-y-1">
        <Link
          href="/account/orders"
          className={cn(
            'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors',
            isActive('/account/orders')
              ? 'bg-skyblue text-primary border-l-4 border-primary -ml-3 pl-2'
              : 'text-navy hover:bg-gray-50'
          )}
        >
          <ShoppingBag size={16} />
          My orders
        </Link>

        <Link
          href="/wishlist"
          className={cn(
            'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors',
            isActive('/wishlist')
              ? 'bg-skyblue text-primary border-l-4 border-primary -ml-3 pl-2'
              : 'text-navy hover:bg-gray-50'
          )}
        >
          <Heart size={16} />
          Wishlist
        </Link>

        <button
          onClick={() => setAccountOpen(!accountOpen)}
          className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-navy hover:bg-gray-50 transition-colors"
        >
          <span className="flex items-center gap-3">
            <User size={16} />
            Account Settings
          </span>
          <ChevronDown size={16} className={cn('transition-transform', accountOpen && 'rotate-180')} />
        </button>
        {accountOpen && (
          <div className="pl-9 space-y-1">
            <Link
              href="/account/personal"
              className={cn(
                'block py-1.5 text-sm transition-colors',
                isActive('/account/personal') ? 'text-primary font-medium' : 'text-navy/70 hover:text-navy'
              )}
            >
              Profile Information
            </Link>
            <Link
              href="/account/addresses"
              className={cn(
                'block py-1.5 text-sm transition-colors',
                isActive('/account/addresses') ? 'text-primary font-medium' : 'text-navy/70 hover:text-navy'
              )}
            >
              Manage Addresses
            </Link>
            <Link href="#" className="block py-1.5 text-sm text-navy/70 hover:text-navy">
              Notification Preferences
            </Link>
          </div>
        )}

        <button
          onClick={() => setPaymentsOpen(!paymentsOpen)}
          className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-navy hover:bg-gray-50 transition-colors"
        >
          <span className="flex items-center gap-3">
            <CreditCard size={16} />
            Payments
          </span>
          <ChevronDown size={16} className={cn('transition-transform', paymentsOpen && 'rotate-180')} />
        </button>

        <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-navy hover:bg-gray-50 transition-colors">
          <Activity size={16} />
          Medical History
        </Link>
        <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-navy hover:bg-gray-50 transition-colors">
          <LogOut size={16} />
          Sign out
        </Link>
      </nav>
    </aside>
  );
}
