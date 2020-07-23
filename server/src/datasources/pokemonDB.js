const { DataSource } = require("apollo-datasource")
const { parse } = require("../utils")

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

  reduceAbility(ability) {
    const text_changes = parse(ability.text_changed_in_version, ",")

    return {
      id: ability.id,
      identifier: ability.identifier,
      effect: ability.effect,
      flavor_textes: [
        {
          text: ability.flavor_text_1,
          appear_in: text_changes[0] != null ? text_changes[0] : null,
        },
        {
          text: ability.flavor_text_2,
          appear_in: text_changes[1] != null ? text_changes[1] : null,
        },
        {
          text: ability.flavor_text_3,
          appear_in: text_changes[2] != null ? text_changes[2] : null,
        },
        {
          text: ability.flavor_text_4,
          appear_in: text_changes[3] != null ? text_changes[3] : null,
        },
      ],
    }
  }

  async getAbilityById({ id }) {
    const ability = await this.store.abilities.findOne({ where: { id: id } })

    return this.reduceAbility(ability.dataValues)
  }
}

module.exports = pokemonDB
