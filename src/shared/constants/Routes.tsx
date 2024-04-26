import { RouteConfig, RouterPath } from '../Configs/Routes/RouteConfig';

export const Routes = [
  {
    name: 'Главная',
    path: RouterPath[RouteConfig.MAIN],
  },
  {
    name: 'Каталог',
    path: RouterPath[RouteConfig.CATALOG],
  },
  {
    name: 'Новости',
    path: RouterPath[RouteConfig.NEWS],
  },
  {
    name: 'О нас',
    path: RouterPath[RouteConfig.ABOUT],
  },
];
