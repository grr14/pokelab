/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { useState, useCallback } from "react"
import Link from "next/link"

import { VersionNameDisplay } from "./StyledDisplay"
import { Tr, Th, Td, Table } from "./Table"
import { Tabs, TabPanel } from "./TabPanel"
import SelectInput from "./SelectInput"

import {
  capitalizeSentence,
  countOccurrences,
  formatLocationName,
  getEncounterMethod,
  getGameVersionFromId,
  getGenerationFromId,
} from "../common/utils"

import {
  ENCOUNTER_METHOD,
  NB_GENERATIONS,
  VERSIONS,
  VERSIONS_IN_GENERATIONS,
} from "../common/constants"

import { Tab } from "@material-ui/core"

import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import {
  EncountersByPokemonAndVersion as Encounters,
  EncountersByPokemonAndVersionVariables as EncountersVariables,
} from "../graphql/queries/__generated__/EncountersByPokemonAndVersion"

interface Props {
  id: number
}

const GET_LOCATION = gql`
  query EncountersByPokemonAndVersion($pokemonId: Int, $versionId: Int) {
    encountersByPokemonAndVersion(
      pokemonId: $pokemonId
      versionId: $versionId
    ) {
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
  const pokemonGeneration = getGenerationFromId(id)
  const [version, setVersion] = useState<VERSIONS>(
    VERSIONS_IN_GENERATIONS[pokemonGeneration - 1][0]
  )

  const allGenerations = [...Array(NB_GENERATIONS).keys()]
  const rest = allGenerations.splice(0, pokemonGeneration - 1)
  const restLength = rest.length
  const [tabNumber, setTabNumber] = useState(0)
  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setVersion(event.target.value as VERSIONS)
    refetch()
  }
  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabNumber(newValue)
  }

  const { data, error, loading, refetch: _refetch } = useQuery<
    Encounters,
    EncountersVariables
  >(GET_LOCATION, {
    variables: {
      pokemonId: id,
      versionId: version,
    },
  })
  const refetch = useCallback(() => {
    setTimeout(() => _refetch(), 0)
  }, [_refetch])

  if (error) {
    return <p>Error retrieving Locations</p>
  }

  if (loading) {
    return (
      <div css={{ width: "100%", padding: "0 5%" }}>
        <h2 css={{ width: "100%" }}>Encounters</h2>
        <Tabs value={tabNumber} onChange={handleTabChange}>
          {allGenerations.map((el) => (
            <Tab key={el} label={`Generation ${el + 1}`} />
          ))}
        </Tabs>

        <TabPanel index={0} value={0}>
          <div
            css={{
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span css={{ fontSize: "2em" }}>Loading...</span>
          </div>
        </TabPanel>
      </div>
    )
  }

  const changeGeneration = (el: number) => {
    let versionId: number
    switch (el) {
      case 1:
        versionId = VERSIONS["RED"]
        break
      case 2:
        versionId = VERSIONS["GOLD"]
        break
      case 3:
        versionId = VERSIONS["RUBY"]
        break
      case 4:
        versionId = VERSIONS["DIAMOND"]
        break
      case 5:
        versionId = VERSIONS["BLACK"]
        break
      case 6:
        versionId = VERSIONS["X"]
        break
      case 7:
        versionId = VERSIONS["SUN"]
        break
      default:
        versionId = 0
    }

    setVersion(versionId)
    refetch()
  }

  const encounters = data?.encountersByPokemonAndVersion

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
          <SelectInput
            value={version}
            menuChoices={VERSIONS_IN_GENERATIONS[el + restLength]}
            onChange={handleChangeSelect}
            label="Versions"
            menuChoicesDisplay={getGameVersionFromId}
          />

          {encounters && encounters.length > 0 ? (
            <div css={{ overflowX: "auto", marginTop: "15px" }}>
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
                          <Th scope="rowgroup" rowSpan={rowSpan}>
                            <VersionNameDisplay
                              version={enc.version as VERSIONS}
                            >
                              {getGameVersionFromId(enc.version)}
                            </VersionNameDisplay>
                          </Th>
                        )}
                        <Td multiple={true}>
                          <Link
                            href={{
                              pathname: `/location/[pid]`,
                              query: { gameVersion: enc.version },
                            }}
                            as={{
                              pathname: `/location/${enc.location.id}`,
                              query: { gameVersion: enc.version },
                            }}
                          >
                            <a>
                              {capitalizeSentence(
                                formatLocationName(enc.location.identifier)
                              )}
                            </a>
                          </Link>
                        </Td>
                        <Td multiple={true}>
                          {getEncounterMethod(enc.method)}
                        </Td>
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
            <div css={{ marginTop: "15px" }}>
              {id > 712 /* Datas in db stop at pokemon #712 */ ? (
                <p>Data not available</p>
              ) : (
                <p>No locations found.</p>
              )}
            </div>
          )}
        </TabPanel>
      ))}
    </div>
  )
}

export default PokemonEncounters
