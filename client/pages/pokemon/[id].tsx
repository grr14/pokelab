import { useRouter } from "next/router"

import Header from "../../components/Header"
import MainContainer from "../../components/Container"
import DetailedPokemon from "../../components/DetailedPokemon"
import Error from "../_error"

import { validateQuery } from "../../common/utils"

const DetailedPokemonPage = () => {
  const {
    query: { id },
  } = useRouter()

  if (!validateQuery(id)) {
    return <Error statusCode={404} />
  }

  const pokemonId = Number(id)

  return (
    <MainContainer>
      <Header />
      <DetailedPokemon id={pokemonId} />
      <footer>2020 grr</footer>
    </MainContainer>
  )
}

export default DetailedPokemonPage
