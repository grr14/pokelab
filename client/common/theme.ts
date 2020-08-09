import { Theme } from "./types"
import { type, damage } from "./constants"

const lightTheme: Theme = {
  name: "lightTheme",
  body: {
    background: "ivory",
    text: "black",
    font: "Montserrat",
  },
  main: {
    background: "white",
  },
  card: {
    background: "linen",
    backgroundHover: "NavajoWhite",
  },
  header: {
    background: "red",
    text: "blue",
  },
  boxShadow: {
    small: "0px 0px 5px 5px",
    medium: "0px 0px 15px 10px",
    color: "rgba(0, 0, 0, 0.75)",
  },
  type: type,
  damage: damage,
}

export default lightTheme
