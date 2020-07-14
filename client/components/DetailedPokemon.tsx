import styled from "@emotion/styled"

import PokemonImagesCarousel from "./PokemonImagesCarousel"

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
      height
      weight
      types {
        id
        name
      }
      stats {
        id
        name
        base
        effort
      }
      abilities {
        id
        name
        isHidden
      }
      versions {
        id
        name
      }
      moves {
        id
        name
        details {
          level
          method
          version {
            id
            name
          }
        }
      }
      pictures {
        name
        url
      }
    }
  }
`

const StyledContainer = styled.main`
  flex: 1;
  display: flex;
  background-color: lightcoral;
  padding: 3%;
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

  console.log(`id=${id}`)

  /**if (!loading) {
    console.log(`data=${data}`)
    with_empty_urls = data?.getPokemon?.pictures
      ?.map((picture) => picture.url)
      .filter((el) => el != null)
    console.log(`url=${with_empty_urls}`)
  }
*/
  if (loading) return <p>loading</p>

  return (
    <StyledContainer>
      <div
        style={{
          flex: 1,
          backgroundColor: "lightcyan",
          border: "solid 2px black",
          display: "grid",
          gridTemplateColumns: "50% 50%",
          gridTemplateRows: "66.6% 33.3%",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            background: "none",
          }}
        >
          {<PokemonImagesCarousel id={id} />}
        </div>
        <div
          style={{
            backgroundColor: "red",
          }}
        >
          2
        </div>
        <div
          style={{
            backgroundColor: "pink",
            gridColumnStart: 1,
            gridColumnEnd: "span 2",
            gridRowStart: 2,
          }}
        >
          3
        </div>
      </div>
    </StyledContainer>
  )
}

export default DetailedPokemon
