'use client';

import Breadcrumb from '@/components/ui/Breadcrumb';
import AccountSidebar from '@/components/account/AccountSidebar';
import { addresses } from '@/data/dummy';

export default function PersonalInfoPage() {
  const fields = [
    { label: 'Your Name', value: 'User full Name' },
    { label: 'Email address', value: 'text@gmail.com' },
    { label: 'Phone number', value: '9801234567' },
    { label: 'Password', value: '**********' },
  ];

  return (
    <div className="container-custom">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'My Account', href: '/account/orders' },
        { label: 'Personal Info' },
      ]} />

      <div className="flex flex-col lg:flex-row gap-6 pb-12">
        <AccountSidebar />

        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-navy mb-4">My Info</h1>

          <h2 className="font-bold text-navy mb-3">Contact Details</h2>
          <div className="space-y-3 mb-8">
            {fields.map((f) => (
              <div key={f.label} className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-navy/60 mb-0.5">{f.label}</p>
                  <p className="text-sm text-navy font-medium">{f.value}</p>
                </div>
                <button className="text-primary text-sm font-medium hover:underline">Change</button>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-navy">Addresses</h2>
            <button className="text-primary text-sm font-medium hover:underline">Add new</button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {addresses.map((addr) => (
              <div key={addr.id} className="bg-gray-50 rounded-xl p-4">
                <p className="font-bold text-navy">{addr.name}</p>
                <p className="text-sm text-navy/70">{addr.phone}</p>
                <p className="text-xs text-navy/70 mt-2 leading-relaxed">{addr.fullAddress}</p>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {addr.label && (
                    <span className="text-xs px-2 py-1 border border-gray-200 rounded text-navy">{addr.label}</span>
                  )}
                  {addr.isDefaultBilling && (
                    <span className="text-xs px-2 py-1 border border-gray-200 rounded text-navy">Default Billing Address</span>
                  )}
                  {addr.isDefaultShipping && (
                    <span className="text-xs px-2 py-1 border border-gray-200 rounded text-navy">Default Shipping Address</span>
                  )}
                </div>
                <div className="flex items-center gap-3 mt-3 text-xs">
                  <button className="text-primary hover:underline">Remove</button>
                  <button className="text-primary hover:underline">Edit</button>
                  {!addr.isDefaultBilling && !addr.isDefaultShipping && (
                    <button className="text-primary hover:underline">Set as Default</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
