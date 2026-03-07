import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3"
          >
            Get In Touch
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl font-bold fraunces text-gray-900 mb-6"
          >
            We're here to help.
          </motion.h1>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold fraunces text-gray-900 mb-8">Contact Information</h2>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                Whether you have a question about our treatments, need assistance with your booking, or have an emergency, our team is ready to answer all your questions.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-500 mb-2">Mon-Sun, 9AM to 8PM</p>
                  <a href="tel:18001200322" className="text-blue-600 font-bold text-2xl hover:text-blue-700 transition">1800 1200 322</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-500 mb-2">Our support team will reply within 24 hours.</p>
                  <a href="mailto:vikasm8660@gmail.com" className="text-blue-600 font-bold hover:underline">vikasm8660@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Headquarters</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Clove Dental Network HQ<br/>
                    Premium Business Park, Tower A<br/>
                    Mumbai, MH 400001, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-10 lg:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl">
            <h3 className="text-2xl font-bold fraunces text-gray-900 mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                <textarea rows="4" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" onClick={() => alert("Message feature is simulated. Use Book Appointment for real inquiries!")} className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2">
                Send Message <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
