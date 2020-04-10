import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'theme-ui'

import Meta from '../components/meta'

import theme from '../components/theme'

export default class extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Meta />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
  }
}
