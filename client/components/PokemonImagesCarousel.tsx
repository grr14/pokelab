/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { Component, useState } from "react"
import { extractImages } from "../common/utils"
import { getPokemonById_getPokemon_pictures as picturesType } from "../graphql/queries/__generated__/getPokemonById"
import Slider from "react-animated-slider"
import { mq } from "../common/constants"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

const GET_POKEMON = gql`
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
}

const PokemonImagesCarousel: React.FC<Props> = ({ id }) => {
  const { data, loading, error } = useQuery(GET_POKEMON, {
    variables: { id: id },
  })

  if (loading) return <p>Carousel loading </p>
  if (error) return <p>Error</p>

  const urls = data?.pokemonSprites?.map((sprite) => sprite.sprite_url)
  const descriptions = data?.pokemonSprites?.map((sprite) => sprite.description)

  console.log(`url=${urls}`)

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
    return divArray
  }

  return <Slider>{buildCarousel()}</Slider>
}

export default PokemonImagesCarousel
