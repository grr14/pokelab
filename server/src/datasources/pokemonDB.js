const { DataSource } = require("apollo-datasource")
const { parse } = require("../utils")
const { Op } = require("sequelize")

const NB_POKEMON = 807
const NB_TYPES = 18

class pokemonDB extends DataSource {
  constructor({ store }) {
    super()
    this.store = store
  }

  async findPokemonPartial({ id }) {
    if (id < 0 || id > NB_POKEMON) return null

    let pokemon = await this.store.pokemon.findOne({
      attributes: ["id", "identifier", "picture"],
      where: { id: id },
    })

    return pokemon
  }

  async findPokemon({ id }) {
    if (id < 0 || id > NB_POKEMON) return null

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

  async findPokemonsByTypeId({ id }) {
    if (id < 0 || id > NB_TYPES) {
      return null
    }

    const pokemons = await this.store.pokemon.findAll({
      attributes: ["id", "identifier", "type_1", "type_2", "picture"],
      where: {
        [Op.or]: [{ type_1: id }, { type_2: id }],
      },
    })

    //console.log(pokemons)

    return pokemons
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
          text: ability.flavor_text_1 != null ? ability.flavor_text_1 : null,
          appear_in: text_changes.length < 1 ? null : text_changes[0],
        },
        {
          text: ability.flavor_text_2 != null ? ability.flavor_text_2 : null,
          appear_in: text_changes.length < 2 ? null : text_changes[1],
        },
        {
          text: ability.flavor_text_3 != null ? ability.flavor_text_3 : null,
          appear_in: text_changes.length < 3 ? null : text_changes[2],
        },
        {
          text: ability.flavor_text_4 != null ? ability.flavor_text_4 : null,
          appear_in: text_changes.length < 4 ? null : text_changes[3],
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
