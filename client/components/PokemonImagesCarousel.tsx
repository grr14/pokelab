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
  if (error) return <p>Error</p>

  const urls = data?.pokemonSprites?.map((sprite) => sprite.sprite_url)
  const descriptions = data?.pokemonSprites?.map((sprite) => sprite.description)

  console.log(picture)
  const buildCarousel = () => {
    const divArray = []
    for (let i = 0; i < urls.length; i++) {
      divArray.push(
        <div>
          <img style={{ height: "350px", width: "350px" }} src={urls[i]} />
          <p
            css={{
              position: "absolute",
              fontSize: "2em",
              [mq[0]]: {
                bottom: "0px",
              },
              [mq[1]]: {
                bottom: "15%",
              },
            }}
          >
            {descriptions[i]}
          </p>
        </div>
      )
    }

    if (picture != null) {
      divArray.unshift(
        <div>
          <img style={{ height: "350px", width: "350px" }} src={picture} />
        </div>
      )
    }

    return divArray
  }

  return <Slider>{buildCarousel()}</Slider>
}

export default PokemonImagesCarousel
