const { DataSource } = require("apollo-datasource")
const { parse, isEmptyArray } = require("../utils")
const { Op } = require("sequelize")

const NB_POKEMON = 807
const NB_TYPES = 18
const NB_EVOLVE_CHAIN = 427

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

    const evolution = await this.store.evolutions.findOne({
      where: { evolved_pokemon_id: id },
    })

    const pokedexNumbers = await this.store.pokedex_numbers.findAll({
      attributes: ["pokedex_id", "pokedex_number"],
      where: { species_id: id },
    })
    const reducedPokedexNumbersNames = pokedexNumbers.map((el) => ({
      id: el.pokedex_id,
      pokemon_number: el.pokedex_number,
    }))

    return {
      ...pokemon.dataValues,
      abilities: ability_array,
      evolution: !!evolution ? evolution.dataValues : null,
      pokedex_numbers: reducedPokedexNumbersNames,
    }
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

    return pokemons
  }

  async getPokemonSprites({ id }) {
    const sprites = await this.store.sprites.findAll({
      where: { pokemon_id: id },
    })
    if (isEmptyArray(sprites)) {
      return null
    }

    return sprites
  }

  async getPokemonEvolveChain({ id }) {
    if (id > NB_EVOLVE_CHAIN) {
      return null
    }
    const allEvolutionChain = await this.store.pokemon.findAll({
      attributes: [
        "id",
        "identifier",
        "type_1",
        "type_2",
        "evolve_from_pokemon_id",
        "evolution_chain_id",
        "picture",
      ],
      where: { evolution_chain_id: id },
      order: [["ordre", "ASC"]],
    })

    let allEvolutionsDatas
    await Promise.all(
      (allEvolutionsDatas = allEvolutionChain.map(async (pokemon) => {
        let evolution = await this.store.evolutions.findOne({
          where: { evolved_pokemon_id: pokemon.id },
        })
        let p = {
          ...pokemon.dataValues,
          evolution: !!evolution ? evolution.dataValues : null,
        }
        return p
      }))
    )

    return allEvolutionsDatas
  }

  reduceAbility(ability, texts) {
    const flavor_textes = texts.map((el) => ({
      version_group: el.version_group_id,
      text: el.flavor_text,
    }))

    return {
      id: ability.id,
      identifier: ability.identifier,
      generation: ability.generation_id,
      effect: ability.effect,
      flavor_textes: flavor_textes,
    }
  }

  async getAbilityById({ id }) {
    const ability = await this.store.abilities.findOne({ where: { id: id } })
    const texts = await this.store.ability_flavor_text.findAll({
      where: { ability_id: id },
    })

    console.log(`ability=${JSON.stringify(ability)}`)
    console.log(`texts=${JSON.stringify(texts)}`)

    return this.reduceAbility(ability, texts)
  }

  async getStatsById({ id }) {
    if (id < 0 || id > NB_POKEMON) return null

    const statsName = [
      "hp",
      "attack",
      "defense",
      "special_attack",
      "special_defense",
      "speed",
    ]
    const pokemonStats = await this.store.stats.findAll({
      where: { pokemon_id: id },
    })

    const reducedStats = pokemonStats.map((stat) => ({
      base_stat: stat.dataValues.base_stat,
      effort: stat.dataValues.effort,
    }))

    let stats = {}
    for (let i = 0; i < 6; i++) {
      stats[statsName[i]] = reducedStats[i]
    }

    return stats
  }

  /* select id, identifier,... from pokemon where
  abilities LIKE 'id%' OR abilities LIKE '%,id,%' OR
  abilities LIKE '%,id' ;*/
  async getPokemonByAbilityId({ id }) {
    const pokemons = await this.store.pokemon.findAll({
      attributes: ["id", "identifier", "type_1", "type_2", "picture"],
      where: {
        [Op.or]: [
          { abilities: { [Op.like]: `${id}%` } },
          { abilities: { [Op.like]: `%,${id},%` } },
          { abilities: { [Op.like]: `%,${id}` } },
        ],
      },
    })

    return pokemons
  }
}

module.exports = pokemonDB
