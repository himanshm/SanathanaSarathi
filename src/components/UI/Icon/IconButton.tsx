import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { NavLink, LinkProps } from 'react-router-dom';
import styles from './IconButton.module.css';

// Extending the IconButtonProps to include optional "to" prop for routing
type IconButtonProps = {
  icon: ElementType;
  children: ReactNode;
} & ComponentPropsWithoutRef<'button'> &
  Partial<Omit<LinkProps, 'to'>> & {
    to?: string;
  };

export function IconButton({
  icon: Icon,
  children,
  to,
  ...otherProps
}: IconButtonProps) {
  // Conditionally rendering as Link or button
  if (to) {
    // Rendering as Link for React Router
    return (
      <NavLink
        to={to}
        {...otherProps}
        className={({ isActive }) =>
          `${styles['icon-button']} ${isActive ? styles['active'] : ''}`
        }
      >
        <span className={styles.icon}>
          <Icon />
        </span>
        <span>{children}</span>
      </NavLink>
    );
  } else {
    // Rendering as a simple button
    return (
      <button {...otherProps} className={styles['icon-button']}>
        <span>
          <Icon />
        </span>
        <span>{children}</span>
      </button>
    );
  }
}
