import Header from "../components/Header"
import { MainContainer } from "../components/Containers"
import MainPageContent from "../components/MainPageContent"

export default function Home() {
  return (
    <MainContainer>
      <Header />
      <MainPageContent />
      <footer>2020 grr</footer>
    </MainContainer>
  )
}
