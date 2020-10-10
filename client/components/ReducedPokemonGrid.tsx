/** @jsx jsx */
import { jsx } from "@emotion/core"

import Link from "next/link"
import React from "react"

import Card from "@material-ui/core/Card"
import { TypeDisplay } from "./StyledDisplay"
import {
  TYPES,
  mq,
  MOVE_LEARNING_METHOD,
  ENCOUNTER_METHOD,
} from "../common/constants"
import { capitalizeFirstLetter } from "../common/utils"
import { PartialPokemonGrid } from "./Grid"
import { ReducedPokemon, ReducedEncounter } from "../common/types"

interface Props {
  pokemons: Array<ReducedPokemon | null> | null
  additionalInfos?: "level" | "rarity"
  encounterInfos?: Array<ReducedEncounter | null> | null
  method?: ENCOUNTER_METHOD
}

const ReducedPokemonGrid: React.FC<Props> = ({
  pokemons,
  additionalInfos,
  encounterInfos,
  method,
}) => {
  return (
    <PartialPokemonGrid additionalInfos={additionalInfos}>
      {pokemons?.map((pokemon, idx) => (
        <div key={pokemon.id}>
          {additionalInfos === "level" && (
            <div css={{ marginBottom: "5px", textAlign: "center" }}>
              <span>
                Level:
                <b>
                  {" "}
                  {
                    pokemon?.moves[
                      pokemon.moves.findIndex(
                        (m) => m.learning_method === MOVE_LEARNING_METHOD.LEVEL
                      )
                    ]?.level_learned
                  }
                </b>
              </span>
            </div>
          )}
          {additionalInfos === "rarity" && (
            <div
              css={{
                marginBottom: "5px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {method !== ENCOUNTER_METHOD.GIFT &&
                method !== ENCOUNTER_METHOD.GIFT_EGG && (
                  <span>
                    Rarity:{" "}
                    <b>
                      {encounterInfos[idx].rarity > 100
                        ? 100
                        : encounterInfos[idx].rarity}
                      %
                    </b>
                  </span>
                )}
              {encounterInfos[idx].level_min ===
              encounterInfos[idx].level_max ? (
                <span>
                  Level: <b>{encounterInfos[idx].level_min}</b>
                </span>
              ) : (
                <>
                  <span>
                    Level min: <b>{encounterInfos[idx].level_min}</b>
                  </span>
                  <span>
                    Level max: <b>{encounterInfos[idx].level_max}</b>
                  </span>
                </>
              )}
            </div>
          )}
          <Card
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
                    src={`/images/pokemons/${pokemon.id}.jpg`}
                    alt={`image pokemon #${pokemon.id}`}
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
    </PartialPokemonGrid>
  )
}

export default ReducedPokemonGrid
