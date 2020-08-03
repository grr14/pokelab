import styled from "@emotion/styled"
import { only_phones } from "../common/constants"

const CardContainer = styled.div`
  height: auto;
  width: auto;

  display: flex;

  position: relative;

  ${only_phones} {
    padding: 0 10px;
  }
`

export default CardContainer
