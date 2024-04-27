import AdminProduct from '@/src/pages/AdminProduct/AdminProduct';

export default async function Product({ params }: { params: { id: string } }) {
  return <AdminProduct id={params.id} />;
}
