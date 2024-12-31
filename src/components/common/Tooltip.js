import React, { useState } from 'react';

const Tooltip = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      
      {isVisible && (
        <div className="absolute z-50 mt-2 -translate-x-1/2 left-1/2">
          <div className="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            {content}
          </div>
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white"></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip; 