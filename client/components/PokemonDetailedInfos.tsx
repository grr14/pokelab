/** @jsx jsx */
import { jsx } from "@emotion/core"

import Link from "next/link"

import PokemonTypeInfos from "./PokemonTypeInfos"
import PokemonEvolution from "./PokemonEvolution"
import PokemonDescription from "./PokemonDescription"
import PokemonStats from "./PokemonStats"
import PokemonDexEntries from "./PokemonDexEntries"
import PokemonEncounters from "./PokemonEncounters"
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

      <div
        css={(theme) => ({
          marginTop: "15px",
          width: "80%",
          padding: "1.5em 12px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          borderRadius: "5px",
          backgroundColor: theme.card.background,
        })}
      >
        <div
          css={{
            padding: "2px 1em",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          <a href="#evolutionchart">Evolution Chart</a>
        </div>
        <div
          css={{
            padding: "2px 1em",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          <a href="#stats">Stats</a>
        </div>
        <div
          css={{
            padding: "2px 1em",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          <a href="#typesinfos">Types Infos</a>
        </div>
        <div
          css={{
            padding: "2px 1em",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          <a href="#moveset">Moveset</a>
        </div>
        <div
          css={{
            padding: "2px 1em",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          <a href="#dexentries">Pokedex Entries</a>
        </div>
        <div
          css={{
            padding: "2px 1em",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          <a href="#encounters">Encounters</a>
        </div>
      </div>

      <PokemonDescription pokemon={pokemon} />
      <PokemonEvolution id={pokemon.evolution_chain_id} />
      <PokemonStats id={pokemon.id} />
      <PokemonTypeInfos type_1={pokemon.type_1} type_2={pokemon.type_2} />
      <PokemonMoves pokemonId={pokemon.id} />
      <PokemonDexEntries id={pokemon.id} />
      <PokemonEncounters id={pokemon.id} />
    </>
  )
}

export default PokemonDetailedInfos
