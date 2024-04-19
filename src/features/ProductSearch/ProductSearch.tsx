'use client';

import { Search } from '@/src/entities/Search/Search';
import { Button } from '@/src/shared/ui/button';
import { SearchIcon, X } from 'lucide-react';
import { useState } from 'react';

const ProductSearch = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
  };
  const onClose = () => {
    document.body.style.overflow = 'auto';
    setIsOpen(false);
  };

  return (
    <>
      <Search className="hidden md:block" />
      <Button variant="ghost" className="ml-auto md:hidden flex items-center justify-center" onClick={onOpen}>
        <SearchIcon />
      </Button>
      {isOpen && (
        <div className=" bg-background w-full h-dvh min-w-[350px] block md:hidden absolute left-0 top-0">
          <div className=" p-3">
            <div className=" flex gap-2 items-center">
              <Search className="w-full" />
              <Button variant="ghost" className="flex items-center justify-center px-1" onClick={onClose}>
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
