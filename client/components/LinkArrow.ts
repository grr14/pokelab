import styled from "@emotion/styled"
import { Size, Theme } from "../common/types"
import { LAST_POKEMON_ID } from "../common/constants"

type ArrowProps = {
  pokemonId: number
  direction: string
  size: Size
  theme?: Theme
}

const LinkArrow = styled.div<ArrowProps>`
  font-size: ${(props) => (props.size === "small" ? "2em" : "3em")};
  color: ${(props) => props.theme?.body?.text};
  padding: ${(props) =>
    props.direction === "left" ? "0 0 0 10px" : "0 10px 0 0"};
  visibility: ${(props) =>
    (props.pokemonId === 1 && props.direction === "left") ||
    (props.pokemonId === LAST_POKEMON_ID && props.direction === "right")
      ? "hidden"
      : "visible"};

  &:hover {
    cursor: ${(props) =>
      (props.pokemonId === 1 && props.direction === "left") ||
      (props.pokemonId === LAST_POKEMON_ID && props.direction === "right")
        ? "default"
        : "pointer"};
  }
`

export default LinkArrow
