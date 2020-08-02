import { Theme } from "./types"

const lightTheme: Theme = {
  name: "lightTheme",
  body: {
    background: "lightPink",
    text: "black",
  },
  header: {
    background: "green",
    text: "red",
  },
  type: {
    bug: "#a8b820",
    dark: "#705848",
    dragon: "#7038f8",
    electric: "#f8d030",
    fairy: "#ee99ac",
    fighting: "#c03028",
    fire: "#f08030",
    flying: "#a890f0",
    ghost: "#705898",
    grass: "#78c850",
    ground: "#e0c068",
    ice: "#98d8d8",
    normal: "#a8a878",
    poison: "#a040a0",
    psychic: "#f85888",
    rock: "#b8a038",
    steel: "#b8b8d0",
    water: "#6890f0",
  },
  damage: {
    immune: "#565656",
    notTooEffective: "#ce6868",
    notEffectiveAtAll: "#c71515",
    normal: "#939393",
    veryEffective: "#84ea84",
    superEffective: "#00d600",
  },
}

export default lightTheme
