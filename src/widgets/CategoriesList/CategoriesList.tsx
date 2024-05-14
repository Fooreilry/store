import { CategoriesCard } from '@/src/features/CategoriesCard/CategoriesCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/src/shared/ui/carousel';
import { cn } from '@/src/shared/utils';
import Link from 'next/link';
import cls from './CategoriesList.module.css';

export const SliderCategoriesList = () => {
  return (
    <Carousel className=" mx-10 px-4 xl:mx-10 xl:px-3 2xl:mx-8 2xl:px-2 md:mx-16 md:px-6 sm:mx-36 sm:px-10 xs:mx-12 xs:px-10 2sm:mx-20 2sm:px-10">
      <CarouselContent>
        <CarouselItem className="basis-full  2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <CategoriesCard
            titleCategory="Смартфоны и фототехника "
            imageCategory="/g6ftrydxju8scsg0g0k0kkw00kococ.png"
          />
        </CarouselItem>
        <CarouselItem className="basis-full 2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <CategoriesCard titleCategory="Телевизоры и аксессуары" imageCategory="/128579_original_front.png" />
        </CarouselItem>
        <CarouselItem className="basis-full 2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <CategoriesCard titleCategory="Консоли и видеоигры" imageCategory="/orig.png" />
        </CarouselItem>
        <CarouselItem className="basis-full 2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <CategoriesCard titleCategory="Ноутбуки" imageCategory="/csm_MSI_NB_GL73_Photo_02__7753ddf69e.png" />
        </CarouselItem>
        <CarouselItem className="basis-full 2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <CategoriesCard titleCategory="Компьютеры и ПО" imageCategory="/pc2.png" />
        </CarouselItem>
        <CarouselItem className="basis-full 2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <CategoriesCard titleCategory="Периферия и аксессуары" imageCategory="/240.png" />
        </CarouselItem>
        <CarouselItem className="basis-full 2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <CategoriesCard titleCategory="Комплектующие для ПК" imageCategory="/1500x300_1_1.png" />
        </CarouselItem>
        <CarouselItem className="basis-full 2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <CategoriesCard titleCategory="Сетевое оборудование" imageCategory="/17a272af841ce8922a184bcb975eb311.png" />
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
        <Link href="/catalog/notebook">
          <CategoriesCard titleCategory="Ноутбуки" imageCategory="/csm_MSI_NB_GL73_Photo_02__7753ddf69e.png" />
        </Link>
      </li>
      <li>
        <CategoriesCard titleCategory="Телевизоры и аксессуары" imageCategory="/128579_original_front.png" />
      </li>
      <li>
        <CategoriesCard titleCategory="Консоли и видеоигры" imageCategory="/orig.png" />
      </li>
      <li>
        <CategoriesCard titleCategory="Периферия и аксессуары" imageCategory="/240.png" />
      </li>
      <li>
        <CategoriesCard titleCategory="Комплектующие для ПК" imageCategory="/1500x300_1_1.png" />
      </li>
      <li>
        <CategoriesCard titleCategory="Сетевое оборудование" imageCategory="/17a272af841ce8922a184bcb975eb311.png" />
      </li>
    </ul>
  );
};
