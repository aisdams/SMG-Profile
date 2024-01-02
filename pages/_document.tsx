import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="sarana mulya grafika"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://thumbs2.imgbox.com/75/13/Uja4pBjw_t.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://thumbs2.imgbox.com/75/13/Uja4pBjw_t.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
