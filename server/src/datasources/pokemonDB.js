const { DataSource } = require("apollo-datasource")

class pokemonDB extends DataSource {
  constructor({ store }) {
    super()
    this.store = store
  }

  async findPokemon({ id }) {
    const pokemon = await this.store.pokemon.findOne({ where: { id: id } })

    return pokemon
  }

  async getPokemonSprites({ id }) {
    const sprites = await this.store.sprites.findAll({
      where: { pokemon_id: id },
    })
    return sprites
  }
}

module.exports = pokemonDB
