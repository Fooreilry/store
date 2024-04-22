'use client';

import { Button } from '@/src/shared/ui/button';
import { PopoverContent, PopoverTrigger } from '@/src/shared/ui/popover';
import { Skeleton } from '@/src/shared/ui/skeleton';
import { cn } from '@/src/shared/utils';
import { Popover } from '@radix-ui/react-popover';
import { Heart, Menu, ShoppingCart, X } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { NavigationLinks } from './NavigationLinks';

export const Navigation = ({ className = '' }: { className?: string }) => {
  const [isShow, isSetShow] = useState(false);
  const { data, status } = useSession();

  const onOpen = () => {
    document.body.style.overflow = 'hidden';
    isSetShow(true);
  };

  const onClose = () => {
    document.body.style.overflow = 'auto';
    isSetShow(false);
  };

  const onLogout = async () => {
    if (status !== 'authenticated') {
      return;
    }

    await signOut({ callbackUrl: '/signin' });
    onClose();
  };

  return (
    <>
      <div
        className={cn(
          className,
          isShow ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full',
          ' h-dvh xl:h-full  absolute top-0 inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out xl:bg-none bg-secondary xl:mt-0 xl:p-0 xl:top-0 xl:relative xl:bg-transparent xl:w-auto xl:opacity-100 xl:translate-x-0 xl:flex xl:items-center',
        )}
      >
        <div className=" w-full flex justify-end pb-4">
          <Button className="xl:hidden" variant="ghost" onClick={onClose}>
            <X />
          </Button>
        </div>
        <NavigationLinks closeMenu={onClose} />
        <ul className="flex gap-5 items-center mt-4  xl:mt-0">
          <li className="order-2 xl:order-1">
            <Button size="icon" variant="ghost">
              <ShoppingCart />
            </Button>
          </li>
          <li className="order-3 xl:order-2">
            <Button size="icon" variant="ghost">
              <Heart className=" hover:stroke-rose-600 hover:fill-rose-600" />
            </Button>
          </li>
          <li className="order-1 xl:order-3">
            {status === 'loading' && <Skeleton className="w-20 h-9" />}
            {status === 'authenticated' && (
              <Popover>
                <PopoverTrigger>
                  <p>{data.user?.name}</p>
                </PopoverTrigger>
                <PopoverContent className="p-2 max-w-48 flex flex-col ">
                  <Button variant="link" className=" hover:no-underline text-base text-none">
                    Профиль
                  </Button>
                  <Button variant="link" className=" hover:no-underline text-base text-none">
                    Админ панель
                  </Button>
                  <Button variant="link" className=" hover:no-underline text-base text-none">
                    Заказы
                  </Button>
                  <Button variant="link" onClick={onLogout} className="text-red-600 text-base hover:no-underline">
                    Выход
                  </Button>
                </PopoverContent>
              </Popover>
            )}
            {status === 'unauthenticated' && (
              <Link href="/signin">
                <Button onClick={onClose} className="font-bold ">
                  Войти
                </Button>
              </Link>
            )}
          </li>
        </ul>
      </div>
      <Button className="xl:hidden" variant="ghost" onClick={onOpen}>
        <Menu />
      </Button>
    </>
  );
};
