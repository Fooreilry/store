import { Button } from '@/src/shared/ui/button';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="text-center">
      <Image src="/Жаба.png" alt="404 Not Found" width={300} height={300} className="inline-block" />
      <h2 className="text-5xl text-fuchsia-900 font-bold">404 Not Found</h2>
      <p> Дамы и господа, страница не найдена! </p>
      <p> Просим вас вернуться на главную. </p>
      <Button>На главную</Button>
    </div>
  );
}
