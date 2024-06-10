import { Card, CardContent, CardFooter, CardHeader } from '@/src/shared/ui/card';
import { cn } from '@/src/shared/utils';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

export const NewsCard = ({
  className = '',
  img,
  title,
  text,
  date,
}: {
  className?: string;
  date?: string;
  text?: string;
  title?: string;
  img?: string | StaticImport;
}) => {
  return (
    <Card
      className={cn('mx-auto overflow-hidden rounded-lg bg-secondary/20 shadow p-0 h-full flex flex-col', className)}
    >
      <Image src={img} className="w-full h-full max-h-[28vh] min-h-52" alt="Жаба" width={200} height={200} />
      <CardHeader>
        <h3 className="text-2xl font-medium ">{title}</h3>
      </CardHeader>
      <CardContent className="py-0">
        <p>{text}</p>
      </CardContent>
      <CardFooter className="pt-3 pb-4 flex justify-between mt-auto">
        <p>Дата: {date}</p>
        {/* <Badge className="bg-red-500 ">Железо</Badge> */}
        <p>Автор: Sergey</p>
      </CardFooter>
    </Card>
  );
};
