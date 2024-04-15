import { Input } from '@/src/shared/ui/input';
import { Search } from 'lucide-react';
import React from 'react';

export const ProductSearch = () => {
  return (
    <div className="relative">
      <Input className="bg-secondary/80 pr-10 text-base" />
      <i className="absolute top-2 right-2">
        <Search className="opacity-60" />
      </i>
    </div>
  );
};
