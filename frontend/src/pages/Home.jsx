import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
const ReactCompareSlider = React.lazy(() => import('react-compare-slider').then(m => ({ default: m.ReactCompareSlider })));
const ReactCompareSliderImage = React.lazy(() => import('react-compare-slider').then(m => ({ default: m.ReactCompareSliderImage })));

/* ─── Lightweight IntersectionObserver hook (replaces framer-motion useInView) ── */
const useInView = (options = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (options.once !== false) obs.unobserve(el);
      }
    }, { threshold: options.threshold || 0.1, rootMargin: options.rootMargin || '0px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

/* ─── CountUp (pure JS, no framer-motion) ──────────────────────────────── */
const CountUp = ({ target, suffix = '', duration = 2 }) => {
  const [ref, inView] = useInView();
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const end = parseInt(target.replace(/\D/g, ''));
    if (!end) { setCount(target); return; }
    const step = Math.ceil(end / (duration * 60));
    let start = 0;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return <span ref={ref}>{inView ? count : 0}{suffix}</span>;
};

/* ─── Reveal (CSS-only, replaces framer-motion Reveal) ──────────────────── */
const Reveal = ({ children, delay = 0, className = '' }) => {
  const [ref, inView] = useInView({ rootMargin: '-40px' });
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

/* ─── DATA ──────────────────────────────────────────────────────────────── */
const stats = [
  { num: '700', suffix: '+', label: 'Clinics Across India' },
  { num: '1000000', suffix: '+', label: 'Happy Patients' },
  { num: '25',  suffix: '+', label: 'Years of Excellence' },
  { num: '98',  suffix: '%', label: 'Patient Satisfaction' },
];

const treatments = [
  { name: 'Root Canal',       desc: 'Save your natural tooth. Eliminate pain quickly.',        img: '/images/premium/RCT.webp', path: '/treatment/root-canal' },
  { name: 'Dental Implants',  desc: 'Permanent & natural-looking tooth replacements.',          img: '/images/premium/Dental-Implants.webp', path: '/treatment/dental-implants' },
  { name: 'Teeth Whitening',  desc: 'Up to 8 shades brighter through safe treatment.',        img: '/images/premium/teeth-whitening.webp', path: '/treatment/teeth-whitening' },
  { name: 'Braces & Aligners',desc: 'Straight teeth, customized treatment for you.',               img: '/images/premium/Braces-2.webp', path: '/treatment/braces-aligners' },
  { name: 'Crown & Bridge',   desc: 'Restore damaged teeth with durable caps.',               img: '/images/premium/Crowns.webp', path: '/treatment/crown-bridge' },
  { name: 'Dentures',         desc: 'Custom full or partial replacement teeth.',              img: '/images/premium/Dentures.webp', path: '/treatment/dentures' },
  { name: 'Tooth Filling',    desc: 'Treat cavities with invisible composites.',              img: '/images/premium/Dental-Fillings-1-1.webp', path: '/treatment/tooth-filling' },
  { name: 'Wisdom Teeth',     desc: 'Painless extraction with fast recovery.',                img: '/images/premium/Wisdom-Tooth-1.webp', path: '/treatment/wisdom-teeth-removal' },
  { name: 'Gum Surgery',      desc: 'Healthy gums and a strong foundation.',                  img: '/images/premium/Gum-Treatment.webp', path: '/treatment/gum-surgery' },
  { name: 'Veneers',          desc: 'Transform your smile with porcelain shells.',           img: 'https://images.unsplash.com/photo-1599824633857-897dbfc7ae17?w=700&q=80', path: '/treatment/veneers' },
  { name: 'Tooth Extraction', desc: 'Safe removal of problematic or damaged teeth.',         img: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=700&q=80', path: '/treatment/tooth-extraction' },
  { name: 'Jaw Surgery',      desc: 'Correct alignment and bite problems precisely.',        img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=700&q=80', path: '/treatment/jaw-surgery' },
  { name: 'Bone Grafting',    desc: 'Rebuild lost jawbone safely for implants.',             img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=700&q=80', path: '/treatment/bone-grafting' },
];

const whyUs = [
  { icon: '🔬', title: 'Advanced Technology',    desc: 'Digital X-rays, 3D CBCT scans, rotary endodontics for precise, comfortable treatment.' },
  { icon: '🛡️', title: '4-Step Sterilisation',  desc: 'Hospital-grade sterilisation at every clinic. Your safety is non-negotiable.' },
  { icon: '👨‍⚕️', title: 'Expert Specialists',   desc: 'Over 1,300 trained dentists — endodontists, orthodontists, implantologists and more.' },
  { icon: '💳', title: 'Transparent Pricing',    desc: 'No hidden costs. Flexible EMI options and insurance accepted across all clinics.' },
];

const testimonials = [
  { name: 'Priya Sharma', city: 'Mumbai',    text: 'Got my implants done at Clove — seamless, no pain, no surprises. My smile looks completely natural.', rating: 5 },
  { name: 'Arjun Mehta',  city: 'Bengaluru', text: "Had a root canal fear for years. The dentist was so calm — genuinely painless. Wish I'd gone sooner.", rating: 5 },
  { name: 'Sneha Iyer',   city: 'Chennai',   text: 'The clear aligners changed my confidence entirely. Results came faster than expected.', rating: 5 },
];

const marqueeItems = ['Root Canal Treatment','Dental Implants','Teeth Whitening','Braces & Aligners','Veneers','Gum Surgery','Wisdom Teeth Removal','Bone Grafting','Tooth Filling','Dentures'];

/* ─── HOME PAGE ─────────────────────────────────────────────────────────── */
const Home = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Cosmetic', 'Restorative', 'Surgical'];
  const filterMap = {
    All:        treatments,
    Cosmetic:   treatments.filter(t => ['Teeth Whitening','Veneers'].includes(t.name)),
    Restorative:treatments.filter(t => ['Root Canal','Dental Implants'].includes(t.name)),
    Surgical:   treatments.filter(t => ['Gum Surgery','Braces & Aligners'].includes(t.name)),
  };

  /* hero fade-in on mount */
  const [heroLoaded, setHeroLoaded] = useState(false);
  useEffect(() => { requestAnimationFrame(() => setHeroLoaded(true)); }, []);

  return (
    <div className="relative bg-white overflow-x-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        .fraunces { font-family: 'Fraunces', serif; }
        .grad-text {
          background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .tc-wrap:hover .tc-img { transform: scale(1.08); }
        .tc-img { transition: transform 0.6s ease; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .marquee-track { animation: marquee 30s linear infinite; }
        @keyframes float1 { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-12px) rotate(1deg); } }
        @keyframes float2 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(8px); } }
        @keyframes orb-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes scroll-dot { 0%,100% { transform: translateY(0); } 50% { transform: translateY(12px); } }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a1628; }
        ::-webkit-scrollbar-thumb { background: #2563eb; border-radius: 4px; }
      `}</style>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#060e1f]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/premium/hero.webp"
            alt=""
            width="1920" height="1080" fetchPriority="high" aria-hidden="true"
            className="w-full h-full object-cover opacity-50 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060e1f] via-[#060e1f]/85 to-[#060e1f]/40" />
        </div>

        {/* Decorative orbs — CSS only */}
        <div className="absolute w-96 h-96 top-10 right-[8%] rounded-full border border-blue-500/15" style={{ animation: 'orb-spin 28s linear infinite' }} />
        <div className="absolute w-64 h-64 top-24 right-[12%] rounded-full border border-blue-400/10" style={{ animation: 'orb-spin 18s linear infinite reverse' }} />

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div
            style={{
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-blue-400" />
              <span className="text-blue-400 text-xs font-medium uppercase tracking-[0.22em]">
                India's Most Trusted Dental Chain
              </span>
            </div>

            <h1 className="fraunces text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-white leading-[1.04] mb-6">
              Your smile, <em className="grad-text not-italic">perfectly</em> cared for.
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-md font-light">
              Expert dental care at 700+ clinics across India — from routine check-ups to life-changing smile transformations.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/book-appointment"
                className="bg-blue-600 text-white font-semibold px-9 py-4 rounded-full text-sm uppercase tracking-wider inline-block hover:bg-blue-500 transition-colors"
              >
                Book Appointment
              </Link>
              <Link
                to="/treatment"
                className="border border-white/25 text-white font-medium px-9 py-4 rounded-full text-sm uppercase tracking-wider inline-block hover:border-white/60 hover:bg-white/5 transition-all"
              >
                Explore Treatments
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div
            className="hidden lg:block"
            style={{
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? 'translateX(0) scale(1)' : 'translateX(80px) scale(0.88)',
              transition: 'opacity 1s ease 0.3s, transform 1s ease 0.3s',
            }}
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
              <img
                src="/images/premium/hero.webp"
                alt="Dental treatment"
                width="600" height="750" fetchPriority="high"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060e1f]/60 via-transparent to-transparent" />
            </div>

            {/* Floating badges — CSS animation only */}
            <div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-6 py-4 shadow-2xl"
              style={{ opacity: heroLoaded ? 1 : 0, transition: 'opacity 0.7s ease 1s' }}
            >
              <p className="fraunces text-3xl font-bold text-gray-900">98%</p>
              <p className="text-xs text-gray-500 mt-0.5">Patient satisfaction rate</p>
            </div>
            <div
              className="absolute -top-4 -right-4 bg-blue-600 rounded-2xl px-5 py-3 shadow-2xl"
              style={{ opacity: heroLoaded ? 1 : 0, transition: 'opacity 0.7s ease 1.2s' }}
            >
              <p className="fraunces text-2xl font-bold text-white">700+</p>
              <p className="text-white font-medium text-xs">Clinics in India</p>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: heroLoaded ? 1 : 0, transition: 'opacity 0.5s ease 1.5s' }}>
          <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
            <div className="w-1 h-1.5 bg-white/60 rounded-full" style={{ animation: 'scroll-dot 1.6s ease-in-out infinite' }} />
          </div>
        </div>
      </section>

      {/* ── BEFORE & AFTER SLIDER ──────────────────────────────────────── */}
      <section className="bg-white py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#f8fafc] w-full h-[60%] -skew-y-2 origin-top-left -z-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="text-blue-600 text-xs uppercase tracking-[0.22em] font-medium mb-3">Real Results</p>
            <h2 className="fraunces text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              Witness the <em className="text-blue-500 not-italic">transformation.</em>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-md font-light">
              Our expert dentists utilize top-tier clinical precision to orchestrate astonishing smile makeovers. Drag the slider to see the difference.
            </p>
            <Link
              to="/treatment/veneers"
              className="inline-block bg-[#060e1f] text-white font-medium px-8 py-3.5 rounded-full text-sm uppercase tracking-wide hover:bg-blue-600 transition-colors"
            >
              View Veneers
            </Link>
          </Reveal>

          <Reveal delay={0.2} className="relative z-10 w-full h-full">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white aspect-[4/3]">
              <React.Suspense fallback={<div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center"><span className="text-gray-400">Loading...</span></div>}>
                <ReactCompareSlider
                  itemOne={
                    <div className="relative w-full h-full">
                      <ReactCompareSliderImage
                        src="/images/slider/whitening/before.jpg"
                        alt="Before"
                        style={{ filter: 'sepia(0.25) saturate(1.1) brightness(0.95)' }}
                      />
                      <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-white/10">Before</div>
                    </div>
                  }
                  itemTwo={
                    <div className="relative w-full h-full">
                      <ReactCompareSliderImage
                        src="/images/slider/whitening/after.jpg"
                        alt="After"
                      />
                      <div className="absolute bottom-6 right-6 bg-blue-600/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-blue-400/20">After</div>
                    </div>
                  }
                  className="w-full h-full"
                />
              </React.Suspense>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MARQUEE — CSS only ──────────────────────────────────────────── */}
      <div className="overflow-hidden bg-blue-600 py-4">
        <div className="flex whitespace-nowrap marquee-track" style={{ width: 'max-content' }}>
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((t, i) => (
            <span key={i} className="flex items-center gap-4 text-white text-sm font-medium tracking-wide mx-6">
              <span className="w-1.5 h-1.5 bg-blue-200 rounded-full inline-block" />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── COUNT STATS ───────────────────────────────────────────────── */}
      <section className="bg-[#060e1f] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 border border-white/10 rounded-3xl overflow-hidden">
              {stats.map((s, i) => (
                <div key={i} className="p-10 text-center hover:bg-blue-600/[0.08] transition-colors">
                  <p className="fraunces text-5xl lg:text-6xl font-bold text-white mb-2">
                    <CountUp target={s.num} suffix={s.suffix} duration={2.5} />
                  </p>
                  <p className="text-slate-400 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TREATMENTS ─────────────────────────────────────────────────── */}
      <section className="py-28 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <Reveal>
              <p className="text-blue-600 text-xs uppercase tracking-[0.22em] font-medium mb-3">What We Offer</p>
              <h2 className="fraunces text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Treatments built around you.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link to="/treatment" aria-label="View all treatments" className="group flex items-center gap-2 text-gray-700 font-medium text-sm border-b border-gray-300 pb-1 hover:border-blue-500 hover:text-blue-600 transition-all self-end">
              View all
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>

        {/* Filter tabs */}
        <Reveal>
          <div className="flex flex-wrap gap-3 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === f
                    ? 'bg-blue-600 text-white'
                    : 'border border-gray-200 text-gray-700 hover:border-blue-300'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filterMap[activeFilter].map((t) => (
            <div key={t.name} className="tc-wrap group rounded-3xl overflow-hidden bg-white border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 cursor-pointer">
              <Link to={t.path} className="block h-full flex flex-col">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={t.img} alt={t.name} width="500" height="375" loading="lazy" className="tc-img w-full h-full object-cover" />
                </div>
                <div className="p-5 flex items-start justify-between flex-1">
                  <div>
                    <h3 className="fraunces text-lg font-bold text-gray-900 mb-1 leading-tight">{t.name}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{t.desc}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 ml-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    →
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY CLOVE ───────────────────────────────────────────────────── */}
      <section className="bg-[#f4f7ff] py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          {/* Image stack */}
          <div className="relative h-[560px] hidden lg:block">
            <Reveal className="absolute top-0 left-0 w-3/4 h-80">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=700&q=85"
                alt="Clove clinic"
                width="700" height="500" loading="lazy"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </Reveal>
            <Reveal delay={0.2} className="absolute bottom-0 right-0 w-2/3 h-64">
              <img
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=700&q=85"
                alt="Clove dentist"
                width="700" height="500" loading="lazy"
                className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white"
              />
            </Reveal>

            {/* Floating cards — CSS animation only */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-2xl px-6 py-4 shadow-2xl z-10"
              style={{ animation: 'float1 3.5s ease-in-out infinite' }}
            >
              <p className="fraunces text-3xl font-bold">25+</p>
              <p className="text-white text-xs mt-0.5">Years of trusted care</p>
            </div>
            <div
              className="absolute top-4 right-4 bg-white rounded-2xl px-4 py-3 shadow-xl z-10 border border-blue-100"
              style={{ animation: 'float2 4s ease-in-out infinite 0.8s' }}
            >
              <p className="fraunces text-xl font-bold text-gray-900">1M+</p>
              <p className="text-gray-600 text-xs">Patients treated</p>
            </div>
          </div>

          {/* Cards */}
          <div>
            <Reveal>
              <p className="text-blue-600 text-xs uppercase tracking-[0.22em] font-medium mb-3">Why Choose Us</p>
              <h2 className="fraunces text-5xl font-bold text-gray-900 leading-tight mb-12">
                The Clove<br />
                <em className="text-blue-500 not-italic">difference.</em>
              </h2>
            </Reveal>
            <div className="space-y-4">
              {whyUs.map((w, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="flex gap-5 p-5 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:translate-x-2 transition-all duration-300">
                    <div className="text-3xl shrink-0 mt-0.5 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                      {w.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{w.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────── */}
      <section className="py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-blue-600 text-xs uppercase tracking-[0.22em] font-medium mb-3">Patient Stories</p>
              <h2 className="fraunces text-5xl font-bold text-gray-900">
                Real smiles. Real results.
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-[#f4f7ff] rounded-3xl p-8 border border-gray-100 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex gap-1 mb-5">
                    {[...Array(t.rating)].map((_, j) => (
                      <span key={j} className="text-amber-400 text-base">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm flex-1 mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold fraunces">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                      <p className="text-gray-500 text-xs">{t.city}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#060e1f] py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#060e1f] via-transparent to-[#060e1f]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-blue-400 text-xs uppercase tracking-[0.22em] font-medium mb-4">
              Take the first step
            </p>
            <h2 className="fraunces text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Ready for a smile <em className="grad-text not-italic">you love?</em>
            </h2>
            <p className="text-slate-300 text-lg font-light mb-12 max-w-xl mx-auto">
              Book a consultation at your nearest Clove Dental clinic. 700+ locations, zero excuses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-appointment"
                className="bg-blue-600 text-white font-semibold px-10 py-4 rounded-full text-sm uppercase tracking-wider inline-block hover:bg-blue-500 transition-colors"
              >
                Book Free Consultation
              </Link>
              <Link
                to="/our-clinics"
                className="border border-white/25 text-white font-medium px-10 py-4 rounded-full text-sm uppercase tracking-wider inline-block hover:border-white/60 transition-all"
              >
                Find a Clinic
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;