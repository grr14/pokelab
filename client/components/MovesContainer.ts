import styled from "@emotion/styled"
import { mq } from "../common/constants"

const MovesContainer = styled.div`
  background-color: pink;

  ${mq[1]} {
    grid-column-start: 1;
    grid-column-end: span 2;
    grid-row-start: 2;
  }
`

export default MovesContainer
