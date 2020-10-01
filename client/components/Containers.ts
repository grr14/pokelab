import styled from "@emotion/styled"
import { Theme } from "../common/types"
import { only_phones } from "../common/constants"

interface Props {
  theme: Theme
}

const MainContainer = styled.div<Props>`
  min-height: 100vh;
  max-width: 100%;
  margin: 0;
  padding: 0;
  background-color: ${(props) => props.theme?.body?.background};
  color: ${(props) => props.theme?.body?.text};
  font-family: ${(props) => props.theme.body.font};
  display: flex;
  flex-direction: column;
`

const OuterContainer = styled.div`
  flex: 1;
  padding: 1% 2% 10px;
  display: flex;
`

const InnerContainer = styled.div<Props>`
  background-color: ${(props) => props.theme.main.background};
  box-sizing: border-box;
  padding: 1% 2%;
  flex: 1;
  border: 1px solid black;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CardContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  position: relative;
  ${only_phones} {
    padding: 0 10px;
  }
`

export { MainContainer, OuterContainer, InnerContainer, CardContainer }
