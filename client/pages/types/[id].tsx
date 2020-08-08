import { useRouter } from "next/router"

import Header from "../../components/Header"
import MainContainer from "../../components/Container"
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
  return (
    <MainContainer>
      <Header />
      <DetailedType id={typeId} />
      <footer>2020 grr</footer>
    </MainContainer>
  )
}

export default DetailedTypePage
