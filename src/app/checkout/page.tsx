'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Home, Truck, CreditCard, Check, ChevronDown, ChevronUp } from 'lucide-react';
import toast from 'react-hot-toast';
import Breadcrumb from '@/components/ui/Breadcrumb';

const orderItems = [
  { id: 1, name: 'CeraVe Acne Resurfacing Retinol Face Serum', qty: 2, price: 26.24, image: 'https://images.unsplash.com/photo-1556228852-80b6e5eeff06?w=200&h=200&fit=crop' },
  { id: 2, name: 'CeraVe Acne Resurfacing Retinol Face Serum', qty: 1, price: 13.12, image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=200&h=200&fit=crop' },
  { id: 3, name: 'CeraVe Acne Resurfacing Retinol Face Serum', qty: 1, price: 13.12, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=200&fit=crop' },
];

export default function CheckoutPage() {
  const router = useRouter();
  const [billingComplete, setBillingComplete] = useState(false);
  const [shippingMethod, setShippingMethod] = useState('flat-rate');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [paymentExpanded, setPaymentExpanded] = useState(true);

  const handlePay = () => {
    toast.success('Payment successful!');
    setTimeout(() => router.push('/success'), 1000);
  };

  const subtotal = 540.00;
  const discount = 30.00;
  const total = subtotal - discount;

  return (
    <div className="container-custom">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Checkout' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-navy mb-6">Checkout</h1>

      <div className="grid lg:grid-cols-[1fr_360px] gap-6">
        {/* Form Section */}
        <div className="space-y-4">
          {/* Billing Details */}
          <div className="bg-skyblue/40 rounded-2xl overflow-hidden border border-skyblue">
            <div className="bg-skyblue px-5 py-3 flex items-center gap-2">
              <Home size={18} className="text-primary" />
              <h2 className="font-bold text-navy">Billing Details</h2>
              <Check size={18} className="ml-auto text-primary bg-white rounded-full p-0.5" />
            </div>
            <div className="p-5 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-navy mb-1">First Name*</label>
                  <input type="text" placeholder="First Name" className="input-field" />
                </div>
                <div>
                  <label className="block text-xs text-navy mb-1">Last Name*</label>
                  <input type="text" placeholder="Last Name" className="input-field" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-navy mb-1">Company Name</label>
                  <input type="text" placeholder="Company (optional)" className="input-field" />
                </div>
                <div>
                  <label className="block text-xs text-navy mb-1">Country / Region*</label>
                  <input type="text" placeholder="Last Name" className="input-field" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-navy mb-1">Street Address*</label>
                  <input type="text" placeholder="House number and street name" className="input-field" />
                </div>
                <div>
                  <label className="block text-xs text-navy mb-1">Apt, suite, unit</label>
                  <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" className="input-field" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs text-navy mb-1">City*</label>
                  <input type="text" placeholder="Town/ City" className="input-field" />
                </div>
                <div>
                  <label className="block text-xs text-navy mb-1">State*</label>
                  <select className="input-field">
                    <option>State</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-navy mb-1">Postal Code*</label>
                  <input type="text" placeholder="Postal Code" className="input-field" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-navy mb-1">Phone*</label>
                <input type="text" placeholder="Phone" className="input-field" />
              </div>
              <button onClick={() => setBillingComplete(true)} className="btn-primary text-sm">
                Continue to delivery
              </button>
              <label className="flex items-center gap-2 text-xs text-navy/70">
                <input type="checkbox" className="w-4 h-4 accent-primary" />
                Save my information for a faster checkout
              </label>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5">
            <h2 className="font-bold text-navy mb-2">Shipping Address</h2>
            <p className="text-xs text-navy/70 mb-3">Select the address that matches your card or payment method.</p>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="shipping-addr" defaultChecked className="w-4 h-4 accent-primary" />
                <span className="text-sm text-navy">Same as Billing address</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="shipping-addr" className="w-4 h-4 accent-primary" />
                <span className="text-sm text-navy">Use a different shipping address</span>
              </label>
            </div>
          </div>

          {/* Shipping Method */}
          <div className="bg-skyblue/40 rounded-2xl overflow-hidden border border-skyblue">
            <div className="bg-skyblue px-5 py-3 flex items-center gap-2">
              <Truck size={18} className="text-primary" />
              <h2 className="font-bold text-navy">Shipping Method</h2>
              <Check size={18} className="ml-auto text-primary bg-white rounded-full p-0.5" />
            </div>
            <div className="p-5 space-y-3">
              {[
                { id: 'flat-rate', label: 'Flat-rate', desc: 'Standard flat rate shipping for all items', price: 15.00 },
                { id: 'expedited', label: 'Expedited Shipping', desc: 'Expedited shipping to get the shipment in a day or two.', price: 30.00 },
                { id: 'overnight', label: 'Overnight Shipping', desc: 'An expensive option to get the shipment on the next business day', price: 50.00 },
              ].map((opt) => (
                <label key={opt.id} className="flex items-start gap-2 cursor-pointer p-2 -m-2 rounded hover:bg-white/50 transition-colors">
                  <input
                    type="radio"
                    name="shipping"
                    checked={shippingMethod === opt.id}
                    onChange={() => setShippingMethod(opt.id)}
                    className="w-4 h-4 mt-1 accent-primary"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-navy text-sm">{opt.label}</p>
                    <p className="text-xs text-navy/60">{opt.desc}</p>
                  </div>
                  <p className="font-bold text-navy text-sm">${opt.price.toFixed(2)}</p>
                </label>
              ))}
              <button className="btn-primary text-sm mt-2">Continue to Payment</button>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-skyblue/40 rounded-2xl overflow-hidden border border-skyblue">
            <button
              onClick={() => setPaymentExpanded(!paymentExpanded)}
              className="w-full bg-skyblue px-5 py-3 flex items-center gap-2"
            >
              <CreditCard size={18} className="text-primary" />
              <h2 className="font-bold text-navy">Payment Method</h2>
              {paymentExpanded ? <ChevronUp size={18} className="ml-auto" /> : <ChevronDown size={18} className="ml-auto" />}
            </button>
            {paymentExpanded && (
              <div className="p-5 space-y-3">
                {/* Credit Card */}
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'credit-card'}
                    onChange={() => setPaymentMethod('credit-card')}
                    className="w-4 h-4 mt-1 accent-primary"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-navy text-sm">Credit Card</p>
                    <p className="text-xs text-navy/60 mb-2">We accept all major credit cards.</p>
                    <div className="flex gap-2 mb-3">
                      {['VISA', 'DISCOVER', 'AMEX', 'MASTERCARD'].map((c) => (
                        <div key={c} className="px-2 py-1 bg-white rounded text-[10px] font-bold text-navy/70 border border-gray-200">{c}</div>
                      ))}
                    </div>
                    {paymentMethod === 'credit-card' && (
                      <div className="space-y-2">
                        <input type="text" placeholder="Name of card" className="input-field" />
                        <input type="text" placeholder="Card number" className="input-field" />
                        <div className="grid grid-cols-2 gap-2">
                          <input type="text" placeholder="Expiration date (MM/YY)" className="input-field" />
                          <input type="text" placeholder="Security code" className="input-field" />
                        </div>
                        <label className="flex items-center gap-2 text-xs text-navy/70">
                          <input type="checkbox" className="w-4 h-4 accent-primary" />
                          Save card details for future payments
                        </label>
                      </div>
                    )}
                  </div>
                </label>

                <label className="flex items-start gap-2 cursor-pointer pt-2 border-t border-skyblue">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="w-4 h-4 mt-1 accent-primary"
                  />
                  <div>
                    <p className="font-medium text-navy text-sm">Cash on delivery</p>
                    <p className="text-xs text-navy/60">Pay with cash upon delivery.</p>
                  </div>
                </label>

                <label className="flex items-start gap-2 cursor-pointer pt-2 border-t border-skyblue">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'paypal'}
                    onChange={() => setPaymentMethod('paypal')}
                    className="w-4 h-4 mt-1 accent-primary"
                  />
                  <div>
                    <p className="font-medium text-navy text-sm">PayPal</p>
                  </div>
                </label>

                <button onClick={handlePay} className="btn-primary text-sm">Pay Now</button>
              </div>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-skyblue rounded-2xl p-5 sticky top-24">
            <h3 className="font-bold text-navy mb-4">Order summary</h3>
            <div className="space-y-3 mb-4">
              {orderItems.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="relative">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md" />
                  </div>
                  <p className="text-xs text-navy flex-1 line-clamp-2">{item.name}</p>
                  <span className="text-xs text-navy/60">X{item.qty}</span>
                  <span className="text-xs font-bold text-navy">${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2 text-sm pt-3 border-t border-primary/20">
              <div className="flex justify-between text-navy">
                <span>Subtotal <span className="text-navy/60">(3 items)</span></span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-navy">
                <span>Shop discount</span>
                <span className="text-danger">-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-navy">
                <span>Shipping fee</span>
                <span>$0.00</span>
              </div>
            </div>
            <div className="flex justify-between text-base font-bold text-navy pt-3 mt-3 border-t border-primary/20">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
