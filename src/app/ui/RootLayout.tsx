import { Nunito } from 'next/font/google';
import React from 'react';
import '../styles/globals.css';
import { ThemeProvider } from '../providers/ThemeProvider';
import { MainTamplate } from './MainTamplate';

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
        <MainTamplate header={<header>Header</header>} footer={<footer>Footer</footer>}>
          <body className="app">{children}</body>
        </MainTamplate>
      </ThemeProvider>
    </html>
  );
}
