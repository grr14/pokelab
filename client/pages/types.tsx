/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { useEffect, useState, useRef } from "react"
import Header from "../components/Header"
import MainContainer from "../components/Container"
import CustomCell from "../components/CustomCell"
import { getTypeFromId, capitalizeFirstLetter } from "../common/utils"
import {
  NB_TYPES,
  TYPES_RELATIONS,
  ATTACKS_MULTIPLIERS,
} from "../common/constants"
import Link from "next/link"
import TypeDisplay from "../components/TypeDisplay"

type THook<T extends HTMLElement> = [React.RefObject<T>, boolean]

export const useMouseHover = <T extends HTMLElement>(): THook<T> => {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<T>(null)

  useEffect(() => {
    const handleMouseOver = (): void => setHovered(true)
    const handleMouseOut = (): void => setHovered(false)
    const node = ref && ref.current

    if (node) {
      node.addEventListener("mouseover", handleMouseOver)
      node.addEventListener("mouseout", handleMouseOut)
      return () => {
        node.removeEventListener("mouseover", handleMouseOver)
        node.removeEventListener("mouseout", handleMouseOut)
      }
    }
  }, [ref])

  return [ref, hovered]
}

interface Coordinates {
  attacker: number
  defender: number
}

const Types = () => {
  const [divRef, divIsHovered] = useMouseHover<HTMLDivElement>()

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
          onMouseEnter={() => handleMouseEnter(lineIdx, idx)}
          css={{
            boxShadow: "1px 1px 5px 1px rgba(0, 0, 0, 0.75)",
            borderRadius: "50px 50px 50px 50px",
            "&:hover": {
              boxShadow: "inset 0px 0px 3px 2px yellow",
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
    <MainContainer>
      <Header />
      <div
        css={(theme) => ({
          flex: 1,
          backgroundColor: theme.body.color,
          color: theme.body.text,
          fontFamily: theme.body.font,
          padding: "2%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        <div
          css={{
            width: "80%",
            textAlign: "justify",
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
            width: "80%",
          }}
        >
          <h2>Type List</h2>
          <div
            css={{
              width: "100%",
              backgroundColor: "inherit",
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
                <Link href={`types/[pid]`} as={`types/${el}`}>
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
        </div>
        <div
          css={{
            width: "80%",
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
              justifyContent: "space-around",
              alignContent: "center",
              alignItems: "center",
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
              }}
              ref={divRef}
            >
              {typeIconsLine()}
              {typeRelationsTable()}
            </div>
            {divIsHovered && coordinates.attacker > 0 ? (
              <div css={{ flex: 1, textAlign: "center" }}>
                <p>
                  <TypeDisplay size="medium" type={coordinates.attacker} /> VS{" "}
                  <TypeDisplay size="medium" type={coordinates.defender} /> :{" "}
                  {getEfficiency(coordinates.attacker, coordinates.defender)}
                </p>
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
            Pokemon (multiplier = 2). However, they are weak against Plant-type
            Pokemon (multiplier = 0.5) and don't affect Ground-type Pokemon
            (multiplier = 0).
            <br />A lot of Pokemon have 2 types. You can find a Type Matrix
            generator for dual type Pokémon{" "}
            <Link href={`types/generator`}>
              <a>here</a>
            </Link>
            .
          </p>
        </div>
      </div>
      <footer>grr 2020</footer>
    </MainContainer>
  )
}

export default Types
