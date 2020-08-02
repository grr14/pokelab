/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"

import { mq } from "../common/constants"

import DetailedPokemonGrid from "./DetailedPokemonGrid"
import MovesContainer from "./MovesContainer"
import PokemonImagesCarousel from "./PokemonImagesCarousel"
import PokemonDetailedInfos from "./PokemonDetailedInfos"
import PokemonTypeInfos from "./PokemonTypeInfos"

import {
  getPokemonById,
  getPokemonByIdVariables,
} from "../graphql/queries/__generated__/getPokemonById"

import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

const GET_POKEMON = gql`
  query getPokemonById($id: Int!) {
    pokemon(id: $id) {
      id
      identifier
      species_id
      height
      weight
      base_experience
      ordre
      is_default
      type_1
      type_2
      abilities {
        id
        identifier
      }
      picture
    }
  }
`

const StyledContainer = styled.main`
  flex: 1;
  display: flex;
  background-color: lightcoral;
  padding: 2%;
`

interface Props {
  id: number
}

const DetailedPokemon: React.FC<Props> = ({ id }) => {
  const { data, loading, error } = useQuery<
    getPokemonById,
    getPokemonByIdVariables
  >(GET_POKEMON, {
    variables: { id: id },
  })

  if (loading) return <p>loading</p>
  if (error) return <p>error</p>

  return (
    <StyledContainer>
      <DetailedPokemonGrid>
        <div
          css={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "space-evenly",
          }}
        >
          {<PokemonImagesCarousel id={id} picture={data.pokemon.picture} />}
        </div>
        <div
          css={{
            backgroundColor: "red",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "space-between",
            alignItems: "center",

            [mq[1]]: {
              gridColumnStart: "2",
              gridRowStart: "1",
              gridRowEnd: "span 2",
              paddingBottom: "2%",
            },
          }}
        >
          <PokemonDetailedInfos pokemon={data.pokemon} />
        </div>
        <MovesContainer></MovesContainer>
      </DetailedPokemonGrid>
    </StyledContainer>
  )
}

export default DetailedPokemon
