import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Link from "next/link"

import {
  getPokemonById,
  getPokemonByIdVariables,
} from "../graphql/queries/__generated__/getPokemonById"

import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

const GET_POKEMON = gql`
  query getPokemonById($id: Int!) {
    getPokemon(id: $id) {
      id
      name
      pictures {
        name
        url
      }
    }
  }
`

import styled from "@emotion/styled"
import FavoriteIcon from "./FavoriteIcon"

const StyledCard = styled(Card)`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: yellow;
    cursor: pointer;

    -webkit-box-shadow: 0px 0px 15px 11px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 15px 11px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px 11px rgba(0, 0, 0, 0.75);
  }
`

interface CardProps {
  id: number
}

const PokemonCard: React.FC<CardProps> = ({ id }) => {
  const { data, loading, error } = useQuery<
    getPokemonById,
    getPokemonByIdVariables
  >(GET_POKEMON, {
    variables: { id: id },
  })

  if (loading) return <p>LOADING</p>
  if (error) return <p>ERROR</p>
  if (!data) return <p>Not found</p>

  return (
    <StyledCard raised={true}>
      <FavoriteIcon />
      <img
        src={data.getPokemon.pictures[4].url}
        style={{ height: "220px", width: "220px" }}
      />
      <Link href="/pokemon/[pid]" as={`/pokemon/${data.getPokemon.id}`}>
        <a>
          <Typography gutterBottom variant="h5" component="h2">
            {data.getPokemon.id} - {data.getPokemon.name}
          </Typography>
        </a>
      </Link>
    </StyledCard>
  )
}

export default PokemonCard
