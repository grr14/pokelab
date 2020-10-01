/** @jsx jsx */
import { jsx } from "@emotion/core"

import React from "react"

import { OuterContainer, InnerContainer } from "../components/Containers"
import MainPageContent from "../components/MainPageContent"

const Pokemons = () => {
  return (
    <OuterContainer>
      <InnerContainer>
        <MainPageContent />
      </InnerContainer>
    </OuterContainer>
  )
}

export default Pokemons
