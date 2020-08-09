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
    abilityById: async (_, { id }, { dataSources }, __) =>
      dataSources.pokemonDB.getAbilityById({ id }),
  },
}
