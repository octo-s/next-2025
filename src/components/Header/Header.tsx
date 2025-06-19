'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>TENNIS STORE</div>
      <nav>
        <Link
          href="/"
          className={classNames(styles.navLink, pathname === '/' ? styles.active : '')}
        >
          Главная
        </Link>
        <Link
          href="/rackets"
          className={classNames(
            styles.navLink,
            pathname.startsWith('/rackets') ? styles.active : '',
          )}
        >
          Ракетки
        </Link>
      </nav>
    </header>
  );
};
