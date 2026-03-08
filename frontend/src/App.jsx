import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home'  ;
import Treatment from './pages/Treatment';
import OurClinics from './pages/OurClinics';
import PatientSafety from './pages/PatientSafety';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import RootCanal from './pages/treatment/RootCanal';
import TeethWhitening from './pages/treatment/TeethWhitening';
import WisdomTeethRemoval from './pages/treatment/WisdomTeethRemoval';
import DentalImplants from './pages/treatment/DentalImplants';
import BracesAligners from './pages/treatment/BracesAligners';
import CrownBridge from './pages/treatment/CrownBridge';
import Dentures from './pages/treatment/Dentures';
import ToothFilling from './pages/treatment/ToothFilling';
import Veneers from './pages/treatment/Veneers';
import ToothExtraction from './pages/treatment/ToothExtraction';
import GumSurgery from './pages/treatment/GumSurgery';
import JawSurgery from './pages/treatment/JawSurgery';
import BoneGrafting from './pages/treatment/BoneGrafting';
import BookAppointment from './pages/BookAppointment';
import ThankYou from './pages/ThankYou';

import Footer from './components/Footer';

import { ReactLenis } from 'lenis/react';

const App = () => {
  return (
    <ReactLenis root>
      <div >
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/treatment' element={<Treatment/>}/>
        <Route path='/book-appointment' element={<BookAppointment/>}/>
        <Route path='/thank-you' element={<ThankYou/>}/>
        <Route path='/our-clinics' element = {<OurClinics/>}/>
        <Route path='/patient-safety' element = {<PatientSafety/>}/>
        <Route path='/doctors' element = {<Doctors/>}/>
        <Route path='/contact' element = {<Contact/>}/>
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
      <Footer />
      </div>
    </ReactLenis>
  )
}

export default App
