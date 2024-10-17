import React, { useState } from 'react';

const Terminal = () => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState('');

  const handleCommand = (e) => {
    e.preventDefault();
    if (command === 'about') {
      setOutput('This is an Ubuntu simulation built with Next.js!');
    } else {
      setOutput('Command not found');
    }
    setCommand('');
  };

  return (
    <div className="w-full h-64 bg-black text-white p-4 font-mono">
      <div className="h-full overflow-auto">
        <p>$ {command}</p>
        <p>{output}</p>
      </div>
      <form onSubmit={handleCommand}>
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          className="bg-transparent border-none outline-none w-full"
        />
      </form>
    </div>
  );
};

export default Terminal;
