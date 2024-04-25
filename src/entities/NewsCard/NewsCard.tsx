import { Badge } from '@/src/shared/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/src/shared/ui/card';
import { cn } from '@/src/shared/utils';
import Image from 'next/image';

export const NewsCard = ({ className = '' }: { className?: string }) => {
  return (
    <Card className={cn('mx-auto overflow-hidden rounded-lg bg-secondary/20 shadow p-0', className)}>
      <Image src="/Жаба.png" className="w-full max-h-52" alt="Жаба" width={200} height={200} />
      <CardHeader>
        <h3 className="text-2xl font-medium">Migrating to Sailboat UI</h3>
      </CardHeader>
      <CardContent className="py-0">
        <p>
          Sailboat UI is a modern UI component library for Tailwind CSS. Get started with 150+ open source components.
        </p>
      </CardContent>
      <CardFooter className="pt-3 pb-4 flex justify-between">
        <p>Дата: 23.12.2022</p>
        <Badge className="bg-red-500 ">Железо</Badge>
      </CardFooter>
    </Card>
  );
};
