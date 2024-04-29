import AdminUsers from '@/src/pages/AdminUsers/AdminUsers';
import { Users } from '@/src/widgets/UsersTable/UsersTable';

async function getData(): Promise<Users[]> {
  return [
    {
      id: '1',
      name: 'User 1',
      mail: 'a@b.c',
      phone: ' 1.200.000',
      avatar: '/2_14-128x128.png',
      address: ' Address 1',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '8',
      name: 'User 2',
      avatar: '/2_14-128x128.png',
      address: ' Address 1',
      mail: 'a@b.c',
      isAdmin: false,
      phone: '1.200.000',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '2',
      name: 'User 2',
      avatar: '/2_14-128x128.png',
      address: ' Address 1',
      mail: 'a@b.c',
      isAdmin: false,
      phone: '1.200.000',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '3',
      name: 'User 2',
      avatar: '/2_14-128x128.png',
      address: ' Address 1',
      mail: 'a@b.c',
      isAdmin: false,
      phone: '1.200.000',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '4',
      name: 'User 2',
      avatar: '/2_14-128x128.png',
      address: ' Address 1',
      mail: 'a@b.c',
      isAdmin: false,
      phone: '1.200.000',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '5',
      name: 'User 2',
      avatar: '/2_14-128x128.png',
      address: ' Address 1',
      mail: 'a@b.c',
      isAdmin: false,
      phone: '1.200.000',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '6',
      name: 'User 2',
      avatar: '/2_14-128x128.png',
      address: ' Address 1',
      mail: 'a@b.c',
      isAdmin: false,
      phone: '1.200.000',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    // ...
  ];
}

export default async function Users() {
  const users = await getData();
  return <AdminUsers users={users} />;
}
