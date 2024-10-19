import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import {Routes, Route } from 'react-router-dom';

import Blogs from "./Pages/Blogs";
import ContactUs from "./Pages/ContactUs";
import Company from "./Pages/Company";
import Jobs from "./Pages/Jobs";
import NoPage from "./Pages/NoPage";
import Services from "./Pages/Services";
import AboutUs from "./Pages/AboutUs";
import RegistrationForm from "./Pages/RegistrationForm";



function App() {
 
  return (

<>



<Header/>
   
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
          <Route path="/company" element={<Company />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/signup" element={<RegistrationForm />} />
          <Route path="*" element={<NoPage />} />
    </Routes>

      <Footer/>
  

</>
 
  );
}

export default App;

