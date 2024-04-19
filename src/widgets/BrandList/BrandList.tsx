'use client';

import { BrandCard } from '@/src/shared/ui/BrandCard/BrandCard';
import { Carousel, CarouselContent, CarouselItem } from '@/src/shared/ui/carousel';
import { cn } from '@/src/shared/utils';
import Autoplay from 'embla-carousel-autoplay';
import cls from './BrandList.module.css';

export const BrandList = ({ className = '' }: { className?: string }) => {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      plugins={[
        Autoplay({
          delay: 10000,
          stopOnInteraction: false,
        }),
      ]}
      className={cn(cls.BrandList, className)}
    >
      <CarouselContent className="w-full">
        <>
          <CarouselItem key={1} className={cn(cls.CarouselItem)}>
            <div className="p-1">
              <BrandCard imageUrl="/Lenovo.png" width={100} height={100} />
            </div>
          </CarouselItem>
          <CarouselItem key={2} className={cn(cls.CarouselItem)}>
            <div className="p-1">
              <BrandCard imageUrl="/Lenovo.png" width={100} height={100} />
            </div>
          </CarouselItem>
          <CarouselItem key={3} className={cn(cls.CarouselItem)}>
            <div className="p-1">
              <BrandCard imageUrl="/Lenovo.png" width={100} height={100} />
            </div>
          </CarouselItem>
          <CarouselItem key={4} className={cn(cls.CarouselItem)}>
            <div className="p-1">
              <BrandCard imageUrl="/Lenovo.png" width={100} height={100} />
            </div>
          </CarouselItem>
          <CarouselItem key={5} className={cn(cls.CarouselItem)}>
            <div className="p-1">
              <BrandCard imageUrl="/Lenovo.png" width={100} height={100} />
            </div>
          </CarouselItem>
          <CarouselItem key={6} className={cn(cls.CarouselItem)}>
            <div className="p-1">
              <BrandCard imageUrl="/Lenovo.png" width={100} height={100} />
            </div>
          </CarouselItem>
          <CarouselItem key={7} className={cn(cls.CarouselItem)}>
            <div className="p-1">
              <BrandCard imageUrl="/Lenovo.png" width={100} height={100} />
            </div>
          </CarouselItem>
          <CarouselItem key={8} className={cn(cls.CarouselItem)}>
            <div className="p-1">
              <BrandCard imageUrl="/Lenovo.png" width={100} height={100} />
            </div>
          </CarouselItem>
        </>
      </CarouselContent>
    </Carousel>
  );
};
