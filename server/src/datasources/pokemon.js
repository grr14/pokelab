const { RESTDataSource } = require("apollo-datasource-rest")

class pokemonAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = "https://pokeapi.co/api/v2/"
  }

  pokemonReducer(pokemon) {
    const types = pokemon.types.map((el) => el.type.name)

    return {
      id: pokemon.id || 0,
      name: pokemon.name,
      types: types,
      picture: pokemon.sprites.front_default,
      isFavorite: false,
    }
  }

  async getPokemonById(id) {
    const response = await this.get(`pokemon/${id}`)
    return this.pokemonReducer(response[0])
  }
}

module.exports = pokemonAPI
