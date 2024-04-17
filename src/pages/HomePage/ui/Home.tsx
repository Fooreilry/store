import { ProductList } from '@/src/widgets/ProductList/ProductList';

import { InfoBlock } from '@/src/widgets/InfoBlock/InfoBlock';
import { CategoriesList } from '@/src/widgets/CategoriesList/CategoriesList';

export default function HomePage() {
  return (
    <main className="p-0">
      <section className=" mt-6 xl:mt-10">
        <InfoBlock />
      </section>
      <section className="mt-6 xl:mt-10 px-4 xl:px-10 md:5">
        <h2 className=" text-xl text-center md:text-start md:text-2xl border-b-2 border-primary pb-2  w-full md:w-[500px] font-bold">
          Популярные товары
        </h2>
        <article className="mt-8">
          <ProductList />
        </article>
      </section>
      <section className="mt-6 xl:mt-10 px-4 xl:px-10 md:5">
        <h2 className=" text-xl text-center md:text-start md:text-2xl border-b-2 border-primary pb-2  w-full md:w-[500px] font-bold">
          Популярные категории
        </h2>
        <article className="mt-8">
          <CategoriesList />
        </article>
      </section>
    </main>
  );
}
