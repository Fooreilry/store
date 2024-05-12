'use client';

import { AdvantageCard } from '@/src/shared/ui/AdvantageCard/AdvantageCard';
import { Carousel, CarouselContent, CarouselItem } from '@/src/shared/ui/carousel';
import { cn } from '@/src/shared/utils';
import Autoplay from 'embla-carousel-autoplay';
import { Minus } from 'lucide-react';
import cls from './AdvantageList.module.css';

export const AdvantageList = () => {
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
      className={cn(cls.AdvantageList)}
    >
      <CarouselContent className="w-full">
        <>
          <CarouselItem key={1} className={cn(cls.CarouselItem)}>
            <div className="p-1">
              <AdvantageCard titleAdvantage="Скорость дотавки" iconAdvantage={<Minus />} />
            </div>
          </CarouselItem>
          <CarouselItem key={2} className={cn(cls.CarouselItem)}>
            <div className="p-1">
              <AdvantageCard titleAdvantage="Разнообразие выбора" iconAdvantage={<Minus />} />
            </div>
          </CarouselItem>
          <CarouselItem key={3} className={cn(cls.CarouselItem)}>
            <div className="p-1">
              <AdvantageCard titleAdvantage="Цена" iconAdvantage={<Minus />} />
            </div>
          </CarouselItem>
          <CarouselItem key={4} className={cn(cls.CarouselItem)}>
            <div className="p-1">
              <AdvantageCard titleAdvantage="Качество" iconAdvantage={<Minus />} />
            </div>
          </CarouselItem>
          <CarouselItem key={5} className={cn(cls.CarouselItem)}>
            <div className="p-1">
              <AdvantageCard titleAdvantage="Быстрый обмен и возврат" iconAdvantage={<Minus />} />
            </div>
          </CarouselItem>
          <CarouselItem key={6} className={cn(cls.CarouselItem)}>
            <div className="p-1">
              <AdvantageCard titleAdvantage="Надёжность" iconAdvantage={<Minus />} />
            </div>
          </CarouselItem>
        </>
      </CarouselContent>
    </Carousel>
  );
};
