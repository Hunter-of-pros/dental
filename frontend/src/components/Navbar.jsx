import React, { useState, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Phone, 
  Stethoscope, 
  Sparkles, 
  Trash2, 
  Zap, 
  Smile, 
  Crown, 
  Activity, 
  Scissors, 
  Scaling, 
  MoveHorizontal, 
  Binary 
} from 'lucide-react';

const treatments = [
  { label: "Root Canal Treatment", path: "/treatment/root-canal", icon: <Stethoscope size={16} /> },
  { label: "Teeth Whitening", path: "/treatment/teeth-whitening", icon: <Sparkles size={16} /> },
  { label: "Wisdom Teeth Removal", path: "/treatment/wisdom-teeth-removal", icon: <Trash2 size={16} /> },
  { label: "Dental Implants", path: "/treatment/dental-implants", icon: <Zap size={16} /> },
  { label: "Braces & Aligners", path: "/treatment/braces-aligners", icon: <Smile size={16} /> },
  { label: "Dental Crown & Bridge", path: "/treatment/crown-bridge", icon: <Crown size={16} /> },
  { label: "Dentures", path: "/treatment/dentures", icon: <Smile size={16} /> },
  { label: "Tooth Filling", path: "/treatment/tooth-filling", icon: <Activity size={16} /> },
  { label: "Veneers", path: "/treatment/veneers", icon: <Sparkles size={16} className="text-amber-500" /> },
  { label: "Tooth Extraction", path: "/treatment/tooth-extraction", icon: <Scissors size={16} /> },
  { label: "Gum Surgery", path: "/treatment/gum-surgery", icon: <Scaling size={16} /> },
  { label: "Jaw Surgery", path: "/treatment/jaw-surgery", icon: <MoveHorizontal size={16} /> },
  { label: "Bone Grafting", path: "/treatment/bone-grafting", icon: <Binary size={16} /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const hoverTimeout = useRef(null);
  const location = useLocation();

  const isTreatmentActive = location.pathname.startsWith('/treatment');

  const activeStyle = ({ isActive }) =>
    isActive
      ? "text-blue-600 border-b-2 border-blue-600 pb-1 font-semibold flex items-center gap-1"
      : "text-gray-900 border-b-2 border-transparent hover:text-blue-500 pb-1 font-medium transition-colors flex items-center gap-1";

  const closeMenu = () => {
    setIsOpen(false);
    setMobileTreatmentsOpen(false);
  };

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout.current);
    setTreatmentsOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setTreatmentsOpen(false), 150);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="shrink-0 flex items-center" onClick={closeMenu}>
            <img
              className="h-8 md:h-10 w-auto"
              src="https://clovecontent.s3.ap-south-1.amazonaws.com/All/2025/04/logo_final.svg"
              alt="Clove Dental Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-6 xl:space-x-8 items-center text-sm font-medium uppercase tracking-wider" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
            <li>
              <NavLink to="/" className={activeStyle}>Home</NavLink>
            </li>

            {/* Treatments Dropdown */}
            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/treatment"
                className={`transition-colors pb-1 border-b-2 flex items-center gap-1 ${
                  isTreatmentActive 
                    ? "text-blue-600 border-blue-600 font-semibold" 
                    : "text-gray-900 border-transparent hover:text-blue-500 font-medium"
                }`}
                style={{ height: '16px', lineHeight: '16px' }}
              >
                Treatments
              </Link>

              {/* Dropdown Panel */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 transition-all duration-200 ${
                  treatmentsOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
                style={{ zIndex: 100 }}
              >
                <ul className="overflow-y-auto max-h-80 py-2 px-2 space-y-0.5 custom-scrollbar">
                  {treatments.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={() => setTreatmentsOpen(false)}
                        className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 py-2.5 transition-all font-normal normal-case tracking-normal"
                      >
                        <span className="text-blue-500/70 group-hover:text-blue-600 shrink-0">{item.icon}</span>
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-100 px-2 py-2">
                  <Link
                    to="/treatment"
                    onClick={() => setTreatmentsOpen(false)}
                    className="block text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider text-center py-1.5 hover:bg-blue-50 rounded-lg transition-all"
                  >
                    View All Treatments →
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <NavLink to="/patient-safety" className={activeStyle}>Safety</NavLink>
            </li>
            <li>
              <NavLink to="/doctors" className={activeStyle}>Doctors</NavLink>
            </li>
            <li>
              <NavLink to="/our-clinics" className={activeStyle}>Clinics</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" className={activeStyle}>Contact</NavLink>
            </li>
          </ul>

          {/* Right Side Actions */}
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
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 bg-white border-t border-gray-100 shadow-inner">
          <ul className="flex flex-col text-center py-4">
            <li>
              <NavLink to="/" onClick={closeMenu} className="block text-lg py-3">Home</NavLink>
            </li>

            {/* Mobile Treatments Accordion */}
            <li>
              <button
                onClick={() => setMobileTreatmentsOpen(!mobileTreatmentsOpen)}
                className="w-full flex items-center justify-center text-lg py-3 text-gray-900"
              >
                Treatments
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileTreatmentsOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="bg-blue-50 rounded-xl mx-2 mb-2 py-3 px-4">
                  {treatments.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMenu}
                      className="flex items-center gap-3 text-sm text-gray-700 hover:text-blue-600 py-2.5 text-left pl-2 border-l-2 border-transparent hover:border-blue-400 transition-all font-medium"
                    >
                      <span className="text-blue-500/70">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                  <Link
                    to="/treatment"
                    onClick={closeMenu}
                    className="block text-sm font-bold text-blue-600 pt-2 border-t border-blue-100 text-center mt-1"
                  >
                    View All Treatments →
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <NavLink to="/patient-safety" onClick={closeMenu} className="block text-lg py-3">Safety</NavLink>
            </li>
            <li>
              <NavLink to="/doctors" onClick={closeMenu} className="block text-lg py-3">Doctors</NavLink>
            </li>
            <li>
              <NavLink to="/our-clinics" onClick={closeMenu} className="block text-lg py-3">Clinics</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" onClick={closeMenu} className="block text-lg py-3">Contact</NavLink>
            </li>

            <li className="sm:hidden pt-4 border-t mt-2">
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