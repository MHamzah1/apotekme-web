'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Calendar, Filter, MapPin, Clock, DollarSign, Award, Stethoscope, ChevronDown, ChevronUp, FileText } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Newsletter from '@/components/layout/Newsletter';
import { doctors } from '@/data/dummy';

const faqs = [
  { q: 'Who is a cardiologist?', a: 'Cardiologists are trained medical professionals with special training in the identification, treatment, and prevention of diseases of the heart and blood vessels, also known as the cardiovascular system. They are doctors who specialize in cardiovascular disease and are able to treat conditions ranging from severe hypertension to elevated cholesterol to heart rhythm problems.' },
  { q: 'What do cardiologists do?', a: 'Cardiologists diagnose and treat diseases of the cardiovascular system.' },
  { q: 'How to consult a cardiologist online?', a: 'Simply book a video consultation slot from this page.' },
  { q: 'Can a cardiologist treat all heart-related conditions?', a: 'Most heart-related conditions can be treated by a cardiologist.' },
  { q: 'When should I consult a cardiologist?', a: 'When you experience chest pain, shortness of breath, or palpitations.' },
  { q: 'What do we call a Cardiologist in simple words?', a: 'A heart doctor.' },
  { q: 'Can I consult with a cardiologist anytime?', a: 'Yes, our doctors are available 24/7.' },
  { q: 'Is video consultation available with all cardiologists?', a: 'Most of our doctors offer video consultation.' },
];

export default function DoctorsListPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <div className="container-custom">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Online Doctor Consultation', href: '/doctors' },
          { label: 'Cardiologists' },
        ]} />

        {/* Search bar */}
        <div className="bg-skyblue rounded-2xl p-4 mb-6 flex flex-col md:flex-row gap-3">
          <div className="flex-1 relative">
            <Stethoscope size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
            <input type="text" defaultValue="Cardiologists" className="w-full pl-9 pr-4 py-2.5 bg-white rounded-md text-sm focus:outline-none" />
          </div>
          <div className="flex-1 relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
            <input type="text" placeholder="Search Doctors" className="w-full pl-9 pr-4 py-2.5 bg-white rounded-md text-sm focus:outline-none" />
          </div>
          <div className="flex-1 relative">
            <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
            <input type="text" placeholder="Date" className="w-full pl-9 pr-4 py-2.5 bg-white rounded-md text-sm focus:outline-none" />
          </div>
          <button className="btn-primary text-sm">Search</button>
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-6 pb-12">
          {/* Main Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-navy">{doctors.length} Cardiologists available</h1>
            </div>

            <div className="flex items-center justify-between mb-4">
              <select className="px-3 py-1.5 border border-gray-200 rounded-md text-sm focus:outline-none">
                <option>Sort by: Availability</option>
                <option>Sort by: Experience</option>
                <option>Sort by: Rating</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-1.5 border border-gray-200 rounded-md text-sm hover:border-primary">
                <Filter size={14} />
                Filters
              </button>
            </div>

            {/* Doctor Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              {doctors.map((doctor) => (
                <div key={doctor.id} className="border border-gray-100 rounded-2xl p-4">
                  <Link href={`/doctors/${doctor.id}`} className="flex items-start gap-3">
                    <img src={doctor.image} alt={doctor.name} className="w-16 h-16 rounded-full object-cover" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-navy text-sm">{doctor.name}</h3>
                      <p className="text-[10px] text-navy/50 uppercase tracking-wider">{doctor.specialization}</p>
                      <p className="text-[10px] text-navy/70 mt-1 line-clamp-1">{doctor.qualification}</p>
                      <div className="flex items-center gap-3 text-[11px] text-navy/70 mt-1.5">
                        <span className="flex items-center gap-1">
                          <Clock size={11} />
                          {doctor.experience} years
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign size={11} />
                          {doctor.fee}
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="border-t border-gray-100 mt-3 pt-3">
                    <p className={`text-xs mb-1 ${doctor.isAvailable ? 'text-success' : 'text-warning'}`}>
                      ● Available {doctor.availability === 'today' ? 'Today' : 'Tomorrow'}
                    </p>
                    <p className="text-xs text-navy/70 flex items-center gap-1 mb-3">
                      <MapPin size={11} />
                      {doctor.location}
                    </p>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-primary text-white text-xs py-1.5 rounded-full hover:bg-primary-600">
                        Book Video Consult
                      </button>
                      <button className="flex-1 border border-primary text-primary text-xs py-1.5 rounded-full hover:bg-primary-50">
                        Book Hospital Visit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-4">
            <div className="border border-gray-100 rounded-2xl p-4">
              <h3 className="font-bold text-navy mb-3 text-sm">How Doctor Consultation Works</h3>
              <div className="flex items-center gap-2 mb-3">
                <button className="bg-primary text-white text-xs px-3 py-1.5 rounded-full">Text/Audio/Video</button>
                <button className="border border-gray-200 text-navy text-xs px-3 py-1.5 rounded-full">Meet in Person</button>
              </div>
              <p className="text-xs text-navy/70 mb-3">How to consult a Doctor online via text/audio/video?</p>
              <ul className="space-y-2 text-xs text-navy/70">
                {['Choose the doctor', 'Book a slot', 'Make payment', 'Be present in the consult room at the time of consult', 'Receive prescriptions instantly', 'Follow Up via text - Valid upto 7 days'].map((step, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">→</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-skyblue rounded-2xl p-3 grid grid-cols-3 gap-2 text-center">
              {[
                { icon: '🛡️', label: 'Verified Doctors' },
                { icon: '📋', label: 'Digital Prescription' },
                { icon: '💰', label: 'Affordable' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-2">
                  <p className="text-xl mb-1">{item.icon}</p>
                  <p className="text-[10px] text-navy/70">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="border border-gray-100 rounded-2xl p-4">
              <h3 className="font-bold text-navy mb-3 text-sm">Why Choose Online Consultation?</h3>
              <ul className="space-y-2 text-xs text-navy/70">
                {[
                  'Highly-qualified doctors are available 24x7 for you',
                  'Emergency medical services are available',
                  'Get online consultations within 15 minutes',
                  'Affordable rates and personalized solutions',
                  'Instant online consultations anytime, anywhere',
                ].map((reason, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-skyblue rounded-2xl p-4 flex items-center gap-3">
              <FileText className="text-primary flex-shrink-0" size={32} />
              <div className="flex-1">
                <p className="text-xs text-navy/70">Need Medicine?</p>
                <p className="font-bold text-navy text-sm mb-2">Upload prescription</p>
                <p className="text-[10px] text-navy/60 mb-2">Upload prescription and we will deliver your medicines</p>
                <Link href="/upload-prescription" className="inline-block bg-primary text-white text-xs px-4 py-1.5 rounded-full">
                  Upload Now
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* FAQ */}
        <section className="pb-12">
          <h2 className="text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
          <div className="space-y-2 max-w-3xl">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-100">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-sm font-medium text-navy">{faq.q}</span>
                  {openFaq === idx ? <ChevronUp size={18} className="text-primary" /> : <ChevronDown size={18} className="text-navy/40" />}
                </button>
                {openFaq === idx && (
                  <p className="pb-4 text-sm text-navy/70 leading-relaxed">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      <Newsletter />
    </>
  );
}
