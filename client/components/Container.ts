import styled from "@emotion/styled"

const MainContainer = styled.div`
  min-height: 100vh;
  max-width: 100%;
  margin: 0;
  padding: 0;
  background-color: ${(props) => props.theme?.body?.background};
  display: flex;
  flex-direction: column;
`

export default MainContainer
