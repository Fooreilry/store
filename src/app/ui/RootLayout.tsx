import { Nunito } from 'next/font/google';
import { Header } from '@/src/widgets/Header/Header';
import React, { Suspense } from 'react';
import '../styles/globals.css';
import { Footer } from '@/src/widgets/Footer/Footer';
import Loading from '@/app/loading';
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
