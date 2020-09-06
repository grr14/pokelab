import { useRouter } from "next/router"

import DetailedAbility from "../../components/DetailedAbility"
import Error from "../_error"

import { validateQuery } from "../../common/utils"

const DetailedPokemonPage = () => {
  const {
    query: { id },
  } = useRouter()

  if (!validateQuery(id, "ability")) {
    return <Error statusCode={404} />
  }

  const abilityId = Number(id)

  return <DetailedAbility id={abilityId} />
}

export default DetailedPokemonPage
