import { ProductForm } from '@/src/entities/ProductForm/ProductForm';

export default async function AdminProduct({ params }) {
  const { id } = params;

  return (
    <div className="px-4 w-full">
      <h2 className=" text-xl text-center md:text-start md:text-2xl border-b-2 border-primary pb-2  w-full md:w-[500px] font-bold">
        Популярные товары {id}
      </h2>
      <div className="mt-8">
        <div className="border rounded">
          <ProductForm />
        </div>
      </div>
    </div>
  );
}
