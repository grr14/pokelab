import Header from "../components/Header"
import MainContainer from "../components/Container"
import MainContent from "../components/MainContent"
import React from "react"

export default function Home() {
  return (
    <MainContainer>
      <Header />
      <MainContent />
      <footer>2020 grr</footer>
    </MainContainer>
  )
}
