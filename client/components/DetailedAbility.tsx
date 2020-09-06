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

import Link from "next/link"

import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import { capitalizeFirstLetter } from "../common/utils"
import { ListItem, List } from "@material-ui/core"
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

  const getVersionsFromId = (id: number) => {
    switch (id) {
      case 5:
        return "Ruby - Sapphire"
      case 6:
        return "Emerald"
      case 7:
        return "FireRed - LeafGreen"
      case 8:
        return "Diamond - Pearl"
      case 9:
        return " Platinum"
      case 10:
        return "HeartGold - SoulSilver"
      case 11:
        return "Black - White"
      case 14:
        return "Black2 - White2"
      case 15:
        return "X - Y"
      case 16:
        return "OmegaRuby - AlphaSapphire"
      case 17:
        return "Sun - Moon"
      case 18:
        return "UltraSun - UltraMoon"
    }
  }

  const flavorTextesByVersion = abilityData.abilityById.flavor_textes.map(
    (el) => {
      return (
        <tr
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
            {getVersionsFromId(el.version_group)}
          </th>
          <td css={{ padding: "10px" }}>{el.text}</td>
        </tr>
      )
    }
  )

  // creer un tableau pour associer appearIn <=> version
  // determine the version with the appearIn de data[0]
  // tableau avec toutes les versions depuis appearIn de data[0]

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
          <ReducedPokemonGrid pokemons={pokemonsData.pokemonsByAbilityId} />
        </div>
      </InnerContainer>
    </OuterContainer>
  )
}

export default DetailedAbility
