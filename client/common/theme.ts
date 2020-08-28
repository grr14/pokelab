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
    border: "solid 1px #E31010",
  },
  card: {
    text: "black",
    textHover: "black",
    background: "#F0F0F0",
    backgroundHover: "#D4D4D4",
  },
  header: {
    background: "rgba(50,50,50,1)",
    text: "white",
  },
  drawer: {
    background: "#B8B8B8",
    text: { regular: "black", hover: "white" },
    cellHover: "#E31010",
    divider: {
      section: "#E31010",
      listItem: "black",
    },
  },
  boxShadow: {
    small: "0px 0px 5px 5px",
    medium: "0px 0px 15px 10px",
    color: "rgba(0, 0, 0, 0.75)",
  },
  chart: {
    background: "white",
    text: "black",
    radar: {
      background: "rgba(200,0,0,0.5)",
      lines: "gray",
    },
  },
  type: type,
  damage: damage,
}

const darkTheme: Theme = {
  name: "lightTheme",
  body: {
    background: "#060606",
    text: "rgba(255,255,255,0.8)",
    font: "Montserrat",
  },
  main: {
    background: "#121212",
    border: "solid 1px #E31010",
  },
  card: {
    text: "rgba(255,255,255,0.8)",
    textHover: "#E31010",
    background: "#303030",
    backgroundHover: "#505050",
  },
  header: {
    background: "black",
    text: "rgba(255,255,255,0.8)",
  },
  drawer: {
    background: "#060606",
    text: { regular: "rgba(255,255,255,0.8)", hover: "rgba(255,255,255,0.8)" },
    cellHover: "#505050",
    divider: {
      section: "#E31010",
      listItem: "#303030",
    },
  },
  boxShadow: {
    small: "0px 0px 5px 5px",
    medium: "0px 0px 15px 10px",
    color: "rgba(50, 50, 50, 0.75)",
  },
  chart: {
    background: "#303030",
    text: "rgba(255,255,255,0.8)",
    radar: {
      background: "rgba(200,0,0,0.5)",
      lines: "white",
    },
  },
  type: type,
  damage: damage,
}

export { lightTheme, darkTheme }
