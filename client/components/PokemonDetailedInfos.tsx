/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { Theme } from "../common/types"
import { getPokemonById_pokemon as Pokemon } from "../graphql/queries/__generated__/getPokemonById"
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import ListItem, { ListItemProps } from "@material-ui/core/ListItem"
import Typography from "@material-ui/core/Typography"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import TypeDisplay from "./TypeDisplay"
import { ListItemAvatar, Avatar, Box } from "@material-ui/core"
import { LAST_POKEMON_ID } from "../common/constants"
import PokemonTypeInfos from "./PokemonTypeInfos"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Link from "next/link"

type ArrowProps = {
  pokemonId: number
  direction: string
  theme: Theme
}

const LinkArrow = styled.div<ArrowProps>`
  font-size: 3em;
  color: ${(props: ArrowProps) => props.theme.body.text};
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
        <ListItem key={idx}>{ability.identifier}</ListItem>
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

        <Typography variant="h2">{pokemon.identifier}</Typography>

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
              <Typography variant="body1">Pokedex ID :</Typography>
            </Box>
            <ListItemText
              secondaryTypographyProps={{ align: "left" }}
              secondary={pokemon.id}
            />
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
              <Typography variant="body1">Type :</Typography>
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
              <Typography variant="body1">Abilities :</Typography>
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
              <Typography variant="body1">Height :</Typography>
            </Box>
            <ListItemText
              secondaryTypographyProps={{ align: "left" }}
              secondary={pokemon.height}
            />
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
              <Typography variant="body1">Weight :</Typography>
            </Box>
            <ListItemText
              secondaryTypographyProps={{ align: "left" }}
              secondary={pokemon.weight}
            />
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
              <Typography variant="body1">Base Experience :</Typography>
            </Box>
            <ListItemText
              secondaryTypographyProps={{ align: "left" }}
              secondary={pokemon.base_experience}
            />
          </ListItem>
        </List>
      </Paper>

      <PokemonTypeInfos type_1={pokemon.type_1} type_2={pokemon.type_2} />
    </>
  )
}

export default PokemonDetailedInfos
