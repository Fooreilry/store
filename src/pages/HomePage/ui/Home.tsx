import { ProductList } from '@/src/widgets/ProductList/ProductList';

import { InfoBlock } from '@/src/widgets/InfoBlock/InfoBlock';

export default function HomePage() {
  return (
    <main className="p-0">
      <InfoBlock />
      <section className="mb-10">
        <h2 className="text-2xl border-b-2 border-primary pb-2 max-w-[500px] min-w-[300px] font-bold">
          Популярные товары
        </h2>
        <article className="mt-8">
          <ProductList />
        </article>
      </section>
    </main>
  );
}
