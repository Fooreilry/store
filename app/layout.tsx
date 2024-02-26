import { Nunito } from 'next/font/google';
import '@/styles/globals.scss';
import { ThemeProvider } from '@/utils/ThemeContest/ThemeProvider';
import React from 'react';

const nunito = Nunito({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={nunito.className}>
      <ThemeProvider>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
