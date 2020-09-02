import { LAST_POKEMON_ID, TYPES, NB_TYPES } from "./constants"

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

export const getGrowthRateFromId = (id: number) => {
  switch (id) {
    case 1:
      return "Slow"
    case 2:
      return "Medium"
    case 3:
      return "Fast"
    case 4:
      return "Medium Slow"
    case 5:
      return "Erratic"
    case 6:
      return "Fluctuating"
    default:
      return "Cannot retrieve Growth Rate"
  }
}

export const getMalePercentage = (id: number) => {
  switch (id) {
    case -1:
      return undefined
    case 0:
      return 100
    case 1:
      return 87.5
    case 2:
      return 75
    case 4:
      return 50
    case 6:
      return 25
    case 7:
      return 12.5
    case 8:
      return 0
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

/* return max value in array of number */
export const arrayMax = (arr: Array<number>) => Math.max(...arr)

/* return the nearest next multiple of x, or the next one if its already a multiple */
export const getNextMultipleOf = (x: number, nb: number) => {
  if (nb % x === 0) {
    return x + nb
  }
  return Math.ceil(nb / x) * x
}

/* get pokedex entry from the pokedex ID*/
export const getPokedexEntryFromId = (id: number) => {
  switch (id) {
    case 1:
      return "National Pokedex"
    case 2:
      return "Red - Blue - Yellow / FireRed - LeafGreen"
    case 3:
      return "Gold - Silver - Crystal"
    case 4:
      return "Ruby - Sapphire - Emerald"
    case 5:
      return "Diamond - Pearl"
    case 6:
      return "Platinum"
    case 7:
      return "HeartGold - SoulSilver"
    case 8:
      return "Black - White"
    case 9:
      return "Black 2 - White 2"
    case 12:
      return "X - Y / Central Kalos"
    case 13:
      return "X - Y Coastal Kalos"
    case 14:
      return "X - Y Mountain Kalos"
    case 15:
      return "Omega Ruby - Alpha Sapphire"
    case 16:
      return "Sun - Moon / Alola"
    case 17:
      return "Sun - Moon / Melemele"
    case 18:
      return "Sun - Moon / Akala"
    case 19:
      return "Sun - Moon / Ulaula"
    case 20:
      return "Sun - Moon / Poni"
    case 21:
      return "Ultra Sun - Ultra Moon / Alola"
    case 22:
      return "Ultra Sun - Ultra Moon / Melemele"
    case 23:
      return "Ultra Sun - Ultra Moon / Akala"
    case 24:
      return "Ultra Sun - Ultra Moon / Ulaula"
    case 25:
      return "Ultra Sun - Ultra Moon / Poni"
    default:
      return "Error"
  }
}
