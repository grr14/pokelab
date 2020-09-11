/** @jsx jsx */
import { jsx } from "@emotion/core"
import {
  mq,
  VERSIONS_GROUPS,
  MOVE_LEARNING_METHOD,
  GENERATIONS,
  VERSIONS,
  VERSIONS_GROUPS_IN_GENERATIONS,
  NB_GENERATIONS,
} from "../common/constants"

import Error from "../pages/_error"

import {
  movesByPokemonAndVersion,
  movesByPokemonAndVersionVariables,
  movesByPokemonAndVersion_movesByPokemonAndVersion as Moves,
} from "../graphql/queries/__generated__/movesByPokemonAndVersion"

import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import {
  capitalizeFirstLetter,
  getVersionGroupFromId,
  getTypeFromId,
  getDamageClassFromId,
  getLearningMethodFromId,
  capitalizeSentence,
  getGenerationFromId,
} from "../common/utils"
import {
  ListItem,
  List,
  Tabs,
  Tab,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core"
import TypeDisplay from "./TypeDisplay"
import Link from "next/link"
import { useState, useCallback } from "react"
import React from "react"

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

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  )
}

interface Props {
  pokemonId: number
}

const PokemonMoves: React.FC<Props> = ({ pokemonId }) => {
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

  if (error) {
    return <p>Cannot retrieve Moves</p>
  }

  if (loading) {
    return (
      <div
        css={{
          minHeight: "300px",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <p>Loading...</p>
      </div>
    )
  }

  const getTable = (array: Moves[], byLevel = false) =>
    array.map((move, idx) => (
      <tr css={{ textAlign: "center", border: "solid 1px #E31010" }} key={idx}>
        <td css={{ textAlign: "center", border: "solid 1px #E31010" }}>
          <Link href={`/move/[pid]`} as={`/move/${move.move.id}`}>
            <a>{capitalizeSentence(move.move.identifier)}</a>
          </Link>
        </td>
        <td css={{ textAlign: "center", border: "solid 1px #E31010" }}>
          <Link href={`/type/[pid]`} as={`/type/${move.move.type_id}`}>
            <a>
              <TypeDisplay size="small" type={move.move.type_id}>
                {getTypeFromId(move.move.type_id)}
              </TypeDisplay>
            </a>
          </Link>
        </td>
        <td css={{ textAlign: "center", border: "solid 1px #E31010" }}>
          {move.move.power !== null ? move.move.power : "-"}
        </td>
        <td css={{ textAlign: "center", border: "solid 1px #E31010" }}>
          {move.move.pp}
        </td>
        <td css={{ textAlign: "center", border: "solid 1px #E31010" }}>
          {move.move.accuracy != null ? move.move.accuracy : "-"}
        </td>
        <td css={{ textAlign: "center", border: "solid 1px #E31010" }}>
          {getDamageClassFromId(move.move.damage_class_id)}
        </td>
        {byLevel && (
          <React.Fragment>
            <td css={{ textAlign: "center", border: "solid 1px #E31010" }}>
              {getLearningMethodFromId(move.learning_method)}
            </td>
            <td css={{ textAlign: "center", border: "solid 1px #E31010" }}>
              {move.level_learned}
            </td>
          </React.Fragment>
        )}
      </tr>
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

  function a11yProps(index: any) {
    return {
      id: `scrollable-auto-tab-${index}`,
      "aria-controls": `scrollable-auto-tabpanel-${index}`,
    }
  }

  const changeGeneration = (el: number, tabNumber: number) => {
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

  const arrayHeader = (byLevel) => (
    <tr css={{ textAlign: "center" }}>
      <th css={{ border: "solid 1px #E31010" }}>Identifier</th>
      <th css={{ border: "solid 1px #E31010" }}>Type</th>
      <th css={{ border: "solid 1px #E31010" }}>Power</th>
      <th css={{ border: "solid 1px #E31010" }}>PP</th>
      <th css={{ border: "solid 1px #E31010" }}>Accuracy</th>
      <th css={{ border: "solid 1px #E31010" }}>Damage Class</th>
      {byLevel && (
        <React.Fragment>
          <th css={{ border: "solid 1px #E31010" }}>Method</th>
          <th css={{ border: "solid 1px #E31010" }}>Level</th>
        </React.Fragment>
      )}
    </tr>
  )

  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setVersionGroup(event.target.value as VERSIONS_GROUPS)
    refetch()
  }

  const buildTables = [
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
        scrollButtons="auto"
        aria-label="scrollable auto tabs"
      >
        {allGenerations.map((el) => (
          <Tab
            key={el}
            label={`Generation ${el + 1}`}
            onClick={() => changeGeneration(el + 1, tabNumber)}
            {...a11yProps(el)}
          />
        ))}
      </Tabs>

      {[...Array(allGenerations.length).keys()].map((el) => (
        <TabPanel value={tabNumber} index={el}>
          <h2>Moves Learnt in version {getVersionGroupFromId(versionGroup)}</h2>
          <FormControl css={{ minWidth: 120 }}>
            <InputLabel id="select-version">Versions</InputLabel>
            <Select
              labelId="select-version"
              id="select-version"
              value={versionGroup}
              onChange={handleChangeSelect}
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

          {buildTables.map((table, idx) => (
            <div key={idx}>
              {table.table.length > 0 && (
                <React.Fragment>
                  <h3>Learnt by {table.method}</h3>
                  <table css={{ borderCollapse: "collapse" }}>
                    <thead>{arrayHeader(table.tableHasLevelCol)}</thead>
                    <tbody>{table.table}</tbody>
                  </table>
                </React.Fragment>
              )}
            </div>
          ))}
        </TabPanel>
      ))}
    </div>
  )
}

export default PokemonMoves
