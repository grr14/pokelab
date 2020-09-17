import {
  LAST_POKEMON_ID,
  TYPES,
  NB_TYPES,
  NB_ABILITIES,
  VERSIONS,
  DAMAGE_CLASS,
  MOVE_LEARNING_METHOD,
  VERSIONS_GROUPS,
  POKEDEX,
  GENERATIONS,
  FIFTH_GENERATION_INDEX,
  FIRST_GENERATION_INDEX,
  FOURTH_GENERATION_INDEX,
  SECOND_GENERATION_INDEX,
  SIXTH_GENERATION_INDEX,
  THIRD_GENERATION_INDEX,
  NB_MOVES,
} from "./constants"

/*  check the router query for detailed pokemon/type/ability pages */
export const validateQuery = (query: string | string[], page: string) => {
  const numb = typeof query === "string" ? Number(query) : Number(query[0])

  if (isNaN(numb)) {
    return false
  } else if (page === "pokemon") {
    if (numb > LAST_POKEMON_ID || numb < 1) {
      return false
    }
  } else if (page === "type") {
    if (numb > NB_TYPES || numb < 1) {
      return false
    }
  } else if (page === "ability") {
    if (numb > NB_ABILITIES || numb < 1) {
      return false
    }
  } else if (page === "move") {
    if (numb > NB_MOVES || numb < 1) {
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
      return "-"
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

/*  capitalize first letter of a word*/
export const capitalizeFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

/* capitalze every word in a sentence except those in [exclusionList] */
export const capitalizeSentence = (
  sentence: string,
  exclusionList: Array<string> = [""]
) => {
  return (
    !!sentence &&
    sentence
      .split(" ")
      .map((word) => {
        if (exclusionList.includes(word)) {
          return word
        }
        return capitalizeFirstLetter(word)
      })
      .join(" ")
  )
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
    case POKEDEX.NATIONAL:
      return "National Pokedex"
    case POKEDEX["RED-BLUE-YELLOW-FIRERED-LEAFGREEN"]:
      return "Red - Blue - Yellow / FireRed - LeafGreen"
    case POKEDEX["GOLD-SILVER-CRYSTAL"]:
      return "Gold - Silver - Crystal"
    case POKEDEX["RUBY-SAPPHIRE-EMERALD"]:
      return "Ruby - Sapphire - Emerald"
    case POKEDEX["DIAMOND-PEARL"]:
      return "Diamond - Pearl"
    case POKEDEX.PLATINUM:
      return "Platinum"
    case POKEDEX["HEARTGOLD-SOULSILVER"]:
      return "HeartGold - SoulSilver"
    case POKEDEX["BLACK-WHITE"]:
      return "Black - White"
    case POKEDEX["BLACK2-WHITE2"]:
      return "Black 2 - White 2"
    case POKEDEX["CENTRAL-KALOS"]:
      return "X - Y / Central Kalos"
    case POKEDEX["COASTAL-KALOS"]:
      return "X - Y / Coastal Kalos"
    case POKEDEX["MOUNTAIN-KALOS"]:
      return "X - Y / Mountain Kalos"
    case POKEDEX["OMEGARUBY-ALPHASAPPHIRE"]:
      return "Omega Ruby - Alpha Sapphire"
    case POKEDEX["SUN-MOON-ALOLA"]:
      return "Sun - Moon / Alola"
    case POKEDEX["SUN-MOON-MELEMELE"]:
      return "Sun - Moon / Melemele"
    case POKEDEX["SUN-MOON-AKALA"]:
      return "Sun - Moon / Akala"
    case POKEDEX["SUN-MOON-ULAULA"]:
      return "Sun - Moon / Ulaula"
    case POKEDEX["SUN-MOON-PONI"]:
      return "Sun - Moon / Poni"
    case POKEDEX["ULTRASUN-ULTRAMOON-ALOLA"]:
      return "Ultra Sun - Ultra Moon / Alola"
    case POKEDEX["ULTRASUN-ULTRAMOON-MELEMELE"]:
      return "Ultra Sun - Ultra Moon / Melemele"
    case POKEDEX["ULTRASUN-ULTRAMOON-AKALA"]:
      return "Ultra Sun - Ultra Moon / Akala"
    case POKEDEX["ULTRASUN-ULTRAMOON-ULAULA"]:
      return "Ultra Sun - Ultra Moon / Ulaula"
    case POKEDEX["ULTRASUN-ULTRAMOON-PONI"]:
      return "Ultra Sun - Ultra Moon / Poni"
    default:
      return "Cannot retrieve Pokedex"
  }
}

export const getVersionGroupFromId = (id: number) => {
  switch (id) {
    case VERSIONS_GROUPS["RED-BLUE"]:
      return "Red - Blue"
    case VERSIONS_GROUPS.YELLOW:
      return "Yellow"
    case VERSIONS_GROUPS["GOLD-SILVER"]:
      return "Gold - Silver"
    case VERSIONS_GROUPS.CRYSTAL:
      return "Crystal"
    case VERSIONS_GROUPS["RUBY-SAPPHIRE"]:
      return "Ruby - Sapphire"
    case VERSIONS_GROUPS.EMERALD:
      return "Emerald"
    case VERSIONS_GROUPS["FIRERED-LEAFGREEN"]:
      return "FireRed - LeafGreen"
    case VERSIONS_GROUPS["DIAMOND-PEARL"]:
      return "Diamond - Pearl"
    case VERSIONS_GROUPS.PLATINUM:
      return " Platinum"
    case VERSIONS_GROUPS["HEARTGOLD-SOULSILVER"]:
      return "HeartGold - SoulSilver"
    case VERSIONS_GROUPS["BLACK-WHITE"]:
      return "Black - White"
    case VERSIONS_GROUPS["BLACK2-WHITE2"]:
      return "Black 2 - White 2"
    case VERSIONS_GROUPS["X-Y"]:
      return "X - Y"
    case VERSIONS_GROUPS["OMEGARUBY-ALPHASAPPHIRE"]:
      return "Omega Ruby - Alpha Sapphire"
    case VERSIONS_GROUPS["SUN-MOON"]:
      return "Sun - Moon"
    case VERSIONS_GROUPS["ULTRASUN-ULTRAMOON"]:
      return "Ultra Sun - Ultra Moon"
    default:
      return "Cannot retrieve version group"
  }
}

export const getGameVersionFromId = (id: number) => {
  switch (id) {
    case VERSIONS.RED:
      return "Red"
    case VERSIONS.BLUE:
      return "Blue"
    case VERSIONS.YELLOW:
      return "Yellow"
    case VERSIONS.GOLD:
      return "Gold"
    case VERSIONS.SILVER:
      return "Silver"
    case VERSIONS.CRYSTAL:
      return "Crystal"
    case VERSIONS.RUBY:
      return "Ruby"
    case VERSIONS.SAPPHIRE:
      return "Sapphire"
    case VERSIONS.EMERALD:
      return "Emerald"
    case VERSIONS.FIRERED:
      return "FireRed"
    case VERSIONS.LEAFGREEN:
      return "LeafGreen"
    case VERSIONS.DIAMOND:
      return "Diamond"
    case VERSIONS.PEARL:
      return "Pearl"
    case VERSIONS.PLATINUM:
      return "Platinum"
    case VERSIONS.HEARTGOLD:
      return "HeartGold"
    case VERSIONS.SOULSILVER:
      return "SoulSilver"
    case VERSIONS.BLACK:
      return "Black"
    case VERSIONS.WHITE:
      return "White"
    case VERSIONS.COLOSSEUM:
      return "Colosseum"
    case VERSIONS.XD:
      return "XD"
    case VERSIONS.BLACK2:
      return "Black 2"
    case VERSIONS.WHITE2:
      return "White 2"
    case VERSIONS.X:
      return "X"
    case VERSIONS.Y:
      return "Y"
    case VERSIONS.OMEGARUBY:
      return "Omega Ruby"
    case VERSIONS.ALPHASAPPHIRE:
      return "Alpha Sapphire"
    case VERSIONS.SUN:
      return "Sun"
    case VERSIONS.MOON:
      return "Moon"
    case VERSIONS.ULTRASUN:
      return "Ultra Sun"
    case VERSIONS.ULTRAMOON:
      return "Ultra Moon"
    default:
      return "Cannot retrieve version"
  }
}

export const getDamageClassFromId = (id: number) => {
  switch (id) {
    case DAMAGE_CLASS.STATUS:
      return "Status"
    case DAMAGE_CLASS.PHYSICAL:
      return "Physical"
    case DAMAGE_CLASS.SPECIAL:
      return "Special"
    default:
      return ""
  }
}

export const getLearningMethodFromId = (id: number) => {
  switch (id) {
    case MOVE_LEARNING_METHOD.LEVEL:
      return "Level"
    case MOVE_LEARNING_METHOD.EGG:
      return "Egg"
    case MOVE_LEARNING_METHOD.MACHINE:
      return "TM/TR"
    case MOVE_LEARNING_METHOD.TUTOR:
      return "Move tutor"
    case MOVE_LEARNING_METHOD.LIGHT_BALL_EGG:
      return "Light Ball Egg"
    case MOVE_LEARNING_METHOD.FORM_CHANGE:
      return "Form Change"
  }
}

export const getGenerationFromId = (pokemonId: number) => {
  if (pokemonId > LAST_POKEMON_ID || pokemonId < 0) {
    return 0
  } else if (pokemonId > 0 && pokemonId <= FIRST_GENERATION_INDEX) {
    return GENERATIONS.I
  } else if (
    pokemonId > FIRST_GENERATION_INDEX &&
    pokemonId <= SECOND_GENERATION_INDEX
  ) {
    return GENERATIONS.II
  } else if (
    pokemonId > SECOND_GENERATION_INDEX &&
    pokemonId <= THIRD_GENERATION_INDEX
  ) {
    return GENERATIONS.III
  } else if (
    pokemonId > THIRD_GENERATION_INDEX &&
    pokemonId <= FOURTH_GENERATION_INDEX
  ) {
    return GENERATIONS.IV
  } else if (
    pokemonId > FOURTH_GENERATION_INDEX &&
    pokemonId <= FIFTH_GENERATION_INDEX
  ) {
    return GENERATIONS.V
  } else if (
    pokemonId > FIFTH_GENERATION_INDEX &&
    pokemonId <= SIXTH_GENERATION_INDEX
  ) {
    return GENERATIONS.VI
  }
  return GENERATIONS.VII
}
