import React from "react"
import { AppProps } from "next/app"
import { ApolloProvider, useQuery } from "@apollo/react-hooks"
import withApollo from "../common/apollo"
import { ApolloClient, NormalizedCacheObject } from "apollo-boost"

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
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default withApollo(PokelabApp)
