import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Head from 'next/head';

import Topbar from '@components/topbar';

const qc = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={qc}>
      <Head>
        <title>LINKEXPRESS</title>
        <meta name="description" content="LINKEXPRESS" />
      </Head>
      <Topbar />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
