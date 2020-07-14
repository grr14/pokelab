const { DataSource } = require("apollo-datasource")

class pokemonDB extends DataSource {
  constructor({ store }) {
    super()
    this.store = store
  }

  async findUsertest({ id }) {
    console.log("------> findUser")
    return { id: id, identifier: "hello", mail: "world" }
  }

  async findOrCreateUser({ id }) {
    const users = await this.store.users.findOne({ where: { id: id } })

    return users
  }

  async findPokemon({ id }) {
    const pokemon = await this.store.pokemon.findOne({ where: { id: id } })

    return pokemon
  }
}

module.exports = pokemonDB
