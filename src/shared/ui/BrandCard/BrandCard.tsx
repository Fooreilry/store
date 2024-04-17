import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '../card';
import { cn } from '../../utils';

interface BrandCardProps {
  className?: string;
  imageUrl: string;
  width: number;
  height: number;
}

export const BrandCard = ({ className, imageUrl, width, height }: BrandCardProps) => {
  return (
    <Card className={cn('hover:shadow-md bg-secondary/30', className)}>
      <CardContent className="p-4">
        <Image src={imageUrl} alt="Жаба" width={width} height={height} />
      </CardContent>
    </Card>
  );
};
