/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { Theme } from "../common/types"

import Link from "next/link"

import { getPokemonById_pokemon as Pokemon } from "../graphql/queries/__generated__/getPokemonById"
import { LAST_POKEMON_ID } from "../common/constants"
import PokemonTypeInfos from "./PokemonTypeInfos"
import TypeDisplay from "./TypeDisplay"
import { capitalizeFirstLetter } from "../common/utils"

import Box from "@material-ui/core/Box"
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import Divider from "@material-ui/core/Divider"

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type ArrowProps = {
  pokemonId: number
  direction: string
  theme?: Theme
}

const LinkArrow = styled.div<ArrowProps>`
  font-size: 3em;
  color: ${(props: ArrowProps) => props.theme?.body?.text};
  padding: ${(props: ArrowProps) =>
    props.direction === "left" ? "0 0 0 10px" : "0 10px 0 0"};
  visibility: ${(props: ArrowProps) =>
    (props.pokemonId === 1 && props.direction === "left") ||
    (props.pokemonId === LAST_POKEMON_ID && props.direction === "right")
      ? "hidden"
      : "visible"};

  &:hover {
    cursor: ${(props: ArrowProps) =>
      (props.pokemonId === 1 && props.direction === "left") ||
      (props.pokemonId === LAST_POKEMON_ID && props.direction === "right")
        ? "default"
        : "pointer"};
  }
`

interface Props {
  pokemon: Pokemon
}

const PokemonDetailedInfos: React.FC<Props> = ({ pokemon }) => {
  const ability_list = (
    <List>
      {pokemon?.abilities?.map((ability, idx) => (
        <ListItem key={idx}>
          {capitalizeFirstLetter(ability.identifier)}
        </ListItem>
      ))}
    </List>
  )

  return (
    <>
      <div
        css={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Link href="/pokemon/[pid]" as={`/pokemon/${pokemon.id - 1}`}>
          <LinkArrow direction="left" pokemonId={pokemon.id}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </LinkArrow>
        </Link>

        <h2
          css={{
            fontSize: "3.75rem",
            lineHeight: 1.2,
            margin: "0.4em 0",
          }}
        >
          {capitalizeFirstLetter(pokemon.identifier)}
        </h2>

        <Link href="/pokemon/[pid]" as={`/pokemon/${pokemon.id + 1}`}>
          <LinkArrow direction="right" pokemonId={pokemon.id}>
            <FontAwesomeIcon icon={faChevronRight} />
          </LinkArrow>
        </Link>
      </div>

      <Paper
        className="infosList"
        css={{
          backgroundColor: "yellow !important",
        }}
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
              <p css={{}}>Pokedex ID :</p>
            </Box>
            <p>{pokemon.id}</p>
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
              <p>Type :</p>
            </Box>
            <List>
              <ListItem>
                <TypeDisplay type={pokemon.type_1} />
              </ListItem>
              {pokemon.type_2 != null && (
                <ListItem>
                  <TypeDisplay type={pokemon.type_2} />
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
              <p>Abilities :</p>
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
              <p>Height :</p>
            </Box>
            <p> {pokemon.height}</p>
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
              <p>Weight :</p>
            </Box>
            <p> {pokemon.weight}</p>
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
              <p>Base Experience :</p>
            </Box>
            <p>{pokemon.base_experience}</p>
          </ListItem>
        </List>
      </Paper>

      <PokemonTypeInfos type_1={pokemon.type_1} type_2={pokemon.type_2} />
    </>
  )
}

export default PokemonDetailedInfos
