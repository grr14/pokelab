const { RESTDataSource } = require("apollo-datasource-rest")
const { getIdFromURL, isEmptyArray } = require("../utils.js")

class pokemonAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = "https://pokeapi.co/api/v2/"
  }

  pokemonTypesReducer(pokemonTypes) {
    const types = pokemonTypes.map((type) => ({
      id: getIdFromURL(type.type.url),
      name: type.type.name,
    }))

    return types
  }

  pokemonStatsReducer(pokemonStats) {
    const stats = pokemonStats.map((stat) => ({
      id: getIdFromURL(stat.stat.url),
      name: stat.stat.name,
      base: stat.base_stat,
      effort: stat.effort,
    }))

    return stats
  }

  pokemonAbilitiesReducer(pokemonAbilities) {
    const abilities = pokemonAbilities.map((ability) => ({
      id: getIdFromURL(ability.ability.url),
      name: ability.ability.name,
      isHidden: ability.is_hidden,
    }))

    return abilities
  }

  pokemonVersionsReducer(pokemonVersions) {
    if (isEmptyArray(pokemonVersions)) {
      return [{ id: -1, name: "Not available" }] // this field seems to be missing for some generations
    }

    const versions = pokemonVersions.map((version) => ({
      id: getIdFromURL(version.version.url),
      name: version.version.name,
    }))

    return versions
  }

  pokemonMoveDetailsReducer(pokemonMoveDetails) {
    const details = pokemonMoveDetails.map((detail) => ({
      level: detail.level_learned_at,
      method: detail.move_learn_method.name,
      version: {
        id: getIdFromURL(detail.version_group.url),
        name: detail.version_group.name,
      },
    }))

    return details
  }

  pokemonMovesReducer(pokemonMoves) {
    const moves = pokemonMoves.map((move) => ({
      id: getIdFromURL(move.move.url),
      name: move.move.name,
      details: this.pokemonMoveDetailsReducer(move.version_group_details),
    }))

    return moves
  }

  pokemonPicturesReducer(pokemonPictures) {
    const pictures = new Array()
    for (const [key, value] of Object.entries(pokemonPictures)) {
      let tmp_obj = {
        name: key,
        url: value,
      }
      pictures.push(tmp_obj)
    }
    return pictures
  }

  pokemonReducer(pokemon) {
    return {
      id: pokemon.id,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      baseExperience: pokemon.base_experience,
      types: this.pokemonTypesReducer(pokemon.types),
      stats: this.pokemonStatsReducer(pokemon.stats),
      abilities: this.pokemonAbilitiesReducer(pokemon.abilities),
      versions: this.pokemonVersionsReducer(pokemon.game_indices),
      moves: this.pokemonMovesReducer(pokemon.moves),
      pictures: this.pokemonPicturesReducer(pokemon.sprites),
    }
  }

  async getPokemonById(id) {
    const response = await this.get(`pokemon/${id}`)
    if (response == null) {
      return null
    }
    return this.pokemonReducer(response)
  }

  async getAllPokemonsUpTo(first, last) {
    if (first > last) {
      ;[first, last] = [last, first]
    }

    const pokemonArray = new Array()

    for (let i = first; i <= last; i++) {
      const pokemon = this.getPokemonById(i)
      pokemonArray.push(pokemon)
    }
    return pokemonArray
  }

  typeDamageRelation(type) {
    if (isEmptyArray(type)) {
      return [{ id: -1, name: "Not available" }]
    }

    const relation = type.map((element) => ({
      id: getIdFromURL(element.url),
      name: element.name,
    }))
    return relation
  }

  typeVersion(type) {
    return {
      id: getIdFromURL(type.url),
      name: type.name,
    }
  }

  typeReducer(type) {
    return {
      id: type.id,
      name: type.name,
      weakTo: this.typeDamageRelation(type.damage_relations.double_damage_from),
      resistantTo: this.typeDamageRelation(
        type.damage_relations.half_damage_from
      ),
      strongAgainst: this.typeDamageRelation(
        type.damage_relations.double_damage_to
      ),
      weakAgainst: this.typeDamageRelation(
        type.damage_relations.half_damage_to
      ),
      cannotDoDamageTo: this.typeDamageRelation(
        type.damage_relations.no_damage_to
      ),
      cannotTakeDamageFrom: this.typeDamageRelation(
        type.damage_relations.no_damage_from
      ),
      appearedIn: this.typeVersion(type.generation),
    }
  }

  async getTypeById(id) {
    const response = await this.get(`type/${id}`)
    if (response == null) {
      return null
    }
    return this.typeReducer(response)
  }

  moveFlavorText(move) {
    if (isEmptyArray(move.flavor_text_entries)) {
      return "No flavor text available."
    }

    const englishFlavorTextes = move.flavor_text_entries.filter(function (
      text
    ) {
      if (text.language.name !== "en") {
        return false
      }
      return true
    }) // sometimes another language than english appears first..

    return isEmptyArray(englishFlavorTextes)
      ? "No flavor text available"
      : englishFlavorTextes[0].flavor_text
  }

  moveMetadata(move) {
    return {
      statusChange: move.meta.ailment.name,
      statusChangeChance: move.meta.ailment_chance,
      critRate: move.meta.crit_rate,
      drain: move.meta.drain,
      flinchChance: move.meta.flinch_chance,
      healing: move.meta.healing,
      maxHits: move.meta.max_hits != null ? move.meta.max_hits : 1,
      maxTurns: move.meta.max_turns != null ? move.meta.max_turns : 1,
      minHits: move.meta.min_hits != null ? move.meta.min_hits : 1,
      minTurns: move.meta.min_turns != null ? move.meta.min_turns : 1,
      category: move.meta.category.name,
      targetStatsChange: move.meta.stat_chance,
    }
  }

  moveStatsChange(move) {
    if (isEmptyArray(move)) {
      return [{ id: -1, name: "No stat changes", changeValue: 0 }]
    }

    const statsChanges = move.map((stat) => ({
      id: getIdFromURL(stat.stat.url),
      name: stat.stat.name,
      changeValue: stat.change != null ? stat.change : 0,
    }))

    return statsChanges
  }

  moveReducer(move) {
    return {
      id: move.id,
      name: move.name,
      flavorText: this.moveFlavorText(move),
      appearedIn: {
        id: getIdFromURL(move.generation.url),
        name: move.generation.name,
      },
      class: {
        id: getIdFromURL(move.damage_class.url),
        name: move.damage_class.name,
      },
      type: {
        id: getIdFromURL(move.type.url),
        name: move.type.name,
      },
      power: move.power,
      pp: move.pp,
      accuracy: move.accuracy != null ? move.accuracy : 200,
      priority: move.priority,
      statsChanges: this.moveStatsChange(move.stat_changes),
      metadata: this.moveMetadata(move),
    }
  }

  async getMoveById(id) {
    const response = await this.get(`move/${id}`)
    if (response == null) {
      return null
    }
    return this.moveReducer(response)
  }
}

module.exports = pokemonAPI
