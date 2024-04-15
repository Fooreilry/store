export const RouteConfig = {
  MAIN: 'main',
  CATEGORY: 'category',
  NEWS: 'news',
  ABOUT: 'about',
  CART: 'cart',
  PROFILE: 'profile',
} as const;

export type RouteConfigType = ConstType<typeof RouteConfig>;

export const RouterPath: Record<RouteConfigType, string> = {
  [RouteConfig.MAIN]: '/',
  [RouteConfig.CATEGORY]: '/category',
  [RouteConfig.NEWS]: '/news',
  [RouteConfig.ABOUT]: '/about',
  [RouteConfig.CART]: '/cart',
  [RouteConfig.PROFILE]: '/profile',
} as const;
