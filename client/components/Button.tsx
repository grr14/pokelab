import styled from "@emotion/styled"
import Button from "@material-ui/core/Button"
import { Theme } from "../common/types"

interface Props {
  theme: Theme
}

const CustomButton = styled(Button)<Props>`
  margin: 0 2% !important;
  border: ${(props) =>
    `solid 1px ${props.theme.header.button.border} !important`};
  background-color: ${(props) =>
    `${props.theme.header.button.background} !important`};
  font-family: ${(props) => `${props.theme.body.font} !important`};
  color: ${(props) => `${props.theme.header.button.text} !important`};
  white-space: nowrap;
`

export { CustomButton }
