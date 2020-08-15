import {
  LAST_POKEMON_ID,
  TYPES,
  NB_TYPES,
  ATTACKS_MULTIPLIERS,
} from "./constants"
import { PokemonTypeEfficiency } from "./types"

/*  check the router query for detailed pokemon/type pages */
export const validateQuery = (query: string | string[], page: string) => {
  const numb = Number(query)
  if (page === "pokemon") {
    if (isNaN(numb) || numb > LAST_POKEMON_ID || numb < 1) {
      return false
    }
  } else if (page === "type") {
    if (isNaN(numb) || numb > NB_TYPES || numb < 1) {
      return false
    }
  }
  return true
}

export const getTypeFromId = (id: number) => {
  switch (id) {
    case TYPES.NORMAL:
      return "normal"
    case TYPES.FIGHTING:
      return "fighting"
    case TYPES.FLYING:
      return "flying"
    case TYPES.POISON:
      return "poison"
    case TYPES.GROUND:
      return "ground"
    case TYPES.ROCK:
      return "rock"
    case TYPES.BUG:
      return "bug"
    case TYPES.GHOST:
      return "ghost"
    case TYPES.STEEL:
      return "steel"
    case TYPES.FIRE:
      return "fire"
    case TYPES.WATER:
      return "water"
    case TYPES.GRASS:
      return "grass"
    case TYPES.ELECTRIC:
      return "electric"
    case TYPES.PSYCHIC:
      return "psychic"
    case TYPES.ICE:
      return "ice"
    case TYPES.DRAGON:
      return "dragon"
    case TYPES.DARK:
      return "dark"
    case TYPES.FAIRY:
      return "fairy"
    default:
      return "type error"
  }
}

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

/* return an array of type affecting a pokemon (superweak, resistant...)*/
export const getEfficiency = (
  relations: Array<
    number
  > /* relations between the pokemon type(s) and other types */,
  multiplier: number
): Array<number> | null => {
  return relations
    .reduce((acc, el, idx) => (el === multiplier ? [...acc, idx] : acc), [])
    .filter((el) => el !== 0)
}

/* count occurences of every value in array  */
export const countOccurrences = (arr: Array<any>): { [key: string]: any } =>
  arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {})
