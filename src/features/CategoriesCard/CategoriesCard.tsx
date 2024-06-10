import { Card, CardContent, CardHeader, CardTitle } from '@/src/shared/ui/card';
import Image from 'next/image';

export const CategoriesCard = ({ titleCategory, imageCategory }: { titleCategory: string; imageCategory: string }) => {
  return (
    <Card className=" max-w-full min-h-[347px] hover:shadow-md bg-secondary/30 flex flex-col justify-around">
      <CardContent className="pb-0 pt-5 px-3">
        <div className=" h-[200px] mx-auto rounded-lg bg-white w-full flex items-center justify-center">
          <Image src={imageCategory} alt="Жаба" width={200} height={200} />
        </div>
      </CardContent>
      <CardHeader className="py-[10px] px-3">
        <CardTitle className=" text-xl py-4 text-center">{titleCategory}</CardTitle>
      </CardHeader>
    </Card>
  );
};
