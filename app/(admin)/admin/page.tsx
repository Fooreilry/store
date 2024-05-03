import { Button } from '@/src/shared/ui/button';
import styles from './page.module.css';

export default function page() {
  return (
    <div className={styles.div}>
      <Button className="w-auto h-auto bg-secondary text-nune hover:bg-gray-300"> Заказы </Button>
      <Button className="w-auto h-auto bg-secondary text-nune hover:bg-gray-300"> Товары </Button>
      <Button className="w-auto h-auto bg-secondary text-nune hover:bg-gray-300">Пользователи</Button>
      <Button className="w-auto h-auto bg-secondary text-nune hover:bg-gray-300"> Новости </Button>
    </div>
  );
}
