/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { Theme } from "../common/types"
import { TYPES } from "../common/constants"
import { getTypeFromId } from "../common/utils"

type TypeProps = {
  type: TYPES
  theme?: Theme
}

const TypeContainer = styled.span<TypeProps>`
  font-size: 15px;

  font-family: "Trebuchet MS";
  font-weight: bold;
  width: 6em;
  text-align: center;
  display: inline-block;
  border: 0.1em solid transparent;
  padding: 0.1em 0.2em 0.2em;
  margin: 0.1em 0.015em;
  border-radius: 0.4em;

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
`

const TypeDisplay: React.FC<TypeProps> = ({ type }) => {
  return (
    <TypeContainer type={type}>
      <span
        css={{
          textTransform: "uppercase",
          color: "white",
          textShadow: "0em 0em .2em black",
        }}
      >
        {getTypeFromId(type)}
      </span>
    </TypeContainer>
  )
}

export default TypeDisplay
