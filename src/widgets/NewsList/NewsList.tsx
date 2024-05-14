import { NewsCard } from '@/src/entities/NewsCard/NewsCard';

import { NewsFilters } from '@/src/entities/NewsFilters/NewsFilters';
import { cn } from '@/src/shared/utils';
import cls from './NewsList.module.css';

export const NewsList = ({ className = '' }: { className?: string }) => {
  return (
    <>
      <NewsFilters />
      <ul className={cn(cls.NewsList, 'mt-4', className)}>
        <li>
          <NewsCard
            title="Cмартфоны серии HUAWEI Pura 70 будут доступны для предзаказа 15 мая"
            date="13.05.2024"
            img="/new1.jpg"
          />
        </li>
        <li>
          <NewsCard />
        </li>
        <li>
          <NewsCard />
        </li>
        <li>
          <NewsCard />
        </li>
        <li>
          <NewsCard />
        </li>
        <li>
          <NewsCard />
        </li>
      </ul>
      <div className="my-8 hover:bg-secondary/50 flex items-center gap-4 before:h-px before:flex-1 before:bg-gray-300  before:content-[''] after:h-px after:flex-1 after:bg-gray-300  after:content-['']">
        Показать больше
      </div>
    </>
  );
};
