import { type ReactNode } from 'react';
import styles from './Card.module.css';

type CardProps = {
  title: string;
  children: ReactNode;
  actions: ReactNode;
};

export function Card({ title, children, actions }: CardProps) {
  return (
    <section className={styles.card}>
      <h2>{title}</h2>
      <div className={styles['card-content']}>{children}</div>
      <div className={styles['card-actions']}>{actions}</div>
    </section>
  );
}
