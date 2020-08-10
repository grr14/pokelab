/** @jsx jsx */
import { jsx } from "@emotion/core"
import { mq } from "../common/constants"

import DetailedPokemonGrid from "./DetailedPokemonGrid"
import MovesContainer from "./MovesContainer"
import PokemonImagesCarousel from "./PokemonImagesCarousel"
import PokemonDetailedInfos from "./PokemonDetailedInfos"
import LinkArrow from "./LinkArrow"

import {
  getPokemonById,
  getPokemonByIdVariables,
} from "../graphql/queries/__generated__/getPokemonById"

import Link from "next/link"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import { capitalizeFirstLetter } from "../common/utils"

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
    <div
      className="outerContainer"
      css={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: "2%",
      }}
    >
      <div
        className="innerContainer"
        css={(theme) => ({
          backgroundColor: theme.main.background,
          boxSizing: "border-box",
          padding: "1% 2%",
          flex: 1,
          border: "1px solid black",
          borderRadius: "30px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        })}
      >
        <div /* on Mobile, we display the Name before the picture*/
          className="mobileOnly"
          css={{
            [mq[0]]: {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              alignContent: "center",
            },
            [mq[1]]: {
              display: "none",
            },
          }}
        >
          <Link href="/pokemon/[pid]" as={`/pokemon/${data.pokemon.id - 1}`}>
            <LinkArrow
              direction="left"
              size="small"
              pokemonId={data.pokemon.id}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </LinkArrow>
          </Link>
          <h1>{capitalizeFirstLetter(data.pokemon.identifier)}</h1>
          <Link href="/pokemon/[pid]" as={`/pokemon/${data.pokemon.id + 1}`}>
            <LinkArrow
              direction="right"
              size="small"
              pokemonId={data.pokemon.id}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </LinkArrow>
          </Link>
        </div>

        <DetailedPokemonGrid>
          <div
            css={(theme) => ({
              backgroundColor: theme.card.background,
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "space-evenly",
            })}
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
            {/*<PokemonDetailedInfos pokemon={data.pokemon} />*/}
          </div>
          <MovesContainer></MovesContainer>
        </DetailedPokemonGrid>
      </div>
    </div>
  )
}

export default DetailedPokemon
