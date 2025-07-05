import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, StarsCanvas, Works } from './components';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const App = () => {
  return (
   <BrowserRouter>
      <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Chatbot/>
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
              <Contact />             
              <StarsCanvas />
          </div>
          <Footer />
      </div>
   </BrowserRouter>
  )
}

export default App