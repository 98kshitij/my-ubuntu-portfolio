import React from 'react';

const Window = ({ title, children }) => {
  return (
    <div className="w-3/4 h-3/4 bg-gray-800 border border-gray-600 rounded-md shadow-lg">
      <div className="bg-gray-700 p-2 flex justify-between">
        <span>{title}</span>
        <button className="text-red-500">X</button>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Window;
