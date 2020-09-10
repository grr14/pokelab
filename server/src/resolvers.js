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
    getAllAbilities: async (_, __, { dataSources }, ___) =>
      dataSources.pokemonDB.getAllAbilities(),
    getPokemonPokedexEntries: async (_, { id }, { dataSources }, __) =>
      dataSources.pokemonDB.pokemonPokedexEntries({ id }),
    moveById: async (_, { id }, { dataSources }, __) =>
      dataSources.pokemonDB.getMoveById({ id }),
    movesByPokemonAndVersion: async (
      _,
      { pokemonId, versionId },
      { dataSources },
      __
    ) =>
      dataSources.pokemonDB.getMovesByPokemonAndVersion({
        pokemonId,
        versionId,
      }),
  },
}
