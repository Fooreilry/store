'use client';

import { TableSkeleton } from '@/src/app/ui/TableSkeleton';
import { useMount } from '@/src/shared/hooks/useMount/useMount';
import { Payment, ProductTable, columns } from '@/src/widgets/ProductTable/ProductTable';

export default function AdminProducts({ products = [] }: { products: Payment[] }) {
  const mounted = useMount();

  if (!mounted) {
    return <TableSkeleton />;
  }
  return (
    <div className=" px-10 w-full mt-8">
      <ProductTable columns={columns} data={products} />
    </div>
  );
}
