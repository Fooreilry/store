import { cn } from '@/src/shared/utils';
import React from 'react';
import { AdvantageCard } from '@/src/shared/ui/AdvantageCard/AdvantageCard';
import { Minus } from 'lucide-react';
import cls from './AdvantageList.module.css';

export const AdvantageList = () => {
  return (
    <ul className={cn(cls.AdvantageList)}>
      <li>
        <AdvantageCard titleAdvantage="Яркий цвет" iconAdvantage={<Minus />} />
      </li>
      <li>
        <AdvantageCard titleAdvantage="Разнообразие" iconAdvantage={<Minus />} />
      </li>
      <li>
        <AdvantageCard titleAdvantage="Высота прыжка" iconAdvantage={<Minus />} />
      </li>
      <li>
        <AdvantageCard titleAdvantage="Размеры" iconAdvantage={<Minus />} />
      </li>
      <li>
        <AdvantageCard titleAdvantage="Скорость" iconAdvantage={<Minus />} />
      </li>
      <li>
        <AdvantageCard titleAdvantage="Улыбка" iconAdvantage={<Minus />} />
      </li>
    </ul>
  );
};
