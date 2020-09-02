import React, { useState } from "react"

import { ThemeProvider } from "emotion-theming"
import GlobalStyle from "../common/globalStyle"
import { lightTheme, darkTheme } from "../common/theme"

import { AppProps } from "next/app"

import { ApolloProvider } from "@apollo/react-hooks"
import withApollo from "../common/apollo"
import { ApolloClient, NormalizedCacheObject } from "apollo-boost"

import Layout from "../components/Layout"

interface Props extends AppProps {
  apolloClient: ApolloClient<NormalizedCacheObject>
}

const PokelabApp: React.FC<Props> = ({
  Component,
  apolloClient,
  pageProps,
}) => {
  const [checked, setChecked] = useState(true)
  const toggleChecked = () => {
    setChecked((prev) => !prev)
  }

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={checked ? lightTheme : darkTheme}>
        <Layout checked={checked} toggle={toggleChecked}>
          <Component {...pageProps} />
          <GlobalStyle />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default withApollo(PokelabApp)
