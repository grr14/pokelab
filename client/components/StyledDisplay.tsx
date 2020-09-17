/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { Theme, Size } from "../common/types"
import { TYPES, VERSIONS, VERSIONS_GROUPS } from "../common/constants"
import {
  capitalizeFirstLetter,
  getTypeFromId,
  getVersionGroupFromId,
} from "../common/utils"
import React from "react"

type TypeProps = {
  type: TYPES
  size: Size
  theme?: Theme
}

const TypeContainer = styled.span<TypeProps>`
  font-size: 15px;
  font-family: "Trebuchet MS";
  font-weight: bold;
  width: 6em;
  text-align: center;
  display: inline-block;
  border: ${(props) =>
    props.size === "small" ? "none" : "0.1em solid transparent"};
  padding: ${(props) => (props.size === "small" ? 0 : "0.1em 0.2em 0.2em")};
  margin: ${(props) => (props.size === "small" ? 0 : "0.1em 0.015em")};
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

const TypeDisplay: React.FC<TypeProps> = ({ type, size }) => {
  return (
    <TypeContainer size={size} type={type}>
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

interface VersionProps {
  version: VERSIONS
  theme?: Theme
}

const VersionNameDisplay = styled.span<VersionProps>`
  color: ${(props) => {
    switch (props.version) {
      case VERSIONS.RED:
        return props.theme.version.red
      case VERSIONS.BLUE:
        return props.theme.version.blue
      case VERSIONS.YELLOW:
        return props.theme.version.yellow
      case VERSIONS.GOLD:
        return props.theme.version.gold
      case VERSIONS.SILVER:
        return props.theme.version.silver
      case VERSIONS.CRYSTAL:
        return props.theme.version.crystal
      case VERSIONS.RUBY:
        return props.theme.version.ruby
      case VERSIONS.SAPPHIRE:
        return props.theme.version.sapphire
      case VERSIONS.EMERALD:
        return props.theme.version.emerald
      case VERSIONS.FIRERED:
        return props.theme.version.firered
      case VERSIONS.LEAFGREEN:
        return props.theme.version.leafgreen
      case VERSIONS.DIAMOND:
        return props.theme.version.diamond
      case VERSIONS.PEARL:
        return props.theme.version.pearl
      case VERSIONS.PLATINUM:
        return props.theme.version.platinum
      case VERSIONS.HEARTGOLD:
        return props.theme.version.heartgold
      case VERSIONS.SOULSILVER:
        return props.theme.version.soulsilver
      case VERSIONS.BLACK:
        return props.theme.version.black
      case VERSIONS.WHITE:
        return props.theme.version.white
      case VERSIONS.COLOSSEUM:
        return props.theme.version.colosseum
      case VERSIONS.XD:
        return props.theme.version.xd
      case VERSIONS.BLACK2:
        return props.theme.version.black2
      case VERSIONS.WHITE2:
        return props.theme.version.white2
      case VERSIONS.X:
        return props.theme.version.x
      case VERSIONS.Y:
        return props.theme.version.y
      case VERSIONS.OMEGARUBY:
        return props.theme.version.omegaruby
      case VERSIONS.ALPHASAPPHIRE:
        return props.theme.version.alphasapphire
      case VERSIONS.SUN:
        return props.theme.version.sun
      case VERSIONS.MOON:
        return props.theme.version.moon
      case VERSIONS.ULTRASUN:
        return props.theme.version.ultrasun
      case VERSIONS.ULTRAMOON:
        return props.theme.version.ultramoon
    }
  }};
`

interface VGProps {
  version_group: VERSIONS_GROUPS
}

const VersionGroupNameDisplay: React.FC<VGProps> = ({ version_group }) => {
  const vg_name = getVersionGroupFromId(version_group)
  if (vg_name === "Cannot retrieve version group") {
    return null
  }

  const reduceToEnum = vg_name
    .split("-")
    .map((word) => word.replace(/\s+/g, "").toUpperCase())

  return (
    <React.Fragment>
      {reduceToEnum.map((word, idx) => {
        return (
          <React.Fragment>
            <VersionNameDisplay
              version={
                VERSIONS[word as keyof typeof VERSIONS]
              } /* https://stackoverflow.com/a/42623905/14158879 */
            >
              {capitalizeFirstLetter(word.toLowerCase())}
            </VersionNameDisplay>
            {idx < reduceToEnum.length - 1 && <span> - </span>}
          </React.Fragment>
        )
      })}
    </React.Fragment>
  )
}

export { TypeDisplay, VersionNameDisplay, VersionGroupNameDisplay }
