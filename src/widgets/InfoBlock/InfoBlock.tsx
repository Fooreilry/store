import { cn } from '@/src/shared/utils';
import styles from './InfoBlock.module.css';

export const InfoBlock = () => {
  return (
    <div className={cn(styles.InfoBlockSection, "min-w-80 min-h-[600px] bg-[url('/bg.jpg')] bg-cover")}>
      <div className={styles.InfoBlockDiv}>
        <div className={cn(styles.NewsBlock, 'bg-red-900 mr-[2%]')} />
        <div className={cn(styles.ProductBlockTheDay, 'bg-cyan-600 mb-[2%]')} />
        <div className={cn(styles.BlockShares, 'bg-purple-950')} />
      </div>
    </div>
  );
};
