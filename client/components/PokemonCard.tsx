/** @jsx jsx */
import { jsx } from "@emotion/core"

import Link from "next/link"

import Card from "./Card"
import { ReducedPokemon } from "../common/types"
import { capitalizeFirstLetter } from "../common/utils"

import FavoriteIcon from "./FavoriteIcon"

interface CardProps {
  pokemon: ReducedPokemon
  index: number
  checked?: boolean
}

const PokemonCard: React.FC<CardProps> = ({ pokemon, index, checked }) => {
  const { id, identifier, picture } = pokemon

  return (
    <Card raised={true}>
      <FavoriteIcon />
      <Link href={`/pokemon/[id]`} as={`/pokemon/${id}`}>
        <a
          css={(theme) => ({
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
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
            #{checked ? id : index} - {capitalizeFirstLetter(identifier)}
          </h2>
        </a>
      </Link>
    </Card>
  )
}

export default PokemonCard
