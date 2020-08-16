/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import React from "react"

import { capitalizeFirstLetter, countOccurrences } from "../common/utils"
import { mq } from "../common/constants"

import Arrow from "@elsdoerfer/react-arrow"

import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import {
  pokemonEvolveChain_pokemonEvolveChain as Pokemon,
  pokemonEvolveChain,
  pokemonEvolveChainVariables,
} from "../graphql/queries/__generated__/pokemonEvolveChain"
import { getDataFromTree } from "@apollo/react-ssr"

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

const InfoArrowEvoCard: React.FC<EvoCardProps> = ({ pokemon }) => {
  const getEvolutionAfterLevel = () => {
    if (pokemon.evolution.minimum_happiness === 220) {
      return "Level with high Friendship"
    } else if (pokemon.evolution.minimum_level !== null) {
      return `Level ${pokemon.evolution.minimum_level}`
    }
    return "Level"
  }

  const getItemToUse = () => {
    if (pokemon.evolution.trigger_item == null) {
      return
    }
    switch (pokemon.evolution.trigger_item) {
      case 80:
        return "Sun Stone"
      case 81:
        return "Moon Stone"
      case 82:
        return "Fire Stone"
      case 83:
        return "Thunder Stone"
      case 84:
        return "Water Stone"
      case 85:
        return "Leaf Stone"
      case 107:
        return "Shiny Stone"
      case 108:
        return "Dusk Stone"
      case 109:
        return "Dawn Stone"
      default:
        return "Item not found"
    }
  }

  const getHeldItem = () => {
    if (pokemon.evolution.held_item === null) {
      return ""
    }
    let heldItem = ""
    switch (pokemon.evolution.held_item) {
      case 110:
        heldItem = "Oval Stone"
        break
      case 198:
        heldItem = "King's Stone"
        break
      case 203:
        heldItem = "Deep Sea Tooth"
        break
      case 204:
        heldItem = "Deep Sea Scale"
        break
      case 210:
        heldItem = "Metal Coat"
        break
      case 212:
        heldItem = "Dragon Scale"
        break
      case 229:
        heldItem = "Up-Grade"
        break
      case 298:
        heldItem = "Protector"
        break
      case 299:
        heldItem = "Electirizer"
        break
      case 300:
        heldItem = "Magmarizer"
        break
      case 301:
        heldItem = "Dubious Disc"
        break
      case 302:
        heldItem = "Reaper Cloth"
        break
      case 303:
        heldItem = "Razor Claw"
        break
      case 304:
        heldItem = "Razor Fang"
        break
      case 580:
        heldItem = "Prism Scale"
        break
      case 686:
        heldItem = "Whipped Dream"
        break
      case 687:
        heldItem = "Sachet"
        break
      default:
        heldItem = ""
    }
    return `, holding ${heldItem}`
  }

  const getSex = () => {
    if (pokemon.evolution.gender === null) {
      return ""
    } else if (pokemon.evolution.gender === 1) {
      return " (Female)"
    } else {
      return " (Male)"
    }
  }

  const getTime = () => {
    if (pokemon.evolution.time_of_day === null) {
      return ""
    }

    const timeOfDay = pokemon.evolution.time_of_day === "day" ? "Day" : "Night"
    return ` during ${timeOfDay}time`
  }

  const getLocation = () => {
    if (pokemon.evolution.location === null) {
      return ""
    }
    switch (pokemon.evolution.location) {
      case 8:
      case 10:
      case 48:
      case 375:
      case 379:
      case 380:
      case 629:
      case 640:
      case 650:
        return " near a magnetic field"
      case 775:
        return " at Mount Lanakila"
      default:
        return ""
    }
  }

  const getKnownMove = () => {
    if (pokemon.evolution.known_move === null) {
      return ""
    }
    let moveName = ""
    switch (pokemon.evolution.known_move) {
      case 23:
        moveName = "Stomp"
        break
      case 102:
        moveName = "Mimic"
        break
      case 205:
        moveName = "Roll Out"
        break
      case 246:
        moveName = "Ancient Power"
        break
      case 406:
        moveName = "Dragon Pulse"
        break
      case 458:
        moveName = "Double Hit"
        break
      default:
        return ""
    }
    return ` knowing ${moveName}`
  }

  const getKnownMoveType = () => {
    if (pokemon.evolution.known_move_type === null) {
      return ""
    }
    let knowingMoveTypeName = ""
    switch (pokemon.evolution.known_move_type) {
      case 18:
        knowingMoveTypeName = " Fairy"
    }
    return ` knowing ${knowingMoveTypeName}-type Move`
  }

  const getBeauty = () => {
    if (pokemon.evolution.minimum_beauty === null) {
      return ""
    }
    return " with max Beauty"
  }

  const getPokemonInParty = () => {
    if (pokemon.evolution.pokemon_in_party === null) {
      return ""
    } else if (pokemon.evolution.pokemon_in_party === 223) {
      return " with Remoraid in party"
    }
  }

  const getPokemonTypeInParty = () => {
    if (pokemon.evolution.pokemon_type_in_party === null) {
      return ""
    } else if (pokemon.evolution.pokemon_type_in_party === 17) {
      return " with Dark-type Pokemon in party"
    }
  }

  const getSpeciesId = () => {
    if (pokemon.evolution.trading_species === null) {
      return ""
    }
    const pokemonToTrade =
      pokemon.evolution.trading_species === 616 ? "Shelmet" : "Karrablast"
    return ` against ${pokemonToTrade}`
  }

  const getOverworldRain = () => {
    return pokemon.evolution.overworld_rain === 1 ? " while it's raining" : ""
  }

  const getDeviceUpsideDown = () => {
    return pokemon.evolution.device_upside_down === 1
      ? " holding device upside down"
      : ""
  }

  const getPhysicalStats = () => {
    if (pokemon.evolution.physical_stats === null) {
      return ""
    }
    let operator = ""
    switch (pokemon.evolution.physical_stats) {
      case -1:
        operator = "<"
        break
      case 0:
        operator = "="
        break
      case 1:
        operator = ">"
        break
      default:
        return ""
    }
    return ` if Attack ${operator} Defense`
  }

  const getEvolutionTrigger = () => {
    switch (pokemon.evolution.evolution_trigger) {
      case 1:
        return getEvolutionAfterLevel()
      case 2:
        return `Trade`
      case 3:
        return `Use ${getItemToUse()}`
      case 4:
        return "Free spot in party"
    }
  }

  const trigger = getEvolutionTrigger()

  const getAdditionalInfos = (evolutionTrigger: string): string => {
    // item to hold // get sex // get time//get location <= not finished // known move
    return `${evolutionTrigger}${getTime()}${getHeldItem()}${getSex()}${getLocation()}${getKnownMove()}${getKnownMoveType()}${getBeauty()}${getPokemonInParty()}${getPokemonTypeInParty()}${getSpeciesId()}${getOverworldRain()}${getDeviceUpsideDown()}${getPhysicalStats()}`
  }

  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p>{getAdditionalInfos(trigger)}</p>
      <Arrow
        angle={90}
        length={100}
        style={{
          width: "100px",
        }}
      />
    </div>
  )
}

