import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const themes = {
  default: {
    primary: 'from-blue-600 via-indigo-500 to-purple-500',
    secondary: 'from-pink-500 via-rose-500 to-red-500',
    success: 'from-green-400 to-emerald-500',
    info: 'from-blue-400 to-cyan-500',
    warning: 'from-yellow-400 to-amber-500',
    danger: 'from-red-400 to-rose-500'
  },
  ocean: {
    primary: 'from-cyan-500 via-teal-500 to-emerald-500',
    secondary: 'from-blue-500 via-indigo-500 to-violet-500',
    success: 'from-teal-400 to-green-500',
    info: 'from-cyan-400 to-blue-500',
    warning: 'from-yellow-400 to-orange-500',
    danger: 'from-rose-400 to-red-500'
  },
  sunset: {
    primary: 'from-orange-500 via-rose-500 to-purple-500',
    secondary: 'from-yellow-400 via-orange-500 to-red-500',
    success: 'from-lime-400 to-green-500',
    info: 'from-violet-400 to-purple-500',
    warning: 'from-amber-400 to-orange-500',
    danger: 'from-red-400 to-rose-500'
  },
  forest: {
    primary: 'from-green-500 via-emerald-500 to-teal-500',
    secondary: 'from-lime-400 via-green-500 to-emerald-500',
    success: 'from-emerald-400 to-green-500',
    info: 'from-teal-400 to-cyan-500',
    warning: 'from-yellow-400 to-amber-500',
    danger: 'from-red-400 to-rose-500'
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('default');

  const value = {
    theme: themes[currentTheme],
    setTheme: setCurrentTheme,
    currentTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 