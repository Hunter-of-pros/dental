import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight, Instagram, Facebook, Twitter, MessageSquare } from 'lucide-react';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields.');
      return;
    }
    // Simulate sending message
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="bg-[#060e1f] min-h-screen relative overflow-hidden font-sans text-slate-300">
      
      {/* Premium Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24">
        
        {/* Header */}
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="text-center mb-24"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md mb-6">
            <MessageSquare size={14} className="text-blue-400" />
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Get In Touch</span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-6xl lg:text-7xl font-bold fraunces text-white mb-6 leading-tight">
            Let's create your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">perfect smile.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Whether you're ready to book an appointment or simply have a few questions about our treatments, our dedicated team of experts is here to assist you with world-class care.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Contact Details Column */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="lg:col-span-5 space-y-8"
          >
            {/* Info Cards */}
            <motion.div variants={fadeUp} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-sm text-slate-400 mb-3">Mon-Sun, 9AM to 8PM</p>
                  <a href="tel:18001200322" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">1800 1200 322</a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-sm text-slate-400 mb-3">Priority response within 24 hours</p>
                  <a href="mailto:vikasm8660@gmail.com" className="text-lg font-medium text-white hover:text-blue-400 transition-colors">vikasm8660@gmail.com</a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Headquarters</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Clove Dental Network HQ<br/>
                    Premium Business Park, Tower A<br/>
                    Mumbai, MH 400001, India
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div variants={fadeUp} className="pt-6 px-4 flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-400 hover:bg-blue-600/20 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="bg-white/5 backdrop-blur-md p-10 sm:p-12 rounded-[2.5rem] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              <h3 className="text-3xl font-bold fraunces text-white mb-2">Send a Message</h3>
              <p className="text-slate-400 text-sm mb-8 font-light">We value your privacy. Your information is securely encrypted.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider font-semibold text-slate-400 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider font-semibold text-slate-400 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-slate-400 ml-1">Your Message</label>
                  <textarea 
                    rows="5" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none" 
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full group bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden relative"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Send Message <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  {/* Button shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
      
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Contact;
