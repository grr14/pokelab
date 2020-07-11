import styled from "@emotion/styled"
import {
  mq,
  only_phones,
  only_midsize_device,
  only_big_screens,
  only_notebooks,
} from "../common/constants"

const CardContainer = styled.div`
  height: auto;
  width: auto;

  display: flex;

  position: relative;

  ${only_phones} {
    padding: 0 10px;
  }
  ${only_midsize_device} {
    &:nth-child(2n) {
    }
  }
  ${only_notebooks} {
    &:nth-child(3n) {
    }
  }
  ${only_big_screens} {
    &:nth-child(4n) {
    }
  }
`

export default CardContainer
