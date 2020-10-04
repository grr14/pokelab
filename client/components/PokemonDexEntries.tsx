/** @jsx jsx */
import { jsx } from "@emotion/core"

import {
  getPokemonPokedexEntries,
  getPokemonPokedexEntriesVariables,
} from "../graphql/queries/__generated__/getPokemonPokedexEntries"

import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import React from "react"

import { getGameVersionFromId } from "../common/utils"
import { Table, Td, Th, Tr } from "./Table"
import { VersionNameDisplay } from "./StyledDisplay"

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
    <Tr key={idx}>
      <Th scope="row">
        <VersionNameDisplay version={entry.version_group}>
          {getGameVersionFromId(entry.version_group)}
        </VersionNameDisplay>
      </Th>
      <Td align="left">{entry.text}</Td>
    </Tr>
  ))

  return (
    <div id="dexentries" css={{ width: "100%" }}>
      <h2 css={{ paddingLeft: "5%" }}>Pokedex Entries</h2>
      <div css={{ width: "100%", padding: "0 3% 0 5%" }}>
        <Table>
          <tbody>{dexEntryByVersion}</tbody>
        </Table>
      </div>
    </div>
  )
}

export default PokemonDexEntries
