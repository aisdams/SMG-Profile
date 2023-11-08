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
import Script from 'next/script';

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
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-NR136R75E5`}
      />
      <Script strategy="lazyOnload" id="gtag-init">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-NR136R75E5', 
                    {page_path: window.location.pathname,});`}
      </Script>
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
