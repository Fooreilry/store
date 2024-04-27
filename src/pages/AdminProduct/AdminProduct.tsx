import { formType } from '@/src/app/types/FormData';
import { ProductForm } from '@/src/entities/ProductForm/ProductForm';

export default function AdminProduct({ id }: { id?: string }) {
  const isCretaeForm = id ? formType.WATCH : formType.CREATE;

  return (
    <div className="px-4 w-full">
      <h2 className=" text-xl text-center md:text-start md:text-2xl border-b-2 border-primary pb-2  w-full md:w-[500px] font-bold">
        {isCretaeForm === formType.WATCH ? `Товар ${id}` : 'Создание товара'}
      </h2>
      <div className="mt-8">
        <div className="border rounded">
          <ProductForm formType={isCretaeForm} />
        </div>
      </div>
    </div>
  );
}
