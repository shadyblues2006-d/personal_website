import React from 'react';
import { CircuitConnector, CircuitNode } from '../utils/CircuitElements';
import resumeData from '../data/resumeData';

const Projects = () => {
  const { projects } = resumeData;

  return (
    <section id="projects" className="py-16 relative">
      {/* Circuit decorations */}
      <CircuitConnector 
        start={{ x: 0, y: '30%' }} 
        end={{ x: '100%', y: '30%' }}
        pathType="bezier"
      />
      <CircuitConnector 
        start={{ x: '100%', y: '70%' }} 
        end={{ x: 0, y: '70%' }}
        pathType="bezier"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block">
            <h2 className="text-3xl font-bold relative">
              <CircuitNode size={6} className="absolute -left-8 top-1/2 transform -translate-y-1/2" />
              Projects & Leadership
              <CircuitNode size={6} className="absolute -right-8 top-1/2 transform -translate-y-1/2" />
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden shadow-lg group hover:border-blue-500 transition-colors"
            >
              {/* Header with circuit design */}
              <div className="relative h-16 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700 p-4 flex items-center">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                  <div className="absolute top-1/2 left-0 h-0.5 w-full bg-blue-900/30"></div>
                  <div className="absolute top-0 left-1/4 w-0.5 h-full bg-blue-900/30"></div>
                  <div className="absolute top-0 left-3/4 w-0.5 h-full bg-blue-900/30"></div>
                </div>
                
                <div className="relative z-10 flex-1">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <div className="flex items-center">
                    <div className="bg-blue-900/50 text-blue-300 text-xs px-2 py-0.5 rounded-md mr-2">
                      {project.role}
                    </div>
                    <div className="text-gray-400 text-xs">
                      {project.duration}
                    </div>
                  </div>
                </div>
                
                <div className="relative z-10 h-10 w-10 rounded-full bg-blue-900/30 border border-blue-800 flex items-center justify-center group-hover:bg-blue-900 transition-colors">
                  <div className="h-3 w-3 bg-blue-400 rounded-full group-hover:animate-ping"></div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-5">
                {Array.isArray(project.description) ? (
                  <ul className="space-y-3">
                    {project.description.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="ml-2 text-gray-300">{point}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300">{project.description}</p>
                )}
                
                {/* Circuit decoration */}
                <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
                  <div className="flex space-x-2">
                    {index === 0 && (
                      <span className="bg-blue-900/30 text-blue-300 text-xs px-2 py-1 rounded-full border border-blue-800">
                        Finance
                      </span>
                    )}
                    {index === 1 && (
                      <>
                        <span className="bg-blue-900/30 text-blue-300 text-xs px-2 py-1 rounded-full border border-blue-800">
                          Consulting
                        </span>
                        <span className="bg-blue-900/30 text-blue-300 text-xs px-2 py-1 rounded-full border border-blue-800">
                          Technology
                        </span>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <span className="bg-blue-900/30 text-blue-300 text-xs px-2 py-1 rounded-full border border-blue-800">
                          Education
                        </span>
                        <span className="bg-blue-900/30 text-blue-300 text-xs px-2 py-1 rounded-full border border-blue-800">
                          Community Service
                        </span>
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <span className="bg-blue-900/30 text-blue-300 text-xs px-2 py-1 rounded-full border border-blue-800">
                          Leadership
                        </span>
                        <span className="bg-blue-900/30 text-blue-300 text-xs px-2 py-1 rounded-full border border-blue-800">
                          Event Management
                        </span>
                      </>
                    )}
                  </div>
                  
                  <CircuitNode size={4} className="animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;