/** @jsx jsx */
import { jsx } from "@emotion/core"

import React from "react"

import { OuterContainer, InnerContainer } from "../components/Containers"

import CustomCell from "../components/CustomCell"
import { TypeDisplay } from "../components/StyledDisplay"
import { getTypeFromId, capitalizeFirstLetter } from "../common/utils"
import {
  mq,
  NB_TYPES,
  TYPES_RELATIONS,
  ATTACKS_MULTIPLIERS,
} from "../common/constants"

import Link from "next/link"

interface Coordinates {
  attacker: number
  defender: number
}

const Types: React.FC = () => {
  const [coordinates, setCoordinates] = React.useState<Coordinates>({
    attacker: 0,
    defender: 0,
  })

  const handleMouseEnter = (x: number, y: number) => {
    setCoordinates({ attacker: x, defender: y })
  }

  const getEfficiency = (x: number, y: number) => {
    switch (TYPES_RELATIONS[x][y]) {
      case ATTACKS_MULTIPLIERS.IMMUNE:
        return "Ineffective"
      case ATTACKS_MULTIPLIERS.NOT_TOO_EFFECTIVE:
        return "Not efficient"
      case ATTACKS_MULTIPLIERS.NORMAL:
        return "Regular damage"
      case ATTACKS_MULTIPLIERS.VERY_EFFECTIVE:
        return "Super efficient"
    }
  }

  const typeIconsLine = () => {
    return [...Array(NB_TYPES + 1).keys()].map((el) => {
      if (el === 0) {
        return <div key={el} className="emptyFillerForGrid"></div>
      }

      return (
        <div key={el}>
          <img
            css={{ height: "100%", width: "100%" }}
            src={`/images/types/${el}.png`}
          />
        </div>
      )
    })
  }

  const singleTypeLine = (lineIdx: number) => {
    const line = TYPES_RELATIONS[lineIdx].map((el, idx) => {
      if (idx === 0)
        return (
          <div key={idx}>
            <img
              css={{
                height: "100%",
                width: "100%",
              }}
              src={`/images/types/${lineIdx}.png`}
            />
          </div>
        )
      return (
        <CustomCell
          key={idx}
          onMouseOver={() => handleMouseEnter(lineIdx, idx)}
          css={{
            boxShadow: "1px 1px 5px 1px rgba(0, 0, 0, 0.75)",
            borderRadius: "50px 50px 50px 50px",
            "&:hover": {
              boxShadow: "inset 0px 0px 3px 2px #E31010cc",
            },
          }}
          height={"100%"}
          multiplier={el}
        >
          {el}
        </CustomCell>
      )
    })
    return line
  }

  const typeRelationsTable = () => {
    const table = TYPES_RELATIONS.map((_, lineIdx) => {
      if (lineIdx === 0) return
      return singleTypeLine(lineIdx)
    })
    return table
  }

  return (
    <OuterContainer>
      <InnerContainer>
        <div
          css={{
            [mq[0]]: {
              width: "100%",
              textAlign: "start",
            },
            [mq[4]]: {
              width: "90%",
              textAlign: "justify",
            },
          }}
        >
          <h2>Explaination</h2>
          <p>
            Types are properties for Pokémon and their moves. Each Pokemon can
            have either one or two types, whereas a Pokemon move can only be of
            exactly one type. Since the Generation VI, there are 18 different
            types (see the table below). This makes a total of 171-unique types
            combinations (e.g. Normal/Flying equals Flying/Normal). To this day,
            154 combinations have been used for the Pokémon, giving us 17
            remaining.A Pokémon attacking with a move of the same type as him
            will get a damage bonus of +50%, which stacks multiplicatively with
            the weakness(es) of the opposing Pokémon.
          </p>
        </div>

        <div
          css={{
            [mq[0]]: { width: "100%" },
            [mq[4]]: { width: "90%" },
          }}
        >
          <h2>Type List</h2>
          <div
            css={{
              width: "100%",
              display: "flex",
              flexFlow: "row wrap",
            }}
          >
            {[...Array(NB_TYPES + 1).keys()].slice(1).map((el) => (
              <div
                key={el}
                css={{
                  width: "5em",
                  height: "10em",
                  padding: "2px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Link href={`type/[pid]`} as={`type/${el}`}>
                  <a css={{ height: "80%", width: "100%", cursor: "pointer" }}>
                    <div
                      css={{
                        height: "50%",
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center",
                      }}
                    >
                      <img src={`/images/types/${el}.png`} />
                    </div>
                    <div
                      css={{
                        height: "30%",
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {capitalizeFirstLetter(getTypeFromId(el))}
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>

          <div
            className="typeMatrix"
            css={{
              width: "100%",
            }}
          >
            <h2>Type Matrix</h2>
            <p>
              Each type has its own weaknesses and strengths against the others.
              The damage of attacking moves is multiplied by the coefficients
              displayed in the table below :
            </p>
            <div
              css={{
                display: "flex",
                justifyContent: "start",
                alignContent: "center",
                width: "100%",
                [mq[0]]: { flexDirection: "column" },
                [mq[5]]: { flexDirection: "row" },
              }}
            >
              <div
                css={{
                  display: "grid",
                  gridTemplateColumns: "repeat(19,2.5em)",
                  gridTemplateRows: "repeat(19,2.5em)",
                  gridColumnGap: "2px",
                  gridRowGap: "2px",
                  padding: "5px",
                  boxSizing: "border-box",
                  overflowX: "auto",
                }}
              >
                {typeIconsLine()}
                {typeRelationsTable()}
              </div>
              {coordinates.attacker > 0 ? (
                <div
                  css={{
                    flex: 1,
                    display: "flex",
                    [mq[0]]: {
                      margin: "2em 0",
                      flexDirection: "row",
                      justifyItems: "center",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                    [mq[5]]: {
                      marginLeft: "4em",
                      flexDirection: "column",
                      justifyItems: "flex-start",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    },
                  }}
                >
                  <div
                    css={{
                      [mq[5]]: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      },
                    }}
                  >
                    <TypeDisplay size="medium" type={coordinates.attacker} />{" "}
                    <span>VS </span>
                    <TypeDisplay
                      size="medium"
                      type={coordinates.defender}
                    />{" "}
                    <span>
                      <b>
                        →{" "}
                        {getEfficiency(
                          coordinates.attacker,
                          coordinates.defender
                        )}
                      </b>
                    </span>
                  </div>
                </div>
              ) : (
                <div css={{ flex: 1 }}></div>
              )}
            </div>
            <p>
              The row axis represents the type of the <b>attacking move</b>.
              <br />
              The columns represent the type of the <b>defender</b>.
              <br />
              For example : Electric-type moves are strong against Water-type
              Pokemon (multiplier = 2). However, they are weak against
              Plant-type Pokemon (multiplier = 0.5) and don't affect Ground-type
              Pokemon (multiplier = 0).
              <br />A lot of Pokemon have 2 types. You can find a Type Matrix
              generator for dual type Pokémon{" "}
              <Link href={`types/generator`}>
                <a>here</a>
              </Link>
              .
            </p>
          </div>
        </div>
      </InnerContainer>
    </OuterContainer>
  )
}

export default Types
