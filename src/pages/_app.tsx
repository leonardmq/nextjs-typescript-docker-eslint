import '../styles/global.css'

import { AppProps } from 'next/app'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />
}
