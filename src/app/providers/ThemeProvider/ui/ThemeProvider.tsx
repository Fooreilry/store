import { useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';
import { checkSSR } from '@/src/shared/utils/checkSSR/checkSSR';

const getTheme = () => {
  const isSSR = checkSSR();

  if (isSSR) {
    return Theme.LIGHT;
  }
  return (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT;
};

//можно отпитимизовать без мемо, нужно создать доп провайде и навесить value сеттера
const defaultTheme = getTheme();
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const defaulthProps = useMemo(() => {
    theme, setTheme;
  }, [theme]);

  return <ThemeContext.Provider value={defaulthProps}>{children}</ThemeContext.Provider>;
};
