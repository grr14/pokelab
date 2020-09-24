/** @jsx jsx */
import { jsx } from "@emotion/core"

import {
  TYPES_RELATIONS,
  TYPES,
  NB_TYPES,
  ATTACKS_MULTIPLIERS,
  BREAKPOINTS,
  mq,
} from "../common/constants"
import { getTypeFromId, getEfficiency } from "../common/utils"
import { PokemonTypeEfficiency } from "../common/types"
import { useWindowSize } from "../common/hooks"

import { TypeDisplay } from "./StyledDisplay"
import CustomCell from "./CustomCell"

import Link from "next/link"

import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"

const BREAKING_POINT = BREAKPOINTS[2]

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
            [mq[0]]: { marginTop: "7px" },
            [mq[2]]: { marginTop: 0 },
          }}
        >
          <CustomCell
            css={(theme) => ({
              boxShadow: `1px 1px 1px 0px ${theme.boxShadow.color}`,
            })}
            type={el}
            height={"50%"}
          >
            {getTypeFromId(el).slice(0, 3).toUpperCase()}
          </CustomCell>
          <CustomCell
            multiplier={typeRelation[idx + 1]}
            height={"50%"}
            css={(theme) => ({
              boxShadow: `1px 1px 1px 0px ${theme.boxShadow.color}`,
              marginTop: "4px",
            })}
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
  const size = useWindowSize()

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
        <span css={(theme) => ({ color: theme.body.text })}>
          This pokemon is {pte[key].details} to{" "}
          {pte[key].types.map((type: TYPES) => (
            <Link key={type} href={`/type/[pid]`} as={`/type/${type}`}>
              <a>
                <TypeDisplay size="medium" type={type as TYPES} />{" "}
              </a>
            </Link>
          ))}
          attacks.
        </span>
      ) : null
    )
  }

  return (
    <div
      css={{
        width: "100%",
        padding: "0 5%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 css={{ width: "100%" }}>Types Relations</h2>
      {size.width < BREAKING_POINT ? (
        <div css={{ paddingTop: "10px", marginBottom: "30px" }}>
          <TypesRelationTable typeRelation={typesRelations} />
        </div>
      ) : (
        <div css={{ paddingTop: "10px", marginBottom: "30px" }}>
          <Accordion
            css={(theme) => ({
              backgroundColor: `${theme.card.background} !important`,
              "& .MuiSvgIcon-root": {
                fill: "#E31010",
              },
            })}
          >
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
      )}
    </div>
  )
}

export default PokemonTypesInfos
