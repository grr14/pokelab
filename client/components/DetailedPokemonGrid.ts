import styled from "@emotion/styled"
import { mq } from "../common/constants"
import { Theme } from "../common/types"

interface Props {
  theme: Theme
}

const DetailedPokemonGrid = styled.div<Props>`
  background-color: ${(props) => props.theme.main.background};
  box-sizing: border-box;

  overflow: hidden;
  display: grid;

  ${mq[0]} {
    grid-template-columns: 1fr;
    grid-template-rows: 250px 1fr 1fr;
  }
  ${mq[1]} {
    grid-template-columns: 50% 50%;
    grid-template-rows: 66.6% 33.3%;
  }
`

export default DetailedPokemonGrid
