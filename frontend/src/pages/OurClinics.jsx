import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

const clinics = [
  { city: 'Mumbai',          address: 'Premium Business Park, Tower A, BKC, Mumbai 400051',  phone: '1800 1200 322', status: 'Flagship Center' },
  { city: 'Delhi NCR',       address: 'DLF Cyber City, Building 10, Gurugram 122002',        phone: '1800 1200 322', status: 'Implant Center' },
  { city: 'Bengaluru',       address: 'UB City, Vittal Mallya Road, Bengaluru 560001',       phone: '1800 1200 322', status: 'Aesthetic Hub' },
  { city: 'Hyderabad',       address: 'Jubilee Hills, Road No. 36, Hyderabad 500033',        phone: '1800 1200 322', status: 'Surgical Center' },
  { city: 'Chennai',         address: 'Nungambakkam High Road, Chennai 600034',              phone: '1800 1200 322', status: 'Orthodontic Hub' },
  { city: 'Pune',            address: 'Koregaon Park, Lane 6, Pune 411001',                  phone: '1800 1200 322', status: 'Family Dentistry' },
];

const OurClinics = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">Our Footprint</p>
          <h1 className="text-5xl lg:text-6xl font-bold fraunces text-gray-900 mb-6">700+ Clinics. Zero Compromise.</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Find an ultra-modern Clove Dental clinic near you. We bring world-class dental infrastructure directly to your neighborhood.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinics.map((clinic, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -z-10 transition-transform group-hover:scale-150 duration-700" />
              
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-wider rounded-full mb-6">
                {clinic.status}
              </div>
              
              <h3 className="fraunces text-3xl font-bold text-gray-900 mb-6">{clinic.city}</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-gray-400 shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm leading-relaxed">{clinic.address}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-gray-400 shrink-0 mt-0.5" />
                  <p className="text-gray-600 font-medium text-sm">{clinic.phone}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-gray-400 shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm">Mon - Sun, 9AM to 8PM</p>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl border border-blue-100 text-blue-700 font-bold text-sm hover:bg-blue-700 hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                Book Here <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClinics;
