import { Button } from '@/src/shared/ui/button';
import { Textarea } from '@/src/shared/ui/textarea';
import { Star, UserCircle2 } from 'lucide-react';
import Image from 'next/image';

export default async function page({ params }: { params: { id: string } }) {
  console.log(params.id);

  return (
    <main>
      <section className="mt-6 ">
        <div className="grid grid-cols-12 space-x-10 mt-4">
          <div className="col-span-6 mx-auto">
            <Image src="/2_14-128x128.png" alt="Жаба" width={300} height={300} />
          </div>
          <div className="col-span-6 flex flex-col justify-between py-2 space-y-3">
            <h2 className=" text-5xl font-bold">MacBook Air</h2>
            <div className=" flex gap-3 items-center">
              <p className="text-2xl font-bold ">Рейтинг:</p>
              <Star /> <Star /> <Star /> <Star />
              <div>(5.0)</div>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold mb-3">Характеристики</h3>
              <ul>
                <li>- Материал: высококачественные прочные материалы</li>
                <li>- Дизайн: элегантный и стильный</li>
                <li>- Функциональность: множество полезных функций, включая карманы, регулируемые ремни и застежки</li>
                <li>- Вместительность: достаточно места для хранения вещей</li>
                <li>- Легкость и удобство в ношении</li>
                <li>- Подходит для повседневного использования, поездок и активного образа жизни</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-3">Описание</h3>
          <p className="text-lg leading-8 border border-secondary bg-secondary/20 rounded-lg p-4 shadow-md">
            Этот товар - идеальное решение для тех, кто ищет удобство, стиль и функциональность в одном продукте.
            Изготовлен из высококачественных материалов, он прочный и долговечный. Этот товар имеет элегантный дизайн,
            который подойдет к любому интерьеру. Он оснащен множеством полезных функций, таких как удобные карманы для
            хранения мелочей, регулируемые ремни для комфортной посадки и застежки для безопасного хранения вещей.
            Благодаря своей вместительности, этот товар идеально подойдет для повседневного использования, будь то на
            работе, в поездке или в городе. Он легкий и удобный в ношении, что делает его идеальным выбором для
            активного образа жизни. Не упустите возможность приобрести этот универсальный товар, который станет
            незаменимым аксессуаром в вашем гардеробе.
          </p>
        </div>
        <div />
      </section>
      <section className="mt-6">
        <h3 className="text-2xl font-bold mb-3">Отзывы</h3>
        <div className="relative">
          <Textarea placeholder="Напишите отзыв" className="shadow-md" />
          <Button className="absolute bottom-2 right-2">Отправить</Button>
        </div>

        <ul className="flex flex-col gap-4 mt-4">
          <li>
            <article className="flex flex-col gap-2 border p-4 rounded-lg bg-secondary/20 shadow-md">
              <p className="flex items-center gap-2">
                <UserCircle2 /> Имя
              </p>
              <div className="flex items-center gap-2">
                <p className="text-xl font-bold">Оценка:</p>
                <Star /> <Star /> <Star /> <Star />
              </div>
              <p>Текст отзыва</p>
            </article>
          </li>
        </ul>
      </section>
    </main>
  );
}
