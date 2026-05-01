'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, Calendar, Stethoscope, ChevronDown, ChevronUp, ShieldCheck, Clock, DollarSign, Lock } from 'lucide-react';
import Newsletter from '@/components/layout/Newsletter';

const concerns = ['Cough', 'Fever', 'Headache', 'Allergies', 'Tooth Pain', 'Loose Motions', 'Heartburn', 'Backpain', 'Period Problems', 'Any Other Symptoms?'];

const specialties = [
  { name: 'Dermatologist', img: 'https://i.pravatar.cc/150?img=49' },
  { name: 'General Physician', img: 'https://i.pravatar.cc/150?img=11' },
  { name: 'Pediatrics', img: 'https://i.pravatar.cc/150?img=23' },
  { name: 'Dentist', img: 'https://i.pravatar.cc/150?img=51' },
  { name: 'Diabetes Specialist', img: 'https://i.pravatar.cc/150?img=33' },
  { name: 'Psychologist', img: 'https://i.pravatar.cc/150?img=20' },
];

const otherSpecialties = [
  { name: 'Allergist and Clinical Immunologist', desc: 'Manage allergies and treat immunology', subdesc: 'Recurring infections, immunity deficiency', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=150&fit=crop' },
  { name: 'Endocrinology', desc: 'For diabetes and hormonal problems', subdesc: 'Thyroid, PCOS/PCOD, Growth issues', img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=200&h=150&fit=crop' },
  { name: 'Diabetology', desc: 'Managing all kinds of diabetes', subdesc: 'Type 1 & Type 2 diabetes, Obesity, Anemia', img: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=200&h=150&fit=crop' },
  { name: 'Dental', desc: 'Specialists for dental issues and treatments', subdesc: 'Toothache, Mouth Ulcer, Crooked Teeth', img: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=200&h=150&fit=crop' },
  { name: 'Physiotherapy and Rehabilitation', desc: 'For facilitating recovery from illness', subdesc: 'Post Covid, Recovery from surgeries', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=150&fit=crop' },
  { name: 'Hepatology', desc: 'For liver problems', subdesc: 'Liver disease, Liver cancer', img: 'https://images.unsplash.com/photo-1559757175-08d3a48751a4?w=200&h=150&fit=crop' },
  { name: 'General Surgery', desc: 'For all kinds of surgeries', subdesc: 'Hernia, Abdominal Surgery', img: 'https://images.unsplash.com/photo-1587351021759-6a13d4f2e4d4?w=200&h=150&fit=crop' },
  { name: 'Hematology', desc: 'For diseases related to blood', subdesc: 'Blood diseases', img: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=200&h=150&fit=crop' },
  { name: 'Psychiatry', desc: 'Specialists to help treat mental health', subdesc: 'Anxiety, Depression, Stress, OCD, Bipolar', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=150&fit=crop' },
  { name: 'ENT', desc: 'ENT specialists for Ear, Nose and Throat', subdesc: 'Earache, Bad breath, Swollen neck, Vertigo', img: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=200&h=150&fit=crop' },
  { name: 'Oral Consultation', desc: 'Treatment of Covid-19', subdesc: 'Cough, Fever, Breathing Problems', img: 'https://images.unsplash.com/photo-1605101100278-5d1deb2b6498?w=200&h=150&fit=crop' },
  { name: 'Spine Surgery', desc: 'For surgeries of the spine', subdesc: 'Back pain, Neck pain', img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=150&fit=crop' },
];

const benefits = [
  { icon: Clock, title: 'Top Doctors 24x7', desc: 'Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.' },
  { icon: ShieldCheck, title: 'Convenient and Easy', desc: 'Start an instant consultation within 2 minutes or do video consultation at the scheduled time.' },
  { icon: DollarSign, title: 'Affordable', desc: 'Online consultations help you save money since it costs a fraction of the price compared to physically visiting a doctor.' },
  { icon: Lock, title: '100% Safe Consultations', desc: 'Be assured that your online consultation will be fully private and secured.' },
];

const howItWorks = [
  { num: 1, label: 'Find Doctor', desc: 'Find your doctor of the specialties based on your preferences.', icon: '👨‍⚕️' },
  { num: 2, label: 'Book an appointment', desc: 'Schedule your appointment with the doctor.', icon: '📅' },
  { num: 3, label: 'Pay for Consultation', desc: 'Use Debit cards, PayPal to pay consultation fee.', icon: '💳' },
  { num: 4, label: 'Consult with Doctor', desc: 'Consult your health problems online or offline.', icon: '💬' },
  { num: 5, label: 'Get Prescription', desc: 'Get your prescription and report online after Video Consultation.', icon: '📋' },
];

const stats = [
  { value: '35+', label: 'Specialities' },
  { value: '4000+', label: 'Doctors' },
  { value: '600+', label: 'Hospitals' },
  { value: '100000+', label: 'Happy Users' },
];

const faqs = [
  { q: 'What is an online doctor consultation or online medical consultation?', a: 'Online doctor consultation or online medical consultation is a method to connect patients and doctors virtually. It is a convenient and easy way to get online medical advice using doctor apps or telemedicine apps or platforms, and the internet.' },
  { q: 'How do I consult a doctor online now?', a: 'Browse our doctor list, choose a specialty, book a slot, and pay online.' },
  { q: 'Do you provide online doctor consultation for emergencies?', a: 'Yes, 24x7 emergency consultations are available.' },
  { q: 'Where is my doctor\'s note for the online doctor consultation?', a: 'Available immediately after consultation.' },
  { q: 'What is the minimum fee for online doctor consultation?', a: 'Starts at $10 depending on specialty.' },
  { q: 'How do I pay for the online/offline doctor consultations?', a: 'Pay via card, PayPal, or e-wallet.' },
  { q: 'Will I get a refund if I cancel the online doctor consultation?', a: 'Yes, refunds are processed within 24 hours.' },
];

export default function DoctorConsultationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="bg-skyblue py-12">
        <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-3">We Care About Your Health</h1>
            <p className="text-sm text-navy/70 mb-6">
              Select preferred Specialities, doctor and time slot to book appointment of consultation.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop"
              alt="Doctors"
              className="rounded-2xl shadow-lg max-w-md w-full"
            />
          </div>
        </div>

        <div className="container-custom mt-8">
          <div className="bg-white rounded-2xl p-3 shadow-card">
            <p className="text-sm font-medium text-navy mb-2 px-2">Book Appointment Now</p>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 relative">
                <Stethoscope size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
                <select className="w-full pl-9 pr-4 py-2.5 bg-skyblue/40 rounded-md text-sm focus:outline-none">
                  <option>Select Specialities</option>
                </select>
              </div>
              <div className="flex-1 relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
                <input type="text" placeholder="Search Doctors" className="w-full pl-9 pr-4 py-2.5 bg-skyblue/40 rounded-md text-sm focus:outline-none" />
              </div>
              <div className="flex-1 relative">
                <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
                <input type="text" placeholder="Date" className="w-full pl-9 pr-4 py-2.5 bg-skyblue/40 rounded-md text-sm focus:outline-none" />
              </div>
              <Link href="/doctors" className="btn-primary text-sm">Search</Link>
            </div>
            <p className="text-xs text-navy/60 mt-3 px-2">
              Popular searches: Dermatologist, Pediatrician, Gynecologist/Obstetrician, Dentist, Others
            </p>
          </div>
        </div>
      </section>

      {/* Common Health Concerns */}
      <section className="container-custom py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-2">Common Health Concerns</h2>
        <p className="text-sm text-navy/70 text-center mb-8">Feeling unwell? Tell us your symptoms for a quick assessment and get appropriate care.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-5xl mx-auto">
          {concerns.map((c, i) => (
            <button key={i} className="px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-navy hover:border-primary hover:text-primary transition-colors flex items-center gap-2">
              <Stethoscope size={14} className="text-primary" />
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Top Specialties */}
      <section className="bg-skyblue py-12">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-8">Top Specialties</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {specialties.map((s, i) => (
              <Link href="/doctors" key={i} className="group bg-white rounded-2xl p-3 text-center hover:shadow-card-hover transition-shadow">
                <div className="aspect-square rounded-full overflow-hidden mb-2">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <p className="text-xs font-semibold text-navy">{s.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container-custom py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-2">Benefits of Online Consultation</h2>
        <p className="text-sm text-navy/70 text-center mb-8">Book an appointment online with Medical at a hospital/clinic without a hectic process.</p>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=500&fit=crop" alt="Doctor" className="rounded-2xl" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl p-4">
                <div className="w-10 h-10 bg-skyblue rounded-full flex items-center justify-center mb-3">
                  <b.icon className="text-primary" size={18} />
                </div>
                <h3 className="font-bold text-navy text-sm mb-1">{b.title}</h3>
                <p className="text-xs text-navy/60">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-primary py-12">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">How online consultation works?</h2>
          <p className="text-white/80 text-center mb-8 text-sm">Follow The Simple Steps Below And Get Video Consultation</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {howItWorks.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-5 text-center">
                <div className="text-3xl mb-3">{step.icon}</div>
                <p className="font-bold text-navy mb-1 text-sm">{step.label}</p>
                <p className="text-[10px] text-navy/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two CTA banners */}
      <section className="container-custom py-12">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-skyblue rounded-2xl p-6 flex items-center gap-4 relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop" alt="Doctors" className="w-24 h-24 rounded-2xl object-cover" />
            <div>
              <p className="text-xs text-navy/70 mb-1">Starting at $499/month</p>
              <h3 className="font-bold text-navy mb-2">Free online consultations</h3>
              <button className="bg-primary text-white text-xs px-4 py-1.5 rounded-full hover:bg-primary-600">Get Membership</button>
            </div>
          </div>
          <div className="bg-skyblue rounded-2xl p-6 flex items-center gap-4 relative overflow-hidden">
            <div className="flex-1">
              <h3 className="font-bold text-navy mb-1">Medicines</h3>
              <p className="text-xs text-navy/70 mb-2">Get 15% Discounts on Medicines. At your doorstep.</p>
              <Link href="/" className="inline-block bg-primary text-white text-xs px-4 py-1.5 rounded-full hover:bg-primary-600">Buy Medicines</Link>
            </div>
            <div className="relative">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">15%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Specialties */}
      <section className="container-custom pb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-8">Other Specialties</h2>
        <div className="grid md:grid-cols-3 gap-3 max-w-6xl mx-auto">
          {otherSpecialties.map((s, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl p-3 flex items-start gap-3 hover:border-primary transition-colors">
              <img src={s.img} alt={s.name} className="w-16 h-16 object-cover rounded-lg flex-shrink-0" />
              <div className="flex-1">
                <p className="font-bold text-navy text-sm">{s.name}</p>
                <p className="text-[11px] text-navy/70">{s.desc}</p>
                <p className="text-[10px] text-navy/50 mt-1">{s.subdesc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/doctors" className="btn-primary">View All Specialities</Link>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-skyblue py-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center mb-2">
                  <Stethoscope className="text-primary" size={20} />
                </div>
                <p className="text-2xl font-bold text-navy">{s.value}</p>
                <p className="text-xs text-navy/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-custom py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-2">Frequently Asked Questions</h2>
        <p className="text-sm text-navy/70 text-center mb-8">Get your General Answer</p>
        <div className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          <div>
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=500&fit=crop" alt="Doctor" className="rounded-2xl" />
          </div>
          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-100">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between py-3 text-left">
                  <span className="text-sm font-medium text-navy pr-4">{faq.q}</span>
                  {openFaq === idx ? <ChevronUp size={18} className="text-primary flex-shrink-0" /> : <ChevronDown size={18} className="text-navy/40 flex-shrink-0" />}
                </button>
                {openFaq === idx && <p className="pb-3 text-xs text-navy/70 leading-relaxed">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
