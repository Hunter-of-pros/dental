import React, { useState } from 'react';
import { Calendar, User, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';

const BookAppointment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    treatment: 'Consultation',
    clinic: 'Mumbai Main Branch'
  });
  
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // In production, this would hit the real backend
      // With vite proxy configured, this routes to http://localhost:5000/api/book
      const response = await axios.post('/api/book', formData);
      
      if (response.data.success) {
        toast.success("Appointment booked successfully! We've sent an email confirmation.");
        navigate('/thank-you');
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.error || "Something went wrong. Please try again or call us.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-6 lg:px-12 dm flex items-center justify-center">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
        
        {/* Left Side: Visuals */}
        <div className="relative hidden lg:block bg-blue-600 p-12 text-white">
            <img 
            src="/images/premium/hero.png" 
            alt="Clinic" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-600/80" />
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <h2 className="fraunces text-5xl font-bold mb-6">Expert Care. <br/>Zero Wait.</h2>
              <p className="text-blue-100 text-lg leading-relaxed max-w-sm">
                Join over 1 million happy patients. Schedule your premium consultation today and experience modern dentistry at its finest.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Emergency Hotline</p>
                  <p className="font-semibold text-xl">1800 1200 322</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Working Hours</p>
                  <p className="font-semibold text-lg">Mon-Sun, 9AM to 8PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-8 lg:p-12">
          <h3 className="fraunces text-3xl font-bold text-gray-900 mb-2">Book Your Visit</h3>
          <p className="text-gray-500 mb-8 max-w-sm">Please fill out the form below. Our team will contact you to confirm the exact time.</p>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="John Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="+91 98765 43210" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="john@example.com" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">Preferred Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">Treatment Interest</label>
                <select name="treatment" value={formData.treatment} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition">
                  <option>Consultation</option>
                  <option>Root Canal</option>
                  <option>Dental Implants</option>
                  <option>Teeth Whitening</option>
                  <option>Braces & Aligners</option>
                  <option>Veneers</option>
                </select>
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-blue-600 text-white font-semibold py-4 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? 'Processing Request...' : (
                  <>Book Appointment <Send size={18} /></>
                )}
              </button>
              <p className="text-center text-xs text-gray-400 mt-4">By booking, you agree to our Terms of Service and Privacy Policy.</p>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default BookAppointment;
