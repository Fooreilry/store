import { Counter } from '@/src/shared/ui/Counter/Counter';
import { Button } from '@/src/shared/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/src/shared/ui/card';
import { cn } from '@/src/shared/utils';
import { MessageCircle, Star } from 'lucide-react';
import Image from 'next/image';

export const ProductCard = ({ className = '' }: { className?: string }) => {
  return (
    <Card className={cn('max-w-full hover:shadow-md bg-secondary/30', className)}>
      <CardContent className="pb-0 pt-5 px-3">
        <div className=" h-auto w-52 mx-auto">
          <Image src="/Жаба.png" alt="Жаба" width={200} height={200} />
        </div>
        <div className="mt-4 flex gap-3">
          <Counter icon={<Star className="stroke-primary" height={20} width={20} strokeWidth={3} />} value={5} />
          <Counter
            icon={<MessageCircle className="stroke-primary" height={20} width={20} strokeWidth={3} />}
            value={5}
          />
        </div>
      </CardContent>
      <CardHeader className="py-4 px-3">
        <CardTitle className="text-xl">Жабка</CardTitle>
      </CardHeader>
      <CardFooter className="pt-0 pb-5 px-3">
        <div className="flex justify-between w-full items-center">
          <p className="text-base font-bold flex flex-col">
            <span className=" text-primary leading-none ml-3">$ 10.00</span>
            <span>$ 12.00</span>
          </p>
          <Button className="text-base h-8 font-bold">Купить</Button>
        </div>
      </CardFooter>
    </Card>
  );
};
