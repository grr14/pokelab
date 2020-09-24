/** @jsx jsx */
import { jsx } from "@emotion/core"

import Link from "next/link"
import React, { useState, useCallback } from "react"

import {
  VERSIONS_GROUPS,
  MOVE_LEARNING_METHOD,
  VERSIONS_GROUPS_IN_GENERATIONS,
  NB_GENERATIONS,
} from "../common/constants"

import { TypeDisplay } from "./StyledDisplay"
import { Table, Tr, Th, Td } from "./Table"

import {
  movesByPokemonAndVersion,
  movesByPokemonAndVersionVariables,
  movesByPokemonAndVersion_movesByPokemonAndVersion as Moves,
} from "../graphql/queries/__generated__/movesByPokemonAndVersion"

import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import {
  getVersionGroupFromId,
  getTypeFromId,
  getDamageClassFromId,
  getLearningMethodFromId,
  capitalizeSentence,
  getGenerationFromId,
} from "../common/utils"

import {
  Tabs,
  Tab,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core"
import Skeleton from "@material-ui/lab/Skeleton/Skeleton"
import TabPanel from "./TabPanel"

const GET_MOVES = gql`
  query movesByPokemonAndVersion($pokemonId: Int, $versionId: Int) {
    movesByPokemonAndVersion(pokemonId: $pokemonId, versionId: $versionId) {
      learning_method
      level_learned
      order
      move {
        id
        identifier
        generation_id
        type_id
        power
        pp
        accuracy
        priority
        target_id
        damage_class_id
        effect_id
        effect_chance
      }
    }
  }
`

interface PokemonMovesProps {
  pokemonId: number
}

const PokemonMoves: React.FC<PokemonMovesProps> = ({ pokemonId }) => {
  const [versionGroup, setVersionGroup] = useState<VERSIONS_GROUPS>(
    VERSIONS_GROUPS["ULTRASUN-ULTRAMOON"]
  )

  const pokemonGeneration = getGenerationFromId(pokemonId)
  const allGenerations = [...Array(NB_GENERATIONS).keys()]
  const rest = allGenerations.splice(0, pokemonGeneration - 1)
  const restLength = rest.length
  /* we always display the most recent version tab first */
  const [tabNumber, setTabNumber] = React.useState(allGenerations.length - 1)
  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabNumber(newValue)
  }

  const { data, loading, error, refetch: _refetch } = useQuery<
    movesByPokemonAndVersion,
    movesByPokemonAndVersionVariables
  >(GET_MOVES, {
    variables: {
      pokemonId: pokemonId,
      versionId: versionGroup,
    },
  })
  const refetch = useCallback(() => {
    setTimeout(() => _refetch(), 0)
  }, [_refetch])

  const arrayHeader = (byLevel: boolean) => (
    <Tr>
      <Th>Name</Th>
      <Th>Type</Th>
      <Th>Power</Th>
      <Th>PP</Th>
      <Th>Accuracy</Th>
      <Th>Damage Class</Th>
      {byLevel && (
        <React.Fragment>
          <Th>Method</Th>
          <Th>Level</Th>
        </React.Fragment>
      )}
    </Tr>
  )

  if (error) {
    return <p>Cannot retrieve Moves</p>
  }

  if (loading) {
    return (
      <div css={{ width: "100%", padding: "0 5%" }}>
        <Tabs
          variant="scrollable"
          scrollButtons="on"
          css={{
            "&>div.MuiTabs-scroller.MuiTabs-scrollable>span": {
              backgroundColor: "#E31010 !important",
            },
          }}
        >
          {allGenerations.map((el) => (
            <Tab key={el} label={`Generation ${el + 1}`} />
          ))}
        </Tabs>
        <h2>Loading...</h2>
        <Table>
          <thead>{arrayHeader(true)}</thead>
          <tbody>
            {[...Array(10).fill(0)].map((el, idx) => (
              <Tr loading={true} key={idx}>
                <Td css={{ height: "24px" }} colSpan={8}>
                  <Skeleton
                    variant="text"
                    css={(theme) => ({
                      backgroundColor: theme.card.background,
                    })}
                  />
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }

  const getTable = (array: Moves[], byLevel = false) =>
    array.map((move, idx) => (
      <Tr key={idx}>
        <Td>
          <Link href={`/move/[pid]`} as={`/move/${move.move.id}`}>
            <a>{capitalizeSentence(move.move.identifier)}</a>
          </Link>
        </Td>
        <Td>
          <Link href={`/type/[pid]`} as={`/type/${move.move.type_id}`}>
            <a>
              <TypeDisplay size="small" type={move.move.type_id}>
                {getTypeFromId(move.move.type_id)}
              </TypeDisplay>
            </a>
          </Link>
        </Td>
        <Td>{move.move.power !== null ? move.move.power : "-"}</Td>
        <Td>{move.move.pp}</Td>
        <Td>{move.move.accuracy != null ? move.move.accuracy : "-"}</Td>
        <Td>{getDamageClassFromId(move.move.damage_class_id)}</Td>
        {byLevel && (
          <React.Fragment>
            <Td>{getLearningMethodFromId(move.learning_method)}</Td>
            <Td>{move.level_learned}</Td>
          </React.Fragment>
        )}
      </Tr>
    ))

  const learntByLevel = data.movesByPokemonAndVersion.filter(
    (move) => move.learning_method === MOVE_LEARNING_METHOD.LEVEL
  )
  const learntByLevelTable = getTable(learntByLevel, true)

  const learntByMachine = data.movesByPokemonAndVersion.filter(
    (move) => move.learning_method === MOVE_LEARNING_METHOD.MACHINE
  )
  const learntByMachineTable = getTable(learntByMachine)

  const learntByEgg = data.movesByPokemonAndVersion.filter(
    (move) => move.learning_method === MOVE_LEARNING_METHOD.EGG
  )
  const learntByEggTable = getTable(learntByEgg)

  const learntByTutor = data.movesByPokemonAndVersion.filter(
    (move) => move.learning_method === MOVE_LEARNING_METHOD.TUTOR
  )
  const learntByTutorTable = getTable(learntByTutor)

  const learntByLightBall = data.movesByPokemonAndVersion.filter(
    (move) => move.learning_method === MOVE_LEARNING_METHOD.LIGHT_BALL_EGG
  )
  const learntByLightBallTable = getTable(learntByLightBall)

  const learntByFormChange = data.movesByPokemonAndVersion.filter(
    (move) => move.learning_method === MOVE_LEARNING_METHOD.FORM_CHANGE
  )
  const learntByFormChangeTable = getTable(learntByFormChange)

  const changeGeneration = (el: number) => {
    let generationId: number
    switch (el) {
      case 1:
        generationId = VERSIONS_GROUPS["RED-BLUE"]
        break
      case 2:
        generationId = VERSIONS_GROUPS["CRYSTAL"]
        break
      case 3:
        generationId = VERSIONS_GROUPS["FIRERED-LEAFGREEN"]
        break
      case 4:
        generationId = VERSIONS_GROUPS["HEARTGOLD-SOULSILVER"]
        break
      case 5:
        generationId = VERSIONS_GROUPS["BLACK2-WHITE2"]
        break
      case 6:
        generationId = VERSIONS_GROUPS["OMEGARUBY-ALPHASAPPHIRE"]
        break
      case 7:
        generationId = VERSIONS_GROUPS["ULTRASUN-ULTRAMOON"]
        break
      default:
        generationId = 0
    }

    setVersionGroup(generationId)
    refetch()
  }

  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setVersionGroup(event.target.value as VERSIONS_GROUPS)
    refetch()
  }

  const buildTablesSection = [
    {
      method: "Leveling",
      tableHasLevelCol: true,
      table: learntByLevelTable,
    },
    {
      method: "Machine",
      tableHasLevelCol: false,
      table: learntByMachineTable,
    },
    {
      method: "Egg Moves",
      tableHasLevelCol: false,
      table: learntByEggTable,
    },
    {
      method: "Tutor",
      tableHasLevelCol: false,
      table: learntByTutorTable,
    },
    {
      method: "Light Ball Egg",
      tableHasLevelCol: false,
      table: learntByLightBallTable,
    },
    {
      method: "Form Change",
      tableHasLevelCol: false,
      table: learntByFormChangeTable,
    },
  ]

  return (
    <div css={{ width: "100%", padding: "0 5%" }}>
      <Tabs
        value={tabNumber}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="on"
        aria-label="scrollable on tabs"
        css={(theme) => ({
          backgroundColor: theme.card.background,
          "&>div.MuiTabs-scroller.MuiTabs-scrollable>span": {
            backgroundColor: "#E31010 !important",
          },
        })}
      >
        {allGenerations.map((el) => (
          <Tab
            key={el}
            label={`Generation ${el + 1}`}
            onClick={() => changeGeneration(el + 1)}
          />
        ))}
      </Tabs>

      {[...Array(allGenerations.length).keys()].map((el, idx) => (
        <TabPanel key={idx} value={tabNumber} index={el}>
          <h2>Moves Learnt in version {getVersionGroupFromId(versionGroup)}</h2>
          <FormControl css={{ minWidth: "120px" }}>
            <InputLabel
              id="select-version"
              css={(theme) => ({
                color: `${theme.body.text} !important`,
                opacity: "0.5",
              })}
            >
              Versions
            </InputLabel>
            <Select
              labelId="select-version"
              id="select-version"
              value={versionGroup}
              onChange={handleChangeSelect}
              css={(theme) => ({
                color: theme.body.text,
                fontFamily: theme.body.font,
                "&>svg.MuiSvgIcon-root.MuiSelect-icon": {
                  color: `${theme.body.text} !important`,
                },
                "&.MuiInput-underline:before": {
                  borderBottom: `solid 1px #E31010 !important`,
                },
                "&.MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottom: `solid 2px #E31010 !important`,
                },
                "&.MuiInput-underline:after": {
                  borderBottom: `solid 2px #E31010 !important`,
                },
              })}
            >
              {VERSIONS_GROUPS_IN_GENERATIONS[el + restLength].map(
                (versGroup, idx) => (
                  <MenuItem key={idx} value={versGroup}>
                    {getVersionGroupFromId(versGroup)}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>

          {buildTablesSection.map((tableSection, idx) => (
            <div key={idx} css={{ overflowX: "auto" }}>
              {tableSection.table.length > 0 && (
                <div css={{ margin: "10px 0" }}>
                  <h3>Learnt by {tableSection.method}</h3>
                  <Table>
                    <thead>{arrayHeader(tableSection.tableHasLevelCol)}</thead>
                    <tbody>{tableSection.table}</tbody>
                  </Table>
                </div>
              )}
            </div>
          ))}
        </TabPanel>
      ))}
    </div>
  )
}

export default PokemonMoves
