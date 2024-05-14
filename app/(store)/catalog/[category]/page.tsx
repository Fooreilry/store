import { ProductCard } from '@/src/features/ProductCard/ProductCard';
import { Button } from '@/src/shared/ui/button';
import { Checkbox } from '@/src/shared/ui/checkbox';
import { Input } from '@/src/shared/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/src/shared/ui/select';
// ТОDO: рефакторин
export default async function page({ params }: { params: { category: string } }) {
  const { category } = params;
  console.log(category);

  return (
    <main>
      <section className="mt-6 grid grid-cols-12 space-x-8">
        <div className="col-span-3 w-full rounded-md bg-secondary/20 p-4 border flex flex-col">
          <h3 className="text-xl font-bold mb-3">Фильтры</h3>
          <div className="pb-10">
            <div className="space-x-3 flex items-center  mt-4">
              <p className="text-base font-bold ">Цена: </p>

              <Input type="number" placeholder="От" />
              <Input type="number" placeholder="До" />
            </div>
            <div className="flex flex-col justify-center space-y-3">
              <p className="text-base font-bold mt-4">Производитель: </p>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Все" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col justify-center space-y-3">
              <p className="text-base font-bold mt-4">Диагональ экрана: </p>
              <div className="flex space-x-2 items-center">
                <Checkbox className="w-5 h-5" />
                <label
                  htmlFor="terms"
                  className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  До 13
                </label>
              </div>
              <div className="flex space-x-2 items-center">
                <Checkbox className="w-5 h-5" />
                <label
                  htmlFor="terms"
                  className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  14-15
                </label>
              </div>
              <div className="flex space-x-2 items-center">
                <Checkbox className="w-5 h-5" />
                <label
                  htmlFor="terms"
                  className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  15-16
                </label>
              </div>
              <div className="flex space-x-2 items-center">
                <Checkbox className="w-5 h-5" />
                <label
                  htmlFor="terms"
                  className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  16-17
                </label>
              </div>
              <div className="flex space-x-2 items-center">
                <Checkbox className="w-5 h-5" />
                <label
                  htmlFor="terms"
                  className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Больше 17
                </label>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-3">
              <p className="text-base font-bold mt-4">Производитель процессора: </p>
              <div className="flex space-x-2 items-center">
                <Checkbox className="w-5 h-5" />
                <label
                  htmlFor="terms"
                  className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  AMD
                </label>
              </div>
              <div className="flex space-x-2 items-center">
                <Checkbox className="w-5 h-5" />
                <label
                  htmlFor="terms"
                  className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Intel
                </label>
              </div>
              <div className="flex space-x-2 items-center">
                <Checkbox className="w-5 h-5" />
                <label
                  htmlFor="terms"
                  className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Apple
                </label>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-3">
              <p className="text-base font-bold mt-4">Видеокарта: </p>
              <div className="flex space-x-2 items-center">
                <Checkbox className="w-5 h-5" />
                <label
                  htmlFor="terms"
                  className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Nvidia
                </label>
              </div>
              <div className="flex space-x-2 items-center">
                <Checkbox className="w-5 h-5" />
                <label
                  htmlFor="terms"
                  className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  AMD
                </label>
              </div>
              <div className="flex space-x-2 items-center">
                <Checkbox className="w-5 h-5" />
                <label
                  htmlFor="terms"
                  className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Intel
                </label>
              </div>
            </div>
          </div>
          <div className="px-4 space-y-3 mt-auto ">
            <Button className="w-full h-10">Применить</Button>
            <Button className="w-full h-10" variant="secondary">
              Сбросить
            </Button>
          </div>
        </div>
        <div className="col-span-9 gap-5 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
          <ProductCard
            image="/prod1.jpg"
            title='17.3" Ноутбук MSI Katana B12VFK-463XRU'
            reting={4}
            comments={10}
            price={110000}
          />
          <ProductCard image="/prod2.jpg" title="Ноутбук ASUS TUF Gaming F15 " reting={3} comments={2} price={89000} />
          <ProductCard
            image="/prod3.jpg"
            title="Ноутбук HUAWEI MateBook D 16 2024"
            reting={4}
            comments={2}
            price={70000}
          />
          <ProductCard image="/prod4.jpg" title="Ноутбук Apple MacBook Air" reting={5} comments={15} price={120000} />
          <ProductCard image="/prod5.jpg" title="Ноутбук Apple MacBook Pro" reting={5} comments={2} price={203000} />
          <ProductCard
            image="/prod6.jpg"
            title="Ноутбук Acer Nitro 16 AN16-41-R5MW"
            reting={3}
            comments={10}
            price={115000}
          />
        </div>
      </section>
    </main>
  );
}
