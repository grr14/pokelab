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

  &:hover {
    background-color: ${(props) =>
      props.loading
        ? props.theme.card.background
        : props.theme.card.backgroundHover} !important;
    box-shadow: ${(props) =>
      props.loading
        ? "none"
        : `${props.theme.boxShadow.medium} ${props.theme.boxShadow.color}`};
  }
`

export default Card
