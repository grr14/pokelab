/** @jsx jsx */
import { jsx } from "@emotion/core"
import { mq, VERSIONS_GROUPS, MOVE_LEARNING_METHOD } from "../common/constants"

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
          <p>{children}</p>
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
    VERSIONS_GROUPS["RED-BLUE"]
  )
  console.log(versionGroup)

  const [value, setValue] = React.useState(0)
  const [version, setVersion] = React.useState("")

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
    return <p>Loading...</p>
  }

  const getTable = (array: Moves[]) =>
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
        <td css={{ textAlign: "center", border: "solid 1px #E31010" }}>
          {getLearningMethodFromId(move.learning_method)}
        </td>
        <td css={{ textAlign: "center", border: "solid 1px #E31010" }}>
          {move.level_learned}
        </td>
      </tr>
    ))

  const learntByLevel = data.movesByPokemonAndVersion.filter(
    (move) => move.learning_method === MOVE_LEARNING_METHOD.LEVEL
  )
  const learntByLevelTable = getTable(learntByLevel)

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

  const handleClick = () => {
    setVersionGroup(VERSIONS_GROUPS["RED-BLUE"])
    refetch()
  }

  const table = getTable(data.movesByPokemonAndVersion)

  function a11yProps(index: any) {
    return {
      id: `scrollable-auto-tab-${index}`,
      "aria-controls": `scrollable-auto-tabpanel-${index}`,
    }
  }

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  const changeGeneration = (el: number) => {
    let generationId: VERSIONS_GROUPS
    switch (el) {
      case 1:
        generationId = VERSIONS_GROUPS["RED-BLUE"]
        break
      case 2:
        generationId = VERSIONS_GROUPS["GOLD-SILVER"]
        break
      case 3:
        generationId = VERSIONS_GROUPS["RUBY-SAPPHIRE"]
        break
      case 4:
        generationId = VERSIONS_GROUPS["DIAMOND-PEARL"]
        break
      case 5:
        generationId = VERSIONS_GROUPS["BLACK-WHITE"]
        break
      case 6:
        generationId = VERSIONS_GROUPS["X-Y"]
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

  const arrayHeader = (
    <tr css={{ textAlign: "center" }}>
      <th css={{ border: "solid 1px #E31010" }}>Identifier</th>
      <th css={{ border: "solid 1px #E31010" }}>Type</th>
      <th css={{ border: "solid 1px #E31010" }}>Power</th>
      <th css={{ border: "solid 1px #E31010" }}>PP</th>
      <th css={{ border: "solid 1px #E31010" }}>Accuracy</th>
      <th css={{ border: "solid 1px #E31010" }}>Damage Class</th>
      <th css={{ border: "solid 1px #E31010" }}>Method</th>
      <th css={{ border: "solid 1px #E31010" }}>Level</th>
    </tr>
  )

  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setVersion(event.target.value as string)
    setVersionGroup(event.target.value as VERSIONS_GROUPS)
    refetch()
  }

  const versionsInGeneration: VERSIONS_GROUPS[][] = [
    [
      VERSIONS_GROUPS["RED-BLUE"],
      VERSIONS_GROUPS.YELLOW,
      VERSIONS_GROUPS["FIRERED-LEAFGREEN"],
    ],
    [VERSIONS_GROUPS["GOLD-SILVER"], VERSIONS_GROUPS.CRYSTAL],
    [VERSIONS_GROUPS["RUBY-SAPPHIRE"], VERSIONS_GROUPS.EMERALD],
    [
      VERSIONS_GROUPS["DIAMOND-PEARL"],
      VERSIONS_GROUPS.PLATINUM,
      VERSIONS_GROUPS["HEARTGOLD-SOULSILVER"],
    ],
    [VERSIONS_GROUPS["BLACK-WHITE"], VERSIONS_GROUPS["BLACK2-WHITE2"]],
    [VERSIONS_GROUPS["X-Y"], VERSIONS_GROUPS["OMEGARUBY-ALPHASAPPHIRE"]],
    [VERSIONS_GROUPS["SUN-MOON"], VERSIONS_GROUPS["ULTRASUN-ULTRAMOON"]],
  ]

  return (
    <div css={{ width: "100%", padding: "0 5%" }}>
      <h2>Moves Learnt in version {getVersionGroupFromId(versionGroup)}</h2>

      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {[...Array(8).keys()].slice(1).map((el) => (
          <Tab
            key={el}
            label={`Generation ${el}`}
            onClick={() => changeGeneration(el)}
            {...a11yProps(el)}
          />
        ))}
      </Tabs>

      {[...Array(8).keys()].slice(1).map((el) => (
        <TabPanel value={value} index={el - 1}>
          Item {el}
          Index
          <FormControl css={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Version</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={"Select game version..."}
              onChange={handleChangeSelect}
            >
              {versionsInGeneration[el - 1].map((el) => (
                <MenuItem value={el}>{getVersionGroupFromId(el)}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <p>{version}</p>
          <h3>Learnt by leveling</h3>
          <table css={{ borderCollapse: "collapse" }}>
            <thead>{arrayHeader}</thead>
            <tbody>{learntByLevelTable}</tbody>
          </table>
          <h3>Learnt by Machine</h3>
          <table css={{ borderCollapse: "collapse" }}>
            <thead>{arrayHeader}</thead>
            <tbody>{learntByMachineTable}</tbody>
          </table>
          {learntByEggTable.length > 0 && (
            <React.Fragment>
              <h3>Egg Moves</h3>
              <table css={{ borderCollapse: "collapse" }}>
                <thead>{arrayHeader}</thead>
                <tbody>{learntByEggTable}</tbody>
              </table>
            </React.Fragment>
          )}
          {learntByTutorTable.length > 0 && (
            <React.Fragment>
              <h3>Learnt from Tutor</h3>
              <table css={{ borderCollapse: "collapse" }}>
                <thead>{arrayHeader}</thead>
                <tbody>{learntByTutorTable}</tbody>
              </table>
            </React.Fragment>
          )}
          {learntByLightBallTable.length > 0 && (
            <React.Fragment>
              <h3>Learnt from Light Ball Egg</h3>
              <table css={{ borderCollapse: "collapse" }}>
                <thead>{arrayHeader}</thead>
                <tbody>{learntByLightBallTable}</tbody>
              </table>
            </React.Fragment>
          )}
          {learntByFormChangeTable.length > 0 && (
            <React.Fragment>
              <h3>Learnt after changing form:</h3>
              <table css={{ borderCollapse: "collapse" }}>
                <thead>{arrayHeader}</thead>
                <tbody>{learntByFormChangeTable}</tbody>
              </table>
            </React.Fragment>
          )}
        </TabPanel>
      ))}
    </div>
  )
}

export default PokemonMoves
