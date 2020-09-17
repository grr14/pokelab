import { useRouter } from "next/router"

import DetailedMove from "../../components/DetailedMove"
import Error from "../_error"

import { validateQuery } from "../../common/utils"

const DetailedPokemonPage = () => {
  const {
    query: { id },
  } = useRouter()

  if (!validateQuery(id, "move")) {
    return <Error statusCode={404} />
  }

  const moveId = Number(id)

  return <DetailedMove moveId={moveId} />
}

export default DetailedPokemonPage
