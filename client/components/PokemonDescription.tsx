/** @jsx jsx */
import { jsx } from "@emotion/core"

import { getPokemonById_pokemon as Pokemon } from "../graphql/queries/__generated__/getPokemonById"
import { capitalizeFirstLetter, getTypeFromId } from "../common/utils"
import {
  FIRST_GENERATION_INDEX,
  SECOND_GENERATION_INDEX,
  THIRD_GENERATION_INDEX,
  FOURTH_GENERATION_INDEX,
  FIFTH_GENERATION_INDEX,
  SIXTH_GENERATION_INDEX,
  SEVENTH_GENERATION_INDEX,
} from "../common/constants"

interface Props {
  pokemon: Pokemon
}

const PokemonDescription: React.FC<Props> = ({ pokemon }) => {
  const getGeneration = () => {
    if (pokemon.id <= FIRST_GENERATION_INDEX) {
      return "1st"
    } else if (pokemon.id <= SECOND_GENERATION_INDEX) {
      return "2nd"
    } else if (pokemon.id <= THIRD_GENERATION_INDEX) {
      return "3rd"
    } else if (pokemon.id <= FOURTH_GENERATION_INDEX) {
      return "4th"
    } else if (pokemon.id <= FIFTH_GENERATION_INDEX) {
      return "5th"
    } else if (pokemon.id <= SIXTH_GENERATION_INDEX) {
      return "6th"
    } else if (pokemon.id <= SEVENTH_GENERATION_INDEX) {
      return "7th"
    }
  }

  return (
    <div css={{ margin: "0 5%" }}>
      <p>
        {capitalizeFirstLetter(pokemon.identifier)} is{" "}
        {pokemon.type_1 === 13 || pokemon.type_1 === 15 ? "an" : "a"}{" "}
        {getTypeFromId(pokemon.type_1)}
        {pokemon.type_2 != null && ` / ${getTypeFromId(pokemon.type_2)}`}-type
        Pokémon who appeared in the {getGeneration()}-Generation. It belongs to
        the category of the {pokemon.category} Pokémons.
      </p>
    </div>
  )
}

export default PokemonDescription
