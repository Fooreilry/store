import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '../card';
import { cn } from '../../utils';
import styles from './BrandCard.module.css';

interface BrandCardProps {
  className?: string;
  imageUrl: string;
  width: number;
  height: number;
}

export const BrandCard = ({ className, imageUrl, width, height }: BrandCardProps) => {
  return (
    <Card className={cn(styles.card, className)}>
      <CardContent className="p-4">
        <Image src={imageUrl} alt="Жаба" width={width} height={height} />
      </CardContent>
    </Card>
  );
};
