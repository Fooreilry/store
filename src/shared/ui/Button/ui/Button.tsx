import classNames from '@/src/shared/utils/classnames/classnames';
import { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.css';

export const ButtonVariants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} as const;

export type ButtonVariantsType = ConstType<typeof ButtonVariants>;

export type iconPositionType = 'left' | 'right';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariantsType;
  icon?: React.ReactNode;
  iconPosition?: iconPositionType;
}

export const Button = ({
  type = 'button',
  children,
  className = '',
  variant = ButtonVariants.PRIMARY,
  icon,
  iconPosition = 'left',
  ...props
}: ButtonProps) => {
  return (
    <button className={classNames(cls.Button, {}, [className, cls[variant]])} type={type} {...props}>
      {!icon ? (
        children
      ) : (
        <div className={cls.withIcon}>
          {iconPosition === 'left' && icon}
          <span>{children}</span>
          {iconPosition === 'right' && icon}
        </div>
      )}
    </button>
  );
};
