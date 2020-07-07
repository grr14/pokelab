module.exports = {
  Query: {
    getPokemon: async (_, { id }, { dataSources }, __) => {
      return dataSources.pokemonAPI.getPokemonById(id)
    },
    getType: async (_, { id }, { dataSources }, __) => {
      return dataSources.pokemonAPI.getTypeById(id)
    },
  },
}
