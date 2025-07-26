'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  mounted: false,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get theme preference on mount - don't set it here since script already did
    let initialTheme: Theme = 'light';
    
    try {
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme) {
        initialTheme = savedTheme;
      } else {
        // Check system preference
        initialTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
    } catch {
      console.warn('Could not access localStorage for theme');
      // Fallback to system preference
      initialTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    setTheme(initialTheme);
    setMounted(true);
    
    // Don't set the attribute here - the script already did it
    // document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  // Save theme changes to localStorage and apply to DOM
  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme);
      try {
        localStorage.setItem('theme', theme);
      } catch {
        console.warn('Could not save theme preference');
      }
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}