import { cn } from '@/src/shared/utils';
import React from 'react';
import { BrandCard } from '@/src/shared/ui/BrandCard/BrandCard';
import cls from './BrandList.module.css';

export const BrandList = ({ className = '' }: { className?: string }) => {
  return (
    <ul className={cn(cls.BrandList, className)}>
      <li>
        <BrandCard imageUrl="/Lenovo.png" width={100} height={100} />
      </li>
      <li>
        <BrandCard imageUrl="/Lenovo.png" width={100} height={100} />
      </li>
      <li>
        <BrandCard imageUrl="/Lenovo.png" width={100} height={100} />
      </li>
      <li>
        <BrandCard imageUrl="/Lenovo.png" width={100} height={100} />
      </li>
      <li>
        <BrandCard imageUrl="/Lenovo.png" width={100} height={100} />
      </li>
      <li>
        <BrandCard imageUrl="/Lenovo.png" width={100} height={100} />
      </li>
    </ul>
  );
};
