const fetch = require("node-fetch")

module.exports = {
  Query: {
    pokemon: async (_, { id }) => {
      const response = await fetch(`http://pokeapi.co/api/v2/pokemon/${id}`)
      return response.json()
    },
  },
}
