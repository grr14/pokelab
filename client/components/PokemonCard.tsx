import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Link from "next/link"
import Loading from "./Loading"

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

type StyledCardProps = {
  loading?: boolean
  error?: boolean
}

const StyledCard = styled(Card)<StyledCardProps>`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${(props) => (props.loading ? "white" : "yellow")};
    cursor: ${(props) => (props.loading ? "default" : "pointer")};
    box-shadow: ${(props) =>
      props.loading ? "none" : "0px 0px 15px 11px rgba(0, 0, 0, 0.75)"};
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

  if (loading)
    return (
      <StyledCard
        loading={loading}
        style={{
          height: "260px",
        }}
      >
        <Loading />
      </StyledCard>
    )
  if (error) return <p>error</p>
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
