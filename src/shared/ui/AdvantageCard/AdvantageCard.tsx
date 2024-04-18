import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../card';
import styles from './AdvantageCard.module.css';

export const AdvantageCard = ({
  titleAdvantage,
  iconAdvantage,
}: {
  titleAdvantage: string;
  iconAdvantage: React.ReactNode;
}) => {
  return (
    <Card className={styles.card}>
      <CardContent className="p-0 pt-[17px] text-primary">{iconAdvantage}</CardContent>
      <CardHeader className="py-[10px] px-3 pt-4 pb-4">
        <CardTitle className=" text-lg text-primary">{titleAdvantage}</CardTitle>
      </CardHeader>
    </Card>
  );
};
