const { RESTDataSource } = require("apollo-datasource-rest")

class pokemonAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = "https://pokeapi.co/api/v2/pokemon/"
  }

  getIdFromURL(url) {
    const url_ = url.slice(0, -1) // removing the last character of the url (it's always "/")
    const id = url_.substring(url_.lastIndexOf("/") + 1)
    return !isNaN(id) ? id : -1
  }

  pokemonTypeReducer(pokemonTypes) {
    const types = pokemonTypes.map((type) => ({
      id: this.getIdFromURL(type.type.url),
      name: type.type.name,
    }))

    return types
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
    const types = this.pokemonTypeReducer(pokemon.types)
    const abilities = this.pokemonAbilitiesReducer(pokemon.abilities)
    const versions = this.pokemonVersionsReducer(pokemon.game_indices)
    const pictures = this.pokemonPicturesReducer(pokemon.sprites)

    return {
      id: pokemon.id,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      types: types,
      abilities: abilities,
      versions: versions,
      pictures: pictures,
    }
  }

  async getPokemonById(id) {
    const response = await this.get(`${id}`)
    if (response == null) {
      console.log("NIQUE TOUT")
    } else {
      console.log(response)
    }
    return this.pokemonReducer(response)
  }
}

module.exports = pokemonAPI
