'use client';

import { useMount } from '@/src/shared/hooks/useMount/useMount';
import { Button } from '@/src/shared/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const isMounted = useMount();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  if (!isMounted) {
    return null;
  }
  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  );
};
