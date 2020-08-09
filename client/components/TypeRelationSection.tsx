/** @jsx jsx */
import { jsx, css } from "@emotion/core"

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
  mq,
} from "../common/constants"
import TypeDisplay from "../components/TypeDisplay"

import React from "react"
import Link from "next/link"

interface Props {
  id: number
}

const sectionCss = css`
  display: flex;
  flex-wrap: wrap;
  ${mq[0]} {
    flex-direction: column;
    align-items: center;
  }
  ${mq[3]} {
    flex-direction: row;
    align-items: flex-start;
  }
`

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
        /* These keys ony matter for double-types */
        key === "NOT_EFFECTIVE_AT_ALL" ||
        key === "NORMAL" ||
        key === "SUPER_EFFECTIVE"
      ) {
        continue
      }
      const length = pte[key].types.length
      section.push(
        length > 0 ? (
          <div
            key={key}
            css={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              [mq[0]]: {
                width: "100%",
              },
              [mq[3]]: {
                width: "50%",
              },
            }}
          >
            <h3>{pte[key].details}</h3>
            <div
              css={{
                display: "grid",
                gridColumnGap: "3px",
                gridRowGap: "3px",
                [mq[0]]: {
                  gridTemplate:
                    length < 3
                      ? `1fr/ repeat(${length},1fr)`
                      : `1fr 1fr 1fr/ repeat(3,1fr)`,
                },
                [mq[3]]: {
                  gridTemplate:
                    length < 4
                      ? `1fr/ repeat(${length},1fr)`
                      : `1fr 1fr/ repeat(4,1fr)`,
                },
                [mq[5]]: {
                  gridTemplate:
                    length < 5
                      ? `1fr/ repeat(${length},1fr)`
                      : `1fr 1fr/ repeat(5,1fr)`,
                },
              }}
            >
              {pte[key].types.map((type) => (
                <Link key={type} href={`/types/[pid]`} as={`/types/${type}`}>
                  <a>
                    <TypeDisplay size="medium" type={type as TYPES} />{" "}
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
      <div className="typeRelationGrid" css={sectionCss}>
        {typeRelationSection(pteAttack)}
      </div>
      <h2 css={{ textAlign: "center" }}>DEFENSE</h2>
      <div className="typeRelationGrid" css={sectionCss}>
        {typeRelationSection(pteDefense)}
      </div>
    </React.Fragment>
  )
}

export default TypeRelationsSection
