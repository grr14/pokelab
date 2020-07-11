import styled from "@emotion/styled"
import { mq } from "../common/constants"

const StyledMainGrid = styled.div`
  display: grid;
  background-color: lightslategray;
  width: 100%;
  max-width: 100%;
  row-gap: 10px;
  column-gap: 10px;
  padding: 10px 0;

  ${mq[0]} {
    grid-template-columns: 1fr;
  }
  ${mq[1]} {
    grid-template-columns: 1fr 1fr;
  }
  ${mq[2]} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  ${mq[3]} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

export default StyledMainGrid
