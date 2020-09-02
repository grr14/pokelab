/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import Link from "next/link"

import TypeDisplay from "./TypeDisplay"
import {
  capitalizeFirstLetter,
  getGrowthRateFromId,
  getMalePercentage,
  getPokedexEntryFromId,
} from "../common/utils"

import { getPokemonById_pokemon as Pokemon } from "../graphql/queries/__generated__/getPokemonById"

import Box from "@material-ui/core/Box"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import Divider from "@material-ui/core/Divider"
import React from "react"

interface GenderDistributionProps {
  value: number
}

const GenderDistribution: React.FC<GenderDistributionProps> = ({ value }) => {
  if (value === -1) return <p>No gender</p>

  const maleProportion = getMalePercentage(value)

  const genderCSS = (proportion: number, gender: "male" | "female") => css`
    width: ${`${proportion}%`};
    height: inherit;
    float: left;
    background-color: ${gender === "male" ? "blue" : "pink"};
    color: white;
    text-align: center;
  `

  return (
    <React.Fragment>
      <div
        css={{
          marginTop: "2%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          css={{
            marginTop: "2%",
            width: "100%",
            height: "10px",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 0 0 1px gray",
          }}
        >
          <div css={genderCSS(maleProportion, "male")}></div>
          <div css={genderCSS(100 - maleProportion, "female")}></div>
        </div>
        <div css={{ width: "100%", textAlign: "center" }}>
          <p>
            Male: {maleProportion}% - Female: {100 - maleProportion}%
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}

interface Props {
  pokemon: Pokemon
}

const noWrapLeft = css`
  white-space: nowrap;
`

const PokemonSummary: React.FC<Props> = ({ pokemon }) => {
  const ability_list = (
    <List>
      {pokemon?.abilities?.map((ability, idx) => (
        <ListItem key={idx}>
          <p css={{ margin: 0 }}>
            {idx + 1} - {capitalizeFirstLetter(ability.identifier)}
          </p>
        </ListItem>
      ))}
    </List>
  )

  const pokedexEntries = (
    <List>
      {pokemon.pokedex_numbers.map((pokedex_entry, idx) => (
        <ListItem key={idx}>
          <p css={{ margin: 0 }}>
            {getPokedexEntryFromId(pokedex_entry.id)}: #
            {pokedex_entry.pokemon_number}
          </p>
        </ListItem>
      ))}
    </List>
  )

  return (
    <div
      className="infosList"
      css={(theme) => ({
        backgroundColor: `${theme.card.background} !important`,
        flex: 1,
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
      })}
    >
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img
                css={{ maxHeight: "100%", maxWidth: "100%" }}
                src="/images/pokeball.svg"
              />
            </Avatar>
          </ListItemAvatar>
          <Box textAlign="right" css={{ paddingRight: 5 }}>
            <p css={noWrapLeft}>National Pokedex ID :</p>
          </Box>
          <p>#{pokemon.id}</p>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img
                css={{ maxHeight: "100%", maxWidth: "100%" }}
                src="/images/pokeball.svg"
              />
            </Avatar>
          </ListItemAvatar>

          <Box textAlign="right" css={{ paddingRight: 5 }}>
            <p css={noWrapLeft}>Type :</p>
          </Box>
          <List>
            <ListItem>
              <Link href={`/types/[pid]`} as={`/types/${pokemon.type_1}`}>
                <a>
                  <TypeDisplay size="medium" type={pokemon.type_1} />
                </a>
              </Link>
            </ListItem>
            {pokemon.type_2 != null && (
              <ListItem>
                <Link href={`/types/[pid]`} as={`/types/${pokemon.type_2}`}>
                  <a>
                    <TypeDisplay size="medium" type={pokemon.type_2} />
                  </a>
                </Link>
              </ListItem>
            )}
          </List>
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img
                css={{ maxHeight: "100%", maxWidth: "100%" }}
                src="/images/pokeball.svg"
              />
            </Avatar>
          </ListItemAvatar>

          <Box textAlign="right" css={{ paddingRight: 5 }}>
            <p css={noWrapLeft}>Abilities :</p>
          </Box>

          {ability_list}
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img
                css={{ maxHeight: "100%", maxWidth: "100%" }}
                src="/images/pokeball.svg"
              />
            </Avatar>
          </ListItemAvatar>
          <Box textAlign="right" css={{ paddingRight: 5 }}>
            <p css={noWrapLeft}>Height :</p>
          </Box>
          <p> {pokemon.height / 10}m</p>
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img
                css={{ maxHeight: "100%", maxWidth: "100%" }}
                src="/images/pokeball.svg"
              />
            </Avatar>
          </ListItemAvatar>
          <Box textAlign="right" css={{ paddingRight: 5 }}>
            <p css={noWrapLeft}>Weight :</p>
          </Box>
          <p> {pokemon.weight / 10}kg</p>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img
                css={{ maxHeight: "100%", maxWidth: "100%" }}
                src="/images/pokeball.svg"
              />
            </Avatar>
          </ListItemAvatar>
          <Box textAlign="right" css={{ paddingRight: 5 }}>
            <p css={noWrapLeft}>Base Experience :</p>
          </Box>
          <p>{pokemon.base_experience}</p>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img
                css={{ maxHeight: "100%", maxWidth: "100%" }}
                src="/images/pokeball.svg"
              />
            </Avatar>
          </ListItemAvatar>
          <Box textAlign="right" css={{ paddingRight: 5 }}>
            <p css={noWrapLeft}>Growth Rate :</p>
          </Box>
          <p>{getGrowthRateFromId(pokemon.growth_rate)}</p>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img
                css={{ maxHeight: "100%", maxWidth: "100%" }}
                src="/images/pokeball.svg"
              />
            </Avatar>
          </ListItemAvatar>
          <Box textAlign="right" css={{ paddingRight: 5 }}>
            <p css={noWrapLeft}>Base Happiness :</p>
          </Box>
          <p>{pokemon.base_happiness}</p>
        </ListItem>
        <Divider />
        <ListItem css={{ flexWrap: "wrap" }}>
          <ListItemAvatar>
            <Avatar>
              <img
                css={{ maxHeight: "100%", maxWidth: "100%" }}
                src="/images/pokeball.svg"
              />
            </Avatar>
          </ListItemAvatar>
          <Box textAlign="right" css={{ paddingRight: 5 }}>
            <p css={noWrapLeft}>Gender Distribution :</p>
          </Box>
          <GenderDistribution value={pokemon.gender_distribution} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img
                css={{ maxHeight: "100%", maxWidth: "100%" }}
                src="/images/pokeball.svg"
              />
            </Avatar>
          </ListItemAvatar>
          <Box textAlign="right" css={{ paddingRight: 5 }}>
            <p css={noWrapLeft}>Capture Rate :</p>
          </Box>
          <p> {pokemon.capture_rate}</p>
        </ListItem>
        <Divider />

        <ListItem css={{ flexWrap: "wrap" }}>
          <ListItemAvatar>
            <Avatar>
              <img
                css={{ maxHeight: "100%", maxWidth: "100%" }}
                src="/images/pokeball.svg"
              />
            </Avatar>
          </ListItemAvatar>

          <Box textAlign="right" css={{ paddingRight: 5 }}>
            <p css={noWrapLeft}>Pokedex Number:</p>
          </Box>

          {pokedexEntries}
        </ListItem>
      </List>
    </div>
  )
}

export default PokemonSummary
