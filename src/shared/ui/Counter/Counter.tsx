import { ReactNode } from 'react';
import { cn } from '../../utils';

type CounterProps = {
  icon: ReactNode;
  value: number;
  className?: string;
};

export const Counter = ({ icon, value, className = '' }: CounterProps) => {
  return (
    <p className={cn('flex items-end gap-2', className)}>
      <span>{icon}</span>
      <span className="font-bold leading-none">{value}</span>
    </p>
  );
};
