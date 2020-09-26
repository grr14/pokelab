import { Theme } from "./types"
import { typesColors, damagesColors, versionsColors } from "./constants"

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
    text: "black",
    button: {
      background: "#B8B8B8",
      text: "black",
      border: "#505050",
    },
  },
  table: {
    th: {
      background: "#F0F0F0",
      border: "solid 1px #B8B8B8",
    },
    tr: {
      backgroundHover: "#F0F0F0",
    },
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
  input: {
    background: "#B8B8B8",
    text: "black",
  },
  boxShadow: {
    small: "0px 0px 5px 5px",
    medium: "0px 0px 15px 10px",
    color: "rgba(30, 30, 30, 0.75)",
  },
  chart: {
    background: "white",
    text: "black",
    radar: {
      background: "rgba(200,0,0,0.5)",
      lines: "gray",
    },
  },
  type: typesColors,
  damage: damagesColors,
  version: {
    ...versionsColors,
    black: "black",
    black2: "black",
    white: "#aaa",
    white2: "#aaa",
  },
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
  table: {
    th: {
      background: "#303030",
      border: "solid 1px #E31010",
    },
    tr: {
      backgroundHover: "#303030",
    },
  },
  header: {
    background: "#030303",
    text: "rgba(255,255,255,0.8)",
    button: {
      background: "#303030",
      text: "rgba(255,255,255,0.8)",
      border: "#505050",
    },
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
  input: {
    background: "#030303",
    text: "rgba(255,255,255,0.8)",
  },
  boxShadow: {
    small: "0px 0px 5px 5px",
    medium: "0px 0px 15px 10px",
    color: "rgba(150, 150, 150, 0.75)",
  },
  chart: {
    background: "#303030",
    text: "rgba(255,255,255,0.8)",
    radar: {
      background: "rgba(200,0,0,0.5)",
      lines: "white",
    },
  },
  type: typesColors,
  damage: damagesColors,
  version: {
    ...versionsColors,
    blue: "#96CAFF",
    black: "#777",
    black2: "#777",
    white: "white",
    white2: "white",
  },
}

export { lightTheme, darkTheme }
