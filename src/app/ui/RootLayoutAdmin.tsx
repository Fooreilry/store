import { HeaderAdmin } from '@/src/widgets/HeaderAdmin/HeaderAdmin';
import { Nunito } from 'next/font/google';
import React from 'react';
import { ThemeProvider } from '../providers/ThemeProvider/ThemeProvider';
import '../styles/globals.css';
import ContainerForPages from './ContainerForPages/ContainerForPages';

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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <HeaderAdmin />
          <ContainerForPages childrenPage={children} />
        </ThemeProvider>
      </body>
    </html>
  );
}
