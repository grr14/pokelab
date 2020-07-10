import styled from "@emotion/styled"
import { mq } from "../common/constants"

const StyledMainGrid = styled.div`
  display: grid;
  background-color: lightgray;
  overflow-x: hidden;
  width: 100%;
  max-width: 100%;

  margin: 0;
  padding: 0;

  column-gap: 2px;
  row-gap: 2px;

  ${mq[0]} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  ${mq[1]} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  ${mq[2]} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
  ${mq[3]} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
`

export default StyledMainGrid
