/** @jsx jsx */
import { jsx } from "@emotion/core"
import StyledMainGrid from "./MainGrid"
import CardContainer from "./CardContainer"
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
        flex: 1,
      }}
    >
      <StyledMainGrid>{displayPokemons(1, 151)}</StyledMainGrid>
    </div>
  )
}

export default MainPageContent
