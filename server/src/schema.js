const { gql } = require("apollo-server")

typeDefs = gql`
  type Query {
    getPokemon(id: Int): Pokemon
    getAllPokemons(first: Int, last: Int): [Pokemon]
    getType(id: Int): Type
    getMove(id: Int): Move
  }

  type Pokemon {
    id: Int
    name: String!
    height: Int
    weight: Int
    baseExperience: Int
    types: [Type]
    stats: [Stat]
    abilities: [Ability]
    versions: [Version]
    moves: [Move]
    pictures: [Picture]
  }

  type Type {
    id: Int
    name: String!
    weakTo: [Type]
    resistantTo: [Type]
    strongAgainst: [Type]
    weakAgainst: [Type]
    cannotDoDamageTo: [Type]
    cannotTakeDamageFrom: [Type]
    appearedIn: Version
  }

  type Stat {
    id: Int
    name: String!
    base: Int
    effort: Int
    changeValue: Int
  }

  type Ability {
    id: Int
    name: String!
    isHidden: Boolean
  }

  type Version {
    id: Int
    name: String
  }

  type Move {
    id: Int
    name: String!
    details: [MoveDetails]
    flavorText: String
    appearedIn: Version
    class: MoveClass
    type: Type
    power: Int
    pp: Int
    accuracy: Int
    priority: Int
    statsChanges: [Stat]
    metadata: MoveMetadata
  }

  type MoveDetails {
    level: Int!
    method: String
    version: Version
  }

  type MoveClass {
    id: Int
    name: String
  }

  type MoveMetadata {
    statusChange: String
    statusChangeChance: Int
    critRate: Int
    drain: Int
    flinchChance: Int
    healing: Int
    maxHits: Int
    maxTurns: Int
    minHits: Int
    minTurns: Int
    category: String
    targetStatsChange: Int
  }

  type Picture {
    name: String!
    url: String
  }
`

module.exports = typeDefs
