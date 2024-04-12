import classNames from '@/src/shared/utils/classnames/classnames';
import { ReactNode } from 'react';
import styles from './Input.module.css';

// тип поля ввода
type InputType = 'text' | 'password' | 'email' | 'number';

// тип для вариантов поля ввода
type InputVarieties = 'search' | 'normal';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
  variants?: InputVarieties;
  icon?: ReactNode;
}

export const Input = ({ type, variants = 'normal', icon, ...props }: InputProps) => {
  if (icon) {
    return (
      <div>
        <input type={type} className={classNames(styles.inputIcon, {}, [styles[variants]])} {...props} />
        <i className={styles.icon}>{icon}</i>
      </div>
    );
  }
  return <input type={type} className={classNames(styles.input, {}, [styles[variants]])} {...props} />;
};
