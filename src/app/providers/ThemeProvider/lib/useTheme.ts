import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const themeValue = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(themeValue);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themeValue);
  };

  return { theme, toggleTheme };
};
