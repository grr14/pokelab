import React from "react"
import { getDataFromTree } from "@apollo/react-ssr"

import { NextPage, NextPageContext } from "next"
import Head from "next/head"
import { IncomingHttpHeaders } from "http"
import { AppContext } from "next/app"
import { Agent } from "https"

import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
} from "@apollo/client"

interface ExtendedAppContext extends AppContext {
  ctx: NextPageContext & { apolloClient: ApolloClient<NormalizedCacheObject> }
}

interface Props {
  apolloState: any
  headers: IncomingHttpHeaders
}

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null

const agent = new Agent({
  rejectUnauthorized: false,
})

function create(initialState: any, headers: IncomingHttpHeaders) {
  return new ApolloClient<NormalizedCacheObject>({
    link: new HttpLink({
      uri: "https://pokelab-graphql-server.herokuapp.com/",
      headers,
      fetchOptions: {
        agent: agent,
      },
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  })
}

const initApollo = (initialState: any, headers: IncomingHttpHeaders) => {
  if (typeof window === "undefined") {
    return create(initialState, headers)
  }

  if (!apolloClient) {
    apolloClient = create(initialState, headers)
  }

  return apolloClient
}

export default (App: NextPage<any>) =>
  class withApollo extends React.Component<Props> {
    static displayName = `withApollo(${App.displayName})`

    static defaultProps = { apolloState: {} }

    static async getInitialProps(ctx: ExtendedAppContext) {
      const {
        AppTree,
        ctx: { req, res },
      } = ctx

      const headers = req ? req.headers : {}
      const apollo = initApollo({}, headers)
      ctx.ctx.apolloClient = apollo

      let pageProps = {}
      if (App.getInitialProps) {
        try {
          pageProps = await App.getInitialProps(ctx as any)
        } catch (err) {
          console.error(err)
        }
      }
      if (res && res.finished) {
        return {}
      }
      if (typeof window === "undefined") {
        try {
          await getDataFromTree(
            <AppTree pageProps={pageProps} apolloClient={apollo} />
          )
        } catch (err) {
          console.error("Error while running `getDataFromTree`", err)
        }
        Head.rewind()
      }
      const apolloState = apollo.cache.extract()
      return {
        ...pageProps,
        headers,
        apolloState,
      }
    }

    apolloClient = initApollo(this.props.apolloState, this.props.headers)

    render() {
      return <App apolloClient={this.apolloClient} {...this.props} />
    }
  }
