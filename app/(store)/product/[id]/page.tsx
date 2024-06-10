import { Button } from '@/src/shared/ui/button';
import { Table, TableCell, TableRow } from '@/src/shared/ui/table';
import { Textarea } from '@/src/shared/ui/textarea';
import { Star, UserCircle2 } from 'lucide-react';
import Image from 'next/image';

export default async function page({ params }: { params: { id: string } }) {
  console.log(params.id);

  return (
    <main>
      <section className="mt-6 ">
        <div className="grid grid-cols-12 space-x-10 mt-4">
          <div className="col-span-5 mx-auto bg-white rounded-lg w-full flex justify-center items-center">
            <Image src="/prod4.jpg" alt="Жаба" width={500} height={500} />
          </div>
          <div className="col-span-6 flex flex-col py-2 space-y-3 ">
            <h2 className=" text-5xl font-bold">Ноутбук Apple MacBook Pro</h2>
            <div className=" flex gap-3 items-center">
              <p className="text-2xl font-bold">Рейтинг:</p>
              <Star className=" stroke-primary fill-primary" /> <Star className=" stroke-primary fill-primary" />
              <Star className=" stroke-primary fill-primary" /> <Star className=" stroke-primary fill-primary" />
              <Star className=" stroke-primary fill-primary" />
              <div>(5.0)</div>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold mb-3">Характеристики</h3>
              <div className=" border rounded-lg">
                <Table className=" bg-secondary/20">
                  <TableRow>
                    <TableCell>Модель</TableCell>
                    <TableCell className=" border-l">Apple MacBook Air</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Год релиза</TableCell>
                    <TableCell className=" border-l">2022</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Операционная система</TableCell>
                    <TableCell className=" border-l">macOS</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Тип экрана</TableCell>
                    <TableCell className=" border-l">IPS</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Диагональ экрана (дюйм)</TableCell>
                    <TableCell className=" border-l">13.6"</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Разрешение экрана</TableCell>
                    <TableCell className=" border-l">2560x1664</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Модель процессора</TableCell>
                    <TableCell className=" border-l">Apple M2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Общее количество ядер</TableCell>
                    <TableCell className=" border-l">8</TableCell>
                  </TableRow>
                </Table>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-3">Описание</h3>
          <p className="text-lg leading-8 border border-secondary bg-secondary/20 rounded-lg p-4 shadow-md">
            Ноутбук Apple MacBook Air выполнен в металлическом корпусе черного цвета с компактными размерами и весом
            1.24 кг. Вы сможете брать его с собой повсюду и эффективно справляться с различными задачами. На экране IPS
            13.6 дюймов (2560x1664 пикселей) отображается детализированная картинка с реалистичной передачей цветовой
            палитры. Производительная аппаратная платформа обеспечивает скорость системы при запуске программ,
            веб-серфинге и решении прочих задач. Для удобства управления в мобильном компьютере Apple MacBook Air
            установлены эргономичная клавиатура с подсветкой и тачпад. Широкий набор интерфейсов позволяет подключаться
            к внешним устройствам. Акустическая система со стереодинамиками воспроизводит чистый насыщенный звук.
            Клавиатура с эргономичной раскладкой и белой подсветкой LED гарантирует комфортную работу в разное время
            суток. Аккумулятор обладает автономностью до 18 часов на одном заряде и поддерживает стандарт Power
            Delivery.
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
