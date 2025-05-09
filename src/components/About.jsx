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
              I'm an Electrical Engineering student at the University of Illinois Urbana-Champaign, passionate about systems engineering, electronics, and technology innovation. My academic journey focuses on Systems Engineering and Design, where I combine technical prowess with strong analytical skills.
            </p>
            
            <p className="text-gray-300 mb-4">
              With experience in consulting, research, and project management, I bring a multidisciplinary approach to engineering challenges. I've worked on projects ranging from self-balancing robots to software development for cloud-based music grading systems.
            </p>
            
            <p className="text-gray-300">
              I'm particularly interested in the intersection of electrical engineering with cutting-edge technologies like quantum computing and AI. My goal is to develop innovative solutions that can make a positive impact on society through thoughtful engineering and design.
            </p>
            
            <div className="mt-6 pt-6 border-t border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Personal Achievements</h3>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li>High School Valedictorian</li>
                <li>EKPHARSIS-II: Poetry National Winner for 'Dali and I - his mighty dream'</li>
                <li>Selected for Goldman Sachs Women's Possibilities Summit (4% acceptance rate)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;