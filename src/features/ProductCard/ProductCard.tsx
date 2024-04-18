import { Counter } from '@/src/shared/ui/Counter/Counter';
import { Button } from '@/src/shared/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/src/shared/ui/card';
import { cn } from '@/src/shared/utils';
import { MessageCircle, Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export const ProductCard = ({ className = '' }: { className?: string }) => {
  return (
    <Card className={cn('max-w-full hover:shadow-md bg-secondary/30', className)}>
      <CardContent className="pb-0 pt-5 px-3">
        <div className=" h-auto w-48 mx-auto">
          <Image src="/Жаба.png" alt="Жаба" width={200} height={200} />
        </div>
        <div className="pt-2 flex gap-3">
          <Counter icon={<Star className="stroke-primary" height={18} width={18} strokeWidth={3} />} value={5} />
          <Counter
            icon={<MessageCircle className="stroke-primary" height={16} width={16} strokeWidth={3} />}
            value={5}
          />
        </div>
      </CardContent>
      <CardHeader className="py-[10px] px-3">
        <CardTitle className=" text-lg">Жабка</CardTitle>
      </CardHeader>
      <CardFooter className="pt-0 pb-5 px-3">
        <div className="flex justify-between w-full items-center">
          <p className="text-base font-bold">$ 10.00</p>
          <Button className=" h-8 font-bold">Купить</Button>
        </div>
      </CardFooter>
    </Card>
  );
};
