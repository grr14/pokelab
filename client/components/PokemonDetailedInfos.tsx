/** @jsx jsx */
import { jsx } from "@emotion/core"

import Link from "next/link"

import PokemonTypeInfos from "./PokemonTypeInfos"
import PokemonEvolution from "./PokemonEvolution"
import PokemonDescription from "./PokemonDescription"
import PokemonStats from "./PokemonStats"
import PokemonDexEntries from "./PokemonDexEntries"
import PokemonMoves from "./PokemonMoves"
import LinkArrow from "./LinkArrow"

import { capitalizeFirstLetter } from "../common/utils"
import { mq } from "../common/constants"

import { getPokemonById_pokemon as Pokemon } from "../graphql/queries/__generated__/getPokemonById"

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props {
  pokemon: Pokemon
}

const PokemonDetailedInfos: React.FC<Props> = ({ pokemon }) => {
  return (
    <>
      <div
        css={{
          /* Hide on mobile */
          [mq[0]]: {
            display: "none",
          },
          [mq[3]]: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center",
            width: "100%",
          },
        }}
      >
        <Link href="/pokemon/[pid]" as={`/pokemon/${pokemon.id - 1}`}>
          <LinkArrow direction="left" size="medium" pokemonId={pokemon.id}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </LinkArrow>
        </Link>

        <h2
          css={{
            fontSize: "3.75rem",
            lineHeight: 1.2,
            margin: "0.4em 0",
          }}
        >
          {capitalizeFirstLetter(pokemon.identifier)}
        </h2>

        <Link href="/pokemon/[pid]" as={`/pokemon/${pokemon.id + 1}`}>
          <LinkArrow direction="right" size="medium" pokemonId={pokemon.id}>
            <FontAwesomeIcon icon={faChevronRight} />
          </LinkArrow>
        </Link>
      </div>

      <PokemonDescription pokemon={pokemon} />
      <PokemonEvolution id={pokemon.evolution_chain_id} />
      <PokemonStats id={pokemon.id} />
      <PokemonMoves pokemonId={pokemon.id} />
      <PokemonDexEntries id={pokemon.id} />
      <PokemonTypeInfos type_1={pokemon.type_1} type_2={pokemon.type_2} />
    </>
  )
}

export default PokemonDetailedInfos
