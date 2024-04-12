'use client';

import React from 'react';
import { ThemeProvider } from '../providers/ThemeProvider';

export function MainTamplate({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <body className="app light">
        <header>Header</header>
        {children}
        <footer>Footer</footer>
      </body>
    </ThemeProvider>
  );
}
