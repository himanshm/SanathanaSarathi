import { ReactNode, type ComponentPropsWithoutRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styles from './Button.module.css';

// Defining Button properties
type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode;
  btntype?: 'primary' | 'secondary' | 'danger';
  btnsize?: 'small' | 'medium' | 'large';
  to?: never;
  href?: never;
};

// Defining properties for using Link from react-router-dom
type LinkButtonProps = Omit<LinkProps, 'to'> & {
  children: ReactNode;
  btntype?: 'primary' | 'secondary' | 'danger';
  btnsize?: 'small' | 'medium' | 'large';
  to: string;
};

// Defining properties for an anchor element
type AnchorProps = ComponentPropsWithoutRef<'a'> & {
  children: ReactNode;
  btntype?: 'primary' | 'secondary' | 'danger';
  btnsize?: 'small' | 'medium' | 'large';
  href: string;
};

// Union type of all possible props
type Props = ButtonProps | LinkButtonProps | AnchorProps;

const isLinkButtonProps = (props: Props): props is LinkButtonProps => {
  return 'to' in props;
};

// Type predicate for AnchorProps
const isAnchorProps = (props: Props): props is AnchorProps => {
  return 'href' in props;
};

const Button = (props: Props) => {
  const classNames = [
    styles.button,
    props.btntype && styles[props.btntype] ? styles[props.btntype] : '',
    props.btnsize && styles[props.btnsize] ? styles[props.btnsize] : '',
  ]
    .filter(Boolean) // This will remove any empty strings resulting from ternary operations
    .join(' ');

  // Link component rendering
  if (isLinkButtonProps(props)) {
    const { to, ...rest } = props;
    return (
      <Link className={classNames} to={to} {...rest}>
        {props.children}
      </Link>
    );
  }

  // Anchor tag rendering
  if (isAnchorProps(props)) {
    const { href, ...rest } = props;
    return (
      <a className={classNames} href={href} {...rest}>
        {props.children}
      </a>
    );
  }

  // Button element rendering
  return (
    <button className={classNames} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
