import Header from "../components/Header"
import MainContainer from "../components/Container"
import MainPageContent from "../components/MainPageContent"
import React from "react"

export default function Home() {
  return (
    <MainContainer>
      <Header />
      <MainPageContent />
      <footer>2020 grr</footer>
    </MainContainer>
  )
}
