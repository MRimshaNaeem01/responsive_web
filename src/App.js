import React from 'react'

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import About from "./pages/About";
import { Route, Routes ,Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
const App = () => {
  return (
    // <div className="App">
    <>
    <Navbar />
     <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/about" element={<About />} />
      <Route  path="/contact" element={<Contact />} />
      <Route  path="/service" element={<Service />} />

      <Route path="*" element={<Navigate to ="/" />}/>

      {/* <Redirect path="/" element={<Home />} /> */}
    </Routes>
   
    <Footer />
    
    </>
   
    // </div>
  );
};

export default App;
