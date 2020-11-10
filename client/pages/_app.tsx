import React, { useState, useEffect } from "react"

import { ThemeProvider } from "emotion-theming"
import GlobalStyle from "../common/globalStyle"
import { lightTheme, darkTheme } from "../common/theme"

import { AppProps } from "next/app"

import withApollo from "../common/apollo"

import {
  ApolloProvider,
  ApolloClient,
  NormalizedCacheObject,
} from '@apollo/client';

import Layout from "../components/Layout"
import { useAnalytics, useLocalStorage } from "../common/hooks"
import { Router } from "next/router"

interface Props extends AppProps {
  apolloClient: ApolloClient<NormalizedCacheObject>
}

const PokelabApp: React.FC<Props> = ({
  Component,
  apolloClient,
  pageProps,
}) => {
  const [checked, setChecked] = useState(true)
  const [theme, setTheme] = useLocalStorage("theme", "light")

  useEffect(() => {
    if (window.localStorage.getItem("theme") === null) {
      window.localStorage.setItem("theme", "light")
      setChecked(true)
    } else if (window.localStorage.getItem("theme") === "dark") {
      setChecked(false)
    } else {
      setChecked(true)
    }
  }, []) /* run at the initial render to set up local storage if user never visited the site before */

  const toggleChecked = () => {
    setChecked((prev) => !prev)
    setTheme((theme) => (theme === "light" ? "dark" : "light"))
  }

  const { init, trackPageViewed } = useAnalytics()
  useEffect(() => {
    init(process.env.GOOGLE_ANALYTICS_ID)
    trackPageViewed()
    Router.events.on("routeChangeComplete", () => {
      trackPageViewed()
    })
  }, [])

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Layout checked={checked} toggle={toggleChecked}>
          <Component {...pageProps} />
          <GlobalStyle />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default withApollo(PokelabApp)
