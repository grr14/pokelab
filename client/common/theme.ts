import { Theme } from "./types"
import { type, damage } from "./constants"

const lightTheme: Theme = {
  name: "lightTheme",
  body: {
    background: "#B8B8B8",
    text: "black",
    font: "Montserrat",
  },
  main: {
    background: "white",
  },
  card: {
    background: "#F0F0F0",
    backgroundHover: "#D4D4D4",
  },
  header: {
    background: "#7F7F7F",
    text: "white",
  },
  boxShadow: {
    small: "0px 0px 5px 5px",
    medium: "0px 0px 15px 10px",
    color: "rgba(0, 0, 0, 0.75)",
  },
  chart: {
    radar: {
      background: "rgba(120,120,120,0.4)",
    },
  },
  type: type,
  damage: damage,
}

export default lightTheme
