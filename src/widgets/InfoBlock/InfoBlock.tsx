import { Button } from '@/src/shared/ui/button';
import { cn } from '@/src/shared/utils';
import styles from './InfoBlock.module.css';

export const InfoBlock = () => {
  return (
    <div className={cn(styles.InfoBlockSection, "min-w-80 min-h-[600px] bg-[url('/bg.jpg')] bg-cover")}>
      <div className={styles.InfoBlockDiv}>
        <div className={cn(styles.NewsBlock, "bg-[url('/New2.png')] bg-cover mr-[2%] relative")}>
          <div className=" absolute bg-black/30  z-10 w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 flex">
            <p className="text-white font-bold text-5xl mt-auto">
              На глобальный рынок вышли Ryzen 7 8700F и Ryzen 5 8400F
            </p>
          </div>
        </div>
        <div className={cn(styles.ProductBlockTheDay, " bg-[url('/new1.jpg')] bg-cover bg-cyan-600 mb-[2%] relative")}>
          <div className=" absolute bg-black/30  z-10 w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 ">
            <p className="text-white font-bold text-2xl mt-auto">
              Cмартфоны серии HUAWEI Pura 70 будут доступны для предзаказа 15 мая
            </p>
          </div>
        </div>
        <div className={cn(styles.BlockShares, "bg-white bg-[url('/prod3.jpg')] bg-cover mb-[2%] relative")}>
          <div className=" absolute bg-black/30  z-10 w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 ">
            <div className="flex flex-col h-full justify-between">
              <p className="text-white font-bold text-2xl">
                До конца скидки: <span>03:02:01</span>
              </p>
              <div className="flex items-center justify-between">
                <p className="text-base font-bold flex flex-col bg-white rounded-xl py-1 px-3">
                  <span className="text-md text-primary leading-none ml-3 line-through">$ 12.00</span>
                  <span className="text-xl  text-black">10 ₽</span>
                </p>
                <Button className="text-white">Подробнее</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
