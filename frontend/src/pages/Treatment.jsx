import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Stethoscope, 
  Sparkles, 
  Trash2, 
  Zap, 
  Smile, 
  Crown, 
  Activity, 
  Scissors, 
  Scaling, 
  MoveHorizontal, 
  Binary 
} from 'lucide-react';

const treatments = [
  {
    name: "Root Canal Treatment",
    path: "/treatment/root-canal",
    icon: <Stethoscope size={28} />,
    info: "Remove infection, save your natural tooth and relieve pain in just 1–2 sittings.",
    tag: "Most Common",
  },
  {
    name: "Teeth Whitening",
    path: "/treatment/teeth-whitening",
    icon: <Sparkles size={28} />,
    info: "Brighten your smile by up to 8 shades with safe, clinically proven whitening.",
    tag: "Cosmetic",
  },
  {
    name: "Wisdom Teeth Removal",
    path: "/treatment/wisdom-teeth-removal",
    icon: <Trash2 size={28} />,
    info: "Painless removal of impacted or problematic wisdom teeth with fast recovery.",
    tag: "Surgical",
  },
  {
    name: "Dental Implants",
    path: "/treatment/dental-implants",
    icon: <Zap size={28} />,
    info: "Permanent, natural-looking tooth replacement using Swiss-grade titanium implants.",
    tag: "Permanent Fix",
  },
  {
    name: "Braces & Aligners",
    path: "/treatment/braces-aligners",
    icon: <Smile size={28} />,
    info: "Straighten teeth with traditional braces or discreet clear aligners.",
    tag: "Orthodontics",
  },
  {
    name: "Dental Crown & Bridge",
    path: "/treatment/crown-bridge",
    icon: <Crown size={28} />,
    info: "Restore damaged or missing teeth with durable, natural-looking crowns and bridges.",
    tag: "Restorative",
  },
  {
    name: "Dentures",
    path: "/treatment/dentures",
    icon: <Smile size={28} />,
    info: "Custom-fitted full or partial dentures that restore your smile and chewing ability.",
    tag: "Restorative",
  },
  {
    name: "Tooth Filling",
    path: "/treatment/tooth-filling",
    icon: <Activity size={28} />,
    info: "Treat cavities quickly with invisible, tooth-coloured composite fillings.",
    tag: "Preventive",
  },
  {
    name: "Veneers",
    path: "/treatment/veneers",
    icon: <Sparkles size={28} className="text-amber-400" />,
    info: "Ultra-thin porcelain shells that transform the colour, shape and size of your teeth.",
    tag: "Cosmetic",
  },
  {
    name: "Tooth Extraction",
    path: "/treatment/tooth-extraction",
    icon: <Scissors size={28} />,
    info: "Safe, painless removal of severely damaged or problematic teeth with expert care.",
    tag: "Surgical",
  },
  {
    name: "Gum Surgery",
    path: "/treatment/gum-surgery",
    icon: <Scaling size={28} />,
    info: "Treat advanced gum disease and restore healthy gums with periodontal surgery.",
    tag: "Surgical",
  },
  {
    name: "Jaw Surgery",
    path: "/treatment/jaw-surgery",
    icon: <MoveHorizontal size={28} />,
    info: "Correct jaw alignment and bite problems with precise orthognathic surgery.",
    tag: "Surgical",
  },
  {
    name: "Bone Grafting",
    path: "/treatment/bone-grafting",
    icon: <Binary size={28} />,
    info: "Rebuild lost jawbone to prepare for implants and restore facial structure.",
    tag: "Surgical",
  },
];

const tagColors = {
  "Most Common": "bg-blue-100 text-blue-700",
  "Cosmetic": "bg-pink-100 text-pink-700",
  "Surgical": "bg-orange-100 text-orange-700",
  "Permanent Fix": "bg-green-100 text-green-700",
  "Orthodontics": "bg-purple-100 text-purple-700",
  "Restorative": "bg-teal-100 text-teal-700",
  "Preventive": "bg-yellow-100 text-yellow-700",
};

const Treatment = () => {
  return (
    <div className="bg-white font-sans">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Clove Dental
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Treatments</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            World-class dental care across 700+ clinics. Browse all treatments and find the right solution for your smile.
          </p>
        </div>
      </section>

      {/* Treatment Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t) => (
            <Link
              key={t.path}
              to={t.path}
              className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-200 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {t.icon}
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tagColors[t.tag]}`}>
                  {t.tag}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                {t.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{t.info}</p>
              <div className="mt-5 flex items-center text-blue-600 text-sm font-semibold gap-1 group-hover:gap-2 transition-all">
                Learn More <ArrowRight size={15} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Treatment You Need?</h2>
          <p className="text-blue-100 mb-8 text-lg">Book a free consultation and let our experts guide you.</p>
          <Link
            to="/book-appointment"
            className="bg-white text-blue-600 font-bold px-10 py-4 rounded-full hover:bg-blue-50 transition-all shadow-lg text-sm uppercase tracking-wide inline-block"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Treatment;