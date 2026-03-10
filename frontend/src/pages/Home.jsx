import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useAnimationFrame,
  AnimatePresence,
  LayoutGroup,
  useVelocity,
  useSpring as useFramerSpring,
} from 'framer-motion';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

/* ─────────────────────────────────────────────────────────────────────────────
   FONTS + GLOBAL STYLES
───────────────────────────────────────────────────────────────────────────── */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,300;1,9..144,700&display=swap');
    *, *::before, *::after { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    .fraunces { font-family: 'Fraunces', serif; }
    .dm       { font-family: 'DM Sans', sans-serif; }
    body      { font-family: 'DM Sans', sans-serif; }

    /* Scrollbar */
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #0a1628; }
    ::-webkit-scrollbar-thumb { background: #2563eb; border-radius: 4px; }

    /* Marquee */
    .marquee-wrap { overflow: hidden; display: flex; white-space: nowrap; flex-wrap: nowrap; }

    /* Cursor dot */
    .cursor-dot {
      pointer-events: none;
      position: fixed;
      top: 0; left: 0;
      width: 12px; height: 12px;
      background-color: #3b82f6;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      z-index: 10000;
      mix-blend-mode: difference;
    }
    .cursor-outline {
      pointer-events: none;
      position: fixed;
      top: 0; left: 0;
      width: 40px; height: 40px;
      border: 1px solid rgba(59,130,246,0.5);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      z-index: 9999;
      transition: width 0.2s, height 0.2s, background-color 0.2s;
    }
    body:has(a:hover, button:hover) .cursor-outline {
      width: 60px; height: 60px;
      background-color: rgba(59,130,246,0.1);
      border-color: transparent;
    }

    /* Treatment card image zoom */
    .tc-img { transition: transform 0.7s cubic-bezier(0.22,1,0.36,1); }
    .tc-wrap:hover .tc-img { transform: scale(1.08); }

    /* Horizontal scroll section */
    .h-scroll-track {
      display: flex;
      gap: 1.5rem;
      width: max-content;
    }

    /* Text gradient */
    .grad-text {
      background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* Noise overlay */
    .noise::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
      opacity: 0.04;
      pointer-events: none;
    }
  `}</style>
);

/* ─────────────────────────────────────────────────────────────────────────────
   SCROLL REVEAL — word-by-word stagger
───────────────────────────────────────────────────────────────────────────── */
const WordReveal = ({ text, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const words = text.split(' ');
  return (
    <span ref={ref} className={className} style={{ display: 'inline-block' }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
          initial={{ opacity: 0, y: 30, rotateX: -40 }}
          animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{
            duration: 0.65,
            delay: delay + i * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   SCROLL REVEAL — fade + slide up
───────────────────────────────────────────────────────────────────────────── */
const Reveal = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-70px' });
  const dirs = {
    up:    { initial: { opacity: 0, y: 50 },    animate: { opacity: 1, y: 0 } },
    down:  { initial: { opacity: 0, y: -50 },   animate: { opacity: 1, y: 0 } },
    left:  { initial: { opacity: 0, x: 60 },    animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: -60 },   animate: { opacity: 1, x: 0 } },
    scale: { initial: { opacity: 0, scale: 0.85 }, animate: { opacity: 1, scale: 1 } },
  };
  const { initial, animate } = dirs[direction] || dirs.up;
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={inView ? animate : initial}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   COUNT ANIMATION
───────────────────────────────────────────────────────────────────────────── */
const CountUp = ({ target, suffix = '', duration = 2 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = parseInt(target.replace(/\D/g, ''));
    if (!end) { 
      setTimeout(() => setCount(target), 0); 
      return; 
    }
    const step = Math.ceil(end / (duration * 60));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{inView ? count : 0}{suffix}</span>;
};

/* ─────────────────────────────────────────────────────────────────────────────
   MAGNETIC BUTTON — gesture-based
───────────────────────────────────────────────────────────────────────────── */
const MagneticBtn = ({ children, className = '', to }) => {
  return (
    <div style={{ display: 'inline-block' }}>
      <Link to={to} className={className}>{children}</Link>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   TILT CARD — gesture-based 3D tilt
───────────────────────────────────────────────────────────────────────────── */
const TiltCard = ({ children, className = '' }) => {
  const ref = useRef(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 14);
    rotateX.set(-py * 14);
  };
  const reset = () => { rotateX.set(0); rotateY.set(0); };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 900, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────────────────────────────────────
   PARALLAX VELOCITY MARQUEE
───────────────────────────────────────────────────────────────────────────── */
const VelocityMarquee = ({ children, baseVelocity = 5 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useFramerSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  const x = useTransform(baseX, (v) => `${v}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    let nextValue = baseX.get() + moveBy;

    if (nextValue <= -50) nextValue += 50;
    else if (nextValue > 0) nextValue -= 50;

    baseX.set(nextValue);
  });

  return (
    <div className="marquee-wrap bg-blue-600 py-4">
      <motion.div className="flex gap-12 whitespace-nowrap min-w-full" style={{ x }}>
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   STAGGER CONTAINER VARIANTS
───────────────────────────────────────────────────────────────────────────── */
const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const staggerItemLeft = {
  hidden: { opacity: 0, x: -40 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

/* ─────────────────────────────────────────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────────────────────────────────────────── */
const Home = () => {
  /* Custom Cursor */
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  
  useEffect(() => {
    const move = (e) => {
      if (cursorDotRef.current && cursorOutlineRef.current) {
        cursorDotRef.current.style.left = e.clientX + 'px';
        cursorDotRef.current.style.top  = e.clientY + 'px';
        
        // Slight lag for outline
        cursorOutlineRef.current.animate({
          left: e.clientX + 'px',
          top: e.clientY + 'px'
        }, { duration: 500, fill: 'forwards' });
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  /* Hero parallax */
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroBgY   = useTransform(heroScroll, [0, 1], ['0%', '40%']);
  const heroTextY = useTransform(heroScroll, [0, 1], ['0%', '25%']);
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);

  /* Horizontal scroll for treatments removed as it was unused and causing a console warning */

  /* Filter tabs — Layout Animation */
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Cosmetic', 'Restorative', 'Surgical'];
  const filterMap = {
    All:        treatments,
    Cosmetic:   treatments.filter(t => ['Teeth Whitening','Veneers'].includes(t.name)),
    Restorative:treatments.filter(t => ['Root Canal','Dental Implants'].includes(t.name)),
    Surgical:   treatments.filter(t => ['Gum Surgery','Braces & Aligners'].includes(t.name)),
  };

  /* Progress bar on scroll */
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  /* Why us section parallax */
  const whyRef = useRef(null);
  const { scrollYProgress: whyScroll } = useScroll({ target: whyRef, offset: ['start end', 'end start'] });
  const whyImgY = useTransform(whyScroll, [0, 1], ['-10%', '10%']);

  return (
    <div className="relative bg-white overflow-x-hidden dm">
      <GlobalStyles />

      {/* Custom Cursor */}
      <div ref={cursorDotRef} className="cursor-dot hidden lg:block" />
      <div ref={cursorOutlineRef} className="cursor-outline hidden lg:block" />

      {/* Page scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-blue-500 origin-left z-[9998]"
        style={{ scaleX }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-[#060e1f] noise">
        {/* Deep parallax background */}
        <motion.div className="absolute inset-0" style={{ y: heroBgY }}>
          <img
            src="/images/premium/hero.webp"
            alt=""
            width="1920" height="1080" fetchPriority="high" aria-hidden="true"
            className="w-full h-full object-cover opacity-50 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060e1f] via-[#060e1f]/85 to-[#060e1f]/40" />
        </motion.div>

        {/* Floating orbs */}
        {[
          { size: 'w-96 h-96', pos: 'top-10 right-[8%]', duration: 28, color: 'border-blue-500/15' },
          { size: 'w-64 h-64', pos: 'top-24 right-[12%]', duration: 18, color: 'border-blue-400/10' },
          { size: 'w-48 h-48', pos: 'bottom-20 right-[5%]', duration: 22, color: 'border-violet-400/10' },
        ].map((orb, i) => (
          <motion.div
            key={i}
            className={`absolute ${orb.size} ${orb.pos} rounded-full border ${orb.color}`}
            animate={{ rotate: i % 2 === 0 ? 360 : -360, scale: [1, 1.04, 1] }}
            transition={{ rotate: { duration: orb.duration, repeat: Infinity, ease: 'linear' }, scale: { duration: 4, repeat: Infinity } }}
          />
        ))}

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div style={{ y: heroTextY, opacity: heroOpacity }}>
            {/* Stagger: eyebrow + headline + sub + btns */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={staggerItem} className="flex items-center gap-3 mb-8">
                <motion.div
                  className="h-px bg-blue-400"
                  initial={{ width: 0 }}
                  animate={{ width: 32 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                <span className="text-blue-400 text-xs font-medium uppercase tracking-[0.22em]">
                  India's Most Trusted Dental Chain
                </span>
              </motion.div>

              <motion.h1
                variants={staggerItem}
                className="fraunces text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-white leading-[1.04] mb-6"
              >
                Your smile,{' '}
                <motion.em
                  className="grad-text not-italic"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: '200%' }}
                >
                  perfectly
                </motion.em>{' '}
                cared for.
              </motion.h1>

              <motion.p variants={staggerItem} className="text-slate-300 text-lg leading-relaxed mb-10 max-w-md font-light">
                Expert dental care at 700+ clinics across India — from routine check-ups to life-changing smile transformations.
              </motion.p>

              <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
                {/* Magnetic button */}
                <MagneticBtn
                  to="/book-appointment"
                  className="relative overflow-hidden bg-blue-600 text-white font-semibold px-9 py-4 rounded-full text-sm uppercase tracking-wider inline-block"
                >
                  <motion.span
                    className="absolute inset-0 bg-blue-400 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: 'center' }}
                  />
                  <span className="relative z-10">Book Appointment</span>
                </MagneticBtn>

                <MagneticBtn
                  to="/treatment"
                  className="border border-white/25 text-white font-medium px-9 py-4 rounded-full text-sm uppercase tracking-wider inline-block hover:border-white/60 hover:bg-white/5 transition-all"
                >
                  Explore Treatments
                </MagneticBtn>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Hero image — 3D tilt on hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 80 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <TiltCard className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
              <img
                src="/images/premium/hero.webp"
                alt="Dental treatment"
                width="600" height="750" fetchPriority="high"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060e1f]/60 via-transparent to-transparent" />
            </TiltCard>

            {/* Floating badges */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-6 py-4 shadow-2xl"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              whileHover={{ scale: 1.05, rotate: -1 }}
            >
              <p className="fraunces text-3xl font-bold text-gray-900">98%</p>
              <p className="text-xs text-gray-500 mt-0.5">Patient satisfaction rate</p>
            </motion.div>
            <motion.div
              className="absolute -top-4 -right-4 bg-blue-600 rounded-2xl px-5 py-3 shadow-2xl"
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.7 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <p className="fraunces text-2xl font-bold text-white">700+</p>
              <p className="text-white font-medium text-xs">Clinics in India</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
          >
            <motion.div
              className="w-1 h-1.5 bg-white/60 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ── BEFORE & AFTER SLIDER ──────────────────────────────────────── */}
      <section className="bg-white py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#f8fafc] w-full h-[60%] -skew-y-2 origin-top-left -z-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal direction="right">
              <p className="text-blue-600 text-xs uppercase tracking-[0.22em] font-medium mb-3">Real Results</p>
              <h2 className="fraunces text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                Witness the <em className="text-blue-500 not-italic">transformation.</em>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-md font-light">
                Our expert dentists utilize top-tier clinical precision to orchestrate astonishing smile makeovers. Drag the slider to see the difference.
              </p>
              <MagneticBtn
                to="/treatment/veneers"
                className="inline-block bg-[#060e1f] text-white font-medium px-8 py-3.5 rounded-full text-sm uppercase tracking-wide hover:bg-blue-600 transition-colors"
              >
                View Veneers
              </MagneticBtn>
            </Reveal>
          </div>
          
          <Reveal direction="left" delay={0.2} className="relative z-10 w-full h-full">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white aspect-[4/3]">
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
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MARQUEE ───────────────────────────────────────────────────── */}
      <VelocityMarquee baseVelocity={2}>
        {marqueeItems.map((t, i) => (
          <span key={i} className="flex items-center gap-4 text-white text-sm font-medium tracking-wide mx-6">
            <motion.span
              className="w-1.5 h-1.5 bg-blue-200 rounded-full inline-block"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
            />
            {t}
          </span>
        ))}
      </VelocityMarquee>

      {/* ── COUNT STATS ───────────────────────────────────────────────── */}
      <section className="bg-[#060e1f] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 border border-white/10 rounded-3xl overflow-hidden"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="p-10 text-center relative group"
                whileHover={{ backgroundColor: 'rgba(37,99,235,0.08)' }}
              >
                {/* Animated underline on hover */}
                <motion.div
                  className="absolute bottom-0 left-1/2 h-0.5 bg-blue-500"
                  initial={{ width: 0, x: '-50%' }}
                  whileHover={{ width: '60%' }}
                  transition={{ duration: 0.3 }}
                />
                <p className="fraunces text-5xl lg:text-6xl font-bold text-white mb-2">
                  <CountUp target={s.num} suffix={s.suffix} duration={2.5} />
                </p>
                <p className="text-slate-400 text-sm">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TREATMENTS — Filter + Layout Animation ────────────────────── */}
      <section className="py-28 px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <Reveal direction="right">
              <p className="text-blue-600 text-xs uppercase tracking-[0.22em] font-medium mb-3">What We Offer</p>
            </Reveal>
            <h2 className="fraunces text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <WordReveal text="Treatments built around you." delay={0.1} />
            </h2>
          </div>
          <Reveal direction="left" delay={0.2}>
            <Link to="/treatment" aria-label="View all treatments" className="group flex items-center gap-2 text-gray-700 font-medium text-sm border-b border-gray-300 pb-1 hover:border-blue-500 hover:text-blue-600 transition-all self-end">
              View all
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.4, repeat: Infinity }} aria-hidden="true">→</motion.span>
            </Link>
          </Reveal>
        </div>

        {/* Filter tabs — LayoutGroup for shared layout animation */}
        <LayoutGroup>
          <Reveal>
            <div className="flex flex-wrap gap-3 mb-10">
              {filters.map((f) => (
                <motion.button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className="relative px-5 py-2 rounded-full text-sm font-medium transition-colors"
                  style={{ color: activeFilter === f ? '#fff' : '#374151' }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {activeFilter === f && (
                    <motion.div
                      layoutId="pill"
                      className="absolute inset-0 bg-blue-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {activeFilter !== f && (
                    <span className="absolute inset-0 border border-gray-200 rounded-full" />
                  )}
                  <span className="relative z-10">{f}</span>
                </motion.button>
              ))}
            </div>
          </Reveal>

          {/* Grid with layout animations */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filterMap[activeFilter].map((t, i) => (
                <motion.div
                  key={t.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <TiltCard className="tc-wrap group block rounded-3xl overflow-hidden bg-white border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 cursor-pointer h-full">
                    <Link to={t.path} className="block h-full flex flex-col">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img src={t.img} alt={t.name} width="500" height="375" loading="lazy" className="tc-img w-full h-full object-cover" />
                      </div>
                      <div className="p-5 flex items-start justify-between flex-1">
                        <div>
                          <h3 className="fraunces text-lg font-bold text-gray-900 mb-1 leading-tight">{t.name}</h3>
                          <p className="text-gray-500 text-xs leading-relaxed">{t.desc}</p>
                        </div>
                        <motion.div
                          className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 ml-3"
                          whileHover={{ scale: 1.2, backgroundColor: '#2563eb', color: '#fff', rotate: 45 }}
                          transition={{ duration: 0.25 }}
                        >
                          →
                        </motion.div>
                      </div>
                    </Link>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </section>

      {/* ── WHY CLOVE — parallax image + stagger cards ────────────────── */}
      <section ref={whyRef} className="bg-[#f4f7ff] py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">

          {/* Parallax image stack */}
          <div className="relative h-[560px] hidden lg:block">
            <motion.div style={{ y: whyImgY }} className="absolute top-0 left-0 w-3/4 h-80">
              <Reveal direction="right">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=700&q=85"
                  alt="Clove clinic"
                  width="700" height="500" loading="lazy"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </Reveal>
            </motion.div>
            <motion.div
              style={{ y: useTransform(whyScroll, [0, 1], ['5%', '-5%']) }}
              className="absolute bottom-0 right-0 w-2/3 h-64"
            >
              <Reveal direction="left" delay={0.2}>
                <img
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=700&q=85"
                  alt="Clove dentist"
                  width="700" height="500" loading="lazy"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white"
                />
              </Reveal>
            </motion.div>

            {/* Floating card */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-2xl px-6 py-4 shadow-2xl z-10"
              animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.08 }}
            >
              <p className="fraunces text-3xl font-bold">25+</p>
              <p className="text-white text-xs mt-0.5">Years of trusted care</p>
            </motion.div>

            {/* Second floating badge */}
            <motion.div
              className="absolute top-4 right-4 bg-white rounded-2xl px-4 py-3 shadow-xl z-10 border border-blue-100"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            >
              <p className="fraunces text-xl font-bold text-gray-900">1M+</p>
              <p className="text-gray-600 text-xs">Patients treated</p>
            </motion.div>
          </div>

          {/* Stagger cards */}
          <div>
            <Reveal direction="up">
              <p className="text-blue-600 text-xs uppercase tracking-[0.22em] font-medium mb-3">Why Choose Us</p>
              <h2 className="fraunces text-5xl font-bold text-gray-900 leading-tight mb-12">
                The Clove<br />
                <em className="text-blue-500 not-italic">difference.</em>
              </h2>
            </Reveal>
            <motion.div
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
            >
              {whyUs.map((w, i) => (
                <motion.div
                  key={i}
                  variants={staggerItemLeft}
                  className="flex gap-5 p-5 rounded-2xl bg-white border border-gray-100 cursor-default"
                  whileHover={{ x: 8, borderColor: '#bfdbfe', boxShadow: '0 8px 30px rgba(37,99,235,0.08)' }}
                  transition={{ duration: 0.25 }}
                >
                  <motion.div
                    className="text-3xl shrink-0 mt-0.5 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                    transition={{ duration: 0.4 }}
                  >
                    {w.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{w.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS — drag carousel ──────────────────────────────── */}
      <section className="py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-blue-600 text-xs uppercase tracking-[0.22em] font-medium mb-3">Patient Stories</p>
              <h2 className="fraunces text-5xl font-bold text-gray-900">
                <WordReveal text="Real smiles. Real results." delay={0} />
              </h2>
            </div>
          </Reveal>

          {/* Draggable slider — Gesture Animation */}
          <motion.div
            className="flex gap-6 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ right: 0, left: -(testimonials.length * 380) }}
            whileDrag={{ scale: 0.98 }}
            dragElastic={0.1}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <motion.div
                key={i}
                className="min-w-[340px] bg-[#f4f7ff] rounded-3xl p-8 border border-gray-100 flex flex-col select-none"
                whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(37,99,235,0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, j) => (
                    <motion.span
                      key={j}
                      className="text-amber-400 text-base"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: j * 0.08 }}
                      viewport={{ once: true }}
                    >★</motion.span>
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
              </motion.div>
            ))}
          </motion.div>
          <p className="text-center text-gray-500 text-xs mt-6 tracking-wide">← Drag to explore →</p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#060e1f] py-32 noise">
        {/* Parallax bg */}
        <motion.div
          className="absolute inset-0"
          style={{ y: useTransform(scrollYProgress, [0.8, 1], ['-5%', '5%']) }}
        >
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1800&q=70"
            alt=""
            width="1800" height="1200" loading="lazy" aria-hidden="true"
            className="w-full h-full object-cover opacity-15"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#060e1f] via-transparent to-[#060e1f]" />

        {/* Pulsing rings */}
        {[1, 2, 3].map((n) => (
          <motion.div
            key={n}
            className="absolute right-16 top-1/2 -translate-y-1/2 rounded-full border border-blue-500/15"
            style={{ width: n * 140, height: n * 140 }}
            animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.2, 0.4] }}
            transition={{ duration: 3 + n, repeat: Infinity, delay: n * 0.4 }}
          />
        ))}

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.p variants={staggerItem} className="text-blue-400 text-xs uppercase tracking-[0.22em] font-medium mb-4">
              Take the first step
            </motion.p>
            <motion.h2 variants={staggerItem} className="fraunces text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Ready for a smile{' '}
              <em className="grad-text not-italic">you love?</em>
            </motion.h2>
            <motion.p variants={staggerItem} className="text-slate-300 text-lg font-light mb-12 max-w-xl mx-auto">
              Book a consultation at your nearest Clove Dental clinic. 700+ locations, zero excuses.
            </motion.p>
            <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticBtn
                to="/book-appointment"
                className="relative overflow-hidden bg-blue-600 text-white font-semibold px-10 py-4 rounded-full text-sm uppercase tracking-wider inline-block"
              >
                <motion.span
                  className="absolute inset-0 bg-blue-400 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ transformOrigin: 'center' }}
                />
                <span className="relative z-10">Book Free Consultation</span>
              </MagneticBtn>
              <MagneticBtn
                to="/our-clinics"
                className="border border-white/25 text-white font-medium px-10 py-4 rounded-full text-sm uppercase tracking-wider inline-block hover:border-white/60 transition-all"
              >
                Find a Clinic
              </MagneticBtn>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;