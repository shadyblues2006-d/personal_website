import React from 'react';

/**
 * CircuitNode - Renders a circuit node/connection point
 * @param {number} size - Size of the node in pixels
 * @param {string} className - Additional CSS classes
 * @param {Object} props - Additional props
 */
export const CircuitNode = ({ size = 4, className = '', ...props }) => {
  return (
    <div 
      className={`bg-blue-500 rounded-full ${className}`} 
      style={{ width: `${size}px`, height: `${size}px` }}
      {...props}
    />
  );
};

/**
 * CircuitConnector - Creates an SVG path between two points to simulate circuit traces
 * @param {Object} start - Starting point {x, y} in percentage or pixels
 * @param {Object} end - Ending point {x, y} in percentage or pixels
 * @param {string} pathType - "line", "bezier", or "steps"
 * @param {boolean} includeNodes - Whether to include circuit nodes at start/end
 * @param {Array} nodePositions - Array of positions (0-1) along the path for nodes
 */
export const CircuitConnector = ({ 
  start, 
  end, 
  pathType = "line",
  includeNodes = false,
  nodePositions = [],
  className = ""
}) => {
  // Generate the SVG path based on pathType
  const getPath = () => {
    // Convert coordinates to string representations
    const startX = typeof start.x === 'string' ? start.x : `${start.x}px`;
    const startY = typeof start.y === 'string' ? start.y : `${start.y}px`;
    const endX = typeof end.x === 'string' ? end.x : `${end.x}px`;
    const endY = typeof end.y === 'string' ? end.y : `${end.y}px`;
    
    switch(pathType) {
      case "bezier":
        return `M ${startX} ${startY} C ${endX} ${startY}, ${startX} ${endY}, ${endX} ${endY}`;
      case "steps":
        const midX = `calc((${startX} + ${endX}) / 2)`;
        return `M ${startX} ${startY} L ${midX} ${startY} L ${midX} ${endY} L ${endX} ${endY}`;
      case "line":
      default:
        return `M ${startX} ${startY} L ${endX} ${endY}`;
    }
  };

  // Calculate positions for additional nodes along the path
  const getNodePosition = (position) => {
    const x = typeof start.x === 'string' 
      ? `calc(${start.x} + (${end.x} - ${start.x}) * ${position})`
      : start.x + (end.x - start.x) * position;
    
    const y = typeof start.y === 'string'
      ? `calc(${start.y} + (${end.y} - ${start.y}) * ${position})`
      : start.y + (end.y - start.y) * position;
    
    return { x, y };
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* SVG Path */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <path
          d={getPath()}
          stroke="rgba(59, 130, 246, 0.3)"
          strokeWidth="1"
          fill="none"
          className={className}
        />
      </svg>
      
      {/* Optional Nodes */}
      {includeNodes && (
        <>
          {/* Start node */}
          <div className="absolute" style={{ 
            left: typeof start.x === 'string' ? start.x : `${start.x}px`, 
            top: typeof start.y === 'string' ? start.y : `${start.y}px`,
            transform: 'translate(-50%, -50%)'
          }}>
            <CircuitNode size={4} />
          </div>
          
          {/* End node */}
          <div className="absolute" style={{ 
            left: typeof end.x === 'string' ? end.x : `${end.x}px`, 
            top: typeof end.y === 'string' ? end.y : `${end.y}px`,
            transform: 'translate(-50%, -50%)'
          }}>
            <CircuitNode size={4} />
          </div>
          
          {/* Additional nodes along path */}
          {nodePositions.map((pos, index) => {
            const nodePos = getNodePosition(pos);
            return (
              <div 
                key={index}
                className="absolute" 
                style={{ 
                  left: typeof nodePos.x === 'string' ? nodePos.x : `${nodePos.x}px`, 
                  top: typeof nodePos.y === 'string' ? nodePos.y : `${nodePos.y}px`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <CircuitNode size={4} />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

/**
 * CircuitBackground - Creates a decorative circuit board background
 */
export const CircuitBackground = () => {
  return (
    <div className="fixed inset-0 z-0 opacity-10">
      {/* Horizontal lines */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div 
            key={`h-${i}`} 
            className="absolute bg-blue-500" 
            style={{ 
              height: '1px', 
              left: 0, 
              right: 0, 
              top: `${(i + 1) * 10}%` 
            }} 
          />
        ))}
      </div>
      
      {/* Vertical lines */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div 
            key={`v-${i}`} 
            className="absolute bg-blue-500" 
            style={{ 
              width: '1px', 
              top: 0, 
              bottom: 0, 
              left: `${(i + 1) * 10}%` 
            }} 
          />
        ))}
      </div>
      
      {/* Circuit nodes */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          [...Array(5)].map((_, j) => (
            <div 
              key={`node-${i}-${j}`} 
              className="absolute bg-blue-400 rounded-full w-2 h-2" 
              style={{ 
                left: `${(i + 1) * 20}%`, 
                top: `${(j + 1) * 20}%`, 
                transform: 'translate(-50%, -50%)' 
              }} 
            />
          ))
        ))}
      </div>
      
      {/* Decorative circuit paths */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Circuit path 1 */}
        <path
          d="M 0,20% L 30%,20% L 30%,50% L 70%,50% L 70%,70% L 100%,70%"
          stroke="rgba(59, 130, 246, 0.4)"
          strokeWidth="1"
          fill="none"
        />
        
        {/* Circuit path 2 */}
        <path
          d="M 0,80% L 40%,80% L 40%,30% L 100%,30%"
          stroke="rgba(59, 130, 246, 0.4)"
          strokeWidth="1"
          fill="none"
        />
        
        {/* Circuit path 3 */}
        <path
          d="M 20%,0 L 20%,40% L 60%,40% L 60%,100%"
          stroke="rgba(59, 130, 246, 0.4)"
          strokeWidth="1"
          fill="none"
        />
        
        {/* Circuit IC component */}
        <rect
          x="45%"
          y="10%"
          width="10%"
          height="15%"
          rx="5"
          ry="5"
          stroke="rgba(59, 130, 246, 0.4)"
          strokeWidth="1"
          fill="none"
        />
        
        {/* Circuit capacitor */}
        <path
          d="M 80%,10% L 80%,13% M 78%,13% L 82%,13% M 78%,15% L 82%,15% M 80%,15% L 80%,18%"
          stroke="rgba(59, 130, 246, 0.4)"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Circuit resistor */}
        <path
          d="M 85%,85% L 87%,85% L 87.5%,83% L 88.5%,87% L 89.5%,83% L 90.5%,87% L 91.5%,83% L 92.5%,87% L 93%,85% L 95%,85%"
          stroke="rgba(59, 130, 246, 0.4)"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
};