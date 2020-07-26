import styled from "@emotion/styled"
import StyledMainGrid from "./MainGrid"
import CardContainer from "./CardContainer"
import PokemonCard from "./PokemonCard"

export const StyledMainContent = styled.div`
  background-color: red;
  padding: 0 1%;
  flex: 1;
`

const MainPageContent: React.FC = () => {
  const displayPokemons = (min: number, max: number) => {
    const pokemon = []
    for (let i = min; i <= max; i++) {
      pokemon.push(
        <CardContainer key={i}>
          <PokemonCard id={i} />
        </CardContainer>
      )
    }
    return pokemon
  }

  return (
    <StyledMainContent>
      <StyledMainGrid>{displayPokemons(1, 152)}</StyledMainGrid>
    </StyledMainContent>
  )
}

export default MainPageContent
