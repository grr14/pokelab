/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import Slider from "react-animated-slider"
import { capitalizeSentence } from "../common/utils"
import { mq } from "../common/constants"

import {
  getPokemonSpritesById,
  getPokemonSpritesByIdVariables,
} from "../graphql/queries/__generated__/getPokemonSpritesById"

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

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

  /* we display sprites in this order : front normal, front shiny, back normal, back shiny*/
  const ordered =
    data?.pokemonSprites?.sort((a, b) =>
      b.description.localeCompare(a.description)
    ) || []
  if (ordered.length > 0) {
    ordered.splice(0, 2, ordered[1], ordered[0])
    ordered.splice(2, 2, ordered[3], ordered[2])
  }

  let urls = ordered?.map((sprite) => sprite.sprite_url)
  const descriptions = ordered?.map((sprite) => sprite.description)

  const hasSprites = urls.length > 0 ? true : false

  if (picture !== null) {
    urls.unshift(picture)
    descriptions.unshift("Official Artwork")
  }

  const buildCarousel = () => {
    const divArray = []
    for (let i = 0; i < urls?.length; i++) {
      divArray.push(
        <div
          key={i}
          css={{
            height: "100%",
            width: "100%",
          }}
        >
          <img
            css={{
              [mq[0]]: {
                height: "175px",
                width: "175px",
              },
              [mq[3]]: {
                height: "200px",
                width: "200px",
              },
            }}
            src={urls[i]}
            alt={`sprite #${i}`}
          />
          <p
            css={{
              position: "absolute",
              fontSize: "1em",
              [mq[0]]: {
                bottom: "0px",
              },
              [mq[3]]: {
                bottom: "10px",
              },
            }}
          >
            <i>{capitalizeSentence(descriptions[i])}</i>
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
