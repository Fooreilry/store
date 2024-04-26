import { ProductList } from '@/src/widgets/ProductList/ProductList';
import { InfoBlock } from '@/src/widgets/InfoBlock/InfoBlock';
import { SliderCategoriesList } from '@/src/widgets/CategoriesList/CategoriesList';
import { AdvantageList } from '@/src/widgets/AdvantageList/AdvantageList';
import { BrandList } from '@/src/widgets/BrandList/BrandList';

export default function HomePage() {
  return (
    <main className="p-0">
      <section className=" mt-6 xl:mt-10">
        <InfoBlock />
      </section>
      <section className="mt-6 xl:mt-10 px-4 xl:px-10 md:px-5 ">
        <h2 className=" text-xl text-center md:text-start md:text-2xl border-b-2 border-primary pb-2  w-full md:w-[500px] font-bold">
          Популярные товары
        </h2>
        <article className="mt-8 max-w-full">
          <ProductList />
        </article>
      </section>
      <section className="mt-6 xl:mt-10 px-4 xl:px-10 md:px-5">
        <h2 className=" text-xl text-center md:text-start md:text-2xl border-b-2 border-primary pb-2  w-full md:w-[500px] font-bold">
          Популярные категории
        </h2>
        <article className="mt-8">
          <SliderCategoriesList />
        </article>
      </section>
      <section className="mt-6 xl:mt-10 px-4 xl:px-10 md:px-5 bg-primary">
        <h2 className="text-white text-xl text-center md:text-start md:text-2xl pt-5 w-full md:w-[500px] font-bold">
          НАШИ ПРЕИМУЩЕСТВА
        </h2>
        <article className="mt-5 pb-10">
          <AdvantageList />
        </article>
      </section>
      <section className="mt-6 xl:mt-10 px-4 xl:px-10 md:px-5">
        <h2 className=" text-xl text-center md:text-start md:text-2xl border-b-2 border-primary pb-2  w-full md:w-[500px] font-bold">
          Бренды
        </h2>
        <article className="mt-8 pb-10">
          <BrandList />
        </article>
      </section>
    </main>
  );
}
