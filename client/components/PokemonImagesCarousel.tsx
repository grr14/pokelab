import React, { Component, useState } from "react"
import AwesomeSlider from "react-awesome-slider"
import { extractImages } from "../common/utils"
import { getPokemonById_getPokemon_pictures as picturesType } from "../graphql/queries/__generated__/getPokemonById"

import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

const GET_POKEMON = gql`
  query getPokemonById($id: Int!) {
    getPokemon(id: $id) {
      pictures {
        name
        url
      }
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

  let urls = new Array<string>()

  urls = data?.getPokemon?.pictures
    ?.map((picture) => picture.url)
    .filter((url) => url != null)

  console.log(`url=${urls}`)

  const buildCarousel = () => {
    const divArray = []
    for (let i = 0; i < urls.length; i++) {
      divArray.push(
        <div>
          <img style={{ height: "300px", width: "300px" }} src={urls[i]} />
        </div>
      )
    }
    return <AwesomeSlider>{divArray}</AwesomeSlider>
  }

  return <div>{buildCarousel()}</div>
}

export default PokemonImagesCarousel
