'use client';

import NextLink from 'next/link';
import styles from './Link.module.css';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { ComponentProps, FC } from 'react';

type LinkProps = ComponentProps<typeof NextLink> & {
  isNavLink?: boolean;
};
export const Link: FC<LinkProps> = ({ isNavLink = false, children, ...props }) => {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  return (
    <NextLink
      {...props}
      className={classNames(styles.link, {
        [styles.active]: isActive,
        [styles.navLink]: isNavLink,
      })}
    >
      {children}
    </NextLink>
  );
};
