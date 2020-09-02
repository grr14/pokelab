import { useRouter } from "next/router"

import DetailedPokemon from "../../components/DetailedPokemon"
import Error from "../_error"

import { validateQuery } from "../../common/utils"

const DetailedPokemonPage = () => {
  const {
    query: { id },
  } = useRouter()

  if (!validateQuery(id, "pokemon")) {
    return <Error statusCode={404} />
  }

  const pokemonId = Number(id)

  return <DetailedPokemon id={pokemonId} />
}

export default DetailedPokemonPage
