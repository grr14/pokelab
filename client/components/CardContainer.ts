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

  padding-left: 10px;

  ${only_phones} {
    padding: 0 10px;
    padding-right: 10px;
  }
  ${only_midsize_device} {
    &:nth-child(2n) {
      padding-right: 10px;
    }
  }
  ${only_notebooks} {
    &:nth-child(3n) {
      padding-right: 10px;
    }
  }
  ${only_big_screens} {
    &:nth-child(4n) {
      padding-right: 10px;
    }
  }
`

export default CardContainer
