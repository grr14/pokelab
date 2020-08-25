const { gql } = require("apollo-server")

typeDefs = gql`
  type Query {
    pokemon(id: Int): Pokemon
    pokemonPartial(id: Int): Pokemon
    pokemonByTypeId(id: Int): [Pokemon]
    pokemonSprites(id: Int): [Sprite]
    pokemonEvolveChain(id: Int): [Pokemon]
    abilityById(id: Int): Ability
    abilitiesByPokemonId(id: Int): [Ability]
    getStatsByPokemonId(id: Int): Stats
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
    evolve_from_pokemon_id: Int
    evolution_chain_id: Int
    evolution: EvolutionSummary
    category: String
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

  type EvolutionSummary {
    id: Int
    evolved_pokemon_id: Int
    evolution_trigger: Int
    trigger_item: Int
    minimum_level: Int
    gender: Int
    location: Int
    held_item: Int
    time_of_day: String
    known_move: Int
    known_move_type: Int
    minimum_happiness: Int
    minimum_beauty: Int
    minimum_affection: Int
    physical_stats: Int
    pokemon_in_party: Int
    pokemon_type_in_party: Int
    trading_species: Int
    overworld_rain: Int
    device_upside_down: Int
  }

  type Stats {
    hp: Stat
    attack: Stat
    defense: Stat
    special_attack: Stat
    special_defense: Stat
    speed: Stat
  }

  type Stat {
    base_stat: Int
    effort: Int
  }
`
module.exports = typeDefs
