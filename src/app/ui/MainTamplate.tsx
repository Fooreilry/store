'use client';

import React from 'react';

export function MainTamplate({
  header,
  footer,
  children,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <body>
      {header}
      <main>{children}</main>
      {footer}
    </body>
  );
}
