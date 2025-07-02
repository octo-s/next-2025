'use client';

import styles from './Header.module.css';
import { Link } from '@/components/Link/Link';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>TENNIS STORE</div>
      <nav>
        <Link isNavLink href="/">
          Главная
        </Link>
        <Link isNavLink href="/rackets">
          Ракетки
        </Link>
        <Link isNavLink href="/top-rackets">
          Топ-10
        </Link>
      </nav>
    </header>
  );
};
