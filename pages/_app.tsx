import { AppProps } from 'next/app';
import '../styles/global.css'

import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
