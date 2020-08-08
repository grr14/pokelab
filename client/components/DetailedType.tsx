/** @jsx jsx */
import { jsx } from "@emotion/core"
import { getTypeFromId } from "../common/utils"

import React from "react"
import TypeRelationsSection from "./TypeRelationSection"

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
          flex: 1,
          border: "1px solid black",
          borderRadius: "30px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        })}
      >
        <h1>Type : {getTypeFromId(id)}</h1>

        <TypeRelationsSection id={id} />

        <div className="sametypepokemon" css={{ backgroundColor: "lavender" }}>
          List...
        </div>
      </div>
    </div>
  )
}

export default DetailedType
