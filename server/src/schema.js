const { gql } = require("apollo-server")

typeDefs = gql`
  type Query {
    pokemon(id: Int): Pokemon
    pokemonPartial(id: Int): Pokemon
    pokemonSprites(id: Int): [Sprite]
    abilityById(id: Int): Ability
    abilitiesByPokemonId(id: Int): [Ability]
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
    abilities: [Ability]
    picture: String
  }

  type Sprite {
    pokemon_id: Int!
    description: String!
    sprite_url: String
  }

  type Ability {
    id: Int!
    identifier: String!
    effect: String
    flavor_textes: [FlavorText]
  }

  type FlavorText {
    text: String
    appear_in: Int
  }
`
module.exports = typeDefs
