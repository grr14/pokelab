/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { useState, useCallback } from "react"

import {
  AFFECTED_BY_TARGET,
  MOVE_LEARNING_METHOD,
  mq,
  NB_GENERATIONS,
  VERSIONS_GROUPS,
} from "../common/constants"

import { Tabs, TabPanel } from "./Tabs"
import { PartialPokemonGrid } from "./Grid"
import CardLoading from "./CardLoading"
import ReducedPokemonGrid from "./ReducedPokemonGrid"
import { Table, Td, Th, Tr } from "./Table"
import { TypeDisplay, VersionGroupNameDisplay } from "./StyledDisplay"
import { OuterContainer, InnerContainer } from "./Containers"
import Error from "../pages/_error"

import {
  capitalizeSentence,
  getDamageClassFromId,
  getTypeFromId,
  getVersionGroupFromId,
  targetProse,
} from "../common/utils"

import Card from "@material-ui/core/Card"
import Tab from "@material-ui/core/Tab"
import Skeleton from "@material-ui/lab/Skeleton"

import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import {
  moveById as Move,
  moveByIdVariables as MoveVariable,
} from "../graphql/queries/__generated__/moveById"

import {
  pokemonsByMoveAndVersionGroup,
  pokemonsByMoveAndVersionGroupVariables,
} from "../graphql/queries/__generated__/pokemonsByMoveAndVersionGroup"
import { useTheme } from "emotion-theming"
import { Theme } from "../common/types"
import ScrollToTop from "./ScrollToTop"

const GET_MOVE = gql`
  query moveById($id: Int) {
    moveById(id: $id) {
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
      flavor_textes {
        text
        version_group
      }
      detailed_effect {
        text
      }
    }
  }
`

const GET_POKEMONS = gql`
  query pokemonsByMoveAndVersionGroup($moveId: Int, $versionGroupId: Int) {
    pokemonsByMoveAndVersionGroup(
      moveId: $moveId
      versionGroupId: $versionGroupId
    ) {
      id
      identifier
      type_1
      type_2
      picture
      moves {
        learning_method
        level_learned
      }
    }
  }
`

interface MoveTargetProps {
  id: number
}

