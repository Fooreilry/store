import { Navigation } from '@/src/features/Navigation';
import ProductSearch from '@/src/features/ProductSearch/ProductSearch';
import { ThemeButton } from '@/src/features/ThemeButton/ThemeButton';
import { Cpu } from 'lucide-react';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 xl:px-10 md:5">
      {/* TODO: Переделать!!! */}
      <Link href="/" className=" block sm:hidden">
        <Cpu width={28} height={28} />
      </Link>
      <Link href="/" className="hidden sm:block  ">
        <h1 className="grid grid-row-2 font-bold text-2xl leading-5">
          <p>
            <span className="text-primary">D</span>igital
          </p>
          <p>Store</p>
        </h1>
      </Link>

      <div className="w-[900px] x-auto px-0 md:px-5 py-4">
        <ProductSearch />
      </div>
      <div className="ml-auto px-0 md:px-5">
        <Navigation />
      </div>
      <div>
        <ThemeButton />
      </div>
    </header>
  );
};
