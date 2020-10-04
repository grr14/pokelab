import styled from "@emotion/styled"
import { Card as MuiCard } from "@material-ui/core"
import { Theme } from "../common/types"

type StyledCardProps = {
  loading?: number
  theme?: Theme
}

const Card = styled(MuiCard)<StyledCardProps>`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: background-color 0.2s ease-in;
  background-color: ${(props) => props.theme.card.background} !important;
  color: ${(props) => props.theme.card.text} !important;

  &.MuiPaper-elevation8 {
    box-shadow: 0px 5px 5px -3px rgba(115, 115, 115, 0.2),
      0px 8px 10px 1px rgba(115, 115, 115, 0.14),
      0px 3px 14px 2px rgba(115, 115, 115, 0.12) !important;
  }

  &:hover {
    background-color: ${(props) =>
      props.loading
        ? props.theme.card.background
        : props.theme.card.backgroundHover} !important;
  }
`

export default Card
