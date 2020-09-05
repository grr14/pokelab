module.exports = {
  Query: {
    pokemon: async (_, { id }, { dataSources }, __) =>
      dataSources.pokemonDB.findPokemon({ id }),
    pokemonPartial: async (_, { id }, { dataSources }, __) =>
      dataSources.pokemonDB.findPokemonPartial({ id }),
    pokemonByTypeId: async (_, { id }, { dataSources }, __) =>
      dataSources.pokemonDB.findPokemonsByTypeId({ id }),
    pokemonSprites: async (_, { id }, { dataSources }, __) =>
      dataSources.pokemonDB.getPokemonSprites({ id }),
    pokemonEvolveChain: async (_, { id }, { dataSources }, __) =>
      dataSources.pokemonDB.getPokemonEvolveChain({ id }),
    abilityById: async (_, { id }, { dataSources }, __) =>
      dataSources.pokemonDB.getAbilityById({ id }),
    getStatsByPokemonId: async (_, { id }, { dataSources }, __) =>
      dataSources.pokemonDB.getStatsById({ id }),
    pokemonsByAbilityId: async (_, { id }, { dataSources }, __) =>
      dataSources.pokemonDB.getPokemonByAbilityId({ id }),
  },
}
