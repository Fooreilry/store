import { RouteConfig, RouterPath } from '../Configs/Routes/RouteConfig';

export const Routes = [
  {
    name: 'Главная',
    path: RouterPath[RouteConfig.MAIN],
  },
  {
    name: 'Категории',
    path: RouterPath[RouteConfig.CATEGORY],
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
