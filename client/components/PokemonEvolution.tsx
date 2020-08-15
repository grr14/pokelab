/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import { capitalizeFirstLetter, countOccurrences } from "../common/utils"
import { mq } from "../common/constants"

import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import {
  pokemonEvolveChain_pokemonEvolveChain as Pokemon,
  pokemonEvolveChain,
  pokemonEvolveChainVariables,
} from "../graphql/queries/__generated__/pokemonEvolveChain"

const GET_EVOLUTION_CHAIN = gql`
  query pokemonEvolveChain($id: Int) {
    pokemonEvolveChain(id: $id) {
      id
      identifier
      type_1
      type_2
      evolve_from_pokemon_id
      evolution_chain_id
      picture
      evolution {
        evolved_pokemon_id
        evolution_trigger
        trigger_item
        minimum_level
        gender
        location
        held_item
        time_of_day
        known_move
        known_move_type
        minimum_happiness
        minimum_beauty
        minimum_affection
        physical_stats
        pokemon_in_party
        pokemon_type_in_party
        trading_species
        overworld_rain
        device_upside_down
      }
    }
  }
`

interface EvoCardProps {
  pokemon: Pokemon
}

const PokemonEvoCard: React.FC<EvoCardProps> = ({ pokemon }) => {
  return (
    <div
      css={{
        marginRight: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img css={{ width: "125px", height: "125px" }} src={pokemon.picture} />
      <p>{pokemon.identifier}</p>
    </div>
  )
}

interface Props {
  id: number
}

const PokemonEvolution: React.FC<Props> = ({ id }) => {
  const { data, loading, error } = useQuery<
    pokemonEvolveChain,
    pokemonEvolveChainVariables
  >(GET_EVOLUTION_CHAIN, {
    variables: { id: id },
  })
  if (loading) return <p>Loading </p>
  if (error) {
    return <p>Error </p>
  }

  // Number of pokemon in the chain
  const evolutionChainLength = data.pokemonEvolveChain.length
  //console.log("length=" + evolutionChainLength)

  if (evolutionChainLength === 1) {
    return (
      <div>
        No evolution chart for{" "}
        {capitalizeFirstLetter(data.pokemonEvolveChain[0].identifier)}
      </div>
    )
  }

  // recup ceux qui ont plusieurs evo
  let severalEvosFromSamePokemon = 0
  let indexOfFirstMultipleEvolution = 0

  let evolveChainPokemonIdArray: Array<number> = []
  let evolveFromSamePokemon: Array<Pokemon> = []
  let evolveFromSamePokemonJSX: Array<JSX.Element> = []

  // If the pokemon has an evolution, we check if he might have several (ex:eevee)
  if (evolutionChainLength > 1) {
    evolveChainPokemonIdArray = data.pokemonEvolveChain.map((pokemon) => {
      if (pokemon.evolve_from_pokemon_id === null) {
        /* always null for the 1st pokemon of the chain */
        return 0
      }
      return pokemon.evolve_from_pokemon_id
    })

    //console.log(`evolveChainPokemonIdArray=${evolveChainPokemonIdArray}`)

    // console.log(JSON.stringify(countOccurrences(evolveChainPokemonIdArray)))

    // We get the ID of the pokemon which has several evolutions, and its index
    for (const key in countOccurrences(evolveChainPokemonIdArray)) {
      if (countOccurrences(evolveChainPokemonIdArray)[key] > 1) {
        severalEvosFromSamePokemon = Number(key)
      }
    }

    indexOfFirstMultipleEvolution = evolveChainPokemonIdArray.indexOf(
      severalEvosFromSamePokemon
    )

    // Build an array of all the Pokemons evolving from the same one
    if (severalEvosFromSamePokemon > 0) {
      for (let i = 1; i < evolutionChainLength; i++) {
        if (
          data.pokemonEvolveChain[i].evolve_from_pokemon_id ===
          severalEvosFromSamePokemon
        ) {
          evolveFromSamePokemon.push(data.pokemonEvolveChain[i])
        }
      }
    }

    evolveFromSamePokemonJSX = evolveFromSamePokemon.map((pokemon) => (
      <PokemonEvoCard pokemon={pokemon} />
    ))

    //console.log(`severalEvosFromSamePokemon=${severalEvosFromSamePokemon}`)
  }
  //console.log(`indexOfFirstMultipleEvolution=${indexOfFirstMultipleEvolution}`)
  // recup les methodes

  const multipleEvolutionsCSS = (id: number) => {
    if (id === 67) {
      /* Need a special display for Eevee evolutions (too many) */
      return css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
      `
    }
    return css`
      display: flex;
      flex-direction: column;
    `
  }

  return (
    <div
      css={{
        boxSizing: "border-box",
        padding: "3%",
        border: "solid 1px black",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {data.pokemonEvolveChain.map((pokemon, idx) => {
        if (
          indexOfFirstMultipleEvolution === 0 ||
          idx < indexOfFirstMultipleEvolution
          /*No multiple evolutions: everything on the same line || on the same line until after pokemon with multiple evolution ID */
        ) {
          return <PokemonEvoCard pokemon={pokemon} />
        } else if (
          idx ===
          indexOfFirstMultipleEvolution /* if multiple evolutions and same idx : we display the column with all evolutions */
        ) {
          return (
            <div css={multipleEvolutionsCSS(id)}>
              {evolveFromSamePokemonJSX}
            </div>
          )
        }
        /* we display nothing after */
        return null
      })}
    </div>
  )
}

export default PokemonEvolution
