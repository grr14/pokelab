import styled from "@emotion/styled"
import { Theme } from "../common/types"
import { TYPES } from "../common/constants"

interface CustomCellProps {
  height: string
  type?: number
  multiplier?: number
  theme?: Theme
}

const CustomCell = styled.div<CustomCellProps>`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${(props) => props.height};

  background-color: ${(props) => {
    switch (props.type) {
      case TYPES.NORMAL:
        return props.theme.type.normal
      case TYPES.FIGHTING:
        return props.theme.type.fighting
      case TYPES.FLYING:
        return props.theme.type.flying
      case TYPES.POISON:
        return props.theme.type.poison
      case TYPES.GROUND:
        return props.theme.type.ground
      case TYPES.ROCK:
        return props.theme.type.rock
      case TYPES.BUG:
        return props.theme.type.bug
      case TYPES.GHOST:
        return props.theme.type.ghost
      case TYPES.STEEL:
        return props.theme.type.steel
      case TYPES.FIRE:
        return props.theme.type.fire
      case TYPES.WATER:
        return props.theme.type.water
      case TYPES.GRASS:
        return props.theme.type.grass
      case TYPES.ELECTRIC:
        return props.theme.type.electric
      case TYPES.PSYCHIC:
        return props.theme.type.psychic
      case TYPES.ICE:
        return props.theme.type.ice
      case TYPES.DRAGON:
        return props.theme.type.dragon
      case TYPES.DARK:
        return props.theme.type.dark
      case TYPES.FAIRY:
        return props.theme.type.fairy
    }
  }};
  background-color: ${(props) => {
    switch (props.multiplier) {
      case 0:
        return props.theme.damage.immune
      case 0.25:
        return props.theme.damage.notEffectiveAtAll
      case 0.5:
        return props.theme.damage.notTooEffective
      case 1:
        return props.theme.damage.normal
      case 2:
        return props.theme.damage.veryEffective
      case 4:
        return props.theme.damage.superEffective
    }
  }};
`

export default CustomCell
