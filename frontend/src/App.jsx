import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'  
import Treatment from './pages/Treatment'
import OurClinics from './pages/OurClinics'
import PatientSafety from './pages/PatientSafety'
import Doctors from './pages/Doctors'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/treatment' element={<Treatment/>}/>
        <Route path='/our-clinics' element = {<OurClinics/>}/>
        <Route path='/patient-safety' element = {<PatientSafety/>}/>
        <Route path='/doctors' element = {<Doctors/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        
      </Routes>
    </div>
  )
}

export default App
