import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronDown, ChevronUp, Phone, Calendar } from 'lucide-react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const TreatmentPage = ({ treatment }) => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="font-sans text-gray-800 bg-white">

      {/* Hero Section */}
      <section className="relative bg-[#060e1f] text-white overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-blue-600/20 text-blue-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Clove Dental
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4 fraunces">
              {treatment.name}
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl font-light">
              {treatment.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/book-appointment"
                className="bg-blue-600 text-white font-bold px-8 py-3.5 rounded-full hover:bg-blue-500 transition-all shadow-lg text-sm uppercase tracking-wide"
              >
                Book Appointment
              </Link>
              <a
                href="tel:18001200322"
                className="border border-white/25 text-white font-bold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all text-sm uppercase tracking-wide flex items-center justify-center gap-2"
              >
                <Phone size={16} /> Call Now
              </a>
            </div>
          </div>
          
          {/* Image & Stats Card */}
          <div className="relative hidden lg:block">
            {treatment.heroImage && (
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl relative">
                <img src={treatment.heroImage} alt={treatment.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060e1f]/80 to-transparent" />
              </div>
            )}
            
            <div className={`shrink-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 grid grid-cols-2 gap-4 text-center w-full max-w-xs ${treatment.heroImage ? 'absolute -bottom-10 -left-10 shadow-2xl' : ''}`}>
              {treatment.stats.map((s, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-white fraunces">{s.value}</div>
                  <div className="text-blue-200 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Slider Section (if applicable) */}
      {treatment.beforeImage && treatment.afterImage && (
        <section className="bg-gray-50 py-20 border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Real Results. Absolute Precision.</h2>
            <div className="w-12 h-1 bg-blue-600 rounded mx-auto mb-10" />
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-w-4xl mx-auto">
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={treatment.beforeImage} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={treatment.afterImage} alt="After" />}
                className="aspect-video w-full"
              />
            </div>
            <p className="text-gray-500 text-sm mt-6">Drag the slider to see the astonishing transformation.</p>
          </div>
        </section>
      )}

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is {treatment.name}?</h2>
            <div className="w-12 h-1 bg-blue-600 rounded mb-6" />
            <p className="text-gray-600 leading-relaxed text-lg">{treatment.overview}</p>
          </div>
          <div className="bg-blue-50 rounded-3xl p-8">
            <h3 className="font-bold text-gray-900 mb-5 text-lg">Why Choose Clove Dental?</h3>
            <ul className="space-y-3">
              {treatment.whyClove.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Symptoms / Indications */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">When Do You Need This Treatment?</h2>
          <div className="w-12 h-1 bg-blue-600 rounded mx-auto mb-10" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {treatment.symptoms.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-blue-600 font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procedure Steps */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">The Procedure</h2>
        <div className="w-12 h-1 bg-blue-600 rounded mx-auto mb-12" />
        <div className="relative">
          <div className="hidden lg:block absolute left-[50%] top-0 bottom-0 w-px bg-blue-100" />
          <div className="space-y-8">
            {treatment.steps.map((step, i) => (
              <div key={i} className={`flex flex-col lg:flex-row items-start gap-6 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {i + 1}
                    </div>
                    <h3 className="font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pl-11">{step.desc}</p>
                </div>
                <div className="hidden lg:flex w-8 items-center justify-center shrink-0">
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md" />
                </div>
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Frequently Asked Questions</h2>
          <div className="w-12 h-1 bg-blue-600 rounded mx-auto mb-10" />
          <div className="space-y-3">
            {treatment.faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800 pr-4 text-sm">{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={18} className="text-blue-600 shrink-0" /> : <ChevronDown size={18} className="text-gray-400 shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8 text-lg">Book a consultation with our expert dentists at a clinic near you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-appointment"
              className="bg-white text-blue-600 font-bold px-10 py-4 rounded-full hover:bg-blue-50 transition-all shadow-lg text-sm uppercase tracking-wide flex items-center justify-center gap-2"
            >
              <Calendar size={18} /> Book Appointment
            </Link>
            <Link
              to="/our-clinics"
              className="border-2 border-white text-white font-bold px-10 py-4 rounded-full hover:bg-white/10 transition-all text-sm uppercase tracking-wide"
            >
              Find a Clinic
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TreatmentPage;