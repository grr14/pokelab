import styled from "@emotion/styled"
import { mq } from "../common/constants"
import { Theme } from "../common/types"

interface Props {
  theme: Theme
}

const DetailedPokemonGrid = styled.div<Props>`
  background-color: ${(props) => props.theme.main.background};
  box-sizing: border-box;
  flex: 1;
  height: 100%;
  overflow: hidden;
  display: grid;
  justify-content: center;

  /* ------------------- mobile view --------------------- */

  ${mq[0]} {
    grid-template-columns: 1fr;
    grid-template-rows: 250px auto 1fr;
  }

  /* ------------------- desktop view --------------------- */

  ${mq[3]} {
    grid-template-columns: 30% 70%;
    grid-template-rows: 300px 1fr;
  }
  ${mq[4]} {
    grid-template-columns: 30% 70%;
    grid-template-rows: 300px 1fr;
  }
  ${mq[5]} {
    grid-template-columns: 25% 75%;
    grid-template-rows: 300px auto;
  }
`

export default DetailedPokemonGrid
