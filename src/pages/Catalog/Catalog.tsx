import { CategoriesList } from '@/src/widgets/CategoriesList/CategoriesList';

export default function Catalog() {
  return (
    <main>
      <section className="mt-6">
        <h2 className=" text-xl text-center md:text-start md:text-2xl border-b-2 border-primary pb-2  w-full md:w-[500px] font-bold">
          Каталог
        </h2>
        <div className="mt-8 max-w-full">
          <CategoriesList />
        </div>
      </section>
    </main>
  );
}
