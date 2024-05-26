import type { LucideIcon } from 'lucide-react';
import { CircleUser, ClipboardList, HomeIcon } from 'lucide-react';

export type List = {
  title: string;
  path: string;
};
export type MenuItemType = {
  title: string;
  icon: LucideIcon;
  link: string;
};

export const MENU: MenuItemType[] = [
  {
    title: 'Главная',
    link: '/admin',
    icon: HomeIcon,
  },
  {
    title: 'Список товаров',
    link: '/admin/products',
    icon: ClipboardList,
  },

  {
    title: 'Пользователи',
    link: '/user',
    icon: CircleUser,
  },
];
