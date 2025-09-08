import React from 'react';
import { CircuitConnector, CircuitNode } from '../utils/CircuitElements';

const About = () => {
  return (
    <section id="about" className="py-16 relative">
      <CircuitConnector 
        start={{ x: '10%', y: 0 }} 
        end={{ x: '10%', y: '100%' }} 
        includeNodes={true} 
        nodePositions={[0.2, 0.8]}
      />
      
      <CircuitConnector 
        start={{ x: '90%', y: 0 }} 
        end={{ x: '90%', y: '100%' }} 
        includeNodes={true}
        nodePositions={[0.3, 0.7]}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          <div className="inline-block mb-8">
            <h2 className="text-3xl font-bold relative">
              <CircuitNode size={6} className="absolute -left-8 top-1/2 transform -translate-y-1/2" />
              About Me
              <CircuitNode size={6} className="absolute -right-8 top-1/2 transform -translate-y-1/2" />
            </h2>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 md:p-8 max-w-3xl mx-auto shadow-lg relative overflow-hidden">
            {/* Circuit trace decoration */}
            <div className="absolute top-0 left-0 w-16 h-16">
              <div className="absolute top-0 left-4 w-1 h-8 bg-blue-500/30"></div>
              <div className="absolute top-4 left-0 h-1 w-8 bg-blue-500/30"></div>
            </div>
            
            <div className="absolute bottom-0 right-0 w-16 h-16">
              <div className="absolute bottom-0 right-4 w-1 h-8 bg-blue-500/30"></div>
              <div className="absolute bottom-4 right-0 h-1 w-8 bg-blue-500/30"></div>
            </div>
            
            <p className="text-gray-300 mb-4">
              I'm an Systems Engineering student at the University of Illinois Urbana-Champaign. I am driven to learning more about hardware design, quantum algorithms and astrophysics.
            </p>
            
            <p className="text-gray-300 mb-4">
              With experience in technical and strategic consulting, research, and project management, I bring a multidisciplinary approach to engineering challenges. I've worked on projects ranging from self-balancing robots to software development for cloud-based music grading systems.
            </p>
            
            <p className="text-gray-300">
              I'm particularly interested in the intersection of electrical engineering with cutting-edge technologies like quantum computing and AI. My goal is to develop innovative solutions that can make a positive impact on society through thoughtful engineering and design!
            </p>
            
            <div className="mt-6 pt-6 border-t border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Technical Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-gray-300 text-base">
                <ul className="space-y-2 list-disc pl-5">
                    <li>C++</li>
                    <li>Python</li>
                    <li>Arduino</li>
                    <li>Java</li>
                    <li>HTML</li>
                    <li>Electrical Engineering</li>
                    <li>AutoCAD</li>
                  </ul>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Design Concepts</li>
                    <li>Calculations</li>
                    <li>MS Excel</li>
                    <li>MS Word</li>
                    <li>MS PowerPoint</li>
                    <li>Fast-Fourier Transform</li>
                    <li>Literature Review</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;