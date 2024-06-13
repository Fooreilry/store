import { Button } from '@/src/shared/ui/button';
import { Card } from '@/src/shared/ui/card';
import { Input } from '@/src/shared/ui/input';
import { Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';

export default function Cart() {
  return (
    <main>
      <div className="grid grid-cols-12 space-x-10 mt-4">
        <div className="col-span-8 mx-auto w-full px-6">
          <Card className="w-full flex flex-row p-4">
            <div className="flex">
              <div className=" px-4 flrex justify-center items-center rounded-lg bg-white">
                <Image src="/prod5.jpg" alt="Ноутбук Apple MacBook Pro" width={200} height={200} />
              </div>
              <div className="px-6 flex flex-col">
                <h2 className="text-2xl font-bold">Ноутбук Apple MacBook Pro</h2>
                <div className="flex justify-between mt-8">
                  <div className="flex space-x-3 px-4">
                    <Button size="icon" className="w-8 h-8" variant="default">
                      <Plus className="w-5 h-5" />
                    </Button>
                    <Input className="w-10 h-8 text-center text-lg" value={1} />
                    <Button size="icon" className="w-8 h-8" variant="default">
                      <Minus className="w-5 h-5" />
                    </Button>
                  </div>
                  <p className="text-xl font-bold">203 000 ₽</p>
                </div>
              </div>
            </div>
            <div className="ml-auto px-6 flex items-center justify-center">
              <Button className="w-auto h-auto " variant="outline">
                <Trash2 className="w-6 h-6 text-red-600" />
              </Button>
            </div>
          </Card>
        </div>
        <div className="col-span-4 ">
          <Card className="w-full p-4 space-y-4">
            <p className="text-2xl font-bold">Итого: 203 000 ₽</p>
            <Button className="w-full text-lg" size="lg">
              Оформить заказ
            </Button>
          </Card>
        </div>
      </div>
    </main>
  );
}
