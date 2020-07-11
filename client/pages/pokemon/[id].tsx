import { useRouter } from "next/router"

import Header from "../../components/Header"
import MainContainer from "../../components/Container"

const DetailedPokemonPage = () => {
  const {
    query: { id },
  } = useRouter()
  return (
    <MainContainer>
      <Header />
      <div
        style={{
          flex: 1,
          backgroundColor: "lightgreen",
        }}
      >
        {id}
      </div>
      <footer>2020 grr</footer>
    </MainContainer>
  )
}

export default DetailedPokemonPage
