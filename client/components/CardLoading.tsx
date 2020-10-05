/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import CircularProgress from "@material-ui/core/CircularProgress"

const StyledLoading = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CardLoading: React.FC = () => {
  return (
    <StyledLoading>
      <CircularProgress
        css={{
          color: "#E31010 !important",
        }}
      />
    </StyledLoading>
  )
}

export default CardLoading
