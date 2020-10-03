/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { useEffect, useState } from "react"

import { PokedexGrid } from "./Grid"
import { CardContainer } from "./Containers"
import PokemonCard from "./PokemonCard"
import { PokedexRange, ReducedPokemon } from "../common/types"
import Error from "../pages/_error"

import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import CardLoading from "./CardLoading"
import Card from "./Card"

import {
  pokemonsInRange as Pokemons,
  pokemonsInRangeVariables as PokemonsVariables,
} from "../graphql/queries/__generated__/pokemonsInRange"
import { TYPES } from "../common/constants"

const GET_POKEMONS = gql`
  query pokemonsInRange($firstId: Int, $lastId: Int) {
    pokemonsInRange(firstId: $firstId, lastId: $lastId) {
      id
      identifier
      type_1
      type_2
      picture
    }
  }
`

interface Props {
  range: PokedexRange
  textToFilter: string
  checked?: boolean
  typeToFilter: { [key: string]: boolean }
}

const Pokedex: React.FC<Props> = ({
  range,
  textToFilter,
  checked,
  typeToFilter,
}) => {
  const { data, loading, error } = useQuery<Pokemons, PokemonsVariables>(
    GET_POKEMONS,
    {
      variables: {
        firstId: range.firstPokemonId,
        lastId: range.lastPokemonId,
      },
    }
  )

  const [pokemons, setPokemons] = useState<Array<ReducedPokemon> | null>(
    data?.pokemonsInRange
  )

  useEffect(() => {
    if (!loading && data) {
      setPokemons(data.pokemonsInRange)
    }
  }, [loading, data])

  useEffect(() => {
    if (data) {
      const filteredPokemons = data.pokemonsInRange?.filter((pokemon) =>
        pokemon.identifier.startsWith(textToFilter)
      )
      setPokemons(filteredPokemons)
    }
  }, [data, textToFilter])

  useEffect(() => {
    if (data) {
      let typeIsChecked = Array<TYPES>()
      for (let key in typeToFilter) {
        if (typeToFilter[key] === true) {
          typeIsChecked.push(TYPES[key.toUpperCase()] as TYPES)
        }
      }
      const filteredPokemons = data.pokemonsInRange?.filter(
        (pokemon) =>
          typeIsChecked.includes(pokemon.type_1) ||
          typeIsChecked.includes(pokemon.type_2)
      )
      setPokemons(filteredPokemons)
    }
  }, [data, typeToFilter])

  if (error) {
    return <Error statusCode={404} />
  }

  if (data) {
    return (
      <div
        css={{
          padding: "0 1%",
          width: "100%",
        }}
      >
        {pokemons?.length > 0 ? (
          <PokedexGrid>
            {pokemons?.map((pokemon, idx) => (
              <CardContainer key={idx}>
                <PokemonCard
                  pokemon={pokemon as ReducedPokemon}
                  index={idx + 1}
                  checked={checked}
                />
              </CardContainer>
            ))}
          </PokedexGrid>
        ) : (
          <h2>No Pokemon found.</h2>
        )}
      </div>
    )
  }

  if (loading) {
    return (
      <PokedexGrid>
        {[...Array(15)].fill(0).map((_, idx) => (
          <CardContainer key={idx}>
            <Card
              loading={1}
              style={{
                height: "260px",
              }}
            >
              <CardLoading />
            </Card>
          </CardContainer>
        ))}
      </PokedexGrid>
    )
  }
}

export default Pokedex
