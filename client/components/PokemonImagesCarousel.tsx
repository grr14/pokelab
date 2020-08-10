/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import Slider from "react-animated-slider"
import { mq } from "../common/constants"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import {
  getPokemonSpritesById,
  getPokemonSpritesByIdVariables,
} from "../graphql/queries/__generated__/getPokemonSpritesById"

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const GET_SPRITES = gql`
  query getPokemonSpritesById($id: Int!) {
    pokemonSprites(id: $id) {
      pokemon_id
      description
      sprite_url
    }
  }
`

interface Props {
  id: number
  picture?: string
}

const PokemonImagesCarousel: React.FC<Props> = ({ id, picture }) => {
  const { data, loading, error } = useQuery<
    getPokemonSpritesById,
    getPokemonSpritesByIdVariables
  >(GET_SPRITES, {
    variables: { id: id },
  })

  if (loading) return <p>Carousel loading </p>
  if (error) {
    return <p>error </p>
  }

  /* if no sprites, urls and description == undefined */
  let urls = data?.pokemonSprites?.map((sprite) => sprite.sprite_url) || []
  const descriptions =
    data?.pokemonSprites?.map((sprite) => sprite.description) || []

  const hasSprites = urls.length > 0 ? true : false

  if (picture != null) {
    urls.unshift(picture)
    descriptions.unshift("Official Artwork")
  }

  const buildCarousel = () => {
    const divArray = []
    for (let i = 0; i < urls?.length; i++) {
      divArray.push(
        <div key={i} css={{ height: "100%", width: "100%" }}>
          <img
            css={{
              [mq[0]]: {
                height: "60%",
                width: "60%",
              },
            }}
            src={urls[i]}
          />
          <p
            css={{
              position: "absolute",
              fontSize: "1em",
              [mq[0]]: {
                bottom: " 10px",
              },
              [mq[1]]: {
                bottom: "15%",
              },
            }}
          >
            <i>{descriptions[i]}</i>
          </p>
        </div>
      )
    }

    return divArray
  }

  return (
    <Slider
      previousButton={
        hasSprites ? (
          <FontAwesomeIcon
            css={{
              [mq[0]]: {
                fontSize: "25px",
              },
            }}
            icon={faChevronLeft}
          />
        ) : null
      }
      nextButton={
        hasSprites ? (
          <FontAwesomeIcon
            css={{
              [mq[0]]: {
                fontSize: "25px",
              },
            }}
            icon={faChevronRight}
          />
        ) : null
      }
    >
      {buildCarousel()}
    </Slider>
  )
}

export default PokemonImagesCarousel
