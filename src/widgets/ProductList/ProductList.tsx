import { ProductCard } from '@/src/features/ProductCard/ProductCard';
import { cn } from '@/src/shared/utils';
import cls from './ProductList.module.css';

export const ProductList = () => {
  return (
    <ul className={cn(cls.ProductList)}>
      <li>
        <ProductCard />
      </li>
      <li>
        <ProductCard />
      </li>
      <li>
        <ProductCard />
      </li>
      <li>
        <ProductCard />
      </li>
      <li>
        <ProductCard />
      </li>
      <li>
        <ProductCard />
      </li>
      <li>
        <ProductCard />
      </li>
      <li>
        <ProductCard />
      </li>
    </ul>
  );
};
