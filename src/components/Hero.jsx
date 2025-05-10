import React, { useState, useEffect, useRef } from 'react';
import { CircuitConnector } from '../utils/CircuitElements';

const Hero = () => {
  const heroRef = useRef(null);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const text = "Ellectrical Engineering Student";
    let index = -1;
    let typingInterval;
    
    // Clear existing intervals first to prevent multiple instances
    clearInterval(typingInterval);
    setTypedText("");
    
    typingInterval = setInterval(() => {
      if (index < text.length) {
        setTypedText(prev => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative pt-16"
    >
      <CircuitConnector start={{ x: 0, y: '40%' }} end={{ x: '30%', y: '40%' }} />
      <CircuitConnector start={{ x: '100%', y: '60%' }} end={{ x: '70%', y: '60%' }} />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-blue-400 font-mono mb-2 animate-pulse">&lt;class="engineer"&gt;</h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Diti Chhaproo
            </h1>
            <h2 
              className="text-xl sm:text-2xl font-mono text-gray-300 mb-6 h-8 inline-block"
            >
              {typedText}{showCursor ? "_" : ""}
            </h2>
            
            <p className="text-gray-400 mb-8 max-w-lg">
              Passionate about systems engineering, electronics, and circuit design. 
              Building tomorrow's technology with innovative solutions.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors shadow-lg shadow-blue-500/20 flex items-center"
              >
                <span>Contact Me</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a 
                href="#projects" 
                className="px-6 py-3 border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 rounded-md transition-colors"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex mt-8 space-x-4">
              <a 
                href="https://linkedin.com/in/ditichhaproo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-900 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-blue-400" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </a>
              
              <a 
                href="mailto:ditichhaproo@gmail.com" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-900 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-blue-400" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Circuit board styled frame */}
              <div className="absolute inset-0 border-2 border-blue-500 rounded-full animate-pulse"></div>
              
              {/* Circuit traces */}
              <div className="absolute top-0 left-1/2 w-1 h-8 bg-blue-500"></div>
              <div className="absolute bottom-0 left-1/2 w-1 h-8 bg-blue-500"></div>
              <div className="absolute left-0 top-1/2 h-1 w-8 bg-blue-500"></div>
              <div className="absolute right-0 top-1/2 h-1 w-8 bg-blue-500"></div>
              
              {/* Circuit nodes */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
              
              {/* Profile image placeholder */}
              <div className="absolute inset-4 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden border-2 border-gray-700">
                <div className="text-5xl md:text-6xl font-bold text-blue-400">DC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;