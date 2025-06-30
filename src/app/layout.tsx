import './globals.css';
import Layout from '@/components/Layout/Layout';
import { FC, PropsWithChildren } from 'react';

export const metadata = {
  title: 'Rackets Shop',
  description: 'Лучшие теннисные ракетки',
};
const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
