import AdminProducts from '@/src/pages/AdminProducts/AdminProducts';
import { Payment } from '@/src/widgets/ProductTable/ProductTable';

async function getData(): Promise<Payment[]> {
  return [
    {
      id: '1',
      name: '17.3" Ноутбук MSI Katana B12VFK-463XRU',
      img: '/prod1.jpg',
      price: '110000',
      isActive: true,
      category: 'Ноутбуки',
      createdAt: new Date('May 14, 2024 17:42:00'),
      updatedAt: new Date(),
      rating: 4.0,
    },
    {
      id: '2',
      name: 'Ноутбук ASUS TUF Gaming F15 FX507ZC4-HN009',
      img: '/prod2.jpg',
      price: '89000 ',
      isActive: true,
      category: 'Ноутбуки',
      createdAt: new Date('May 01, 2023 17:42:00'),
      updatedAt: new Date('May 01, 2024 17:42:00'),
      rating: 3.0,
    },
    {
      id: '3',
      name: 'Ноутбук HUAWEI MateBook D 16 2024',
      img: '/prod3.jpg',
      price: '70000 ',
      isActive: true,
      category: 'Ноутбуки',
      createdAt: new Date('December 20, 2023 17:42:00'),
      updatedAt: new Date(),
      rating: 4.0,
    },
    {
      id: '4',
      name: 'Ноутбук Apple MacBook Air4',
      img: '/prod4.jpg',
      price: '120000',
      isActive: true,
      category: 'Ноутбуки',
      createdAt: new Date('January 20, 2023 17:42:00'),
      updatedAt: new Date(),
      rating: 5.0,
    },
    {
      id: '5',
      name: 'Видеокарта MSI NVIDIA GeForce RTX 4060 Ti GAMING X 8GB',
      img: '/4060Ti.png',
      price: '54799',
      isActive: false,
      category: 'Комплектующие для ПК',
      createdAt: new Date('May 10, 2024 17:42:00'),
      updatedAt: new Date(),
      rating: 5.0,
    },
    {
      id: '6',
      name: 'Ноутбук Apple MacBook Pro',
      img: '/prod5.jpg',
      price: '203000 ',
      isActive: true,
      category: 'Ноутбуки',
      createdAt: new Date('January 20, 2023 17:42:00'),
      updatedAt: new Date(),
      rating: 5.0,
    },
    {
      id: '7',
      name: 'Ноутбук Acer Nitro 16 AN16-41-R5MW',
      img: '/prod6.jpg',
      price: '115000',
      isActive: true,
      category: 'Ноутбуки',
      createdAt: new Date('January 25, 2024 17:42:00'),
      updatedAt: new Date(),
      rating: 3.0,
    },
    {
      id: '8',
      name: 'OLED Телевизор Samsung QE55S95CAU',
      img: '/TV_OLED.png',
      price: '209999',
      isActive: false,
      category: 'Телевизоры и аксессуары',
      createdAt: new Date('May 14, 2024 17:42:00'),
      updatedAt: new Date(),
      rating: 4.9,
    },
    {
      id: '9',
      name: 'Игровая консоль Sony PlayStation 5 Slim 1 TB с дисководом + 2-й геймпад',
      img: '/SonyPlayStation.png',
      price: '72990',
      isActive: false,
      category: 'Консоли и видеоигры',
      createdAt: new Date('May 10, 2024 17:42:00'),
      updatedAt: new Date(),
      rating: 4.4,
    },
    {
      id: '10',
      name: 'Игровая мышь Razer DeathAdder Essential Black (RZ01-03850100-R3M1)',
      img: '/RazerDeathAdder.png',
      price: '2299',
      isActive: false,
      category: 'Периферия и аксессуары',
      createdAt: new Date('May 01, 2023 17:42:00'),
      updatedAt: new Date('December 01, 2023 17:42:00'),
      rating: 4.7,
    },
    {
      id: '11',
      name: 'Wi-Fi роутер TP-Link Archer AX17 AX1500',
      img: '/TP-Link.png',
      price: '4499',
      isActive: false,
      category: 'Сетевое оборудование',
      createdAt: new Date('May 12, 2024 17:42:00'),
      updatedAt: new Date(),
      rating: 4.7,
    },
    {
      id: '12',
      name: 'Игровая клавиатура Red Square Keyrox TKL Hyperion RSQ-20039',
      img: '/keyboard.png',
      price: '4999 ',
      isActive: false,
      category: 'Периферия и аксессуары',
      createdAt: new Date('May 10, 2024 17:42:00'),
      updatedAt: new Date(),
      rating: 4.4,
    },
    // ...
  ];
}
export default async function Products() {
  const products = await getData();

  return <AdminProducts products={products} />;
}
