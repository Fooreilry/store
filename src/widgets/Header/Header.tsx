import { ProductSearch } from '@/src/features/ProductSearch/ProductSearch';
import { ThemeButton } from '@/src/features/ThemeButton/ThemeButton';
import { Routes } from '@/src/shared/constants/Routes';
import { RouteLink } from '@/src/shared/ui/RouteLink/RouteLink';
import { Button } from '@/src/shared/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-10">
      {/* TODO: Переделать!!! */}
      <h1 className="grid grid-row-2 font-bold text-2xl leading-5">
        <p>
          <span className="text-primary">D</span>igital
        </p>
        <p className="text-right">Space</p>
      </h1>

      <div className="w-[900px] min-w-80 mx-auto px-5">
        <ProductSearch />
      </div>

      <nav className=" ml-auto px-5">
        <ul className="flex">
          {Routes.map(({ path, name }) => (
            <li key={path}>
              <RouteLink path={path} name={name} />
            </li>
          ))}
        </ul>
      </nav>
      <ul className="flex gap-5 items-center">
        <li>
          <ThemeButton />
        </li>
        <li>
          <Button size="icon" variant="ghost">
            <ShoppingCart />
          </Button>
        </li>
        <li>
          <Button size="icon" variant="ghost">
            <Heart />
          </Button>
        </li>
        <li>
          <Button className=" font-bold ">Войти</Button>
        </li>
      </ul>
    </header>
  );
};
