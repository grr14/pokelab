const { gql } = require("apollo-server")

typeDefs = gql`
  type Query {
    pokemon(id: Int): Pokemon
    pokemonSprites(id: Int): [Sprite]
  }

  type Pokemon {
    id: Int!
    identifier: String!
    species_id: Int
    height: Int
    weight: Int
    base_experience: Int
    ordre: Int
    is_default: Int
    type_1: Int
    type_2: Int
    picture: String
  }

  type Sprite {
    pokemon_id: Int!
    description: String!
    sprite_url: String
  }
`
module.exports = typeDefs
