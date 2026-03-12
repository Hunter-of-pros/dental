import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ChevronRight, Smile } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1122] text-white pt-20 pb-10 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                <Smile className="text-white fill-current" size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight fraunces">Clove <span className="text-blue-500">Dental</span></span>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              Experience world-class dental care with our team of specialists. We blend advanced technology with a gentle touch to give you the smile you deserve.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Linkedin, label: "LinkedIn" }
              ].map(
                // eslint-disable-next-line no-unused-vars
                ({ Icon, label }, i) => (
                <a key={i} href="#" aria-label={label} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all text-slate-400 hover:text-white">
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-8 fraunces">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Treatments', path: '/treatment' },
                { name: 'Our Clinics', path: '/our-clinics' },
                { name: 'Doctors', path: '/doctors' },
                { name: 'Book Appointment', path: '/book-appointment' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group">
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-lg font-bold mb-8 fraunces">Treatments</h3>
            <ul className="space-y-4">
              {[
                { name: 'Teeth Whitening', path: '/treatment/teeth-whitening' },
                { name: 'Root Canal', path: '/treatment/root-canal' },
                { name: 'Dental Implants', path: '/treatment/dental-implants' },
                { name: 'Braces & Aligners', path: '/treatment/braces-aligners' },
                { name: 'Veneers', path: '/treatment/veneers' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group">
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold mb-8 fraunces">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-500 shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Call Anytime</div>
                  <a href="tel:18001200322" className="text-sm font-semibold hover:text-blue-400 transition-colors">1800-1200-322</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-500 shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Email Us</div>
                  <a href="mailto:care@clovedental.in" className="text-sm font-semibold hover:text-blue-400 transition-colors">care@clovedental.in</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-500 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Main Office</div>
                  <p className="text-sm font-semibold text-slate-400">New Delhi, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs">
            © {currentYear} Clove Dental. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-400 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-white text-xs transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-white text-xs transition-colors">Cancellation Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
