import { Routes } from '@/src/shared/constants/Routes';
import { RouteLink } from '@/src/shared/ui/RouteLink/RouteLink';
import { cn } from '@/src/shared/utils';

export const NavigationLinks = ({ className = '', closeMenu }: { className?: string; closeMenu?: () => void }) => {
  return (
    <nav className={cn(className)}>
      <ul className={cn('flex flex-col -mx-6 xl:flex-row xl:items-center xl:mx-8', className)}>
        {Routes.map(({ path, name }) => (
          <li key={path}>
            <RouteLink closeMenu={closeMenu} className="px-8 xl:px-3" path={path} name={name} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
