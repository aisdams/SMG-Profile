import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Head from 'next/head';
import Aos from 'aos';
import Topbar from '@components/topbar';
import TawkTo from '@components/widget/tawk-to';

import '@/styles/globals.css';
import 'aos/dist/aos.css';
import 'react-datepicker/dist/react-datepicker.css';

export default function App({ Component, pageProps }: AppProps) {
  const qc = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
        retry: false,
      },
    },
  });

  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  }, []);

  return (
    <QueryClientProvider client={qc}>
      <Head>
        <title>LINKEXPRESS</title>
        <meta name="LINKEXPRESS" content="LINKEXPRESS" />
      </Head>
      <TawkTo />
      <Topbar />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
