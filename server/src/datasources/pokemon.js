const { RESTDataSource } = require("apollo-datasource-rest")

class pokemonAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = "https://pokeapi.co/api/v2/"
  }

  getIdFromURL(url) {
    const url_ = url.slice(0, -1) // removing the last character of the url (it's always "/")
    const id = url_.substring(url_.lastIndexOf("/") + 1)
    return !isNaN(id) ? id : -1
  }

  pokemonTypesReducer(pokemonTypes) {
    const types = pokemonTypes.map((type) => ({
      id: this.getIdFromURL(type.type.url),
      name: type.type.name,
    }))

    return types
  }

  pokemonStatsReducer(pokemonStats) {
    const stats = pokemonStats.map((stat) => ({
      id: this.getIdFromURL(stat.stat.url),
      name: stat.stat.name,
      base: stat.base_stat,
      effort: stat.effort,
    }))

    return stats
  }

  pokemonAbilitiesReducer(pokemonAbilities) {
    const abilities = pokemonAbilities.map((ability) => ({
      id: this.getIdFromURL(ability.ability.url),
      name: ability.ability.name,
      isHidden: ability.is_hidden,
    }))

    return abilities
  }

  pokemonVersionsReducer(pokemonVersions) {
    if (Array.isArray(pokemonVersions) && !pokemonVersions.length) {
      return [{ id: -1, name: "Not available" }] // this field seems to be missing for some generations
    }

    const versions = pokemonVersions.map((version) => ({
      id: this.getIdFromURL(version.version.url),
      name: version.version.name,
    }))

    return versions
  }

  pokemonMoveDetailsReducer(pokemonMoveDetails) {
    const details = pokemonMoveDetails.map((detail) => ({
      level: detail.level_learned_at,
      method: detail.move_learn_method.name,
      version: {
        id: this.getIdFromURL(detail.version_group.url),
        name: detail.version_group.name,
      },
    }))

    return details
  }

  pokemonMovesReducer(pokemonMoves) {
    const moves = pokemonMoves.map((move) => ({
      id: this.getIdFromURL(move.move.url),
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
      console.log("NIQUE TOUT")
    } else {
      // console.log(response)
    }
    return this.pokemonReducer(response)
  }

  typeDamageRelation(type) {
    if (Array.isArray(type) && !type.length) {
      return [{ id: -1, name: "Not available" }]
    }

    const relation = type.map((element) => ({
      id: this.getIdFromURL(element.url),
      name: element.name,
    }))
    return relation
  }

  typeVersion(type) {
    console.log(type)
    return {
      id: this.getIdFromURL(type.url),
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
      console.log("sapristi")
    } else {
      //console.log(response)
    }
    return this.typeReducer(response)
  }
}

module.exports = pokemonAPI
