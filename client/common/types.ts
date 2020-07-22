export type Theme = {
  name: string
  body?: {
    background?: string
    text?: string
  }
  header?: {
    background?: string
    text?: string
  }
  card?: {
    background?: string
  }
  type?: {
    bug: string
    dark: string
    dragon: string
    electric: string
    fairy: string
    fighting: string
    fire: string
    flying: string
    ghost: string
    grass: string
    ground: string
    ice: string
    normal: string
    poison: string
    psychic: string
    rock: string
    steel: string
    water: string
    immune: string
    notEffective: string
    veryEffective: string
  }
}
