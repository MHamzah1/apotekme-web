'use client';

import { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import { Building2, MapPin, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import toast from 'react-hot-toast';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { doctors } from '@/data/dummy';

const morningSlots = ['07:30 AM', '07:30 AM', '07:30 AM', '07:30 AM', '07:30 AM', '07:30 AM', '07:30 AM', '07:30 AM', '07:30 AM', '07:30 AM'];
const afternoonSlots1 = ['12:45 PM', '12:45 PM', '12:45 PM'];
const afternoonSlots2 = Array(12).fill('06:30 PM');

const tabs = ['Profile', 'Other Info', 'Reviews'];

export default function DoctorDetailPage() {
  const params = useParams();
  const doctor = doctors.find((d) => d.id === Number(params.id));
  if (!doctor) notFound();

  const [activeTab, setActiveTab] = useState('Profile');
  const [appointmentType, setAppointmentType] = useState<'online' | 'visit'>('online');
  const [day, setDay] = useState<'today' | 'tomorrow'>('today');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: `How can I take an appointment with ${doctor.name}?`, a: 'Lorem ipsum dolor sit amet consectetur. Donec tortor volutpat faucibus facilisis volutpat faucibus viverra nibh. Et vel feugiat scelerisque elit egestas placerat. Nulla non ipsum amet nibh. Arcu nec eu diam ut integer dictum.' },
    { q: `Where does ${doctor.name} practice?`, a: 'XYZ Hospital, Kathmandu, Nepal' },
    { q: `What is the educational qualification of ${doctor.name}?`, a: doctor.qualification },
    { q: `What languages can ${doctor.name} speak?`, a: doctor.languages?.join(', ') || 'English, Nepali, Hindi' },
    { q: 'When should I consult a cardiologist?', a: 'When you experience chest pain, shortness of breath, or palpitations.' },
  ];

  return (
    <div className="container-custom">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Online Doctor Consultation', href: '/doctors' },
        { label: 'Cardiologists', href: '/doctors' },
        { label: doctor.name },
      ]} />

      <div className="grid lg:grid-cols-[1fr_360px] gap-6 pb-12">
        {/* Left - Doctor Info */}
        <div>
          <div className="flex items-start gap-4 mb-4">
            <img src={doctor.image} alt={doctor.name} className="w-24 h-24 rounded-full object-cover" />
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-navy">{doctor.name}</h1>
              <p className="text-xs text-navy/50 uppercase tracking-wider mb-2">{doctor.specialization}</p>
              <p className="text-xs text-navy/70 flex items-center gap-1">
                <Building2 size={12} />
                XYZ Hospital, {doctor.location}
              </p>
              <p className="text-xs text-navy/70 flex items-center gap-1 mt-0.5">
                <MapPin size={12} />
                {doctor.languages?.join(', ') || 'English, Nepali, Hindi'}
              </p>
              <div className="flex gap-2 mt-3">
                <button className="bg-primary text-white text-xs px-4 py-1.5 rounded-full hover:bg-primary-600">
                  Book Video Consult
                </button>
                <button className="border border-primary text-primary text-xs px-4 py-1.5 rounded-full hover:bg-primary-50">
                  Book Hospital Visit
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { icon: '🎓', label: 'Education', value: doctor.qualification },
              { icon: '⏱️', label: 'Experience', value: `${doctor.experience} Years` },
              { icon: '📋', label: 'Registration No.', value: doctor.registrationNo || 'CGMC10000/2022' },
              { icon: '👥', label: 'Patients', value: `${doctor.patients}+` },
            ].map((stat, i) => (
              <div key={i} className="bg-skyblue/40 rounded-xl p-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-skyblue rounded-full flex items-center justify-center text-lg">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-[10px] text-navy/60">{stat.label}</p>
                  <p className="text-xs font-medium text-navy">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* About */}
          <h2 className="text-lg font-bold text-navy mb-2">About {doctor.name}</h2>
          <p className="text-sm text-navy/70 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur. Posuere nullam lacus sit mauris mattis eu bibendum tempus.
            Feugiat facilisis ac aliquet ut viverra dignissim egestas integer eu. Vitae at semper eu imperdiet
            pharetra quis luctus fusce egestas. Felis in iaculis sodales porttitor purus. Duis pretium ac augue
            blandit justo eget eget. Felis in lectus eu euismod. Faucibus morbi erat hendrerit in quis neque
            tellus morbi vel. Commodo turpis dictum in purus quis diam dictum. Vitae malesuada quam sed pretium
            hac nunc enim fringilla.
          </p>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-4">
            <div className="flex gap-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab ? 'border-navy text-navy' : 'border-transparent text-navy/50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {activeTab === 'Profile' && (
            <div className="space-y-6 text-sm">
              <div>
                <h3 className="font-bold text-navy mb-2">Detailed Experience</h3>
                <ul className="space-y-1.5 text-navy/70">
                  <li className="flex gap-2"><span className="text-primary">→</span> Consultant Interventional Cardiologist, MGM Healthcare</li>
                  <li className="flex gap-2"><span className="text-primary">→</span> Chennai Consultant and Interventional Cardiologist, BGS Gleneagles Global Hospital, Bangalore (Heart Failure specialist and Transplant cardiologist, Gleneagles Global)</li>
                  <li className="flex gap-2"><span className="text-primary">→</span> Consultant Interventional Cardiologist, Manipal Hospitals, Bangalore</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-navy mb-2">Professional Memberships</h3>
                <ul className="space-y-1.5 text-navy/70">
                  <li className="flex gap-2"><span className="text-primary">→</span> Associate Fellow of European Society of Cardiology</li>
                  <li className="flex gap-2"><span className="text-primary">→</span> Lorem Ipsum Medical Council</li>
                  <li className="flex gap-2"><span className="text-primary">→</span> Lorem Ipsum Medical Council</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-navy mb-2">Awards &amp; Recognition</h3>
                <ul className="space-y-1.5 text-navy/70">
                  {[
                    { txt: 'Best Doctor 2020 Award by XYZ Foundation.', year: '2021' },
                    { txt: 'Gold Medalist', year: '2018' },
                    { txt: 'Best Doctor 2015 Award by XYZ Foundation.', year: '2016' },
                    { txt: 'Lorem egestas placerat posuere sit eget nulla.', year: '2014' },
                  ].map((a, i) => (
                    <li key={i} className="flex gap-2 justify-between">
                      <span className="flex gap-2"><span className="text-primary">→</span> {a.txt}</span>
                      <span className="text-navy/50">{a.year}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-navy mb-2">Services</h3>
                <ul className="space-y-1.5 text-navy/70">
                  {['Simple & Complex Angioplasty', 'Device Closure for Congenital Heart Diseases', 'Bypass Surgery', 'Rhythm Therapy including Pacemaker and ICD Implantation', 'FFR (Fractional flow reserve)', 'Dobutamine Stress Test'].map((s, i) => (
                    <li key={i} className="flex gap-2"><span className="text-primary">→</span> {s}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-navy mb-2">Research Journals</h3>
                <ul className="space-y-1.5 text-navy/70">
                  {['Comparision of the D-dimer with Ultrasonic Colour Doppler in Suspected Cases of DVT.', 'Clinical profile of patients with anemia', 'Cytomegalovirus Infection in a Patient Causing Bilateral Papillitis and Gullian Barre Syndrome', 'Sickle cell Anemia with avascular necrosis of femur being managed as rheumatic fever'].map((r, i) => (
                    <li key={i} className="flex gap-2"><span className="text-primary">→</span> {r}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'Other Info' && (
            <div className="text-sm text-navy/70 space-y-2">
              <p>Additional information about {doctor.name}.</p>
            </div>
          )}

          {activeTab === 'Reviews' && (
            <div className="text-sm text-navy/70 space-y-2">
              <p>Patient reviews coming soon.</p>
            </div>
          )}

          {/* FAQs */}
          <section className="mt-10">
            <h2 className="text-xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
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
                  {openFaq === idx && <p className="pb-4 text-sm text-navy/70 leading-relaxed">{faq.a}</p>}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right - Booking */}
        <aside>
          <div className="border border-gray-100 rounded-2xl p-4 sticky top-24">
            <h3 className="font-bold text-navy mb-3 text-sm">Choose the type of appointment</h3>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <button
                onClick={() => setAppointmentType('online')}
                className={`text-xs py-2 rounded-md transition-colors ${
                  appointmentType === 'online' ? 'bg-skyblue text-primary border border-primary' : 'border border-gray-200 text-navy'
                }`}
              >
                Online Consultation
              </button>
              <button
                onClick={() => setAppointmentType('visit')}
                className={`text-xs py-2 rounded-md transition-colors ${
                  appointmentType === 'visit' ? 'bg-skyblue text-primary border border-primary' : 'border border-gray-200 text-navy'
                }`}
              >
                Visit a Doctor
              </button>
            </div>

            <p className="font-medium text-navy text-sm mb-1">Xyz Heathcare</p>
            <p className="text-xs text-navy/70 flex items-center gap-1 mb-1">
              <Building2 size={12} />
              31 George Street, BRYNAMMAN, SA18 5HD
            </p>
            <p className="text-xs text-navy/70 flex items-center gap-1 mb-3">
              <MapPin size={12} />
              Clinic Fee: <span className="font-medium text-navy">$100</span>
            </p>
            <button className="text-xs text-primary hover:underline mb-4">Change Clinic →</button>

            {/* Day toggle */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <button
                onClick={() => setDay('today')}
                className={`text-center p-2 rounded-md transition-colors flex flex-col items-center justify-center ${
                  day === 'today' ? 'bg-primary text-white' : 'bg-skyblue/40 text-navy'
                }`}
              >
                <ChevronLeft size={14} className="self-start" />
                <span className="text-xs font-bold -mt-3">Today</span>
                <span className="text-[10px] mt-0.5">25 Slots Available</span>
              </button>
              <button
                onClick={() => setDay('tomorrow')}
                className={`text-center p-2 rounded-md transition-colors flex flex-col items-end justify-center ${
                  day === 'tomorrow' ? 'bg-primary text-white' : 'bg-skyblue/40 text-navy'
                }`}
              >
                <ChevronRight size={14} className="self-end" />
                <span className="text-xs font-bold -mt-3">Tomorrow</span>
                <span className="text-[10px] mt-0.5">15 Slots Available</span>
              </button>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium text-navy">Morning</p>
                  <span className="text-[10px] text-navy/60">10 Slots</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {morningSlots.map((time, i) => (
                    <button
                      key={i}
                      onClick={() => toast.success(`Slot ${time} selected`)}
                      className="text-[10px] py-1.5 border border-gray-200 rounded text-navy hover:bg-primary hover:text-white hover:border-primary transition-colors"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium text-navy">Afternoon</p>
                  <span className="text-[10px] text-navy/60">2 Slots</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {afternoonSlots1.map((time, i) => (
                    <button
                      key={i}
                      onClick={() => toast.success(`Slot ${time} selected`)}
                      className="text-[10px] py-1.5 border border-gray-200 rounded text-navy hover:bg-primary hover:text-white hover:border-primary transition-colors"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium text-navy">Afternoon</p>
                  <span className="text-[10px] text-navy/60">12 Slots</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {afternoonSlots2.map((time, i) => (
                    <button
                      key={i}
                      onClick={() => toast.success(`Slot ${time} selected`)}
                      className="text-[10px] py-1.5 border border-gray-200 rounded text-navy hover:bg-primary hover:text-white hover:border-primary transition-colors"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
