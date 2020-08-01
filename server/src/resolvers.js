module.exports = {
  Query: {
    pokemon: async (_, { id }, { dataSources }, __) =>
      dataSources.pokemonDB.findPokemon({ id }),
    pokemonPartial: async (_, { id }, { dataSources }, __) =>
      dataSources.pokemonDB.findPokemonPartial({ id }),
    pokemonSprites: async (_, { id }, { dataSources }, __) =>
      dataSources.pokemonDB.getPokemonSprites({ id }),
    abilityById: async (_, { id }, { dataSources }, __) =>
      dataSources.pokemonDB.getAbilityById({ id }),
  },
}
