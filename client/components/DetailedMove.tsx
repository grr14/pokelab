/** @jsx jsx */
import { jsx } from "@emotion/core"
import { MOVE_LEARNING_METHOD, VERSIONS_GROUPS } from "../common/constants"

import { OuterContainer, InnerContainer } from "./Containers"

import {
  moveById as Move,
  moveByIdVariables as MoveVariable,
} from "../graphql/queries/__generated__/moveById"

import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import {
  capitalizeSentence,
  getDamageClassFromId,
  getTypeFromId,
  getVersionGroupFromId,
} from "../common/utils"
import ReducedPokemonGrid from "./ReducedPokemonGrid"
import { Table, Td, Th, Tr } from "./Table"
import { TypeDisplay, VersionGroupNameDisplay } from "./StyledDisplay"

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
    }
  }
`

import {
  pokemonsByMoveAndVersionGroup,
  pokemonsByMoveAndVersionGroupVariables,
} from "../graphql/queries/__generated__/pokemonsByMoveAndVersionGroup"
import CardLoading from "./CardLoading"
import Card from "@material-ui/core/Card"
import { PartialPokemonGrid } from "./Grid"

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

interface PokemonByMovesProps {
  id: number
}

const PokemonByMoveSection: React.FC<PokemonByMovesProps> = ({ id }) => {
  const { data, loading, error } = useQuery<
    pokemonsByMoveAndVersionGroup,
    pokemonsByMoveAndVersionGroupVariables
  >(GET_POKEMONS, {
    variables: {
      moveId: id,
      versionGroupId: VERSIONS_GROUPS["ULTRASUN-ULTRAMOON"],
    },
  })

  if (error) {
    return <p>Cannot retrieve Pokemon</p>
  }
  if (loading) {
    return (
      <div>
        <h3>Loading...</h3>
        <PartialPokemonGrid
          css={{
            marginTop: "15px",
          }}
        >
          {[...Array(10).fill(0)].map((el, idx) => (
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

  return (
    <div>
      {byLevel?.length > 0 && (
        <div>
          <h3>By level</h3>
          <ReducedPokemonGrid pokemons={byLevel} additionalInfos={"level"} />
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
    return null
  }
  if (loading) {
    return null
  }

  const move = data.moveById

  const moveSummary = (
    <Table>
      <Tr>
        <Th>Name</Th>
        <Td>{capitalizeSentence(move.identifier)}</Td>
      </Tr>
      <Tr>
        <Th>Type</Th>
        <Td>
          <TypeDisplay size="medium" type={move.type_id}>
            {getTypeFromId(move.type_id)}
          </TypeDisplay>
        </Td>
      </Tr>
      <Tr>
        <Th>PP</Th>
        <Td>{move.pp}</Td>
      </Tr>
      <Tr>
        <Th>Power</Th>
        <Td>{move.power !== null ? move.power : "-"}</Td>
      </Tr>
      <Tr>
        <Th>Accuracy</Th>
        <Td>{move.accuracy !== null ? move.accuracy : "-"}</Td>
      </Tr>
      <Tr>
        <Th>Category</Th>
        <Td>{getDamageClassFromId(move.damage_class_id)}</Td>
      </Tr>
      <Tr>
        <Th>Generation</Th>
        <Td>{move.generation_id}</Td>
      </Tr>
    </Table>
  )

  const flavorTextTable = (
    <Table>
      {move.flavor_textes.map((el, idx) => {
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
    </Table>
  )

  return (
    <OuterContainer>
      <InnerContainer>
        <div>
          <h2>Move Summary</h2>
          {moveSummary}
        </div>
        <div>
          <h2>Flavor Text</h2>
          {flavorTextTable}
        </div>
        <div>
          <PokemonByMoveSection id={moveId} />
        </div>
      </InnerContainer>
    </OuterContainer>
  )
}

export default DetailedMove
