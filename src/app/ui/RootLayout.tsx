import { Nunito } from 'next/font/google';
import React from 'react';
import '../styles/globals.css';
import { ThemeProvider } from '../providers/ThemeProvider/ThemeProvider';

const nunito = Nunito({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={nunito.className} suppressHydrationWarning>
      <body className="app">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <header>Header</header>
          {children}
          <footer>Footer</footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
