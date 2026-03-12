import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const doctorsList = [
  { name: 'Dr. Siddharth Rao', spec: 'Chief Implantologist', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80', exp: '15+ Years' },
  { name: 'Dr. Ananya Sharma', spec: 'Endodontist (Root Canal Specialist)', img: 'https://images.unsplash.com/photo-1594824436951-7f12bc4175de?w=800&q=80', exp: '12+ Years' },
  { name: 'Dr. Rohan Patel', spec: 'Orthodontist (Braces & Aligners)', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80', exp: '10+ Years' },
  { name: 'Dr. Kavita Desai', spec: 'Cosmetic Dentist (Veneers)', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80', exp: '14+ Years' },
];

const Doctors = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">Our Experts</p>
          <h1 className="text-5xl lg:text-6xl font-bold fraunces text-gray-900 mb-6">World-Class Dentists.</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Over 1,300 highly specialized master dentists from top institutions globally. We don't just fix teeth; we orchestrate masterpieces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctorsList.map((doc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group cursor-pointer hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-80 overflow-hidden relative">
                <img src={doc.img} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 right-6 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                  {doc.exp}
                </div>
                <h3 className="fraunces text-2xl font-bold text-gray-900 mb-1">{doc.name}</h3>
                <p className="text-blue-600 text-sm font-medium">{doc.spec}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
