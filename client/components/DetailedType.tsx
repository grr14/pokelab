/** @jsx jsx */
import { jsx } from "@emotion/core"
import { getTypeFromId, capitalizeFirstLetter } from "../common/utils"

import React from "react"
import { OuterContainer, InnerContainer } from "./Containers"
import TypeRelationsSection from "./TypeRelationSection"
import PokemonsListByTypeId from "./PokemonListByTypeId"

import Divider from "@material-ui/core/Divider"

interface Props {
  id: number
}

const DetailedType: React.FC<Props> = ({ id }) => {
  return (
    <OuterContainer>
      <InnerContainer>
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>Type : {capitalizeFirstLetter(getTypeFromId(id))}</h1>
          <img
            css={{ marginLeft: "15px", width: "64px", height: "64px" }}
            src={`/images/types/${id}.png`}
          />
        </div>

        <Divider variant="middle" />

        <div className="upperSection" css={{ marginBottom: "15px" }}>
          <TypeRelationsSection id={id} />
        </div>

        <Divider variant="middle" />

        <div className="pokemonStatsAndList" css={{ marginTop: "15px" }}>
          <PokemonsListByTypeId id={id} />
        </div>
      </InnerContainer>
    </OuterContainer>
  )
}

export default DetailedType
