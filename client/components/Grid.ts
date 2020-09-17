import styled from "@emotion/styled"
import { mq } from "../common/constants"
import { Theme } from "../common/types"

interface Props {
  theme?: Theme
}

const DetailedPokemonGrid = styled.div<Props>`
  background-color: ${(props) => props?.theme?.main?.background};
  box-sizing: border-box;
  flex: 1;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: grid;
  justify-content: center;

  /* ------------------- mobile view --------------------- */

  ${mq[0]} {
    grid-template-columns: 1fr;
    grid-template-rows: 250px auto 1fr;
  }

  /* ------------------- desktop view --------------------- */

  ${mq[3]} {
    grid-template-columns: 30% 70%;
    grid-template-rows: 300px 1fr;
  }
  ${mq[4]} {
    grid-template-columns: 30% 70%;
    grid-template-rows: 300px 1fr;
  }
  ${mq[5]} {
    grid-template-columns: 25% 75%;
    grid-template-rows: 300px auto;
  }
`

interface PPGProps {
  additionalInfos?: "level"
}

const PartialPokemonGrid = styled.div<PPGProps>`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: ${(props) => (!!props.additionalInfos ? `20px !important` : 0)};
  ${mq[0]} {
    grid-template-columns: 1fr;
    gap: 5px 5px;
  }
  ${mq[1]} {
    grid-template-columns: repeat(2, 1fr);
    gap: 5px 5px;
  }
  ${mq[2]} {
    grid-template-columns: repeat(3, 1fr);
    gap: 5px 5px;
  }
  ${mq[4]} {
    grid-template-columns: repeat(4, 1fr);
    gap: 5px 5px;
  }
  ${mq[6]} {
    grid-template-columns: repeat(5, 1fr);
    gap: 7px 7px;
  }
  ${mq[7]} {
    grid-template-columns: repeat(6, 1fr);
    gap: 10px 10px;
  }
`

const PokedexGrid = styled.div`
  display: grid;
  width: 100%;
  max-width: 100%;
  row-gap: 10px;
  column-gap: 10px;
  padding: 10px 0;

  ${mq[0]} {
    grid-template-columns: 1fr;
  }
  ${mq[1]} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mq[2]} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${mq[3]} {
    grid-template-columns: repeat(4, 1fr);
  }
  ${mq[4]} {
    grid-template-columns: repeat(5, 1fr);
  }
`

export { DetailedPokemonGrid, PartialPokemonGrid, PokedexGrid }
