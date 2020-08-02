import styled from "@emotion/styled"
import { Theme } from "../common/types"

type MainContainerProps = {
  theme: Theme
}

const MainContainer = styled.div<MainContainerProps>`
  min-height: 100vh;
  max-width: 100%;
  margin: 0;
  padding: 0;
  background-color: ${(props) => props.theme?.body?.background};
  display: flex;
  flex-direction: column;
`

export default MainContainer
