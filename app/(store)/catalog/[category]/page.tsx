import { ProductCard } from '@/src/features/ProductCard/ProductCard';
import { Button } from '@/src/shared/ui/button';
import { Input } from '@/src/shared/ui/input';

export default async function page({ params }: { params: { category: string } }) {
  const { category } = params;
  console.log(category);

  return (
    <main>
      <section className="mt-6 grid grid-cols-12 space-x-8">
        <div className="col-span-3 w-full rounded-md bg-secondary/20 p-4">
          <h3 className="text-xl font-bold mb-3">Фильтры</h3>
          <div className="space-x-3 flex items-center  mt-4">
            <p className="text-base font-bold ">Цена</p>

            <Input type="number" placeholder="От" />
            <Input type="number" placeholder="До" />
          </div>
          <div>
            <p className="text-base font-bold mt-4">Производитель</p>
          </div>
          <div>
            <p className="text-base font-bold mt-4">Категория</p>
          </div>
          <div className="px-4 space-y-3">
            <Button className="w-full h-10">Применить</Button>
            <Button className="w-full h-10" variant="secondary">
              Сбросить
            </Button>
          </div>
        </div>
        <div className="col-span-9 gap-5 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </main>
  );
}
