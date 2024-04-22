import { Footer } from '@/src/widgets/Footer/Footer';
import { Header } from '@/src/widgets/Header/Header';
import { Nunito } from 'next/font/google';
import React from 'react';
import NextAuthSessionProvider from '../providers/SessionProvider/SessionProvider';
import { ThemeProvider } from '../providers/ThemeProvider/ThemeProvider';
import '../styles/globals.css';

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
        <NextAuthSessionProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
