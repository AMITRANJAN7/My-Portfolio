import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
       <NavBar />
      <Home />
      <About />      
      <Experience />
      <Portfolio />
      <Contact />
      <SocialLinks />
      <Footer />
    </div>
  )
}

export default App
