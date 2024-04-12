'use client';

import classNames from '@/src/shared/utils/classnames/classnames';
import { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.css';

type ButtonVariantsType = 'primary' | 'secondary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariantsType;
}

export const Button = ({ type = 'button', children, className = '', variant = 'primary', ...props }: ButtonProps) => {
  return (
    <button className={classNames(cls.Button, {}, [className, cls[variant]])} type={type} {...props}>
      {children}
    </button>
  );
};
