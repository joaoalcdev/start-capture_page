import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
// import * as fbq from '../assets/components/lib/fpixel'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
