'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '../../utils';

export const RouteLink = ({ name, path, className }: { name: string; path: string; className?: string }) => {
  const currentPath = usePathname();

  const isActive = currentPath === path;

  return (
    <Link
      className={cn(
        'text-sm font-medium hover:text-primary py-5 px-3 font-normal block text-base text-nowrap',
        isActive && 'text-primary border-b-2 border-primary bg-primary/10',
        className,
      )}
      href={path}
    >
      {name}
    </Link>
  );
};
