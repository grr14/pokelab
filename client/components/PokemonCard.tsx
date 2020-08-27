/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import Link from "next/link"

import { Theme } from "../common/types"
import { capitalizeFirstLetter } from "../common/utils"

import FavoriteIcon from "./FavoriteIcon"
import CardLoading from "./CardLoading"

import Card from "@material-ui/core/Card"

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
  theme?: Theme
}

const StyledCard = styled(Card)<StyledCardProps>`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: background-color 0.2s ease-in;
  background-color: ${(props) => props.theme.card.background} !important;
  color: ${(props) => props.theme.card.text} !important;

  &:hover {
    background-color: ${(props) =>
      props.loading
        ? props.theme.card.background
        : props.theme.card.backgroundHover} !important;
    box-shadow: ${(props) =>
      props.loading
        ? "none"
        : `${props.theme.boxShadow.medium} ${props.theme.boxShadow.color}`};
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
        <CardLoading />
      </StyledCard>
    )

  if (!data) return <p>Not found</p>

  const { id, identifier, picture } = data.pokemonPartial

  return (
    <StyledCard raised={true}>
      <FavoriteIcon />
      <Link href={`/pokemon/[id]`} as={`/pokemon/${id}`}>
        <a
          css={(theme) => ({
            "&:hover": {
              textDecoration: "underline",
              cursor: "pointer",
              color: theme.card.textHover,
            },
          })}
        >
          <img
            src={picture}
            css={{ paddingTop: "5px", height: "200px", width: "200px" }}
          />

          <h2
            css={{
              textAlign: "center",
              marginBottom: "0.35em",
              fontWeight: 400,
              lineHeight: 1.334,
            }}
          >
            #{id} - {capitalizeFirstLetter(identifier)}
          </h2>
        </a>
      </Link>
    </StyledCard>
  )
}

export default PokemonCard
