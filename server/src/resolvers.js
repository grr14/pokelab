const fetch = require("node-fetch")
const pokemonAPI = require("./datasources/pokemon")

module.exports = {
  Query: {
    pokemon: async (_, { id }, { dataSources }, __) => {
      return dataSources.pokemonAPI.getPokemonById(id)
    },
  },
}
