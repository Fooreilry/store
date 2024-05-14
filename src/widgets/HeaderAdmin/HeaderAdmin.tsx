import { ThemeButton } from '@/src/features/ThemeButton/ThemeButton';
import { CircleUser } from 'lucide-react';
import Link from 'next/link';

export const HeaderAdmin = () => {
  return (
    <header className="flex justify-between items-center py-4 px-4 xl:px-10 md:5 bg-[#EDEDED]">
      {/* TODO: Переделать!!! */}
      <Link href="/">
        <h1 className="text-2xl">
          <p className="text-right ">Admin</p>
        </h1>
      </Link>

      <div className="ml-auto px-0 md:px-5">
        <div className="flex">
          <CircleUser />
          <p className="text-lg ml-2">User</p>
        </div>
      </div>
      <div>
        <ThemeButton />
      </div>
    </header>
  );
};
