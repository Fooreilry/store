import { useMemo, useState } from 'react';
import { checkSSR } from '@/src/shared/utils/checkSSR/checkSSR';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const getTheme = () => {
  const isSSR = checkSSR();

  if (isSSR) {
    return Theme.LIGHT;
  }
  return (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT;
};

// можно отпитимизовать без мемо, нужно создать доп провайде и навесить value сеттера
const defaultTheme = getTheme();
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaulthProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={defaulthProps}>{children}</ThemeContext.Provider>;
}
