import React, { useState, useEffect } from "react"

import { ThemeProvider } from "emotion-theming"
import GlobalStyle from "../common/globalStyle"
import { lightTheme, darkTheme } from "../common/theme"

import { AppProps } from "next/app"

import withApollo from "../common/apollo"
import { ApolloProvider } from "@apollo/react-hooks"

import { ApolloClient, NormalizedCacheObject } from "apollo-boost"

import Layout from "../components/Layout"
import { useLocalStorage } from "../common/hooks"

import * as gtag from "../gtag"
import Router from "next/router"

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

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    Router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange)
    }
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
