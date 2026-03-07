import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Crosshair, Droplets, Activity } from 'lucide-react';

const safetyProtocol = [
  { icon: <ShieldCheck size={32} />, title: "Hospital-Grade Sterilization", desc: "We utilize Class-B Autoclaves, ensuring 100% eradication of all viruses, spores, and bacteria on our instruments." },
  { icon: <Droplets size={32} />, title: "4-Step Cleaning Protocol", desc: "Every instrument passes through ultrasonic cleaning, chemical disinfection, pouching, and pressurized autoclaving." },
  { icon: <Activity size={32} />, title: "Air Purification Matrix", desc: "High-grade HEPA filters and constant air exchange mechanics guarantee optimal droplet and aerosol clearance in our operatory rooms." },
  { icon: <Crosshair size={32} />, title: "Zero Cross-Contamination", desc: "Strict adherence to disposable barriers, PPE, and touchless sink technology eliminates patient-to-patient transitions." },
];

const PatientSafety = () => {
  return (
    <div className="min-h-screen font-sans bg-white relative overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#2563EB" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.4,-46.3C91,-33.5,97.2,-18,97,-2.6C96.8,12.8,90.2,28.1,80.7,41C71.2,53.9,58.8,64.4,44.7,71.4C30.6,78.4,15.3,81.9,-1.2,84C-17.7,86,-35.3,86.6,-50.2,79.8C-65.1,73,-77.3,58.8,-83.9,43.2C-90.5,27.6,-91.5,10.6,-88.7,-5.5C-85.9,-21.6,-79.3,-36.8,-69.8,-48.9C-60.3,-61,-47.9,-70,-34.5,-75.7C-21.1,-81.4,-6.7,-83.8,7.3,-82.2C21.4,-80.6,42.8,-75.1,44.7,-76.4Z" transform="translate(100 100) scale(1.1)"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Safety First. Always.
            </div>
            <h1 className="fraunces text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Absolute <br/> <em className="text-blue-600 not-italic">Sterility.</em>
            </h1>
            <p className="text-gray-500 text-xl leading-relaxed max-w-lg mb-12 font-light">
              Your safety is our ultimate priority. We have engineered our clinics around an uncompromising, multi-layered sterilization architecture that exceeds international healthcare standards.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {safetyProtocol.map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-3xl p-6 border border-gray-100 hover:bg-blue-50 hover:border-blue-100 transition-colors cursor-default">
                  <div className="text-blue-600 mb-4 bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Premium Medical Image Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[800px] hidden lg:block rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
          >
            <img 
              src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=1000&q=90" 
              alt="Sterilization lab" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl">
              <h4 className="text-white text-2xl font-bold fraunces mb-2">100% Compliance</h4>
              <p className="text-blue-100 text-sm leading-relaxed">Regular unannounced audits ensure our clinics maintain a flawless record of hygiene and safety globally.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default PatientSafety;
