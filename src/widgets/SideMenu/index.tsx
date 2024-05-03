'use client';

import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import style from './SideMenu.module.css';
import { MENU } from './menu';

const Sidebar = ({
  IsOpen,
  setIsOpen,
}: {
  IsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const path = usePathname();

  return (
    <aside className={`${style.sidebar} ${IsOpen ? style.sidebar_open : style.sidebar_close}`}>
      <div className={style.sidebar_menu}>
        <ul className={style.menu_container}>
          {MENU.map((item) => (
            <li key={item.title}>
              <Link className={`${style.menu_items} ${path?.includes(item.link) && style.active}`} href={item.link}>
                <i>
                  <item.icon className={style.icon} />
                </i>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <button
          className={`${style.button} ${IsOpen ? style.button_open : style.button_close}`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className={style.hide}>
            <ChevronLeft className={`${IsOpen ? style.icon_open : style.icon_close}`} />
            <span className={`${!IsOpen && 'hidden'}`}>Скрыть</span>
          </div>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
