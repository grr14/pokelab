/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import Link from "next/link"

import TypeDisplay from "./TypeDisplay"
import { capitalizeFirstLetter } from "../common/utils"

import { getPokemonById_pokemon as Pokemon } from "../graphql/queries/__generated__/getPokemonById"

import Box from "@material-ui/core/Box"
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import Divider from "@material-ui/core/Divider"

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
            <p css={noWrapLeft}>Pokedex ID :</p>
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
            <p css={noWrapLeft}>Weight :</p>
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
            <p css={noWrapLeft}>Base Experience :</p>
          </Box>
          <p>{pokemon.base_experience}</p>
        </ListItem>
      </List>
    </div>
  )
}

export default PokemonSummary
