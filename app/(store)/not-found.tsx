import { Button } from '@/src/shared/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex justify-center items-center">
      <section className="text-center space-y-2">
        <Image src="/Жаба.png" alt="404 Not Found" width={300} height={300} className="inline-block" />
        <h2 className="text-5xl text-fuchsia-900 font-bold ">404 Not Found</h2>
        <p> Дамы и господа, страница не найдена! </p>
        <p> Просим вас вернуться на главную. </p>
        <Link href="/">
          <Button className="m-5"> На главную </Button>
        </Link>
      </section>
    </main>
  );
}
