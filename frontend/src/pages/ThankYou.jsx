import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

const ThankYou = () => {
  useEffect(() => {
    // Fire a subtle, elegant confetti burst
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#3b82f6', '#bfdbfe', '#ffffff'] // Clove Blue Theme
      });
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#3b82f6', '#bfdbfe', '#ffffff']
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[100px] mix-blend-multiply -z-10" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.8, bounce: 0.3 }}
        className="max-w-xl w-full text-center bg-white p-12 lg:p-16 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: [-10, 10, 0] }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="w-24 h-24 bg-blue-50 text-blue-600 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-inner"
        >
          <CheckCircle2 size={48} />
        </motion.div>
        
        <h1 className="fraunces text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Booking Confirmed!</h1>
        
        <p className="text-gray-500 text-lg leading-relaxed mb-4">
          Thank you for choosing Clove Dental. Your appointment request has been securely instantly registered in our system.
        </p>

        <div className="bg-blue-50/50 rounded-2xl p-6 text-sm text-gray-600 mb-10 border border-blue-100/50">
          <p>
            We have sent a confirmation email to the address provided. 
            <strong> One of our care coordinators will call you shortly</strong> to finalize your exact consultation time.
          </p>
        </div>

        <Link 
          to="/"
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-600/25 duration-300"
        >
          Return to Homepage <ArrowRight size={18} />
        </Link>
      </motion.div>
    </div>
  );
};

export default ThankYou;
