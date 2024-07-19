import React from 'react';
import Head from 'next/head';
import Header from './Header';
import styles from './Layout.module.css';

type Props = {
  children?: React.ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className={styles.layout}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <div className={styles.content}>{children}</div>
  </div>
);

export default Layout;
