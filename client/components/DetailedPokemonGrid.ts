import styled from "@emotion/styled"
import { mq } from "../common/constants"

const DetailedPokemonGrid = styled.div`
  flex: 1;
  border: 1px solid black;
  border-radius: 30px;
  overflow: hidden;
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
