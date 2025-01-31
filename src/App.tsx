import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <About />
      <Services />
      <Process />
      <Contact />
    </div>
  );
}

export default App;