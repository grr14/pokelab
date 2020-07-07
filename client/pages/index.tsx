import { ApolloClient } from "apollo-client"
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: "http://localhost:4000/graphql",
})

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link,
})

/*client
  .query({
    query: gql`
      query getPokemonById {
        getPokemon(id: 3) {
          id
          name
        }
      }
    `,
  })
  .then((result) => console.log(result))*/

const GET_poke = gql`
  query getPokemonById {
    getPokemon(id: 3) {
      id
      name
    }
  }
`

const getpoke = () => {
  const { data, loading, error } = useQuery(GET_poke)

  if (loading) return <p>Loading</p>
  if (error) return <p>ERROR: {error.message}</p>
  if (!data) return <p>Not found</p>

  console.log(data)

  return (
    <div>
      <p>{data.getPokemon.id}</p>
      <p>{data.getPokemon.name}</p>
      <p>{data.getPokemon.__typename}</p>
    </div>
  )
}

export default function Home() {
  return <div className="container">{getpoke()}</div>
}
