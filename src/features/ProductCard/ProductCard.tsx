import { Counter } from '@/src/shared/ui/Counter/Counter';
import { Button } from '@/src/shared/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/src/shared/ui/card';
import { cn } from '@/src/shared/utils';
import { MessageCircle, Star } from 'lucide-react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

export const ProductCard = ({
  className = '',
  title,
  comments = 0,
  price,
  image,
  reting = 0,
}: {
  className?: string;
  title?: string;
  comments?: number;
  price?: number;
  image?: string | StaticImport;
  reting?: number;
}) => {
  return (
    <Card className={cn('max-w-full hover:shadow-md bg-secondary/30 flex flex-col', className)}>
      <CardContent className="pb-0 pt-4 px-3">
        <div className=" h-[200px] flex  justify-center items-center bg-white w-full rounded-lg ">
          {image && <Image src={image} alt="Жаба" className="mx-auto w-52" width={200} height={200} />}
        </div>
        <div className="mt-4 flex gap-3">
          <Counter icon={<Star className="stroke-primary" height={20} width={20} strokeWidth={3} />} value={reting} />
          <Counter
            icon={<MessageCircle className="stroke-primary" height={20} width={20} strokeWidth={3} />}
            value={comments}
          />
        </div>
      </CardContent>
      <CardHeader className="py-4 px-3">
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardFooter className="pt-0 pb-5 px-3 mt-auto">
        <div className="flex justify-between w-full items-center">
          <p className="text-base font-bold flex flex-col">
            {/* <span className="text-sm text-primary leading-none ml-3 line-through">$ 12.00</span> */}
            <span>{price} ₽</span>
          </p>
          <Button className="text-base h-8 font-bold">Купить</Button>
        </div>
      </CardFooter>
    </Card>
  );
};
