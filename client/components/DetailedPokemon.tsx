/** @jsx jsx */
import { jsx } from "@emotion/core"
import { mq } from "../common/constants"

import { OuterContainer, InnerContainer } from "./Containers"
import DetailedPokemonGrid from "./DetailedPokemonGrid"
import PokemonImagesCarousel from "./PokemonImagesCarousel"
import PokemonDetailedInfos from "./PokemonDetailedInfos"
import LinkArrow from "./LinkArrow"
import Error from "../pages/_error"

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
import PokemonSummary from "./PokemonSummary"

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
      evolve_from_pokemon_id
      evolution_chain_id
      category
      picture
      gender_distribution
      capture_rate
      base_happiness
      growth_rate
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

  if (loading)
    return (
      <OuterContainer>
        <InnerContainer>Loading...</InnerContainer>
      </OuterContainer>
    )
  if (error) return <Error statusCode={404} />

  const { identifier, picture, ...rest } = data.pokemon

  return (
    <OuterContainer>
      <InnerContainer>
        <div /* on Mobile, we display the Name before the picture*/
          className="mobileOnly"
          css={{
            width: "100%",
            [mq[0]]: {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              alignContent: "center",
            },
            [mq[3]]: {
              display: "none",
            },
          }}
        >
          <Link href="/pokemon/[pid]" as={`/pokemon/${id - 1}`}>
            <LinkArrow direction="left" size="small" pokemonId={id}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </LinkArrow>
          </Link>
          <h1>{capitalizeFirstLetter(identifier)}</h1>
          <Link href="/pokemon/[pid]" as={`/pokemon/${id + 1}`}>
            <LinkArrow direction="right" size="small" pokemonId={id}>
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
              justifyContent: "center",
              boxSizing: "border-box",
              flex: 1,
              [mq[0]]: { width: "100%" },
              [mq[1]]: {
                width: "60%",
                justifySelf: "center",
              },
              [mq[3]]: { width: "100%", margin: 0 },
            })}
          >
            {<PokemonImagesCarousel id={id} picture={picture} />}
          </div>

          <div
            css={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "space-between",
              alignItems: "center",
              [mq[0]]: {
                gridColumnStart: "1",
                gridRowStart: "3",
              },
              [mq[3]]: {
                gridColumnStart: "2",
                gridRowStart: "1",
                gridRowEnd: "span 2",
                paddingBottom: "2%",
              },
            }}
          >
            {<PokemonDetailedInfos pokemon={data.pokemon} />}
          </div>

          <PokemonSummary pokemon={{ identifier, picture, ...rest }} />
        </DetailedPokemonGrid>
      </InnerContainer>
    </OuterContainer>
  )
}

export default DetailedPokemon
