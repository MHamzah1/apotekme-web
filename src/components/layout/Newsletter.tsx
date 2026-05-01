'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return toast.error('Please enter your email');
    toast.success('Subscribed successfully!');
    setEmail('');
  };

  return (
    <section className="bg-primary py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="flex items-end gap-3 max-w-md">
              <img src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=160&h=200&fit=crop" alt="Products" className="w-20 h-28 object-cover rounded-lg shadow-lg" />
              <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=160&h=240&fit=crop" alt="Products" className="w-24 h-36 object-cover rounded-lg shadow-lg" />
              <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=160&h=200&fit=crop" alt="Products" className="w-20 h-28 object-cover rounded-lg shadow-lg" />
            </div>
          </div>
          <div className="text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Join Our Newsletter</h2>
            <p className="text-white/90 mb-6">Signup to get the latest offers and news and stay updated</p>
            <form onSubmit={handleSubmit} className="flex gap-2 bg-white rounded-full p-1.5 shadow-lg max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email here..."
                className="flex-1 px-4 py-2 bg-transparent text-navy placeholder-gray-400 outline-none text-sm"
              />
              <button type="submit" className="bg-navy text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-navy-900 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
