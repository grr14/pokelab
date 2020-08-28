import { ThemeProvider } from "emotion-theming"
import React from "react"
import { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/react-hooks"
import withApollo from "../common/apollo"
import { ApolloClient, NormalizedCacheObject } from "apollo-boost"
import GlobalStyle from "../common/globalStyle"
import { lightTheme, darkTheme } from "../common/theme"
import Header from "../components/Header"
import { useState } from "react"

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
        <Header checked={checked} toggle={toggleChecked} />
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default withApollo(PokelabApp)
