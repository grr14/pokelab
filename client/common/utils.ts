import { LAST_POKEMON_ID } from "./constants"

/*  check the router query for detailed pokemon is correct */
export const validateQuery = (query: string | string[]) => {
  const numb = Number(query)
  if (isNaN(numb) || numb > LAST_POKEMON_ID || numb < 1) {
    return false
  }
  return true
}
