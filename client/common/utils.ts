import { LAST_POKEMON_ID } from "./constants"
import { getPokemonById_getPokemon_pictures as picturesType } from "../graphql/queries/__generated__/getPokemonById"

/*  check the router query for detailed pokemon is correct */
export const validateQuery = (query: string | string[]) => {
  const numb = Number(query)
  if (isNaN(numb) || numb > LAST_POKEMON_ID || numb < 1) {
    return false
  }
  return true
}

export const extractImages = (array: picturesType[]) => {
  const stringArray = new Array<string>()

  array.map((picture) => {
    let tmp = picture.url
    stringArray.push(tmp)
  })

  return stringArray
}
