import { Button } from '@/src/shared/ui/button';

export default function page() {
  return (
    <div className="grid grid-cols-2 w-[100%] gap-5 place-content-center justify-items-center">
      <Button className="w-[496px] h-[134px] bg-secondary text-nune hover:bg-gray-300"> Заказы </Button>
      <Button className="w-[496px] h-[134px] bg-secondary text-nune hover:bg-gray-300"> Товары </Button>
      <Button className="w-[496px] h-[134px] bg-secondary text-nune hover:bg-gray-300">Пользователи</Button>
      <Button className="w-[496px] h-[134px] bg-secondary text-nune hover:bg-gray-300"> Новости </Button>
    </div>
  );
}
