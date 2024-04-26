import { CategoriesCard } from '@/src/features/CategoriesCard/CategoriesCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/src/shared/ui/carousel';
import { cn } from '@/src/shared/utils';
import cls from './CategoriesList.module.css';

export const SliderCategoriesList = () => {
  return (
    <Carousel className=" mx-10 px-4 xl:mx-10 xl:px-3 2xl:mx-8 2xl:px-2 md:mx-16 md:px-6 sm:mx-36 sm:px-10 xs:mx-12 xs:px-10 2sm:mx-20 2sm:px-10">
      <CarouselContent>
        <CarouselItem className="basis-full  2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <CategoriesCard titleCategory="Интелегентная Жаба" imageCategory="/Жаба.png" />
        </CarouselItem>
        <CarouselItem className="basis-full 2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <CategoriesCard titleCategory="Полковник Жаба" imageCategory="/Жаба.png" />
        </CarouselItem>
        <CarouselItem className="basis-full 2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <CategoriesCard titleCategory="Супер Жаба" imageCategory="/Жаба.png" />
        </CarouselItem>
        <CarouselItem className="basis-full 2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <CategoriesCard titleCategory="Лягушка суровая" imageCategory="/Жаба.png" />
        </CarouselItem>
        <CarouselItem className="basis-full 2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <CategoriesCard titleCategory="Лягушка?" imageCategory="/Жаба.png" />
        </CarouselItem>
        <CarouselItem className="basis-full 2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <CategoriesCard titleCategory="Лягушка?" imageCategory="/Жаба.png" />
        </CarouselItem>
        <CarouselItem className="basis-full 2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <CategoriesCard titleCategory="Лягушка?" imageCategory="/Жаба.png" />
        </CarouselItem>
        <CarouselItem className="basis-full 2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <CategoriesCard titleCategory="Лягушка?" imageCategory="/Жаба.png" />
        </CarouselItem>
        <CarouselItem className="basis-full 2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <CategoriesCard titleCategory="Лягушка?" imageCategory="/Жаба.png" />
        </CarouselItem>
        <CarouselItem className="basis-full 2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <CategoriesCard titleCategory="Лягушка?" imageCategory="/Жаба.png" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className=" w-12 h-12" />
      <CarouselNext className=" w-12 h-12" />
    </Carousel>
  );
};

export const CategoriesList = ({ className = '' }: { className?: string }) => {
  return (
    <ul className={cn(cls.CategoryList, className)}>
      <li>
        <CategoriesCard titleCategory="Ноутбуки" imageCategory="/2_14-128x128.png" />
      </li>
      <li>
        <CategoriesCard titleCategory="Телевизоры" imageCategory="/2_14-128x128.png" />
      </li>
      <li>
        <CategoriesCard titleCategory="Переферия" imageCategory="/2_14-128x128.png" />
      </li>
    </ul>
  );
};
