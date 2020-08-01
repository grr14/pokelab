/** @jsx jsx */
import { jsx } from "@emotion/core"
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
    <div
      css={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" gutterBottom>
        {pokemon.identifier}
      </Typography>
      <Paper
        className="infosList"
        css={{
          flex: 1,
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
    </div>
  )
}

export default PokemonDetailedInfos
