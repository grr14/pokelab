/** @jsx jsx */
import { jsx } from "@emotion/core"

import {
  TYPES_RELATIONS,
  TYPES,
  NB_TYPES,
  ATTACKS_MULTIPLIERS,
} from "../common/constants"
import { getTypeFromId, getEfficiency } from "../common/utils"

import TypeDisplay from "./TypeDisplay"
import CustomCell from "./CustomCell"

import Link from "next/link"

import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import { PokemonTypeEfficiency } from "../common/types"

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
        fontFamily: "Trebuchet MS",
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
          <CustomCell
            css={{
              boxShadow: "1px 1px 1px 0px rgba(0,0,0,0.75)",
            }}
            type={el}
            height={"50%"}
          >
            {getTypeFromId(el).slice(0, 3).toUpperCase()}
          </CustomCell>
          <CustomCell
            multiplier={typeRelation[idx + 1]}
            height={"50%"}
            css={{
              marginTop: "4px",
              boxShadow: "1px 1px 1px 0px rgba(0,0,0,0.75)",
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

  let pte: PokemonTypeEfficiency = {
    NOT_EFFECTIVE_AT_ALL: { types: [], details: "super resistant" },
    NOT_TOO_EFFECTIVE: { types: [], details: "resistant" },
    IMMUNE: { types: [], details: "immune" },
    NORMAL: { types: [], details: "" },
    VERY_EFFECTIVE: { types: [], details: "weak" },
    SUPER_EFFECTIVE: { types: [], details: "super weak" },
  }

  for (let entry of Object.entries(ATTACKS_MULTIPLIERS)) {
    const arr = getEfficiency(typesRelations, entry[1])
    pte[entry[0]].types = arr
  }

  let descriptions = Array<JSX.Element>(5)
  for (const key in pte) {
    if (key === "NORMAL") {
      continue
    }
    descriptions.push(
      pte[key].types.length > 0 ? (
        <span>
          This pokemon is {pte[key].details} to{" "}
          {pte[key].types.map((type) => (
            <Link key={type} href={`/types/[pid]`} as={`/types/${type}`}>
              <a>
                <TypeDisplay size="medium" type={type as TYPES} />
              </a>
            </Link>
          ))}{" "}
          types-attacks.
        </span>
      ) : null
    )
  }

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
            {descriptions.map((item, idx) => (
              <ListItem key={idx}>{item}</ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default PokemonTypesInfos
