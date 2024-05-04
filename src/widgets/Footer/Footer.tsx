import { Button } from '@/src/shared/ui/button';
import { Send, Youtube } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className="pl-[40px] pr-[40px] py-4 h-45 w-full bg-primary">
      <div className="flex">
        <h1 className="grid grid-row-2 font-bold text-2xl leading-5">
          <p className="text-white">
            <span className="text-black">D</span>igital
          </p>
          <p className="text-right text-white">Space</p>
        </h1>
      </div>
      <div className={styles.divFlex}>
        <div>
          <p className="text-xl text-white mb-1">Главный офис компании находится в г.Псков, ул. Мирная, д.1, этаж 2.</p>
          <p className="text-xl text-white mb-1">
            Связаться с нами можно по номеру телефона 8-(911)-853-20-06 с 8:00 до 22:00.
          </p>
          <p className="text-xl text-white">
            Нашли ошибку на сайте? Напишите нам на почту: DigitalSpace2024@gmail.com.
          </p>
        </div>
        <div className={styles.divSocialNetwork}>
          <p className="text-center text-xl text-white mb-3">Следите за нашими новостями в соцсетях!</p>
          <div className={styles.divButton}>
            <Button type="button" variant="outline" className="bg-white text-primary hover:bg-gray-200 font-bold">
              VK
            </Button>
            <Button
              type="button"
              variant="outline"
              className="ml-5 mt-0 text-end bg-white text-primary hover:bg-gray-200 font-bold"
            >
              <Youtube />
            </Button>
            <Button
              type="button"
              variant="outline"
              className="ml-5 mt-0 text-end bg-white text-primary hover:bg-gray-200 font-bold"
            >
              <Send />
            </Button>
          </div>
        </div>
      </div>
      <p className="text-end text-xl text-white">© 2024 Digital Space</p>
      {/* <p className="text-center text-3xl font-bold">Footer</p> */}
    </footer>
  );
};
