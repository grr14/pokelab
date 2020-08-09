/** @jsx jsx */
import { jsx } from "@emotion/core"
import { getTypeFromId } from "../common/utils"

import React from "react"
import TypeRelationsSection from "./TypeRelationSection"
import PokemonsListByTypeId from "./PokemonListByTypeId"

import Divider from "@material-ui/core/Divider"

interface Props {
  id: number
}

const DetailedType: React.FC<Props> = ({ id }) => {
  return (
    <div
      className="outerContainer"
      css={{
        flex: 1,
        padding: "2%",
        display: "flex",
      }}
    >
      <div
        className="innerContainer"
        css={(theme) => ({
          backgroundColor: theme.main.background,
          boxSizing: "border-box",
          padding: "1% 2%",
          flex: 1,
          border: "1px solid black",
          borderRadius: "30px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        })}
      >
        <h1>Type : {getTypeFromId(id)}</h1>

        <Divider variant="middle" />

        <div className="upperSection" css={{ marginBottom: "15px" }}>
          <TypeRelationsSection id={id} />
        </div>

        <Divider variant="middle" />

        <div className="pokemonStatsAndList" css={{ marginTop: "15px" }}>
          <PokemonsListByTypeId id={id} />
        </div>
      </div>
    </div>
  )
}

export default DetailedType
