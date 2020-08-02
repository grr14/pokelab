import styled from "@emotion/styled"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import Link from "next/link"

import Loading from "./Loading"

import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import FavoriteIcon from "./FavoriteIcon"

import {
  getPokemonPartialById,
  getPokemonPartialByIdVariables,
} from "../graphql/queries/__generated__/getPokemonPartialById"

const GET_POKEMON = gql`
  query getPokemonPartialById($id: Int!) {
    pokemonPartial(id: $id) {
      id
      identifier
      picture
    }
  }
`

type StyledCardProps = {
  loading?: number
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
  pokemon_id: number
}

const PokemonCard: React.FC<CardProps> = ({ pokemon_id }) => {
  const { data, loading, error } = useQuery<
    getPokemonPartialById,
    getPokemonPartialByIdVariables
  >(GET_POKEMON, {
    variables: { id: pokemon_id },
  })

  if (loading || error)
    return (
      <StyledCard
        loading={loading ? 1 : 0}
        style={{
          height: "260px",
        }}
      >
        <Loading />
      </StyledCard>
    )

  if (!data) return <p>Not found</p>

  const { id, identifier, picture } = data.pokemonPartial

  return (
    <StyledCard raised={true}>
      <FavoriteIcon />
      <img
        src={picture}
        style={{ paddingTop: "5px", height: "200px", width: "200px" }}
      />
      <Link href={`/pokemon/[id]`} as={`/pokemon/${id}`}>
        <a>
          <Typography gutterBottom variant="h5" component="h2">
            {id} - {identifier}
          </Typography>
        </a>
      </Link>
    </StyledCard>
  )
}

export default PokemonCard
