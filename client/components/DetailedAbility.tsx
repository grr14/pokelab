/** @jsx jsx */
import { jsx } from "@emotion/core"
import { mq } from "../common/constants"

import { OuterContainer, InnerContainer } from "./Containers"

import Error from "../pages/_error"

import {
  abilityById,
  abilityByIdVariables,
} from "../graphql/queries/__generated__/abilityById"

import {
  pokemonsByAbilityId,
  pokemonsByAbilityIdVariables,
} from "../graphql/queries/__generated__/pokemonsByAbilityId"

import gql from "graphql-tag"
import { useQuery } from "@apollo/client"
import { capitalizeSentence, getVersionGroupFromId } from "../common/utils"
import ReducedPokemonGrid from "./ReducedPokemonGrid"
import { Table, Td, Th, Tr } from "./Table"
import { VersionGroupNameDisplay, VersionNameDisplay } from "./StyledDisplay"
import ScrollToTop from "./ScrollToTop"

const GET_ABILITY = gql`
  query abilityById($id: Int) {
    abilityById(id: $id) {
      id
      identifier
      effect
      flavor_textes {
        text
        version_group
      }
    }
  }
`

const GET_POKEMONS_BY_ABILITY = gql`
  query pokemonsByAbilityId($id: Int) {
    pokemonsByAbilityId(id: $id) {
      id
      identifier
      type_1
      type_2
      picture
      abilities {
        is_hidden
      }
    }
  }
`

interface Props {
  id: number
}

const DetailedAbility: React.FC<Props> = ({ id }) => {
  const {
    data: abilityData,
    loading: abilityLoading,
    error: abilityError,
  } = useQuery<abilityById, abilityByIdVariables>(GET_ABILITY, {
    variables: { id: id },
  })

  const {
    data: pokemonsData,
    loading: pokemonsLoading,
    error: pokemonsError,
  } = useQuery<pokemonsByAbilityId, pokemonsByAbilityIdVariables>(
    GET_POKEMONS_BY_ABILITY,
    {
      variables: { id: id },
    }
  )

  if (abilityError || pokemonsError) {
    return <Error statusCode={404} />
  }
  if (abilityLoading || pokemonsLoading) {
    return (
      <OuterContainer>
        <InnerContainer>
          <div
            css={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Loading...
          </div>
        </InnerContainer>
      </OuterContainer>
    )
  }

  const flavorTextesByVersion = abilityData?.abilityById?.flavor_textes?.map(
    (el, idx) => (
      <Tr key={idx}>
        <Th scope="row">
          <VersionGroupNameDisplay version_group={el.version_group}>
            {getVersionGroupFromId(el.version_group)}
          </VersionGroupNameDisplay>
        </Th>
        <Td align="left">{el.text}</Td>
      </Tr>
    )
  )

  const pokemonsWithHiddenAbility = pokemonsData?.pokemonsByAbilityId?.filter(
    (pokemon) => pokemon.abilities[0].is_hidden === 1
  )
  const numberOfHidden = pokemonsWithHiddenAbility.length

  const pokemonsNotHiddenAbility = pokemonsData?.pokemonsByAbilityId?.filter(
    (pokemon) => !pokemonsWithHiddenAbility.includes(pokemon)
  )

  return (
    <OuterContainer>
      <InnerContainer>
        <h1>
          Ability: {capitalizeSentence(abilityData?.abilityById?.identifier)}
        </h1>
        <div
          css={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            [mq[0]]: {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            },
            [mq[3]]: {
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            },
          }}
        >
          <div
            css={{
              [mq[0]]: { width: "100%", order: 1 },
              [mq[3]]: { width: "50%", marginRight: "25px", order: "unset" },
            }}
          >
            <h2>Flavor text by Version</h2>
            <Table>
              <tbody>{flavorTextesByVersion}</tbody>
            </Table>
          </div>
          <div
            css={{
              [mq[0]]: { width: "100%" },
              [mq[3]]: { width: "50%" },
            }}
          >
            <h2>Detailed Explaination</h2>
            <p
              css={{ lineHeight: "1.5" }}
              dangerouslySetInnerHTML={{
                __html: abilityData.abilityById.effect,
              }}
            />
          </div>
        </div>

        <div css={{ width: "100%" }}>
          <h2>Pokemon with this ability :</h2>
          <div
            css={{
              width: "100%",
              marginBottom: "15px",
              display: "flex",

              [mq[0]]: {
                flexDirection: "column",
                alignItems: "flex-start",
              },
              [mq[2]]: {
                justifyContent: "space-evenly",
                flexDirection: "row",
                alignItems: "center",
              },
            }}
          >
            <span>
              Total number: <b>{pokemonsData?.pokemonsByAbilityId?.length}</b>
            </span>
            <span>
              As a Hidden Ability: <b>{numberOfHidden}</b>
            </span>
          </div>
          <ReducedPokemonGrid pokemons={pokemonsNotHiddenAbility} />
        </div>
        {pokemonsWithHiddenAbility.length > 0 && (
          <div css={{ width: "100%" }}>
            <h3>As a Hidden Ability:</h3>
            <ReducedPokemonGrid pokemons={pokemonsWithHiddenAbility} />
          </div>
        )}
        <ScrollToTop visibleAtYOffset={400} />
      </InnerContainer>
    </OuterContainer>
  )
}

export default DetailedAbility
