import { ChartType, ChartData, ChartOptions } from "chart.js"

export type Theme = {
  name: string
  body?: {
    background?: string
    text?: string
    font?: string
  }
  main?: {
    background?: string
  }
  header?: {
    background?: string
    text?: string
  }
  card?: {
    background?: string
    backgroundHover?: string
  }
  boxShadow?: {
    small?: string
    medium?: string
    color?: string
  }
  chart?: {
    radar?: {
      background?: string
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
