import Image from 'next/image';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../card';

export const AdvantageCard = ({
  titleAdvantage,
  iconAdvantage,
}: {
  titleAdvantage: string;
  iconAdvantage: React.ReactNode;
}) => {
  return (
    <Card className=" max-w-[344px] hover:shadow-md bg-white flex h-[70px] justify-center">
      <CardContent className="p-0 pt-6 text-primary">{iconAdvantage}</CardContent>
      <CardHeader className="py-[10px] px-3 pt-5">
        <CardTitle className=" text-lg text-primary">{titleAdvantage}</CardTitle>
      </CardHeader>
    </Card>
  );
};
