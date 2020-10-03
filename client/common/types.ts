export type Theme = {
  name: string
  body?: {
    background?: string
    text?: string
    font?: string
  }
  main?: {
    background?: string
    border?: string
  }
  header?: {
    background?: string
    text?: string
    button: {
      background?: string
      text?: string
      border?: string
    }
  }
  drawer: {
    background?: string
    cellHover?: string
    text?: {
      regular?: string
      hover?: string
    }
    divider?: {
      section: string
      listItem: string
    }
  }
  card?: {
    text?: string
    textHover?: string
    background?: string
    backgroundHover?: string
  }
  table?: {
    th?: {
      border?: string
      background?: string
    }
    tr?: {
      backgroundHover?: string
    }
  }
  boxShadow?: {
    small?: string
    medium?: string
    color?: string
  }
  input?: {
    background?: string
    text?: string
  }
  chart?: {
    background?: string
    text?: string
    radar?: {
      background?: string
      lines?: string
    }
  }
  type?: {
    bug?: string
    dark?: string
    dragon?: string
    electric?: string
    fairy?: string
    fighting?: string
    fire?: string
    flying?: string
    ghost?: string
    grass?: string
    ground?: string
    ice?: string
    normal?: string
    poison?: string
    psychic?: string
    rock?: string
    steel?: string
    water?: string
  }
  damage?: {
    immune?: string
    notTooEffective?: string
    notEffectiveAtAll?: string
    normal?: string
    veryEffective?: string
    superEffective?: string
  }
  version?: {
    red?: string
    blue?: string
    yellow?: string
    gold?: string
    silver?: string
    crystal?: string
    ruby?: string
    sapphire?: string
    emerald?: string
    firered?: string
    leafgreen?: string
    diamond?: string
    pearl?: string
    platinum?: string
    heartgold?: string
    soulsilver?: string
    black?: string
    white?: string
    colosseum?: string
    xd?: string
    black2?: string
    white2?: string
    x?: string
    y?: string
    omegaruby?: string
    alphasapphire?: string
    sun?: string
    moon?: string
    ultrasun?: string
    ultramoon?: string
  }
}

const attackMultipliersArray = [
  "NOT_EFFECTIVE_AT_ALL",
  "NOT_TOO_EFFECTIVE",
  "NORMAL",
  "VERY_EFFECTIVE",
  "SUPER_EFFECTIVE",
  "IMMUNE",
] as const
type TypeEfficiencyKey = typeof attackMultipliersArray[number]

export type TypeEfficiency = {
  [key in TypeEfficiencyKey]?: number
}

export type PokemonTypeEfficiency = {
  [key in TypeEfficiencyKey]?: {
    types: Array<number> | null
    details: string
  }
}

const sizes = ["small", "medium", "big"] as const
export type Size = typeof sizes[number]

export type SearchInputOption = {
  id: number
  type: string
  identifier: string
}

type CustomMenuItem = {
  link: string
  text: string
}

export type CustomMenu = Array<CustomMenuItem>

export type Move = {
  learning_method: number | null
  level_learned: number | null
}

export type ReducedPokemon = {
  id: number
  identifier: string
  type_1: number | null
  type_2: number | null
  picture: string | null
  moves?: Array<Move | null> | null
}

export type ReducedEncounter = {
  rarity: number
  level_min: number
  level_max: number
}

export type PokedexRange = {
  firstPokemonId: number
  lastPokemonId: number
}
