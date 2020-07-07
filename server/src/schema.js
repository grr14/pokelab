const { gql } = require("apollo-server")

typeDefs = gql`
  type Query {
    getPokemon(id: ID!): Pokemon
    getType(id: ID!): Type
  }

  type Pokemon {
    id: ID!
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
    id: ID!
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
    id: ID!
    name: String
    base: Int
    effort: Int
  }

  type Ability {
    id: ID!
    name: String!
    isHidden: Boolean
  }

  type Version {
    id: ID!
    name: String
  }

  type Move {
    id: ID!
    name: String!
    details: [MoveDetails]
  }

  type MoveDetails {
    level: Int!
    method: String
    version: Version
  }

  type Picture {
    name: String!
    url: String
  }
`

module.exports = typeDefs
