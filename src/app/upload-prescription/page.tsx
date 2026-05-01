'use client';

import { useState, useRef } from 'react';
import { Upload, CheckCircle2, XCircle, FileText, CalendarDays, User, Pill, FileBarChart, MapPin, Truck } from 'lucide-react';
import toast from 'react-hot-toast';

const validRequirements = [
  { icon: User, label: 'Doctor Details' },
  { icon: CalendarDays, label: 'Date of Prescription' },
  { icon: User, label: 'Patient Details' },
  { icon: Pill, label: 'Medicine Details' },
  { icon: FileBarChart, label: 'Maximum File Size' },
];

const steps = [
  { num: 1, icon: Upload, desc: 'Click to upload image of prescription or desired product.' },
  { num: 2, icon: FileText, desc: 'You will receive a notification to confirm billing.' },
  { num: 3, icon: MapPin, desc: 'Add delivery address and place the order.' },
  { num: 4, icon: Truck, desc: 'Now, sit back! your medicines will get delivered at your doorstep.' },
];

export default function UploadPrescriptionPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [showInquiry, setShowInquiry] = useState(false);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      toast.success('Prescription uploaded!');
    }
  };

  return (
    <>
      {/* Hero Upload */}
      <section className="bg-skyblue py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <button
              onClick={() => fileRef.current?.click()}
              className="aspect-square max-w-xs mx-auto md:ml-auto bg-white border-2 border-dashed border-primary/40 rounded-2xl flex flex-col items-center justify-center text-navy hover:bg-primary-50 transition-colors"
            >
              <Upload size={32} className="text-primary mb-2" />
              <p className="text-sm">Upload</p>
              {fileName && <p className="text-xs text-navy/60 mt-2 px-4 text-center">{fileName}</p>}
            </button>
            <input ref={fileRef} type="file" accept="image/*,.pdf" onChange={handleFile} className="hidden" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-navy mb-2">Upload Prescription</h1>
              <p className="text-sm text-navy/70 mb-3">Please click browse button to upload prescription</p>
              <button onClick={() => setShowInquiry(true)} className="text-primary text-sm font-medium hover:underline">
                Patient Information
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Valid Prescription */}
      <section className="container-custom py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-2">Valid Prescription</h2>
        <p className="text-sm text-navy/70 text-center max-w-2xl mx-auto mb-2">
          Our pharmacist will dispense medicines only if the prescription is valid &amp; it meets all government regulations.
        </p>
        <p className="text-sm text-navy/70 text-center mb-8">
          Make sure the prescription you upload contains the following elements:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {validRequirements.map((req, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl p-6 text-center hover:border-primary transition-colors">
              <req.icon className="mx-auto text-primary mb-2" size={36} />
              <p className="text-sm font-bold text-navy">{req.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Do's & Don'ts */}
      <section className="container-custom pb-12">
        <div className="bg-gray-50 rounded-2xl p-6 max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-navy text-center mb-6">Do's &amp; Don'ts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-success flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-bold text-navy text-sm">Upload Clear Image</p>
                <p className="text-xs text-navy/70 mt-1">
                  Ensure picture is taken with clear visible handwriting/ type. Place prescription on a flat surface to get better focus and clear image.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <XCircle className="text-danger flex-shrink-0 mt-0.5" size={20} />
                <p className="text-sm font-bold text-navy">No Pictures of Medicines</p>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="text-danger flex-shrink-0 mt-0.5" size={20} />
                <p className="text-sm font-bold text-navy">Do not Crop the Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-primary py-12 mb-12">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">How it works</h2>
          <p className="text-white/80 text-center mb-8">Upload prescription and we will deliver your medicines</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-5 text-center">
                <div className="w-12 h-12 mx-auto bg-skyblue rounded-full flex items-center justify-center mb-3">
                  <step.icon className="text-primary" size={20} />
                </div>
                <p className="font-bold text-navy mb-1">Step {step.num}</p>
                <p className="text-xs text-navy/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Inquiry Modal */}
      {showInquiry && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto relative animate-scale-in">
            <button
              onClick={() => setShowInquiry(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-navy text-white rounded-full flex items-center justify-center hover:bg-navy-900"
            >
              ×
            </button>
            <h2 className="text-xl font-bold text-navy mb-1">Patient Inquiry Form</h2>
            <p className="text-sm text-navy/70 mb-5">Please enter patient information below:</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success('Patient information saved!');
                setShowInquiry(false);
              }}
              className="space-y-3"
            >
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
                  <label className="block text-xs text-navy mb-1">Email*</label>
                  <input type="email" placeholder="Your email address" className="input-field" />
                </div>
                <div>
                  <label className="block text-xs text-navy mb-1">Date of Birth</label>
                  <div className="grid grid-cols-3 gap-1">
                    <select className="input-field !px-2"><option>Day</option></select>
                    <select className="input-field !px-2"><option>Month</option></select>
                    <select className="input-field !px-2"><option>Year</option></select>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs text-navy mb-2">Gender</p>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="radio" name="gender" className="w-4 h-4 accent-primary" />
                    Male
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="radio" name="gender" className="w-4 h-4 accent-primary" />
                    Female
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-xs text-navy mb-1">Address*</label>
                <input type="text" placeholder="Address" className="input-field" />
              </div>
              <div>
                <label className="block text-xs text-navy mb-1">Phone Number*</label>
                <input type="text" placeholder="Phone" className="input-field" />
              </div>
              <button type="submit" className="btn-primary text-sm">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
