import styled from "@emotion/styled"

const StyledDetailedPokemon = styled.main`
  flex: 1;
  background-color: lightcoral;
`

interface Props {
  id: number
}

const DetailedPokemon: React.FC<Props> = ({ id }) => {
  return <StyledDetailedPokemon>{id}</StyledDetailedPokemon>
}

export default DetailedPokemon
