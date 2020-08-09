/** @jsx jsx */
import { jsx } from "@emotion/core"
import { PokemonTypeEfficiency } from "../common/types"
import {
  getTypeFromId,
  getEfficiency,
  capitalizeFirstLetter,
} from "../common/utils"
import {
  TYPES_RELATIONS,
  ATTACKS_MULTIPLIERS,
  TYPES,
} from "../common/constants"

import React from "react"
import Link from "next/link"

import TypeDisplay from "../components/TypeDisplay"

interface Props {
  id: number
}

const TypeRelationsSection: React.FC<Props> = ({ id }) => {
  let typesRelationsAttack = TYPES_RELATIONS[id]
  let typesRelationsDefense = TYPES_RELATIONS.map((t) => t[id])

  let pteAttack: PokemonTypeEfficiency = {
    VERY_EFFECTIVE: {
      types: [],
      details: `${capitalizeFirstLetter(
        getTypeFromId(id)
      )}-type Moves are strong against:`,
    },
    NOT_TOO_EFFECTIVE: {
      types: [],
      details: `${capitalizeFirstLetter(
        getTypeFromId(id)
      )}-type Moves are weak against:`,
    },
    IMMUNE: {
      types: [],
      details: `${capitalizeFirstLetter(
        getTypeFromId(id)
      )}-type Moves cannot damage:`,
    },
    NOT_EFFECTIVE_AT_ALL: { types: [], details: "" },
    NORMAL: { types: [], details: "" },
    SUPER_EFFECTIVE: { types: [], details: "" },
  }

  for (let entry of Object.entries(ATTACKS_MULTIPLIERS)) {
    const arr = getEfficiency(typesRelationsAttack, entry[1])
    pteAttack[entry[0]].types = arr
  }

  let pteDefense: PokemonTypeEfficiency = {
    NOT_TOO_EFFECTIVE: {
      types: [],
      details: `Not very effective against ${capitalizeFirstLetter(
        getTypeFromId(id)
      )}-type Pokémon:`,
    },
    VERY_EFFECTIVE: {
      types: [],
      details: `Super-effective against ${capitalizeFirstLetter(
        getTypeFromId(id)
      )}-type Pokémon:`,
    },
    IMMUNE: {
      types: [],
      details: `${capitalizeFirstLetter(
        getTypeFromId(id)
      )}-type Pokémons are immune to:`,
    },
    NOT_EFFECTIVE_AT_ALL: { types: [], details: "" },
    NORMAL: { types: [], details: "" },
    SUPER_EFFECTIVE: { types: [], details: "" },
  }

  for (let entry of Object.entries(ATTACKS_MULTIPLIERS)) {
    const arr = getEfficiency(typesRelationsDefense, entry[1])
    pteDefense[entry[0]].types = arr
  }

  const typeRelationSection = (
    pte: PokemonTypeEfficiency
  ): Array<JSX.Element> => {
    let section = Array<JSX.Element>(3)
    for (const key in pte) {
      if (
        key === "NOT_EFFECTIVE_AT_ALL" ||
        key === "NORMAL" ||
        key === "SUPER_EFFECTIVE"
      ) {
        continue
      }
      section.push(
        pte[key].types.length > 0 ? (
          <div key={key} css={{ width: "50%" }}>
            <h1>{pte[key].details}</h1>
            <div>
              {pte[key].types.map((type) => (
                <Link href={`/types/[pid]`} as={`/types/${type}`}>
                  <a>
                    <TypeDisplay
                      key={type}
                      size="medium"
                      type={type as TYPES}
                    />
                  </a>
                </Link>
              ))}
            </div>
          </div>
        ) : null
      )
    }
    return section
  }

  return (
    <React.Fragment>
      <h2 css={{ textAlign: "center" }}>ATTACK</h2>
      <div
        className="typeRelationGrid"
        css={{
          display: "flex",
          flexWrap: "wrap" /* the children element have a width of 50% */,
        }}
      >
        {typeRelationSection(pteAttack)}
      </div>
      <h2 css={{ textAlign: "center" }}>DEFENSE</h2>
      <div
        className="typeRelationGrid"
        css={{
          display: "flex",
          flexWrap: "wrap" /* the children element have a width of 50% */,
        }}
      >
        {typeRelationSection(pteDefense)}
      </div>
    </React.Fragment>
  )
}

export default TypeRelationsSection
