const { DataSource } = require("apollo-datasource")
const { parse, isEmptyArray } = require("../utils")
const { Op } = require("sequelize")
const _ = require("lodash")

const NB_POKEMON = 807
const NB_TYPES = 18
const NB_EVOLVE_CHAIN = 427
const NB_ABILITIES = 233
const NB_MOVES = 728
const NB_VERSION_GROUP = 18

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
        let hidden = await this.store.pokemon_abilities.findOne({
          attributes: ["is_hidden"],
          where: {
            [Op.and]: [
              {
                pokemon_id: id,
              },
              {
                ability_id: ability_id,
              },
            ],
          },
        })

        const final_ab = {
          id: ability.id,
          identifier: ability.identifier,
          is_hidden: hidden.is_hidden,
        }
        return abilities.push(final_ab)
      })
    )

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
      abilities: abilities,
      evolution: !!evolution ? evolution.dataValues : null,
      pokedex_numbers: reducedPokedexNumbersNames,
      moves: null,
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
    if (id > NB_ABILITIES) {
      return null
    }
    const ability = await this.store.abilities.findOne({ where: { id: id } })
    const texts = await this.store.ability_flavor_text.findAll({
      where: { ability_id: id },
    })

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
  abilities LIKE '%,id' or abilites = 'id;*/
  async getPokemonByAbilityId({ id }) {
    if (id > NB_ABILITIES) {
      return null
    }

    const pokemons = await this.store.pokemon.findAll({
      attributes: ["id", "identifier", "type_1", "type_2", "picture"],
      where: {
        [Op.or]: [
          { abilities: { [Op.like]: `${id},%` } },
          { abilities: { [Op.like]: `%,${id},%` } },
          { abilities: { [Op.like]: `%,${id}` } },
          { abilities: { [Op.eq]: `${id}` } },
        ],
      },
    })

    let hidden = []
    await Promise.all(
      pokemons.map(async (pokemon) => {
        let tmp = await this.store.pokemon_abilities.findOne({
          attributes: ["pokemon_id", "is_hidden"],
          where: {
            [Op.and]: [{ pokemon_id: pokemon.id }, { ability_id: id }],
          },
        })

        return hidden.push(tmp)
      })
    )

    return pokemons.map((pokemon, idx) => ({
      id: pokemon.id,
      identifier: pokemon.identifier,
      type_1: pokemon.type_1,
      type_2: pokemon.type_2,
      picture: pokemon.picture,
      abilities: [
        {
          is_hidden:
            hidden[hidden.findIndex((el) => el.pokemon_id === pokemon.id)]
              .is_hidden,
        } /* we dont care about the pokemon's other abilities in this query */,
      ],
    }))
  }

  async getAllAbilities() {
    const abilities = await this.store.abilities.findAll({
      attributes: ["id", "identifier", "generation_id"],
      order: [["id", "ASC"]],
    })

    const reduceAbility = abilities.map((el) => ({
      id: el.id,
      identifier: el.identifier,
      generation: el.generation_id,
    }))

    return reduceAbility
  }

  async pokemonPokedexEntries({ id }) {
    const entries = await this.store.pokedex_entries.findAll({
      where: { species_id: id },
    })

    return entries.map((entry) => ({
      version_group: entry.version_id,
      text: entry.flavor_text,
    }))
  }

  async getMoveById({ id }) {
    if (id > NB_MOVES) {
      return null
    }

    const move = await this.store.moves.findOne({
      where: { id: id },
    })

    const flavor_textes = await this.store.move_flavor_text.findAll({
      attributes: ["version_group_id", "flavor_text"],
      where: { move_id: id },
      order: [["version_group_id", "ASC"]],
    })

    const detailed_text = await this.store.move_detailed_text.findOne({
      where: { id: move.effect_id },
    })

    return {
      ...move.dataValues,
      flavor_textes: flavor_textes.map((ft) => ({
        version_group: ft.version_group_id,
        text: ft.flavor_text,
      })),
      detailed_effect: {
        text: detailed_text != null ? detailed_text.effect : null,
      },
    }
  }

  async getMovesByPokemonAndVersion({ pokemonId, versionId }) {
    const movesDetails = await this.store.pokemon_moves.findAll({
      attributes: ["move_id", "pokemon_move_method_id", "level", "order"],
      where: {
        [Op.and]: [{ pokemon_id: pokemonId }, { version_group_id: versionId }],
      },
      order: [
        ["pokemon_move_method_id", "ASC"],
        ["level", "ASC"],
      ],
    })

    const moves = []

    await Promise.all(
      movesDetails.map(async (moveD) => {
        let tmp = await this.store.moves.findOne({
          where: { id: moveD.move_id },
        })
        return moves.push({
          id: tmp.id,
          identifier: tmp.identifier,
          generation_id: tmp.generation_id,
          type_id: tmp.type_id,
          power: tmp.power,
          pp: tmp.pp,
          accuracy: tmp.accuracy,
          priority: tmp.priority,
          target_id: tmp.target_id,
          damage_class_id: tmp.damage_class_id,
          effect_id: tmp.effect_id,
          effect_chance: tmp.effect_chance,
        })
      })
    )

    const allMoves = movesDetails.map((move, idx) => {
      return {
        learning_method: move.pokemon_move_method_id,
        level_learned: move.level,
        order: move.order,
        move: moves[idx],
      }
    })

    return allMoves
  }

  async getAllMoves() {
    const moves = await this.store.moves.findAll({
      where: { id: { [Op.lte]: NB_MOVES } },
    })

    return moves.map((move) => ({ ...move.dataValues, flavor_textes: null }))
  }

  async getPokemonsByMoveAndVersionGroup({ moveId, versionGroupId }) {
    if (moveId > NB_MOVES || versionGroupId > NB_VERSION_GROUP) {
      return null
    }
    const allMovesInfos = await this.store.pokemon_moves.findAll({
      attributes: ["pokemon_id", "pokemon_move_method_id", "level"],
      where: {
        [Op.and]: [{ move_id: moveId }, { version_group_id: versionGroupId }],
      },
      order: [["pokemon_id", "ASC"]],
    })

    const reduced = _(allMovesInfos).groupBy("pokemon_id").value()
    const evenMoreReduced = _.map(reduced, (el) => el).map((array) => ({
      id: array.map((el) => el.pokemon_id)[0],
      moves: array.map((el) => ({
        learning_method: el.pokemon_move_method_id,
        level_learned: el.level,
      })),
    }))

    const pokemons = []
    await Promise.all(
      evenMoreReduced.map(async (moveDetail) => {
        let pokemon = await this.store.pokemon.findOne({
          attributes: ["id", "identifier", "type_1", "type_2", "picture"],
          where: {
            id: moveDetail.id,
          },
          order: [["id", "ASC"]],
        })
        return pokemons.push(pokemon)
      })
    )

    return pokemons
      .map((pokemon) => {
        return {
          id: pokemon.id,
          identifier: pokemon.identifier,
          type_1: pokemon.type_1,
          type_2: pokemon.type_2,
          picture: pokemon.picture,
          moves:
            evenMoreReduced[
              evenMoreReduced.findIndex((el) => el.id === pokemon.id)
            ].moves,
        }
      })
      .sort((a, b) => a.id - b.id)
  }
}

module.exports = pokemonDB
