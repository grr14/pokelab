import styled from "@emotion/styled"
import { mq } from "../common/constants"

const DetailedPokemonGrid = styled.div`
  flex: 1;
  background-color: lightcyan;
  border: solid 2px black;
  display: grid;

  ${mq[0]} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
  ${mq[1]} {
    grid-template-columns: 50% 50%;
    grid-template-rows: 66.6% 33.3%;
  }
`

export default DetailedPokemonGrid
