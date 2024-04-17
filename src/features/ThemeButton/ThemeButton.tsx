'use client';

import { useMount } from '@/src/shared/hooks/useMount/useMount';
import { Button } from '@/src/shared/ui/button';
import { Skeleton } from '@/src/shared/ui/skeleton';
import { cn } from '@/src/shared/utils';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const isMounted = useMount();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  if (!isMounted) {
    return <Skeleton className="w-10 h-10" />;
  }
  return (
    <Button variant="ghost" className={cn()} onClick={toggleTheme}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  );
};
