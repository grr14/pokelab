/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"

import {
  getPokemonPokedexEntries,
  getPokemonPokedexEntriesVariables,
} from "../graphql/queries/__generated__/getPokemonPokedexEntries"

import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import React from "react"

import { mq, VERSIONS } from "../common/constants"
import { getGameVersionFromId } from "../common/utils"
import { Theme } from "../common/types"

interface VersionProps {
  version: number
  theme?: Theme
}

const VersionNameDisplay = styled.span<VersionProps>`
  color: ${(props) => {
    switch (props.version) {
      case VERSIONS.RED:
        return props.theme.version.red
      case VERSIONS.BLUE:
        return props.theme.version.blue
      case VERSIONS.YELLOW:
        return props.theme.version.yellow
      case VERSIONS.GOLD:
        return props.theme.version.gold
      case VERSIONS.SILVER:
        return props.theme.version.silver
      case VERSIONS.CRYSTAL:
        return props.theme.version.crystal
      case VERSIONS.RUBY:
        return props.theme.version.ruby
      case VERSIONS.SAPPHIRE:
        return props.theme.version.sapphire
      case VERSIONS.EMERALD:
        return props.theme.version.emerald
      case VERSIONS.FIRERED:
        return props.theme.version.firered
      case VERSIONS.LEAFGREEN:
        return props.theme.version.leafgreen
      case VERSIONS.DIAMOND:
        return props.theme.version.diamond
      case VERSIONS.PEARL:
        return props.theme.version.pearl
      case VERSIONS.PLATINUM:
        return props.theme.version.platinum
      case VERSIONS.HEARTGOLD:
        return props.theme.version.heartgold
      case VERSIONS.SOULSILVER:
        return props.theme.version.soulsilver
      case VERSIONS.BLACK:
        return props.theme.version.black
      case VERSIONS.WHITE:
        return props.theme.version.white
      case VERSIONS.COLOSSEUM:
        return props.theme.version.colosseum
      case VERSIONS.XD:
        return props.theme.version.xd
      case VERSIONS.BLACK2:
        return props.theme.version.black2
      case VERSIONS.WHITE2:
        return props.theme.version.white2
      case VERSIONS.X:
        return props.theme.version.x
      case VERSIONS.Y:
        return props.theme.version.y
      case VERSIONS.OMEGARUBY:
        return props.theme.version.omegaruby
      case VERSIONS.ALPHASAPPHIRE:
        return props.theme.version.alphasapphire
      case VERSIONS.SUN:
        return props.theme.version.sun
      case VERSIONS.MOON:
        return props.theme.version.moon
      case VERSIONS.ULTRASUN:
        return props.theme.version.ultrasun
      case VERSIONS.ULTRAMOON:
        return props.theme.version.ultramoon
    }
  }};
`

const GET_ENTRIES = gql`
  query getPokemonPokedexEntries($id: Int) {
    getPokemonPokedexEntries(id: $id) {
      text
      version_group
    }
  }
`

interface Props {
  id: number
}

const PokemonDexEntries: React.FC<Props> = ({ id }) => {
  const { data, loading, error } = useQuery<
    getPokemonPokedexEntries,
    getPokemonPokedexEntriesVariables
  >(GET_ENTRIES, {
    variables: { id: id },
  })

  if (error) {
    return <p>Error: cannot retrieve pokedex entries.</p>
  }

  if (loading) {
    return <p>Loading ...</p>
  }

  const dexEntryByVersion = data.getPokemonPokedexEntries.map((entry, idx) => (
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
        <VersionNameDisplay version={entry.version_group}>
          {" "}
          {getGameVersionFromId(entry.version_group)}
        </VersionNameDisplay>
      </th>
      <td css={{ padding: "10px" }}>{entry.text}</td>
    </tr>
  ))

  return (
    <div css={{ width: "100%" }}>
      <h2 css={{ paddingLeft: "5%" }}>Pokedex Entries</h2>
      <div css={{ width: "100%", padding: "0 3% 0 5%" }}>
        <table css={{ borderCollapse: "collapse", borderSpacing: "10px 0" }}>
          <tbody>{dexEntryByVersion}</tbody>
        </table>
      </div>
    </div>
  )
}

export default PokemonDexEntries
