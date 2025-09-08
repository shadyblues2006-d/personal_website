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
            <div className="mt-3 flex justify-center">
              <a
                href="https://github.com/shadyblues2006-d/orbital-playground"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Orbital Playground on GitHub"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.486 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.112-1.467-1.112-1.467-.909-.622.069-.609.069-.609 1.004.071 1.532 1.032 1.532 1.032.893 1.534 2.343 1.09 2.913.834.091-.648.35-1.09.636-1.341-2.22-.253-4.555-1.113-4.555-4.952 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.851.004 1.707.115 2.507.337 1.909-1.296 2.748-1.026 2.748-1.026.545 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.696-4.566 4.944.359.31.678.921.678 1.856 0 1.34-.012 2.419-.012 2.749 0 .268.18.579.688.481A9.996 9.996 0 0 0 22 12.021C22 6.486 17.523 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
