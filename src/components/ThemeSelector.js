import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiDroplet, FiFeather } from 'react-icons/fi';

const ThemeSelector = () => {
  const { currentTheme, setTheme } = useTheme();

  const themes = [
    { id: 'default', name: 'Default', icon: FiSun },
    { id: 'ocean', name: 'Ocean', icon: FiDroplet },
    { id: 'sunset', name: 'Sunset', icon: FiMoon },
    { id: 'forest', name: 'Forest', icon: FiFeather }
  ];

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-2 flex space-x-2">
      {themes.map(({ id, name, icon: Icon }) => (
        <button
          key={id}
          onClick={() => setTheme(id)}
          className={`p-2 rounded-lg transition-all duration-200 ${
            currentTheme === id
              ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
              : 'hover:bg-gray-100 text-gray-600'
          }`}
          title={name}
        >
          <Icon className="w-5 h-5" />
        </button>
      ))}
    </div>
  );
};

export default ThemeSelector; 