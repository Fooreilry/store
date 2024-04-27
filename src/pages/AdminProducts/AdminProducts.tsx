import { Payment, ProductTable, columns } from '@/src/widgets/ProductTable/ProductTable';

export default function AdminProducts({ products = [] }: { products: Payment[] }) {
  return (
    <div className=" px-10 w-full">
      <ProductTable columns={columns} data={products} />
    </div>
  );
}
