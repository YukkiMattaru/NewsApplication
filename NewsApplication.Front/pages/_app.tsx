import type { AppProps } from 'next/app';
import React from 'react';
import DefaultLayout from '../layouts/default';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
export default MyApp;
