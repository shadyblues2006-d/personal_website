import React, { useState } from 'react';

export default function GenerativeExpandable({ src, alt, isVideo = false, isPdf = false }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative w-full h-56 flex items-center justify-center">
      {!expanded ? (
        <div className="group w-full h-full flex items-center justify-center cursor-pointer" onClick={() => setExpanded(true)}>
          {isPdf ? (
            <div className="w-full h-full flex flex-col items-center justify-center border border-blue-700 rounded bg-gray-800">
              <span className="inline-block text-blue-400 underline text-lg font-semibold mb-2">View Project PDF</span>
              <iframe src={src} title={alt} className="w-full h-32 border border-blue-700 rounded bg-white" />
            </div>
          ) : isVideo ? (
            <video src={src} className="w-full h-full object-cover rounded border border-blue-700 transition-all duration-300 group-hover:brightness-75" />
          ) : (
            <img src={src} alt={alt} className="w-full h-full object-cover rounded border border-blue-700 transition-all duration-300 group-hover:brightness-75" />
          )}
          <span className="absolute text-white bg-blue-700 bg-opacity-80 px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">Click to expand</span>
        </div>
      ) : (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            {isPdf ? (
              <iframe src={src} title={alt} className="max-h-[80vh] max-w-[90vw] w-[70vw] h-[80vh] border-4 border-blue-700 rounded bg-white shadow-xl" />
            ) : isVideo ? (
              <video src={src} controls autoPlay className="max-h-[60vh] max-w-[90vw] rounded-lg border-4 border-blue-700 shadow-xl" />
            ) : (
              <img src={src} alt={alt} className="max-h-[60vh] max-w-[90vw] rounded-lg border-4 border-blue-700 shadow-xl" />
            )}
            <button
              className="absolute top-2 right-2 text-white bg-blue-700 rounded-full px-3 py-1 text-xl font-bold hover:bg-blue-500"
              onClick={() => setExpanded(false)}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
