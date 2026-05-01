'use client';

import { useState } from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import AccountSidebar from '@/components/account/AccountSidebar';
import { orders } from '@/data/dummy';
import { cn } from '@/lib/utils';

const tabs = ['Active', 'Cancelled', 'Completed', 'Reviews'];

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState('Active');

  const filteredOrders = orders.filter((o) => {
    if (activeTab === 'Active') return ['placed', 'progress', 'shipped'].includes(o.status);
    if (activeTab === 'Cancelled') return o.status === 'cancelled';
    if (activeTab === 'Completed') return o.status === 'delivered';
    return false;
  });

  return (
    <div className="container-custom">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'My Account', href: '/account/orders' },
        { label: 'My Orders' },
      ]} />

      <div className="flex flex-col lg:flex-row gap-6 pb-12">
        <AccountSidebar />

        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-navy mb-4">My Orders</h1>

          {/* Tabs */}
          <div className="flex gap-6 border-b border-gray-200 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'pb-3 text-sm font-medium border-b-2 transition-colors',
                  activeTab === tab ? 'border-navy text-navy' : 'border-transparent text-navy/50'
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Orders */}
          {filteredOrders.length > 0 ? (
            <div className="space-y-5">
              {filteredOrders.map((order) => (
                <div key={order.id} className="rounded-2xl overflow-hidden border border-gray-100">
                  <div className="bg-skyblue p-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <p className="font-bold text-navy">Order No: {order.orderNumber}</p>
                      <p className="text-xs text-navy/60">Order Date: {order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-navy">
                        Total ({order.items.length} items): <span className="font-bold">${order.total.toFixed(2)}</span>
                      </p>
                      <Link href={`/account/orders/${order.id}`} className="text-xs text-primary hover:underline">
                        Order Details
                      </Link>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-3 text-sm">
                      <p className="font-medium text-navy">Estimated Delivery Date: {order.estimatedDelivery}</p>
                      <p className="text-navy">
                        Payment Status: <span className={cn('font-bold', order.paymentStatus === 'paid' ? 'text-success' : 'text-warning')}>
                          {order.paymentStatus === 'paid' ? 'Paid' : 'Pending'}
                        </span>
                      </p>
                    </div>
                    <div className="space-y-3">
                      {order.items.map((item, idx) => (
                        <div key={item.id} className="flex items-center gap-3">
                          <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-md flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-[10px] font-bold text-navy/50 uppercase">{item.brand}</p>
                            <p className="text-sm font-medium text-navy line-clamp-1">{item.name}</p>
                            <p className="text-sm font-bold text-navy">${item.price.toFixed(2)}</p>
                          </div>
                          <span className="text-xs text-navy/60">Qty {item.quantity}</span>
                          {idx === 0 && (
                            <div className="flex flex-col gap-1">
                              <button className="bg-primary text-white text-xs px-3 py-1.5 rounded-full hover:bg-primary-600">
                                Track Order
                              </button>
                              <button className="border border-primary text-primary text-xs px-3 py-1.5 rounded-full hover:bg-primary-50">
                                Cancel Item(s)
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-skyblue/30 rounded-2xl">
              <p className="text-navy/60">No {activeTab.toLowerCase()} orders</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
