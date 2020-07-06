const fetch = require("node-fetch")

module.exports = {
  Query: {
    pokemon: async (_, { id }, { dataSources }, __) => {
      return dataSources.pokemonAPI.getPokemonById(id)
    },
  },
}
