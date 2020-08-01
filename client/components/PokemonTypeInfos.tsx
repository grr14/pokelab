/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { Theme } from "../common/types"

import { TYPES_RELATIONS, TYPES, NB_TYPES } from "../common/constants"
import { getTypeFromId } from "../common/utils"

import TypeDisplay from "./TypeDisplay"

import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"

interface CustomCellProps {
  type?: number
  multiplier?: number
  theme?: Theme
}

const CustomCell = styled.div<CustomCellProps>`
  color: white;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px black;

  background-color: ${(props) => {
    switch (props.type) {
      case TYPES.NORMAL:
        return props.theme.type.normal
      case TYPES.FIGHTING:
        return props.theme.type.fighting
      case TYPES.FLYING:
        return props.theme.type.flying
      case TYPES.POISON:
        return props.theme.type.poison
      case TYPES.GROUND:
        return props.theme.type.ground
      case TYPES.ROCK:
        return props.theme.type.rock
      case TYPES.BUG:
        return props.theme.type.bug
      case TYPES.GHOST:
        return props.theme.type.ghost
      case TYPES.STEEL:
        return props.theme.type.steel
      case TYPES.FIRE:
        return props.theme.type.fire
      case TYPES.WATER:
        return props.theme.type.water
      case TYPES.GRASS:
        return props.theme.type.grass
      case TYPES.ELECTRIC:
        return props.theme.type.electric
      case TYPES.PSYCHIC:
        return props.theme.type.psychic
      case TYPES.ICE:
        return props.theme.type.ice
      case TYPES.DRAGON:
        return props.theme.type.dragon
      case TYPES.DARK:
        return props.theme.type.dark
      case TYPES.FAIRY:
        return props.theme.type.fairy
    }
  }};
  background-color: ${(props) => {
    switch (props.multiplier) {
      case 0:
        return props.theme.damage.immune
      case 0.25:
        return props.theme.damage.notEffectiveAtAll
      case 0.5:
        return props.theme.damage.notTooEffective
      case 1:
        return props.theme.damage.normal
      case 2:
        return props.theme.damage.veryEffective
      case 4:
        return props.theme.damage.superEffective
    }
  }};
`

interface TypesRelationTableProps {
  typeRelation: Array<number>
}

const TypesRelationTable: React.FC<TypesRelationTableProps> = ({
  typeRelation,
}) => {
  return (
    <div
      css={{
        width: "100%",
        backgroundColor: "inherit",
        display: "flex",
        flexFlow: "row wrap",
      }}
    >
      {[...Array(NB_TYPES + 1).keys()].slice(1).map((el, idx) => (
        <div
          key={el}
          css={{
            width: "3em",
            height: "6em",
            padding: "2px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CustomCell type={el} css={{}}>
            {getTypeFromId(el).slice(0, 3).toUpperCase()}
          </CustomCell>
          <CustomCell
            multiplier={typeRelation[idx + 1]}
            css={{
              marginTop: "1px",
              textShadow:
                "#000000 1px 1px, #000000 -1px 1px, #000000 -1px -1px, #000000 1px -1px",
            }}
          >
            {typeRelation[idx + 1]}
          </CustomCell>
        </div>
      ))}
    </div>
  )
}

interface Props {
  type_1: number
  type_2: number | null
}

const PokemonTypesInfos: React.FC<Props> = ({ type_1, type_2 }) => {
  let typesRelations = new Array<number>()
  if (type_2 === null) {
    // Pokemon has one type : no need to compute multi-type weaknesses
    typesRelations = TYPES_RELATIONS.map((t) => t[type_1])
  } else {
    let type_1Relations = TYPES_RELATIONS.map((t) => t[type_1])
    let type_2Relations = TYPES_RELATIONS.map((t) => t[type_2])
    for (let i = 0; i < type_1Relations.length; i++) {
      typesRelations.push(type_1Relations[i] * type_2Relations[i]) // weaknesses and resistances adds multiplicatlively
    }
  }

  const getImmuneAgainst = (relations: Array<number>) => {
    const immuneAgainst = relations.reduce(
      (acc, el, i) => (el === 0 && i != 0 ? [...acc, i] : acc),
      []
    )

    return !immuneAgainst ? [] : immuneAgainst
  }

  const getSuperWeakAgainst = (relations: Array<number>) => {
    const superWeakAgainst = relations.reduce(
      (acc, el, i) => (el === 4 ? [...acc, i] : acc),
      []
    )

    return superWeakAgainst
  }

  const getWeakAgainst = (relations: Array<number>) => {
    const weakAgainst = relations.reduce(
      (acc, el, i) => (el === 2 ? [...acc, i] : acc),
      []
    )

    return weakAgainst
  }

  const getResistantAgainst = (relations: Array<number>) => {
    const resistantAgainst = relations.reduce(
      (acc, el, i) => (el === 0.5 ? [...acc, i] : acc),
      []
    )

    return resistantAgainst
  }

  const getSuperResistantAgainst = (relations: Array<number>) => {
    const superResistantAgainst = relations.reduce(
      (acc, el, i) => (el === 0.25 ? [...acc, i] : acc),
      []
    )

    return superResistantAgainst
  }

  const superWeakAgainst =
    type_2 != null && getSuperWeakAgainst(typesRelations).length > 0 ? (
      <span>
        This pokémon is super weak against{" "}
        {getSuperWeakAgainst(typesRelations).map((type) => (
          <TypeDisplay key={type} type={type as TYPES} />
        ))}{" "}
        type-attacks.
      </span>
    ) : null

  const weakAgainst = getWeakAgainst(typesRelations) ? (
    <span>
      This pokémon is weak against{" "}
      {getWeakAgainst(typesRelations).map((type) => (
        <TypeDisplay key={type} type={type as TYPES} />
      ))}{" "}
      type-attacks.
    </span>
  ) : null

  const resistantAgainst =
    getResistantAgainst(typesRelations).length > 0 ? (
      <span>
        This pokémon is resistant against{" "}
        {getResistantAgainst(typesRelations).map((type) => (
          <TypeDisplay key={type} type={type as TYPES} />
        ))}{" "}
        type-attacks.
      </span>
    ) : null

  const superResistantAgainst =
    type_2 != null && getSuperResistantAgainst(typesRelations).length > 0 ? (
      <span>
        This pokémon is super resistant against{" "}
        {getSuperResistantAgainst(typesRelations).map((type) => (
          <TypeDisplay key={type} type={type as TYPES} />
        ))}{" "}
        type-attacks.
      </span>
    ) : null

  const immuneAgainst =
    getImmuneAgainst(typesRelations).length > 0 ? (
      <span>
        This pokémon is immune against{" "}
        {getImmuneAgainst(typesRelations).map((type) => (
          <TypeDisplay key={type} type={type as TYPES} />
        ))}{" "}
        type-attacks.
      </span>
    ) : null

  return (
    <div css={{ width: "80%", paddingTop: "10px" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="typeRelationTable"
          id="typeRT"
        >
          <TypesRelationTable typeRelation={typesRelations} />
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>{superWeakAgainst}</ListItem>
            <ListItem>{weakAgainst}</ListItem>
            <ListItem>{resistantAgainst}</ListItem>
            <ListItem>{superResistantAgainst}</ListItem>
            <ListItem>{immuneAgainst}</ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default PokemonTypesInfos