const MoveTarget: React.FC<MoveTargetProps> = ({ id }) => {
  const theme = useTheme<Theme>()

  const basicCellCSS = (theme: Theme) => ({
    border: "solid 1px black",
    display: "flex",
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
    borderRadius: "5px",
    backgroundColor: theme.card.background,
    boxShadow: `2px 2px 2px 0px ${theme.boxShadow.color}`,
  })

  return (
    <React.Fragment>
      <h2 css={{ width: "100%" }}>Move Targets</h2>
      <p>{targetProse(id)}</p>
      <div
        css={{
          display: "grid",
          gridTemplateRows: "50px 50px",
          gridTemplateColumns: "80px 80px 80px",
          gridRowGap: "5px",
          gridColumnGap: "5px",
        }}
      >
        {["Foe", "Foe", "Foe", "User", "Ally", "Ally"].map((el, idx) => (
          <div
            key={idx}
            css={{
              ...basicCellCSS(theme),
              ...(AFFECTED_BY_TARGET[id - 1][idx] && {
                backgroundColor: "#E31010",
                color: "white",
              }),
            }}
          >
            {el}
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

interface PokemonByMovesProps {
  id: number
  generation: number
}

const PokemonByMoveSection: React.FC<PokemonByMovesProps> = ({
  id,
  generation,
}) => {
  const [versionGroup, setVersionGroup] = useState<VERSIONS_GROUPS>(
    VERSIONS_GROUPS["ULTRASUN-ULTRAMOON"]
  )
  const { data, loading, error, refetch: _refetch } = useQuery<
    pokemonsByMoveAndVersionGroup,
    pokemonsByMoveAndVersionGroupVariables
  >(GET_POKEMONS, {
    variables: {
      moveId: id,
      versionGroupId: versionGroup,
    },
  })
  const refetch = useCallback(() => {
    setTimeout(() => _refetch(), 0)
  }, [_refetch])

  const allGenerations = [...Array(NB_GENERATIONS).keys()]
  allGenerations.splice(0, generation - 1)

  /* we always display the most recent version tab first */
  const [tabNumber, setTabNumber] = React.useState(allGenerations.length - 1)
  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabNumber(newValue)
  }
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

  if (error) {
    return <p>Cannot retrieve Pokemon</p>
  }
  if (loading) {
    return (
      <div
        css={{
          marginTop: "20px",
          width: "100%",
          padding: "0 5%",
        }}
      >
        <Tabs value={tabNumber} onChange={handleTabChange}>
          {allGenerations.map((el) => (
            <Tab key={el} label={`Generation ${el + 1}`} />
          ))}
        </Tabs>

        <TabPanel value={0} index={0}>
          <h3>Loading...</h3>
          <PartialPokemonGrid
            css={{
              marginTop: "15px",
            }}
          >
            {[...Array(15).fill(0)].map((_, idx) => (
              <Card
                key={idx}
                css={(theme) => ({
                  height: "100px",
                  width: "200px",
                  display: "flex",
                  backgroundColor: `${theme.card.background} !important`,
                })}
              >
                <CardLoading />
              </Card>
            ))}
          </PartialPokemonGrid>
        </TabPanel>
      </div>
    )
  }

  const getPokemonsByLearningMethod = (method: MOVE_LEARNING_METHOD) =>
    data?.pokemonsByMoveAndVersionGroup
      .map((pokemon) => {
        let moves = pokemon.moves.map((move) => move.learning_method)
        if (moves.includes(method)) {
          return pokemon
        }
        return null
      })
      .filter((el) => el != null)

  const byLevel = getPokemonsByLearningMethod(MOVE_LEARNING_METHOD.LEVEL)
  const byEgg = getPokemonsByLearningMethod(MOVE_LEARNING_METHOD.EGG)
  const byMachine = getPokemonsByLearningMethod(MOVE_LEARNING_METHOD.MACHINE)
  const byTutor = getPokemonsByLearningMethod(MOVE_LEARNING_METHOD.TUTOR)

  /* The moveset never change between different games of the same version group */
  /* Thus there is no need for a Select like in pokemon detailed Moveset */

  return (
    <div
      css={{
        marginTop: "20px",
        width: "100%",
        padding: "0 5%",
      }}
    >
      <div
        css={{
          [mq[0]]: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
          },
          [mq[1]]: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
          },
        }}
      >
        <span>
          By Leveling: <b>{byLevel?.length || 0}</b>
        </span>
        <span>
          By Machine: <b>{byMachine?.length || 0}</b>
        </span>
        <span>
          By Egg: <b>{byEgg?.length || 0}</b>
        </span>
        <span>
          By Tutor: <b>{byTutor?.length || 0}</b>
        </span>
      </div>

      <div css={{ marginTop: "15px" }}>
        <Tabs value={tabNumber} onChange={handleTabChange}>
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
            {!byLevel?.length &&
            !byEgg?.length &&
            !byMachine?.length &&
            !byTutor?.length ? (
              <div>
                <p>No Pokemons found.</p>
              </div>
            ) : (
              <div>
                {byLevel?.length > 0 && (
                  <div>
                    <h3 css={{ marginTop: 0 }}>By level</h3>
                    <ReducedPokemonGrid
                      pokemons={byLevel}
                      additionalInfos={"level"}
                    />
                  </div>
                )}
                {byEgg?.length > 0 && (
                  <div>
                    <h3>By Egg</h3>
                    <ReducedPokemonGrid pokemons={byEgg} />
                  </div>
                )}
                {byMachine?.length > 0 && (
                  <div>
                    <h3>By Machine</h3>
                    <ReducedPokemonGrid pokemons={byMachine} />
                  </div>
                )}
                {byTutor?.length > 0 && (
                  <div>
                    <h3>By Tutor</h3>
                    <ReducedPokemonGrid pokemons={byTutor} />
                  </div>
                )}
              </div>
            )}
          </TabPanel>
        ))}
      </div>
    </div>
  )
}

interface Props {
  moveId: number
}

