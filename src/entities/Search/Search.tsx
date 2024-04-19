'use client';

import { Button } from '@/src/shared/ui/button';
import { Input } from '@/src/shared/ui/input';
import { cn } from '@/src/shared/utils';
import { SearchIcon } from 'lucide-react';
import { useState } from 'react';

export const Search = ({ className = '' }: { className?: string }) => {
  const [value, setValue] = useState('');

  // fixed top-4 w-2/4 right-2/4 translate-x-2/4

  return (
    <div className={cn('relative h-10 ', className)}>
      <Input onChange={(e) => setValue(e.target.value)} className="bg-secondary/80 pr-16 text-base " />
      <Button variant="ghost" className="absolute top-[2px] right-[2px]">
        <SearchIcon className="opacity-60 " />
      </Button>
    </div>
  );
};
