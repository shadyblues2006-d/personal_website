import React from 'react';
import { CircuitConnector, CircuitNode } from '../utils/CircuitElements';
import resumeData from '../data/resumeData';

const Skills = () => {
  const { skills } = resumeData;
  
  // Define skill levels for visualization (1-5 scale)
  const technicalSkillLevels = {
    "C++": 4,
    "Python": 4,
    "Arduino": 5,
    "Java": 3,
    "HTML": 3,
    "Basic IBM Qiskit": 2,
    "MS Excel": 4,
    "MS Access": 3,
    "Fusion 360 Senior Automation CAD": 4,
    "Fast-Fourier transform": 3
  };

  return (
    <section id="skills" className="py-16 relative">
      {/* Circuit decorations */}
      <CircuitConnector 
        start={{ x: '5%', y: '20%' }} 
        end={{ x: '20%', y: '20%' }} 
        includeNodes={true} 
        nodePositions={[0.5]}
      />
      <CircuitConnector 
        start={{ x: '80%', y: '80%' }} 
        end={{ x: '95%', y: '80%' }} 
        includeNodes={true} 
        nodePositions={[0.5]}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block">
            <h2 className="text-3xl font-bold relative">
              <CircuitNode size={6} className="absolute -left-8 top-1/2 transform -translate-y-1/2" />
              Skills
              <CircuitNode size={6} className="absolute -right-8 top-1/2 transform -translate-y-1/2" />
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Technical Skills */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 flex items-center text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Technical Skills
            </h3>
            
            <div className="space-y-4">
              {skills.technical.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-300 group-hover:text-blue-300 transition-colors">{skill}</span>
                    <span className="text-xs text-gray-400 font-mono">{technicalSkillLevels[skill] || 3}/5</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden relative">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full absolute left-0 top-0 group-hover:animate-pulse"
                      style={{ width: `${((technicalSkillLevels[skill] || 3) / 5) * 100}%` }}
                    ></div>
                    {/* Circuit dots on skill bar */}
                    <div className="absolute inset-0 flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 w-2 rounded-full flex-shrink-0 mx-auto ${
                            i < (technicalSkillLevels[skill] || 3) 
                              ? 'bg-blue-200 shadow-glow' 
                              : 'bg-gray-600'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 flex items-center text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Soft Skills
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {skills.soft.map((skill, index) => (
                <div key={index} className="flex items-center border border-gray-700 rounded-lg p-3 bg-gray-900/50 hover:border-blue-500 hover:bg-gray-800/70 transition-colors group">
                  <div className="h-3 w-3 rounded-full bg-blue-500 mr-3 group-hover:animate-pulse"></div>
                  <span className="text-gray-300 group-hover:text-blue-300 transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Circuit board visualization */}
        <div className="mt-12 max-w-3xl mx-auto bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6 shadow-inner">
          <h3 className="text-xl font-semibold mb-4 text-center text-blue-400">Circuit Knowledge Areas</h3>
          
          <div className="relative h-64 circuit-board">
            {/* Base circuit board */}
            <div className="absolute inset-0 bg-[#102030] rounded-lg overflow-hidden">
              {/* Circuit traces */}
              <div className="absolute top-1/4 left-0 h-0.5 w-full bg-blue-500/30"></div>
              <div className="absolute top-3/4 left-0 h-0.5 w-full bg-blue-500/30"></div>
              <div className="absolute left-1/4 top-0 w-0.5 h-full bg-blue-500/30"></div>
              <div className="absolute left-3/4 top-0 w-0.5 h-full bg-blue-500/30"></div>
              
              {/* Circuit components */}
              <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gray-800 border border-blue-500 rounded-full h-16 w-16 flex items-center justify-center">
                  <span className="text-blue-400 text-xs text-center">Circuit Design</span>
                </div>
              </div>
              
              <div className="absolute top-1/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gray-800 border border-blue-500 rounded-lg h-16 w-16 flex items-center justify-center">
                  <span className="text-blue-400 text-xs text-center">Embedded Systems</span>
                </div>
              </div>
              
              <div className="absolute top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gray-800 border border-blue-500 h-16 w-16 flex items-center justify-center" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
                  <span className="text-blue-400 text-xs text-center">Signal Processing</span>
                </div>
              </div>
              
              <div className="absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gray-800 border border-blue-500 rounded h-16 w-16 flex items-center justify-center" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                  <span className="text-blue-400 text-xs text-center">Computer Engineering</span>
                </div>
              </div>
              
              {/* Central connector */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-blue-500/20 border-2 border-blue-500 rounded-full h-20 w-20 flex items-center justify-center animate-pulse">
                  <span className="text-blue-300 text-xs text-center font-bold">Electrical Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;