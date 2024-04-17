import { CategoriesCard } from '@/src/features/CategoriesCard/CategoriesCard';
import { cn } from '@/src/shared/utils';
import React from 'react';
import cls from './CategoriesList.module.css';

export const CategoriesList = () => {
  return (
    <ul className={cn(cls.CategoryList)}>
      <li>
        <CategoriesCard titleCategory="Интелегентная Жаба" imageCategory="/Жаба.png" />
      </li>
      <li>
        <CategoriesCard titleCategory="Полковник Жаба" imageCategory="/Жаба.png" />
      </li>
      <li>
        <CategoriesCard titleCategory="Супер Жаба" imageCategory="/Жаба.png" />
      </li>
      <li>
        <CategoriesCard titleCategory="Лягушка суровая" imageCategory="/Жаба.png" />
      </li>
      <li>
        <CategoriesCard titleCategory="Лягушка?" imageCategory="/Жаба.png" />
      </li>
    </ul>
  );
};
