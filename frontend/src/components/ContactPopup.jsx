import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Phone, Mail } from 'lucide-react';
import { toast } from 'react-toastify';
import axios from 'axios';

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer;

    const checkAndShowPopup = () => {
      const hasSubmitted = localStorage.getItem('contactPopupSubmitted');
      if (!hasSubmitted && !isOpen) {
        setIsOpen(true);
      }
    };

    // Initial delay of 15 seconds
    const initialTimer = setTimeout(() => {
      checkAndShowPopup();
      
      // After initial trigger, set up the 1-minute recurring interval
      timer = setInterval(() => {
        checkAndShowPopup();
      }, 60000); // 60 seconds
      
    }, 15000); // 15 seconds

    return () => {
      clearTimeout(initialTimer);
      if (timer) clearInterval(timer);
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error('Name and Phone are required.');
      return;
    }
    
    setLoading(true);
    try {
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        date: new Date().toLocaleDateString(),
        treatment: 'Callback Request',
        clinic: 'Not Specified - Popup'
      };
      
      const response = await axios.post('/api/book', payload);
      
      if (response.data.success) {
        toast.success('Thank you! Our amazing team will contact you shortly.');
        localStorage.setItem('contactPopupSubmitted', 'true');
        setIsOpen(false);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again or call us.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-[#060e1f]/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
          >
            {/* Background design */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2" />
            
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 z-10 p-2 bg-gray-100/80 hover:bg-gray-200 rounded-full text-gray-500 transition-colors"
            >
              <X size={18} />
            </button>

            <div className="p-8 sm:p-10 relative z-10">
              <div className="mb-8">
                <span className="inline-block bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  Exclusive Offer
                </span>
                <h2 className="text-3xl font-bold text-gray-900 fraunces leading-tight mb-2">
                  Claim your <br/> <span className="text-blue-600">Free Consultation</span>
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Enter your details below and one of our dental experts will reach out to schedule your priority appointment.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium text-sm"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Phone size={18} />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number *"
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium text-sm"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address (Optional)"
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full group mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold h-[56px] rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_25px_rgba(37,99,235,0.4)] disabled:opacity-70 relative"
                >
                  <span className={`flex items-center gap-2 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                    Request Callback <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  {loading && (
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      Sending...
                    </span>
                  )}
                </button>
                <p className="text-center text-[10px] text-gray-400 font-medium mt-3">
                  Your information is strictly confidential. We hate spam.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;
