import { Button } from '@/src/shared/ui/button';
import { Input } from '@/src/shared/ui/input';
import { cn } from '@/src/shared/utils';
import { Search } from 'lucide-react';
import React from 'react';

export const ProductSearch = ({ className = '' }: { className?: string }) => {
  return (
    <div className={cn('relative h-10', className)}>
      <Input className="bg-secondary/80 pr-16 text-base hidden md:block" />
      <Button variant="ghost" className="absolute top-[2px] right-[2px]">
        <Search className="opacity-100 md:opacity-60 " />
      </Button>
    </div>
  );
};