const PokemonEvoCard: React.FC<EvoCardProps> = ({ pokemon }) => {
  return (
    <div
      css={{
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

  let multipleEvolutionsFromSamePokemon = 0
  let indexOfFirstMultipleEvolution = 0

  let evolveChainPokemonIdArray: Array<number> = []
  let evolveFromSamePokemon: Array<Pokemon> = []
  let pokemonArrayJSX: Array<JSX.Element> = []

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
        multipleEvolutionsFromSamePokemon = Number(key)
      }
    }

    indexOfFirstMultipleEvolution = evolveChainPokemonIdArray.indexOf(
      multipleEvolutionsFromSamePokemon
    )

    // Build an array of all the Pokemons evolving from the same one
    if (multipleEvolutionsFromSamePokemon > 0) {
      for (let i = 1; i < evolutionChainLength; i++) {
        if (
          data.pokemonEvolveChain[i].evolve_from_pokemon_id ===
          multipleEvolutionsFromSamePokemon
        ) {
          evolveFromSamePokemon.push(data.pokemonEvolveChain[i])
        }
      }
    }

    pokemonArrayJSX = evolveFromSamePokemon.map((pokemon) => (
      <div>
        <InfoArrowEvoCard pokemon={pokemon} />
        <PokemonEvoCard pokemon={pokemon} />
      </div>
    ))

    //console.log(`multipleEvolutionsFromSamePokemon=${multipleEvolutionsFromSamePokemon}`)
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
          return (
            <React.Fragment>
              {idx !== 0 && <InfoArrowEvoCard pokemon={pokemon} />}
              <PokemonEvoCard pokemon={pokemon} />
            </React.Fragment>
          )
        } else if (
          idx ===
          indexOfFirstMultipleEvolution /* if multiple evolutions and same idx : we display the column with all evolutions */
        ) {
          return <div css={multipleEvolutionsCSS(id)}>{pokemonArrayJSX}</div>
        }
        /* we display nothing after */
        return null
      })}
    </div>
  )
}

export default PokemonEvolution
