/** @jsx jsx */
import { jsx } from "@emotion/core"

import React, { useState, useCallback } from "react"

import Error from "../pages/_error"

import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import {
  getEncountersByLocationAndVersion as Encounters,
  getEncountersByLocationAndVersionVariables as EncountersVariables,
} from "../graphql/queries/__generated__/getEncountersByLocationAndVersion"

import { InnerContainer, OuterContainer } from "./Containers"
import { Tabs, TabPanel } from "./Tabs"
import SelectInput from "./SelectInput"
import ReducedPokemonGrid from "./ReducedPokemonGrid"

import {
  ENCOUNTER_METHOD,
  locations,
  NB_GENERATIONS,
  VERSIONS,
  VERSIONS_IN_GENERATIONS,
} from "../common/constants"
import { ReducedPokemon, ReducedEncounter } from "../common/types"
import {
  arrayIsEmpty,
  capitalizeSentence,
  formatLocationNameWithRegion,
  getEncounterMethod,
  getGameVersionFromId,
  getGenerationFromLocationId,
} from "../common/utils"

import { Tab } from "@material-ui/core"

const GET_ENCOUNTERS = gql`
  query getEncountersByLocationAndVersion($locationId: Int, $versionId: Int) {
    encountersByLocationAndVersion(
      locationId: $locationId
      versionId: $versionId
    ) {
      id
      version
      location {
        id
        identifier
        region
        location_area {
          id
          identifier
        }
      }
      method
      level_min
      level_max
      rarity
      pokemon {
        id
        identifier
        type_1
        type_2
        picture
      }
    }
  }
`

interface Props {
  locationId: number
  versionId?: number
}

const DetailedLocation: React.FC<Props> = ({ locationId, versionId }) => {
  const locationGeneration = getGenerationFromLocationId(locationId)

  const [version, setVersion] = useState<VERSIONS>(
    (versionId as VERSIONS) ||
      VERSIONS_IN_GENERATIONS[locationGeneration - 1][0]
  )
  const { data, loading, error, refetch: _refetch } = useQuery<
    Encounters,
    EncountersVariables
  >(GET_ENCOUNTERS, {
    variables: {
      locationId: locationId,
      versionId: version,
    },
  })

  const refetch = useCallback(() => {
    setTimeout(() => _refetch(), 0)
  }, [_refetch])

  const allGenerations = [...Array(NB_GENERATIONS).keys()]
  const rest = allGenerations.splice(0, locationGeneration - 1)
  const restLength = rest.length
  const [tabNumber, setTabNumber] = React.useState(() => {
    if (!versionId) {
      return 0
    }
    const idx = VERSIONS_IN_GENERATIONS.findIndex((el) =>
      el.includes(versionId)
    )
    return allGenerations.findIndex((el) => el === idx)
  })
  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabNumber(newValue)
  }

  const locationIdentifier =
    locations[locations.findIndex((loc) => loc.id === locationId)]
      ?.identifier || ""

  const pageTitle = (
    <h1>
      {capitalizeSentence(formatLocationNameWithRegion(locationIdentifier))}
    </h1>
  )

  if (error) {
    return <Error statusCode={404} />
  }

  if (loading) {
    return (
      <OuterContainer>
        <InnerContainer>
          {pageTitle}
          <div css={{ width: "100%", padding: "0 5%" }}>
            <Tabs value={tabNumber} onChange={handleTabChange}>
              {allGenerations.map((el) => (
                <Tab key={el} label={`Generation ${el + 1}`} />
              ))}
            </Tabs>

            <TabPanel index={0} value={0}>
              <div
                css={{
                  height: "400px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span css={{ fontSize: "2em" }}>Loading...</span>
              </div>
            </TabPanel>
          </div>
        </InnerContainer>
      </OuterContainer>
    )
  }

  const encounters = data?.encountersByLocationAndVersion

  const getEncountersByMethod = (
    method: ENCOUNTER_METHOD
  ): [Array<ReducedPokemon>, Array<ReducedEncounter>] => {
    const filteredEncounter = encounters?.filter((el) => el.method === method)

    const pokemons = filteredEncounter?.map((enc) => enc.pokemon)
    const encounterInfos = filteredEncounter?.map((enc) => ({
      rarity: enc.rarity,
      level_min: enc.level_min,
      level_max: enc.level_max,
    }))

    return [pokemons, encounterInfos]
  }

  const allEncounters: Array<[
    Array<ReducedPokemon>,
    Array<ReducedEncounter>
  ]> = []
  for (let method in ENCOUNTER_METHOD) {
    if (!isNaN(Number(method))) {
      allEncounters.push(
        getEncountersByMethod(Number(method) as ENCOUNTER_METHOD)
      )
    }
  }

  /* if no encounters, allEncounters = [ [[],[]],[[],[]],...]*/
  const filteredEmpty = allEncounters
    .map((el) => el[0])
    .filter((el) => !arrayIsEmpty(el))

  const changeGeneration = (el: number) => {
    let generationId: number
    switch (el) {
      case 1:
        generationId = VERSIONS.RED
        break
      case 2:
        generationId = VERSIONS.GOLD
        break
      case 3:
        generationId = VERSIONS.RUBY
        break
      case 4:
        generationId = VERSIONS.DIAMOND
        break
      case 5:
        generationId = VERSIONS.BLACK
        break
      case 6:
        generationId = VERSIONS.X
        break
      case 7:
        generationId = VERSIONS.SUN
        break
      default:
        generationId = 0
    }

    setVersion(generationId)
    refetch()
  }

  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setVersion(event.target.value as VERSIONS)
    refetch()
  }

  return (
    <OuterContainer>
      <InnerContainer>
        {pageTitle}
        <div css={{ width: "100%", padding: "0 5%" }}>
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

              <div css={{ width: "100%" }}>
                {!arrayIsEmpty(filteredEmpty) ? (
                  allEncounters.map((el, idx) => {
                    const [pokemons, encounterInfos] = el

                    if (!pokemons?.length) {
                      return null
                    }
                    return (
                      <div css={{ width: "100%" }} key={idx}>
                        <h2>
                          {getEncounterMethod((idx + 1) as ENCOUNTER_METHOD)}
                        </h2>
                        <ReducedPokemonGrid
                          pokemons={pokemons}
                          additionalInfos="rarity"
                          encounterInfos={encounterInfos}
                          method={(idx + 1) as ENCOUNTER_METHOD}
                        />
                      </div>
                    )
                  })
                ) : (
                  <p>No encounters in this location</p>
                )}
              </div>
            </TabPanel>
          ))}
        </div>
      </InnerContainer>
    </OuterContainer>
  )
}

export default DetailedLocation
