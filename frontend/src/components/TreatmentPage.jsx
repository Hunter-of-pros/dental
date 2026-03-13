import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronDown, ChevronUp, Phone, Calendar } from 'lucide-react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const TreatmentPage = ({ treatment }) => {
  const [openFaq, setOpenFaq] = useState(null);

  // --- Scroll-driven SVG line for Procedure Steps ---
  const stepsContainerRef = useRef(null);
  const dotRefs = useRef([]);
  const [svgPath, setSvgPath] = useState('');
  const [pathLength, setPathLength] = useState(0);
  const [drawLength, setDrawLength] = useState(0);
  const svgPathRef = useRef(null);
  const [svgSize, setSvgSize] = useState({ w: 0, h: 0 });

  // Build the SVG path connecting dots
  const computePath = useCallback(() => {
    const container = stepsContainerRef.current;
    if (!container) return;
    const dots = dotRefs.current.filter(Boolean);
    if (dots.length < 2) return;

    const containerRect = container.getBoundingClientRect();

    // Get center of each dot relative to the container
    const points = dots.map((dot) => {
      const r = dot.getBoundingClientRect();
      return {
        x: r.left + r.width / 2 - containerRect.left,
        y: r.top + r.height / 2 - containerRect.top,
      };
    });

    // Build a smooth cubic bezier path through all points
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const curr = points[i];
      const next = points[i + 1];
      // Control point offset – curves horizontally toward the midpoint
      const cpOffset = Math.abs(next.y - curr.y) * 0.4;
      const cp1x = curr.x;
      const cp1y = curr.y + cpOffset;
      const cp2x = next.x;
      const cp2y = next.y - cpOffset;
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next.x} ${next.y}`;
    }

    setSvgPath(d);
    setSvgSize({ w: containerRect.width, h: containerRect.height });
  }, []);

  // After path renders, grab its total length
  useEffect(() => {
    if (svgPathRef.current && svgPath) {
      setPathLength(svgPathRef.current.getTotalLength());
    }
  }, [svgPath]);

  // Compute path on mount + resize
  useEffect(() => {
    // small delay so layout settles
    const timer = setTimeout(computePath, 200);
    window.addEventListener('resize', computePath);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', computePath);
    };
  }, [computePath, treatment]);

  // Scroll handler – draw the line proportionally
  useEffect(() => {
    if (!pathLength) return;

    const handleScroll = () => {
      const container = stepsContainerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const windowH = window.innerHeight;

      // How far through the section the viewport center has scrolled
      const sectionTop = containerRect.top + window.scrollY;
      const sectionH = containerRect.height;
      const scrollY = window.scrollY + windowH * 0.55;

      let progress = (scrollY - sectionTop) / sectionH;
      progress = Math.max(0, Math.min(1, progress));

      setDrawLength(progress * pathLength);
    };

    handleScroll(); // initial
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathLength]);

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
      {treatment.beforeImage && treatment.afterImage && treatment.beforeImage !== "" && treatment.afterImage !== "" && (
        <section className="bg-gray-50 py-20 border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Real Results. Absolute Precision.</h2>
            <div className="w-12 h-1 bg-blue-600 rounded mx-auto mb-10" />
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-w-4xl mx-auto">
              <ReactCompareSlider
                itemOne={
                  <div className="relative w-full h-full">
                    <ReactCompareSliderImage 
                      src={treatment.beforeImage} 
                      alt="Before" 
                      style={{ filter: 'sepia(0.15) saturate(0.9) brightness(0.9)' }}
                    />
                    <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-white/10">Before</div>
                  </div>
                }
                itemTwo={
                  <div className="relative w-full h-full">
                    <ReactCompareSliderImage src={treatment.afterImage} alt="After" />
                    <div className="absolute bottom-6 right-6 bg-blue-600/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-blue-400/20">After</div>
                  </div>
                }
                className="aspect-video w-full"
              />
            </div>
            <p className="text-gray-500 text-sm mt-6">Drag the slider to see the astonishing transformation.</p>

            {/* Before vs After Comparison Text */}
            {treatment.beforeAfterComparison && (
              <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto text-left">
                {/* Before Column */}
                <div className="bg-red-50 border border-red-100 rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </div>
                    <h3 className="text-lg font-bold text-red-800">{treatment.beforeAfterComparison.before.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {treatment.beforeAfterComparison.before.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-5 h-5 bg-red-200 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        </span>
                        <span className="text-red-700 text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* After Column */}
                <div className="bg-green-50 border border-green-100 rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 className="text-lg font-bold text-green-800">{treatment.beforeAfterComparison.after.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {treatment.beforeAfterComparison.after.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-5 h-5 bg-green-200 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </span>
                        <span className="text-green-700 text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
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
                  <span className="text-blue-700 font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
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
        <div className="relative" ref={stepsContainerRef}>
          {/* SVG curved line (desktop only) */}
          {svgPath && (
            <svg
              className="hidden lg:block absolute inset-0 pointer-events-none"
              width={svgSize.w}
              height={svgSize.h}
              style={{ zIndex: 0, overflow: 'visible' }}
            >
              {/* Faint background track */}
              <path
                d={svgPath}
                fill="none"
                stroke="#DBEAFE"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* Animated blue drawn line */}
              <path
                ref={svgPathRef}
                d={svgPath}
                fill="none"
                stroke="url(#blueGrad)"
                strokeWidth="3"
                strokeLinecap="round"
                style={{
                  strokeDasharray: pathLength,
                  strokeDashoffset: pathLength - drawLength,
                  transition: 'stroke-dashoffset 0.08s linear',
                }}
              />
              {/* Glow effect on the leading edge */}
              <path
                d={svgPath}
                fill="none"
                stroke="#3B82F6"
                strokeWidth="8"
                strokeLinecap="round"
                opacity="0.15"
                style={{
                  strokeDasharray: pathLength,
                  strokeDashoffset: pathLength - drawLength,
                  transition: 'stroke-dashoffset 0.08s linear',
                  filter: 'blur(6px)',
                }}
              />
              <defs>
                <linearGradient id="blueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#2563EB" />
                </linearGradient>
              </defs>
            </svg>
          )}
          <div className="space-y-8">
            {treatment.steps.map((step, i) => (
              <div key={i} className={`flex flex-col lg:flex-row items-start gap-6 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow relative" style={{ zIndex: 1 }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {i + 1}
                    </div>
                    <h3 className="font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pl-11">{step.desc}</p>
                </div>
                <div
                  className="hidden lg:flex w-8 items-center justify-center shrink-0"
                  style={{ zIndex: 2 }}
                  ref={(el) => (dotRefs.current[i] = el)}
                >
                  <div
                    className="rounded-full border-4 border-white shadow-lg transition-all duration-300"
                    style={{
                      width: 20,
                      height: 20,
                      background:
                        drawLength > 0 &&
                        pathLength > 0 &&
                        (drawLength / pathLength) >= (i / Math.max(treatment.steps.length - 1, 1)) * 0.95
                          ? '#2563EB'
                          : '#93C5FD',
                      boxShadow:
                        drawLength > 0 &&
                        pathLength > 0 &&
                        (drawLength / pathLength) >= (i / Math.max(treatment.steps.length - 1, 1)) * 0.95
                          ? '0 0 12px rgba(59, 130, 246, 0.5), 0 2px 8px rgba(0,0,0,0.15)'
                          : '0 2px 6px rgba(0,0,0,0.1)',
                    }}
                  />
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
          <p className="text-white font-medium mb-8 text-lg">Book a consultation with our expert dentists at a clinic near you.</p>
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