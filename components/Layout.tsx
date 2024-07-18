import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../components/Header'; // Import the Header component

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header /> {/* Render the Header component */}
    <main>
      {children}
    </main>
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;

export {};
