const { DataSource } = require("apollo-datasource")
const { parse } = require("../utils")

class pokemonDB extends DataSource {
  constructor({ store }) {
    super()
    this.store = store
  }

  async findPokemon({ id }) {
    let pokemon = await this.store.pokemon.findOne({ where: { id: id } })

    const abilities_id = parse(pokemon.dataValues.abilities, ",")
    const abilities = new Array()

    await Promise.all(
      abilities_id.map(async (ability_id) => {
        let ability = await this.store.abilities.findOne({
          attributes: ["id", "identifier"],
          where: { id: ability_id },
        })
        return abilities.push(ability)
      })
    )

    const ability_array = abilities.map((ability) => ({
      id: ability.dataValues.id,
      identifier: ability.dataValues.identifier,
    }))

    return { ...pokemon.dataValues, abilities: ability_array }
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
