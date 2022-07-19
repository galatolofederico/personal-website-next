import { createGetInitialProps } from '@mantine/next';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
}

export function getInitialProps(){
  return createGetInitialProps()()
}