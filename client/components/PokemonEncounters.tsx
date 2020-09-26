/** @jsx jsx */
import { jsx } from "@emotion/core"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import {
  encountersByPokemon as Encounters,
  encountersByPokemonVariables as EncountersVariables,
} from "../graphql/queries/__generated__/encountersByPokemon"
import { VersionNameDisplay } from "./StyledDisplay"
import { Tr, Th, Td, Table } from "./Table"
import {
  capitalizeSentence,
  countOccurrences,
  formatLocationName,
  getEncounterMethod,
  getGameVersionFromId,
} from "../common/utils"
import { ENCOUNTER_METHOD, VERSIONS } from "../common/constants"
import Link from "next/link"
import { version } from "os"

interface Props {
  id: number
}

const GET_LOCATION = gql`
  query EncountersByPokemon($pokemonId: Int) {
    encountersByPokemon(pokemonId: $pokemonId) {
      id
      version
      location {
        id
        region
        identifier
      }
      method
      level_min
      level_max
      rarity
    }
  }
`

const PokemonEncounters: React.FC<Props> = ({ id }) => {
  const { data, error, loading } = useQuery<Encounters, EncountersVariables>(
    GET_LOCATION,
    {
      variables: {
        pokemonId: id,
      },
    }
  )

  if (error) {
    return <p>Error retrieving Locations</p>
  }

  if (loading) {
    return <p>Loading....</p>
  }

  const encounters = data?.encountersByPokemon

  const versions = encounters?.map((el) => el.version)
  const versionsOccurences = countOccurrences(versions)

  const methods = encounters?.map((el) => el.method)
  const methodsOccurences = countOccurrences(methods)
  const onlyGifts =
    Object.keys(methodsOccurences).length === 1 &&
    (methodsOccurences.hasOwnProperty(ENCOUNTER_METHOD.GIFT) ||
      methodsOccurences.hasOwnProperty(ENCOUNTER_METHOD.GIFT_EGG))
      ? true
      : false

  let rowSpanCounter = 0

  return (
    <div css={{ width: "100%", padding: "0 5%" }}>
      <h2 css={{ width: "100%" }}>Encounters</h2>
      {encounters && encounters.length > 0 ? (
        <div css={{ overflowX: "auto" }}>
          <Table>
            <thead>
              <Tr>
                <Th>Version</Th>
                <Th>Location</Th>
                <Th>Method</Th>
                <Th>Level</Th>
                {!onlyGifts && <Th>Rarity</Th>}
              </Tr>
            </thead>
            <tbody>
              {encounters.map((enc, idx) => {
                let addTh = false
                const rowSpan = versionsOccurences[enc.version]

                if (rowSpanCounter < rowSpan) {
                  if (rowSpanCounter === 0) {
                    addTh = true
                  }
                  rowSpanCounter++
                }

                if (rowSpanCounter === rowSpan) {
                  rowSpanCounter = 0
                }

                return (
                  <Tr key={idx}>
                    {addTh && (
                      <Th
                        css={{ borderRight: "none" }}
                        scope="rowgroup"
                        rowSpan={rowSpan}
                      >
                        <VersionNameDisplay version={enc.version as VERSIONS}>
                          {getGameVersionFromId(enc.version)}
                        </VersionNameDisplay>
                      </Th>
                    )}
                    <Td multiple={true}>
                      <Link
                        href={`/location/[pid]`}
                        as={`/location/${enc.location.id}`}
                      >
                        <a>
                          {capitalizeSentence(
                            formatLocationName(enc.location.identifier)
                          )}
                        </a>
                      </Link>
                    </Td>
                    <Td multiple={true}>{getEncounterMethod(enc.method)}</Td>
                    <Td multiple={true} css={{ whiteSpace: "nowrap" }}>
                      {enc.level_min === enc.level_max ? (
                        <span>{enc.level_min}</span>
                      ) : (
                        <span>
                          {enc.level_min} - {enc.level_max}
                        </span>
                      )}
                    </Td>
                    {!onlyGifts && (
                      <Td multiple={true}>
                        {(() => {
                          if (
                            enc.method === ENCOUNTER_METHOD.GIFT ||
                            enc.method === ENCOUNTER_METHOD.GIFT_EGG
                          ) {
                            return <span>-</span>
                          } else if (enc.rarity > 100) {
                            return <span>100%</span>
                          }
                          return <span>{enc.rarity}%</span>
                        })()}
                      </Td>
                    )}
                  </Tr>
                )
              })}
            </tbody>
          </Table>
        </div>
      ) : (
        <div>
          {id > 712 /* Datas in db stop at pokemon #712 */ ? (
            <p>Data not available</p>
          ) : (
            <p>No locations found.</p>
          )}
        </div>
      )}
    </div>
  )
}

export default PokemonEncounters
