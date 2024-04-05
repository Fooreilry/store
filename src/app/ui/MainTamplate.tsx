'use client'

import React from 'react'

export const MainTamplate = ({ header, footer, children}: { children: React.ReactNode }) => {
  return (
      <body>
          {header}
          <main>{children}</main>
          {footer}
      </body>
  )
}

