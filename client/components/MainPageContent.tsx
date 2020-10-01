/** @jsx jsx */
import { jsx } from "@emotion/core"
import { PokedexGrid } from "./Grid"
import { CardContainer } from "./Containers"
import PokemonCard from "./PokemonCard"

const MainPageContent: React.FC = () => {
  const displayPokemons = (min: number, max: number) => {
    const pokemon = []
    for (let i = min; i <= max; i++) {
      pokemon.push(
        <CardContainer key={i}>
          <PokemonCard pokemon_id={i} />
        </CardContainer>
      )
    }
    return pokemon
  }

  return (
    <div
      css={{
        padding: "0 1%",
        width: "100%",
      }}
    >
      <PokedexGrid>{displayPokemons(1, 151)}</PokedexGrid>
    </div>
  )
}

export default MainPageContent
