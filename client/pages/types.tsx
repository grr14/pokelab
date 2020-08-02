/** @jsx jsx */
import { jsx } from "@emotion/core"
import Header from "../components/Header"
import MainContainer from "../components/Container"
import CustomCell from "../components/CustomCell"
import { getTypeFromId, capitalizeFirstLetter } from "../common/utils"
import { NB_TYPES, TYPES_RELATIONS } from "../common/constants"
import Link from "next/link"

const Types = () => {
  const typeIconsLine = () => {
    return [...Array(NB_TYPES + 1).keys()].map((el) => {
      if (el === 0) {
        return <div className="emptyFillerForGrid"></div>
      }

      return (
        <div>
          <img
            css={{ height: "100%", width: "100%" }}
            src={`/images/types/${el}.png`}
          />
        </div>
      )
    })
  }

  const lineNormal = (lineIdx: number) => {
    const line = TYPES_RELATIONS[lineIdx].map((el, idx) => {
      if (idx === 0)
        return (
          <div>
            <img
              css={{ height: "100%", width: "100%" }}
              src={`/images/types/${lineIdx}.png`}
            />
          </div>
        )
      return (
        <CustomCell
          css={{
            boxShadow: "1px 1px 5px 1px rgba(0, 0, 0, 0.75)",
            borderRadius: "50px 50px 50px 50px",
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
      return lineNormal(lineIdx)
    })
    return table
  }

  return (
    <MainContainer>
      <Header />
      <div
        css={{
          flex: 1,
          backgroundColor: "pink",
          padding: "2%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <div
          css={(theme) => ({
            backgroundColor: "lightblue",
            textAlign: "justify",
            color: theme.body.text,
          })}
        >
          <h2>Explaination</h2>
          Types are properties for Pokémon and their moves. Each Pokemon can
          have either one or two types, whereas a Pokemon move can only be of
          exactly one type.
          <br />
          Since the Generation VI, there are 18 different types (see the table
          below). This makes a total of 171-unique types combinations (e.g.
          Normal/Flying equals Flying/Normal).
          <br />
          To this day, 154 combinations have been used for the Pokémon, giving
          us 17 remaining
          <br />A Pokémon attacking with a move of the same type as him will get
          a damage bonus of +50%, which stacks multiplicatively with the
          weakness(es) of the opposing Pokémon.
        </div>

        <div>
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
                <div
                  css={{
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={`/images/types/${el}.png`} />
                </div>
                <div
                  css={(theme) => ({
                    color: theme.body.text,
                    height: "20%",
                    display: "flex",
                    alignItems: "top",
                    justifyContent: "center",
                  })}
                >
                  {capitalizeFirstLetter(getTypeFromId(el))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2>Type Matrix</h2>
          <p>
            Each type has its own weaknesses and strengths against the others.
            The damage of attacking moves is multiplied by the coefficients
            displayed in the table below :
          </p>
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "repeat(19,2.5em)",
              gridTemplateRows: "repeat(19,2.5em)",
              gridColumnGap: "2px",
              gridRowGap: "2px",
            }}
          >
            {typeIconsLine()}
            {typeRelationsTable()}
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
            <br />
            <p>
              A lot of Pokemon have 2 types. You can find a Type Matrix
              generator for dual type Pokémon
              <Link href={`types/generator`}>
                <a>here</a>
              </Link>
              .
            </p>
          </p>
        </div>
      </div>
    </MainContainer>
  )
}

export default Types
