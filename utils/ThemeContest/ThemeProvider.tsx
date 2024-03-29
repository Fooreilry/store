'use client';
import React from 'react';
import { ThemeContext, themes } from './ThemeContext';

const getTheme = () => {
  if (typeof window === 'undefined') return themes.light; 

  const theme = `${localStorage?.getItem('theme')}`;
  if (Object.values(themes).includes(theme)) return theme;

  const userMedia = window.matchMedia('(prefers-color-scheme: light)');
  if (userMedia.matches) return themes.light;

  return themes.dark;
};
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState(getTheme);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;

    localStorage.setItem('theme', theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return React.useContext(ThemeContext);
}
