import AdminProducts from '@/src/pages/AdminProducts/AdminProducts';
import { Payment } from '@/src/widgets/ProductTable/ProductTable';

async function getData(): Promise<Payment[]> {
  return [
    {
      id: '1',
      name: 'MacBook Air',
      img: '/2_14-128x128.png',
      price: '1.200.000',
      isActive: true,
      category: 'Category 1',
      createdAt: new Date(),
      updatedAt: new Date(),
      rating: 4.5,
    },
    {
      id: '2',
      name: 'MacBook Air',
      img: '/2_14-128x128.png',
      price: '1.200.000',
      isActive: true,
      category: 'Category 1',
      createdAt: new Date(),
      updatedAt: new Date(),
      rating: 4.5,
    },
    {
      id: '3',
      name: 'MacBook Air',
      img: '/2_14-128x128.png',
      price: '1.200.000',
      isActive: true,
      category: 'Category 1',
      createdAt: new Date(),
      updatedAt: new Date(),
      rating: 4.5,
    },
    {
      id: '4',
      name: 'MacBook Air',
      img: '/2_14-128x128.png',
      price: '1.200.000',
      isActive: true,
      category: 'Category 1',
      createdAt: new Date(),
      updatedAt: new Date(),
      rating: 4.5,
    },
    {
      id: '5',
      name: 'MacBook Air',
      img: '/2_14-128x128.png',
      price: '1.200.000',
      isActive: true,
      category: 'Category 1',
      createdAt: new Date(),
      updatedAt: new Date(),
      rating: 4.5,
    },
    // ...
  ];
}
export default async function Products() {
  const products = await getData();

  return <AdminProducts products={products} />;
}