const DetailedMove: React.FC<Props> = ({ moveId }) => {
  const { data, error, loading } = useQuery<Move, MoveVariable>(GET_MOVE, {
    variables: {
      id: moveId,
    },
  })

  if (error) {
    return <Error statusCode={404} />
  }
  if (loading) {
    const skeleton = (
      <Skeleton
        variant="text"
        css={(theme) => ({
          backgroundColor: theme.card.background,
        })}
      />
    )

    const moveSummary = (
      <Table>
        <tbody>
          {[
            "Name",
            "Type",
            "PP",
            "Power",
            "Accuracy",
            "Category",
            "Generation",
          ].map((el) => (
            <Tr key={el}>
              <Th>{el}</Th>
              <Td css={{ height: "35px", width: "100px" }}>{skeleton}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    )

    const flavorTextTable = (
      <Table>
        <tbody>
          {[...Array(18).keys()].map((el, idx) => {
            if (el === 11 || el === 12) {
              return
            }
            return (
              <Tr key={idx}>
                <Th>
                  <VersionGroupNameDisplay version_group={el + 1}>
                    {getVersionGroupFromId(el + 1)}
                  </VersionGroupNameDisplay>
                </Th>
                <Td css={{ height: "35px", width: "300px" }}>{skeleton}</Td>
              </Tr>
            )
          })}
        </tbody>
      </Table>
    )

    return (
      <OuterContainer>
        <InnerContainer>
          <div css={{ width: "100%" }}>
            <h2>Move Summary</h2>
            {moveSummary}
          </div>
          <div css={{ width: "100%" }}>
            <h2>Flavor Textes</h2>
            {flavorTextTable}
          </div>
        </InnerContainer>
      </OuterContainer>
    )
  }

  const move = data?.moveById

  const moveSummary = (
    <Table>
      <tbody>
        <Tr>
          <Th>Name</Th>
          <Td>{capitalizeSentence(move?.identifier)}</Td>
        </Tr>
        <Tr>
          <Th>Type</Th>
          <Td>
            <TypeDisplay size="medium" type={move?.type_id}>
              {getTypeFromId(move?.type_id)}
            </TypeDisplay>
          </Td>
        </Tr>
        <Tr>
          <Th>PP</Th>
          <Td>{move?.pp}</Td>
        </Tr>
        <Tr>
          <Th>Power</Th>
          <Td>{move?.power !== null ? move?.power : "-"}</Td>
        </Tr>
        <Tr>
          <Th>Accuracy</Th>
          <Td>{move?.accuracy !== null ? move?.accuracy : "-"}</Td>
        </Tr>
        <Tr>
          <Th>Category</Th>
          <Td>
            <div
              css={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <img
                css={{ marginRight: "10px" }}
                src={`/images/category/${move?.damage_class_id}.png`}
                alt="damage class"
              />
              <span>{getDamageClassFromId(move?.damage_class_id)}</span>
            </div>
          </Td>
        </Tr>
        <Tr>
          <Th>Generation</Th>
          <Td>{move?.generation_id}</Td>
        </Tr>
      </tbody>
    </Table>
  )

  const flavorTextTable = (
    <Table>
      <tbody>
        {move?.flavor_textes.map((el, idx) => {
          return (
            <Tr key={idx}>
              <Th>
                <VersionGroupNameDisplay version_group={el.version_group}>
                  {getVersionGroupFromId(el.version_group)}
                </VersionGroupNameDisplay>
              </Th>
              <Td align="left">{el.text}</Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )

  return (
    <OuterContainer>
      <InnerContainer>
        <h1>Move: {capitalizeSentence(move?.identifier)}</h1>
        <div
          css={{
            width: "100%",
            display: "flex",
            [mq[0]]: {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            },
            [mq[2]]: {
              flexDirection: "row",
              justifyContent: "left",
              alignItems: "flex-start",
            },
          }}
        >
          <div css={{ marginRight: "5%" }}>
            <h2>Move Summary</h2>
            {moveSummary}
          </div>
          <div
            css={{
              [mq[0]]: {
                width: "100%",
              },
              [mq[2]]: {
                flex: 1,
              },
            }}
          >
            <h2>Detailed Infos</h2>
            <div
              css={(theme) => ({
                "& a": {
                  color: "#E31010",
                  fontWeight: "bold",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                },
                "& table": {
                  borderCollapse: "collapse",
                },
                "& th": {
                  backgroundColor: theme.table.th.background,
                  padding: "7px",
                },
                "& tr": {
                  textAlign: "center",
                  borderBottom: "solid 1px #e31010",
                  "&:last-of-type": {
                    border: "none",
                  },
                  "&:hover": {
                    backgroundColor: theme.table.tr.backgroundHover,
                  },
                },
                "& td": {
                  borderRight: "solid 1px #e31010",
                  textAlign: "center",
                  padding: "2px 5px",
                  "&:last-of-type": {
                    border: "none",
                  },
                },
              })}
              dangerouslySetInnerHTML={{
                __html: move?.detailed_effect?.text
                  ?.replace("${effect_chance}", String(move?.effect_chance))
                  .replace("${(100 - accuracy)}", String(100 - move?.accuracy)),
              }}
            />
          </div>
        </div>

        <div
          css={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            [mq[0]]: { flexDirection: "column" },
            [mq[6]]: {
              flexDirection: "row",
              alignItems: "flex-start",
            },
          }}
        >
          <div
            css={{
              [mq[6]]: {
                marginRight: "30px",
              },
            }}
          >
            <h2 css={{ width: "100%" }}>Flavor Text</h2>
            {flavorTextTable}
          </div>

          <div
            css={{
              flex: 1,
              marginTop: "10px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              [mq[0]]: {
                justifyContent: "center",
                alignItems: "center",
              },
              [mq[6]]: {
                alignItems: "flex-start",
              },
            }}
          >
            <MoveTarget id={move?.target_id} />
          </div>
        </div>

        <div css={{ marginTop: "10px", width: "100%" }}>
          <h2>Pokemons that learn {capitalizeSentence(move?.identifier)}:</h2>
          <PokemonByMoveSection id={moveId} generation={move?.generation_id} />
        </div>
        <ScrollToTop visibleAtYOffset={600} />
      </InnerContainer>
    </OuterContainer>
  )
}

export default DetailedMove
