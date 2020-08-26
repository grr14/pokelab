import { ThemeProvider } from "emotion-theming"
import React from "react"
import { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/react-hooks"
import withApollo from "../common/apollo"
import { ApolloClient, NormalizedCacheObject } from "apollo-boost"
import GlobalStyle from "../common/globalStyle"
import { lightTheme, darkTheme } from "../common/theme"

interface Props extends AppProps {
  apolloClient: ApolloClient<NormalizedCacheObject>
}

const PokelabApp: React.FC<Props> = ({
  Component,
  apolloClient,
  pageProps,
}) => {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default withApollo(PokelabApp)
