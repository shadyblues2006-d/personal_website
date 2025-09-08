import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import { CircuitBackground } from './utils/CircuitElements';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for circuit animations to initialize
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-blue-400 flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-t-blue-500 border-blue-200 rounded-full animate-spin mb-4"></div>
          <p className="text-xl font-mono tracking-widest">INITIALIZING CIRCUITS...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-['Roboto_Mono',_monospace] relative overflow-hidden">
      <CircuitBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <Publications />
          <Contact />
        </main>
        <footer className="py-6 text-center text-sm text-gray-400 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <p>&copy; {new Date().getFullYear()} Diti Chhaproo | Electrical Engineering Portfolio</p>
            <p className="mt-2 text-xs">Designed with <span className="text-red-500">❤</span> and circuit traces</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
