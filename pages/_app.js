import Head from "next/head"
import { MantineProvider } from '@mantine/core';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<>
  <Head>
    <title>Federico A. Galatolo</title>
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
  </Head>
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      colorScheme: 'dark',
    }}
  >
    <Component {...pageProps} />
  </MantineProvider>
  </>)
}

export default MyApp
