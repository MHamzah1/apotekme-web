'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';
import Breadcrumb from '@/components/ui/Breadcrumb';
import AccountSidebar from '@/components/account/AccountSidebar';

export default function ManageAddressesPage() {
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Address saved successfully!');
  };

  return (
    <div className="container-custom">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'My Account', href: '/account/orders' },
        { label: 'Delivery Addresses' },
      ]} />

      <div className="flex flex-col lg:flex-row gap-6 pb-12">
        <AccountSidebar />

        <div className="flex-1">
          <Link href="/account/personal" className="flex items-center gap-1 text-navy mb-3">
            <ArrowLeft size={18} />
            <h1 className="text-2xl md:text-3xl font-bold">Addresses</h1>
          </Link>

          <div className="bg-skyblue/40 rounded-2xl p-6">
            <h2 className="font-bold text-navy mb-4">Add address</h2>
            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-navy mb-1">First Name*</label>
                  <input type="text" placeholder="First Name" className="input-field" />
                </div>
                <div>
                  <label className="block text-xs text-navy mb-1">Last Name*</label>
                  <input type="text" placeholder="Last Name" className="input-field" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-navy mb-1">Company Name</label>
                  <input type="text" placeholder="Company (optional)" className="input-field" />
                </div>
                <div>
                  <label className="block text-xs text-navy mb-1">Country / Region*</label>
                  <input type="text" placeholder="Country" className="input-field" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-navy mb-1">Street Address*</label>
                  <input type="text" placeholder="Street Address" className="input-field" />
                </div>
                <div>
                  <label className="block text-xs text-navy mb-1">Apt, suite, unit</label>
                  <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" className="input-field" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-navy mb-1">City*</label>
                  <input type="text" placeholder="City" className="input-field" />
                </div>
                <div>
                  <label className="block text-xs text-navy mb-1">State*</label>
                  <select className="input-field"><option>State</option></select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-navy mb-1">Phone*</label>
                  <input type="text" placeholder="Phone" className="input-field" />
                </div>
                <div>
                  <label className="block text-xs text-navy mb-1">Postal code*</label>
                  <input type="text" placeholder="Postal code" className="input-field" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-navy mb-1">Delivery instructions</label>
                <textarea placeholder="Delivery instructions" rows={3} className="input-field resize-none" />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs text-navy">
                  <input type="checkbox" className="w-4 h-4 accent-primary" />
                  Set as default shipping address
                </label>
                <label className="flex items-center gap-2 text-xs text-navy">
                  <input type="checkbox" className="w-4 h-4 accent-primary" />
                  Set as default billing address
                </label>
              </div>
              <div className="flex items-center gap-4">
                <button type="submit" className="btn-primary text-sm">Save</button>
                <Link href="/account/personal" className="text-primary text-sm font-medium hover:underline">Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
