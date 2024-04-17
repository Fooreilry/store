import { Card, CardContent, CardHeader, CardTitle } from '@/src/shared/ui/card';
import Image from 'next/image';
import React from 'react';

export const CategoriesCard = ({ titleCategory, imageCategory }: { titleCategory: string; imageCategory: string }) => {
  return (
    <Card className=" max-w-full hover:shadow-md bg-secondary/30">
      <CardContent className="pb-0 pt-5 px-3">
        <div className=" h-auto w-48 mx-auto">
          <Image src={imageCategory} alt="Жаба" width={200} height={200} />
        </div>
      </CardContent>
      <CardHeader className="py-[10px] px-3">
        <CardTitle className=" text-lg text-center">{titleCategory}</CardTitle>
      </CardHeader>
    </Card>
  );
};
