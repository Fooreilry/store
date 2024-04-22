import { ThemeButton } from '@/src/features/ThemeButton/ThemeButton';
import { SquareUserRound } from 'lucide-react';
import Link from 'next/link';

export const HeaderAdmin = () => {
  return (
    <header className="flex justify-between items-center py-4 px-4 xl:px-10 md:5">
      {/* TODO: Переделать!!! */}
      <Link href="/">
        <h1 className="text-2xl">
          <p className="text-right">Admin</p>
        </h1>
      </Link>

      <div className="ml-auto px-0 md:px-5">
        <div className="flex">
          <SquareUserRound />
          <p className="text-lg ml-2">User</p>
        </div>
      </div>
      <div>
        <ThemeButton />
      </div>
    </header>
  );
};
