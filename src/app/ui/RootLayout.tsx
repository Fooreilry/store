import { Nunito } from 'next/font/google';
import React from 'react';
import '../styles/globals.css';
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
      <MainTamplate>{children}</MainTamplate>
    </html>
  );
}
