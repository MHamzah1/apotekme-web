'use client';

import Link from 'next/link';
import { X, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface AuthCardProps {
  variant: 'login' | 'register';
}

export default function AuthCard({ variant }: AuthCardProps) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (variant === 'register' && !agreed) {
      toast.error('Please agree to Privacy Policy and Terms of Use');
      return;
    }
    toast.success(variant === 'login' ? 'Login successful!' : 'Account created!');
    setTimeout(() => router.push('/'), 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden grid md:grid-cols-2">
        {/* Left side - illustration */}
        <div className="bg-skyblue p-8 md:p-10 flex flex-col items-center justify-center text-center">
          <div className="relative mb-6">
            <div className="w-56 h-56 bg-primary rounded-full flex items-end justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"
                alt="Doctor"
                className="w-48 h-56 object-cover"
              />
            </div>
          </div>
          <h2 className="text-xl font-bold text-navy mb-2">Health Related Queries?</h2>
          <p className="text-sm text-navy/70 mb-6">
            Consult our certified doctors from anywhere, anytime, and for free. We guarantee your privacy.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="w-2 h-2 rounded-full bg-primary/30"></span>
            <span className="w-2 h-2 rounded-full bg-primary/30"></span>
          </div>
        </div>

        {/* Right side - form */}
        <div className="p-8 md:p-10 relative">
          <Link href="/" className="absolute top-4 right-4 w-8 h-8 bg-navy text-white rounded-full flex items-center justify-center hover:bg-navy-900 transition-colors">
            <X size={16} />
          </Link>

          {variant === 'login' ? (
            <>
              <h1 className="text-3xl font-bold text-navy text-center mb-2">Login</h1>
              <p className="text-sm text-navy/70 text-center mb-6">
                Get access to your orders, lab tests &amp; doctor consultations
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Enter Email or Mobile No" className="input-field" />
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    className="input-field pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-navy/50"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-primary" />
                    <span className="text-navy/70">Remember me</span>
                  </label>
                  <Link href="#" className="text-primary hover:underline">Forgot your password?</Link>
                </div>
                <button type="submit" className="btn-primary w-full">Log In</button>
                <p className="text-center text-sm text-navy/70">
                  Don't have an account?{' '}
                  <Link href="/register" className="text-navy font-bold hover:text-primary">Register Now!</Link>
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-gray-200"></div>
                  <span className="text-sm text-navy/60">Or Sign in with</span>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button type="button" className="flex items-center justify-center gap-2 bg-[#3b5998] text-white py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                    <span className="font-bold">f</span> Facebook
                  </button>
                  <button type="button" className="flex items-center justify-center gap-2 bg-[#dd4b39] text-white py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                    <span className="font-bold">G+</span> Google
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold text-navy text-center mb-2">Create your Account</h1>
              <p className="text-sm text-navy/70 text-center mb-6">
                Get access to your orders, lab tests &amp; doctor consultations
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Your Name" className="input-field" />
                <input type="text" placeholder="Username" className="input-field" />
                <input type="email" placeholder="Your Email" className="input-field" />
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    className="input-field pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-navy/50"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <label className="flex items-start gap-2 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-4 h-4 mt-0.5 accent-primary flex-shrink-0"
                  />
                  <span className="text-navy/70">
                    Yes, I agree with <Link href="#" className="text-navy font-bold">Privacy Policy</Link> and{' '}
                    <Link href="#" className="text-navy font-bold">Terms of Use</Link>
                  </span>
                </label>
                <button type="submit" className="btn-primary w-full">Create an Account</button>
                <p className="text-center text-sm text-navy/70">
                  Already have an account?{' '}
                  <Link href="/login" className="text-navy font-bold hover:text-primary">Login</Link>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
