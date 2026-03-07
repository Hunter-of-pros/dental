import React, { useState, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const treatments = [
  { label: "Root Canal Treatment", path: "/treatment/root-canal" },
  { label: "Teeth Whitening", path: "/treatment/teeth-whitening" },
  { label: "Wisdom Teeth Removal", path: "/treatment/wisdom-teeth-removal" },
  { label: "Dental Implants", path: "/treatment/dental-implants" },
  { label: "Braces & Aligners", path: "/treatment/braces-aligners" },
  { label: "Dental Crown & Bridge", path: "/treatment/crown-bridge" },
  { label: "Dentures", path: "/treatment/dentures" },
  { label: "Tooth Filling", path: "/treatment/tooth-filling" },
  { label: "Veneers", path: "/treatment/veneers" },
  { label: "Tooth Extraction", path: "/treatment/tooth-extraction" },
  { label: "Gum Surgery", path: "/treatment/gum-surgery" },
  { label: "Jaw Surgery", path: "/treatment/jaw-surgery" },
  { label: "Bone Grafting", path: "/treatment/bone-grafting" },
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
      ? "text-blue-600 border-b-2 border-blue-600 pb-1 font-semibold"
      : "text-gray-900 hover:text-blue-500 transition-colors";

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
          <ul className="hidden lg:flex space-x-6 xl:space-x-8 items-center text-sm font-medium uppercase tracking-wider">
            <li>
              <NavLink to="/" className={activeStyle}>Home</NavLink>
            </li>

            {/* Treatments Dropdown */}
            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* 
                Root cause of alignment issue: <button> has default browser styles (padding, line-height).
                We strip all browser defaults with inline style and match NavLink exactly.
                The blue underline only shows when isTreatmentActive (you're on a treatment page),
                NOT on hover.
              */}
              <button
                style={{
                  all: 'unset',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: 'inherit',
                  letterSpacing: 'inherit',
                  fontWeight: isTreatmentActive ? '600' : '500',
                  color: isTreatmentActive ? '#2563eb' : 'inherit',
                  borderBottom: isTreatmentActive ? '2px solid #2563eb' : '2px solid transparent',
                  paddingBottom: '4px',
                  lineHeight: 'inherit',
                  display: 'inline',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => { if (!isTreatmentActive) e.currentTarget.style.color = '#3b82f6'; }}
                onMouseLeave={e => { if (!isTreatmentActive) e.currentTarget.style.color = 'inherit'; }}
              >
                Treatments
              </button>

              {/* Dropdown Panel */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 transition-all duration-200 ${
                  treatmentsOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
                style={{ zIndex: 100 }}
              >
                <ul className="overflow-y-auto max-h-64 py-2 px-2 space-y-0.5">
                  {treatments.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={() => setTreatmentsOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 py-2 transition-all font-normal normal-case tracking-normal"
                      >
                        {item.label}
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
                      className="block text-sm text-gray-700 hover:text-blue-600 py-1.5 text-left pl-2 border-l-2 border-transparent hover:border-blue-400 transition-all"
                    >
                      {item.label}
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