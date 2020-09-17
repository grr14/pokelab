/** @jsx jsx */
import { jsx } from "@emotion/core"

import Link from "next/link"
import React from "react"

import Card from "@material-ui/core/Card"
import { TypeDisplay } from "./StyledDisplay"
import { TYPES, mq, MOVE_LEARNING_METHOD } from "../common/constants"
import { capitalizeFirstLetter } from "../common/utils"

interface Moves {
  learning_method: number | null
  level_learned: number | null
}

interface ReducedPokemon {
  id: number
  identifier: string
  type_1: number | null
  type_2: number | null
  picture: string | null
  moves: Array<Moves | null> | null
}

interface Props {
  pokemons: Array<ReducedPokemon | null> | null
  additionalInfos?: "level"
}

const ReducedPokemonGrid: React.FC<Props> = ({ pokemons, additionalInfos }) => {
  return (
    <div
      css={{
        display: "grid",
        gridAutoFlow: "row",
        gridRowGap: !!additionalInfos ? "20px !important" : 0,
        [mq[0]]: {
          gridTemplateColumns: "1fr",
          gap: "5px 5px",
        },
        [mq[1]]: {
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "5px 5px",
        },
        [mq[2]]: {
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "5px 5px",
        },
        [mq[4]]: {
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "5px 5px",
        },
        [mq[6]]: {
          gridTemplateColumns: "repeat(5,1fr)",
          gap: "7px 7px",
        },
        [mq[7]]: {
          gridTemplateColumns: "repeat(6,1fr)",
          gap: "10px 10px",
        },
      }}
    >
      {pokemons.map((pokemon) => (
        <div>
          {additionalInfos && (
            <div
              key={pokemon.id}
              css={{ marginBottom: "5px", textAlign: "center" }}
            >
              <span>
                Level:
                <b>
                  {" "}
                  {
                    pokemon.moves[
                      pokemon.moves.findIndex(
                        (m) => m.learning_method === MOVE_LEARNING_METHOD.LEVEL
                      )
                    ].level_learned
                  }
                </b>
              </span>
            </div>
          )}
          <Card
            key={pokemon.id}
            css={(theme) => ({
              width: "100%",
              backgroundColor: `${theme.card.background} !important`,
              color: `${theme.card.text} !important`,
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
              [mq[0]]: {
                "&:last-of-type": { marginBottom: "7px" },
              },
              [mq[1]]: {
                "&:last-of-type": { marginBottom: 0 },
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
                    gridColumnEnd: 1,
                    gridRowStart: 1,
                    gridRowEnd: "span 2",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "5px 0",
                  }}
                >
                  <img
                    css={{
                      [mq[0]]: {
                        width: "6em",
                        height: "6em",
                      },
                      [mq[1]]: { width: "5em", height: "5em" },
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
                    padding: "5px",
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
                paddingBottom: "5px",
              }}
            >
              <Link href={`/type/[pid]`} as={`/type/${pokemon.type_1}`}>
                <a>
                  <TypeDisplay size="small" type={pokemon.type_1 as TYPES} />{" "}
                </a>
              </Link>
              {pokemon.type_2 !== null && (
                <Link href={`/type/[pid]`} as={`/type/${pokemon.type_2}`}>
                  <a>
                    <TypeDisplay size="small" type={pokemon.type_2 as TYPES} />{" "}
                  </a>
                </Link>
              )}
            </div>
          </Card>
        </div>
      ))}
    </div>
  )
}

export default ReducedPokemonGrid
