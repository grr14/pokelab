import { ApolloClient } from "apollo-client"
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import * as GetPokemonTypes from "../graphql/queries/__generated__/getPokemonById"

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

const GET_POKE = gql`
  query getPokemonById {
    getPokemon(id: 3) {
      id
      name
      pictures {
        name
        url
      }
    }
  }
`

interface PokemonProps {
  id: number
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data, loading, error } = useQuery<
    GetPokemonTypes.getPokemonById,
    GetPokemonTypes.getPokemonByIdVariables
  >(GET_POKE, {
    variables: { id: id },
  })

  if (loading) return <p>Loading</p>
  if (error) return <p>ERROR: {error.message}</p>
  if (!data) return <p>Not found</p>

  console.log(data)

  return (
    <div>
      <p>{data.getPokemon.id}</p>
      <p>{data.getPokemon.name}</p>
      <img
        style={{ height: "375px", width: "375px" }}
        src={data.getPokemon.pictures[4].url}
      />
      <p>{data.getPokemon.pictures[4].name}</p>
      <p>{data.getPokemon.__typename}</p>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Pokemon id={6} />
    </div>
  )
}
