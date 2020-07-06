const { gql } = require("apollo-server")

/*const typeDefs = gql`
  type Query {
    pokemon(id: Int!): Pokemon
  }

  type Pokemon {
    id: Int
    name: String
    height: Int
    weight: Int
    abilities: [AbilityObj]
    stats: [StatObj]
  }

  type AbilityObj {
    slot: Int
    is_hidden: Boolean
    ability: Ability
  }

  type Ability {
    name: String
    url: String
  }

  type StatObj {
    effort: Int
    base_stat: Int
    stat: Stat
  }

  type Stat {
    name: String
    url: String
  }
`*/

typeDefs = gql`
  type Query {
    pokemon(id: ID!): Pokemon
  }

  type Pokemon {
    id: ID!
    name: String!
    height: Int
    weight: Int
    types: [Type]
    abilities: [Ability]
    versions: [Version]
    moves: [Move]
    pictures: [Picture]
  }

  type Type {
    id: ID!
    name: String!
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
