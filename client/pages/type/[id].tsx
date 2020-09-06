import { useRouter } from "next/router"

import DetailedType from "../../components/DetailedType"

import Error from "../_error"

import { validateQuery } from "../../common/utils"

const DetailedTypePage = () => {
  const {
    query: { id },
  } = useRouter()

  if (!validateQuery(id, "type")) {
    return <Error statusCode={404} />
  }

  const typeId = Number(id)
  return <DetailedType id={typeId} />
}

export default DetailedTypePage
