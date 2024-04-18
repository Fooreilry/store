import { cn } from '@/src/shared/utils';
import React from 'react';
import { AdvantageCard } from '@/src/shared/ui/AdvantageCard/AdvantageCard';
import { Minus } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/src/shared/ui/carousel';
import cls from './AdvantageList.module.css';

export const AdvantageList = () => {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className={cn(cls.AdvantageList)}
    >
      <CarouselContent className="w-full">
        <>
          <CarouselItem key={1} className={cn(cls.CarouselItem)}>
            <div className="p-1">
              <AdvantageCard titleAdvantage="Яркий цвет" iconAdvantage={<Minus />} />
            </div>
          </CarouselItem>
          <CarouselItem key={2} className={cn(cls.CarouselItem)}>
            <div className="p-1">
              <AdvantageCard titleAdvantage="Разнообразие" iconAdvantage={<Minus />} />
            </div>
          </CarouselItem>
          <CarouselItem key={3} className={cn(cls.CarouselItem)}>
            <div className="p-1">
              <AdvantageCard titleAdvantage="Высота прыжка" iconAdvantage={<Minus />} />
            </div>
          </CarouselItem>
          <CarouselItem key={4} className={cn(cls.CarouselItem)}>
            <div className="p-1">
              <AdvantageCard titleAdvantage="Размеры" iconAdvantage={<Minus />} />
            </div>
          </CarouselItem>
          <CarouselItem key={5} className={cn(cls.CarouselItem)}>
            <div className="p-1">
              <AdvantageCard titleAdvantage="Скорость" iconAdvantage={<Minus />} />
            </div>
          </CarouselItem>
          <CarouselItem key={6} className={cn(cls.CarouselItem)}>
            <div className="p-1">
              <AdvantageCard titleAdvantage="Улыбка" iconAdvantage={<Minus />} />
            </div>
          </CarouselItem>
          <CarouselItem key={7} className={cn(cls.CarouselItem)}>
            <div className="p-1">
              <AdvantageCard titleAdvantage="Пупырки" iconAdvantage={<Minus />} />
            </div>
          </CarouselItem>
          <CarouselItem key={8} className={cn(cls.CarouselItem)}>
            <div className="p-1">
              <AdvantageCard titleAdvantage="Гены" iconAdvantage={<Minus />} />
            </div>
          </CarouselItem>
        </>
      </CarouselContent>
    </Carousel>
  );
};
