'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../../utils';

export interface RouteLinkProps {
  name: string;
  path: string;
  className?: string;
  closeMenu?: () => void;
}

export const RouteLink = ({ name, path, className, closeMenu }: RouteLinkProps) => {
  const currentPath = usePathname();

  const isActive = currentPath === path;

  return (
    <Link
      onClick={closeMenu}
      className={cn(
        'hover:text-primary py-5 font-normal block text-base text-nowrap',
        isActive && 'text-primary border-b-2 border-primary bg-primary/10',
        className,
      )}
      href={path}
    >
      {name}
    </Link>
  );
};
