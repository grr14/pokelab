/** @jsx jsx */
import { jsx } from "@emotion/core"

import {
  getPokemonsByTypeId,
  getPokemonsByTypeIdVariables,
} from "../graphql/queries/__generated__/getPokemonsByTypeId"

import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import Link from "next/link"
import React from "react"

import Card from "@material-ui/core/Card"
import TypeDisplay from "./TypeDisplay"
import { TYPES } from "../common/constants"
import { capitalizeFirstLetter } from "../common/utils"

interface Props {
  id: number
}

const GET_POKEMONS_BY_TYPE_ID = gql`
  query getPokemonsByTypeId($id: Int!) {
    pokemonByTypeId(id: $id) {
      id
      identifier
      type_1
      type_2
      picture
    }
  }
`

const PokemonListByTypeId: React.FC<Props> = ({ id }) => {
  const { data, loading, error } = useQuery<
    getPokemonsByTypeId,
    getPokemonsByTypeIdVariables
  >(GET_POKEMONS_BY_TYPE_ID, {
    variables: { id: id },
  })

  if (loading) return <p>loading</p>
  if (error) return <p>error</p>

  const pokemons = data.pokemonByTypeId
  const monotype = pokemons.filter(
    (el) => el.type_1 === id && el.type_2 === null
  ).length
  const secondary = pokemons.filter((el) => el.type_2 === id).length

  return (
    <React.Fragment>
      <div css={{ paddingBottom: "15px" }}>
        <h2>Some statistics : </h2>
        <div css={{ display: "flex", justifyContent: "space-evenly" }}>
          <span>
            Total number: <b>{pokemons.length}</b>
          </span>
          <span>
            Monotype: <b>{monotype}</b>
          </span>
          <span>
            Main Type: <b>{pokemons.length - secondary}</b>
          </span>
          <span>
            Secondary Type: <b>{secondary}</b>
          </span>
        </div>
      </div>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr",
          gap: "5px 5px",
        }}
      >
        {pokemons.map((pokemon) => (
          <Card
            css={(theme) => ({
              width: "100%",
              backgroundColor: `${theme.card.background} !important`,
              height: "auto",
              boxSizing: "border-box",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              transition: "background-color 0.2s ease-in",
              "&:hover": {
                boxShadow: `${theme.boxShadow.small} ${theme.boxShadow.color}`,
                backgroundColor: `${theme.card.backgroundHover} !important`,
              },
            })}
          >
            <Link href={`/pokemon/[pid]`} as={`/pokemon/${pokemon.id}`}>
              <a
                css={{
                  display: "contents",
                  cursor: "pointer",
                }}
              >
                <div
                  css={{
                    gridColumnStart: 1,
                    gridColumnEnd: "span 2",
                    gridRowStart: 1,
                    gridRowEnd: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "5px 0",
                  }}
                >
                  <img
                    css={{
                      width: "3.5em",
                      height: "3.5em",
                    }}
                    src={pokemon.picture}
                  />
                </div>

                <div
                  css={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    boxSizing: "border-box",
                    padding: "0 5px",
                  }}
                >
                  <span>#{pokemon.id}</span>
                  <span
                    css={{
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {capitalizeFirstLetter(pokemon.identifier)}
                  </span>
                </div>
              </a>
            </Link>
            <div
              css={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Link href={`/types/[pid]`} as={`/types/${pokemon.type_1}`}>
                <a>
                  <TypeDisplay size="small" type={pokemon.type_1 as TYPES} />{" "}
                </a>
              </Link>
              {pokemon.type_2 !== null && (
                <Link href={`/types/[pid]`} as={`/types/${pokemon.type_2}`}>
                  <a>
                    <TypeDisplay size="small" type={pokemon.type_2 as TYPES} />{" "}
                  </a>
                </Link>
              )}
            </div>
          </Card>
        ))}
      </div>
    </React.Fragment>
  )
}

export default PokemonListByTypeId