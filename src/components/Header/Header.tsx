'use client';

import styles from './Header.module.css';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import {Link} from "@/components/Link/Link";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>TENNIS STORE</div>
      <nav>
        <Link
          href="/"
        >
          Главная
        </Link>
        <Link
          href="/rackets"
        >
          Ракетки
        </Link>
      </nav>
    </header>
  );
};
