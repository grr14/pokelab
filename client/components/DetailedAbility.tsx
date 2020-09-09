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
import { useQuery } from "@apollo/react-hooks"
import { capitalizeFirstLetter, getVersionGroupFromId } from "../common/utils"
import ReducedPokemonGrid from "./ReducedPokemonGrid"

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

  if (abilityError || pokemonsLoading) {
    return <Error statusCode={404} />
  }
  if (abilityLoading || pokemonsError) {
    return (
      <OuterContainer>
        <InnerContainer>
          <div>Loading...</div>
        </InnerContainer>
      </OuterContainer>
    )
  }

  const flavorTextesByVersion = abilityData.abilityById.flavor_textes.map(
    (el, idx) => (
      <tr
        key={idx}
        css={{
          "&:not(:last-of-type)": { borderBottom: "solid 1px #E31010" },
        }}
      >
        <th
          scope="row"
          css={{
            borderRight: "solid 1px #E31010",
            padding: "5px 15px 5px 5px",
          }}
        >
          {getVersionGroupFromId(el.version_group)}
        </th>
        <td css={{ padding: "10px" }}>{el.text}</td>
      </tr>
    )
  )

  const abilities = pokemonsData.pokemonsByAbilityId.map((p) => p.abilities)
  const numberOfHidden = abilities.filter((el) => el[0].is_hidden === 1).length

  return (
    <OuterContainer>
      <InnerContainer>
        <h1>
          Ability: {capitalizeFirstLetter(abilityData.abilityById.identifier)}
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
            <table
              css={{ borderCollapse: "collapse", borderSpacing: "10px 0" }}
            >
              <tbody>{flavorTextesByVersion}</tbody>
            </table>
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
              Total number: <b>{pokemonsData.pokemonsByAbilityId.length}</b>
            </span>
            <span>
              As a hidden Ability: <b>{numberOfHidden}</b>
            </span>
          </div>
          <ReducedPokemonGrid pokemons={pokemonsData.pokemonsByAbilityId} />
        </div>
      </InnerContainer>
    </OuterContainer>
  )
}

export default DetailedAbility
