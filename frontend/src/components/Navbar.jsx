import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react'; // Basic icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeStyle = ({ isActive }) => 
    isActive 
      ? "text-blue-600 border-b-2 border-blue-600 pb-1 font-semibold md:border-b-2" 
      : "text-gray-900 hover:text-blue-500 transition-colors";

  // Helper to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* 1. Logo */}
          <Link to="/" className="shrink-0 flex items-center" onClick={closeMenu}>
            <img 
              className="h-8 md:h-10 w-auto" 
              src="https://clovecontent.s3.ap-south-1.amazonaws.com/All/2025/04/logo_final.svg" 
              alt="Clove Dental Logo"
            />
          </Link>

          {/* 2. Desktop Navigation (Hidden on Mobile/Tablet) */}
          <ul className="hidden lg:flex space-x-6 xl:space-x-8 items-center text-sm font-medium uppercase tracking-wider">
            <li><NavLink to="/" className={activeStyle}>Home</NavLink></li>
            <li><NavLink to="/treatment" className={activeStyle}>Treatments</NavLink></li>
            <li><NavLink to="/patient-safety" className={activeStyle}>Safety</NavLink></li>
            <li><NavLink to="/doctors" className={activeStyle}>Doctors</NavLink></li>
            <li><NavLink to="/our-clinics" className={activeStyle}>Clinics</NavLink></li>
            <li><NavLink to="/contact-us" className={activeStyle}>Contact</NavLink></li>
          </ul>

          {/* 3. Right Side Actions (Phone & CTA) */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <a href="tel:1234567890" className="hidden sm:flex items-center text-gray-700 hover:text-blue-600 font-medium mr-2">
              <Phone size={18} className="mr-1" />
              <span className="hidden xl:inline">1234567890</span>
            </a>
            <Link 
              to="/book-appointment" 
              className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold hover:bg-blue-700 transition-all shadow-md whitespace-nowrap"
            >
              BOOK NOW
            </Link>

            {/* Hamburger Button (Visible on Mobile/Tablet) */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* 4. Mobile & Tablet Menu Overlay */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="px-4 pt-2 pb-6 bg-white border-t border-gray-100 shadow-inner">
          <ul className="flex flex-col space-y-4 text-center py-4">
            <li><NavLink to="/" onClick={closeMenu} className="block text-lg py-2">Home</NavLink></li>
            <li><NavLink to="/treatment" onClick={closeMenu} className="block text-lg py-2">Treatments</NavLink></li>
            <li><NavLink to="/patient-safety" onClick={closeMenu} className="block text-lg py-2">Safety</NavLink></li>
            <li><NavLink to="/doctors" onClick={closeMenu} className="block text-lg py-2">Doctors</NavLink></li>
            <li><NavLink to="/our-clinics" onClick={closeMenu} className="block text-lg py-2">Clinics</NavLink></li>
            <li><NavLink to="/contact-us" onClick={closeMenu} className="block text-lg py-2">Contact</NavLink></li>
            <li className="sm:hidden pt-4 border-t">
              <a href="tel:1234567890" className="flex justify-center items-center text-blue-600 font-bold">
                <Phone size={20} className="mr-2" /> CALL CLINIC
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;