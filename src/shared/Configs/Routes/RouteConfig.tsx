export const RouteConfig = {
  MAIN: 'main',
  CATEGORY: 'category',
  NEWS: 'news',
  ABOUT: 'about',
  CART: 'cart',
  FAVORITE: 'favorite',
  PRODUCT: 'product',
  PROFILE: 'account',
  ORDERS: 'orders',
  ADMIN: 'admin',
} as const;

export type RouteConfigType = ConstType<typeof RouteConfig>;

export const RouterPath: Record<RouteConfigType, string> = {
  [RouteConfig.MAIN]: '/',
  [RouteConfig.CATEGORY]: '/category',
  [RouteConfig.NEWS]: '/news',
  [RouteConfig.ABOUT]: '/about',
  [RouteConfig.CART]: '/cart',
  [RouteConfig.FAVORITE]: '/account/favorite',
  [RouteConfig.PRODUCT]: '/product',
  [RouteConfig.PROFILE]: '/account',
  [RouteConfig.ORDERS]: '/account/orders',
  [RouteConfig.ADMIN]: '/admin',
} as const;
