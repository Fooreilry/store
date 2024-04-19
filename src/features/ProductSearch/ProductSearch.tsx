'use client';

import { Search } from '@/src/entities/Search/Search';
import { Button } from '@/src/shared/ui/button';
import { SearchIcon, X } from 'lucide-react';
import { useState } from 'react';

const ProductSearch = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Search className="hidden md:block" />
      <Button
        variant="ghost"
        className="ml-auto md:hidden flex items-center justify-center"
        onClick={() => setIsOpen(true)}
      >
        <SearchIcon />
      </Button>
      {isOpen && (
        <div className=" bg-background w-full h-[100dvh] min-w-[350px] block md:hidden absolute left-0 top-0">
          <div className=" p-3">
            <div className=" flex gap-2 items-center">
              <Search className="w-full" />
              <Button
                variant="ghost"
                className="flex items-center justify-center px-1"
                onClick={() => setIsOpen(false)}
              >
                <X />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductSearch;
