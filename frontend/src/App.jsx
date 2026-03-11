import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ReactLenis } from 'lenis/react';
import { SpeedInsights } from "@vercel/speed-insights/react";

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const Treatment = lazy(() => import('./pages/Treatment'));
const OurClinics = lazy(() => import('./pages/OurClinics'));
const PatientSafety = lazy(() => import('./pages/PatientSafety'));
const Doctors = lazy(() => import('./pages/Doctors'));
const Contact = lazy(() => import('./pages/Contact'));
const BookAppointment = lazy(() => import('./pages/BookAppointment'));
const ThankYou = lazy(() => import('./pages/ThankYou'));

// Treatment details
const RootCanal = lazy(() => import('./pages/treatment/RootCanal'));
const TeethWhitening = lazy(() => import('./pages/treatment/TeethWhitening'));
const WisdomTeethRemoval = lazy(() => import('./pages/treatment/WisdomTeethRemoval'));
const DentalImplants = lazy(() => import('./pages/treatment/DentalImplants'));
const BracesAligners = lazy(() => import('./pages/treatment/BracesAligners'));
const CrownBridge = lazy(() => import('./pages/treatment/CrownBridge'));
const Dentures = lazy(() => import('./pages/treatment/Dentures'));
const ToothFilling = lazy(() => import('./pages/treatment/ToothFilling'));
const Veneers = lazy(() => import('./pages/treatment/Veneers'));
const ToothExtraction = lazy(() => import('./pages/treatment/ToothExtraction'));
const GumSurgery = lazy(() => import('./pages/treatment/GumSurgery'));
const JawSurgery = lazy(() => import('./pages/treatment/JawSurgery'));
const BoneGrafting = lazy(() => import('./pages/treatment/BoneGrafting'));

// Loading Fallback Spinner
const LoadingScreen = () => (
  <div className="flex items-center justify-center min-h-screen bg-white" role="status" aria-label="Loading">
    <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin" aria-hidden="true"></div>
  </div>
);

const App = () => {
  return (
    <ReactLenis root>
      <div>
        <Navbar />
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/treatment' element={<Treatment />} />
            <Route path='/book-appointment' element={<BookAppointment />} />
            <Route path='/thank-you' element={<ThankYou />} />
            <Route path='/our-clinics' element={<OurClinics />} />
            <Route path='/patient-safety' element={<PatientSafety />} />
            <Route path='/doctors' element={<Doctors />} />
            <Route path='/contact' element={<Contact />} />
            
            <Route path="/treatment/root-canal" element={<RootCanal />} />
            <Route path="/treatment/teeth-whitening" element={<TeethWhitening />} />
            <Route path="/treatment/wisdom-teeth-removal" element={<WisdomTeethRemoval />} />
            <Route path="/treatment/dental-implants" element={<DentalImplants />} />
            <Route path="/treatment/braces-aligners" element={<BracesAligners />} />
            <Route path="/treatment/crown-bridge" element={<CrownBridge />} />
            <Route path="/treatment/dentures" element={<Dentures />} />
            <Route path="/treatment/tooth-filling" element={<ToothFilling />} />
            <Route path="/treatment/veneers" element={<Veneers />} />
            <Route path="/treatment/tooth-extraction" element={<ToothExtraction />} />
            <Route path="/treatment/gum-surgery" element={<GumSurgery />} />
            <Route path="/treatment/jaw-surgery" element={<JawSurgery />} />
            <Route path="/treatment/bone-grafting" element={<BoneGrafting />} />
          </Routes>
        </Suspense>
        <Footer />
        <SpeedInsights />
      </div>
    </ReactLenis>
  );
};

export default App;
