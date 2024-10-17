import React from 'react';

const Desktop = () => {
  return (
    <div className="w-full h-screen bg-gray-900 text-white relative">
      <div className="absolute bottom-0 w-full">
        <div className="bg-gray-800 py-2 px-5 flex items-center space-x-3">
          <div className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center">
            <img src="/logo.png" alt="Logo" />
          </div>
          <div className="flex space-x-3">
            <button className="bg-gray-700 w-8 h-8 rounded-full">Icon</button>
            {/* Add more taskbar icons */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
