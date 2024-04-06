import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

export interface UseThemeResult {
  theme?: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const themeValue = theme === Theme.DARK ? Theme.DARK : Theme.LIGHT;
    setTheme!(themeValue);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themeValue);
  };

  return { theme, toggleTheme };
};
