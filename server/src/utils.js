require("dotenv").config()
const { Sequelize, DataTypes } = require("sequelize")

function getIdFromURL(url) {
  const url_ = url.slice(0, -1) // removing the last character of the url (it's always "/")
  const id = url_.substring(url_.lastIndexOf("/") + 1)
  return !isNaN(id) ? id : -1
}

function isEmptyArray(array) {
  return Array.isArray(array) && !array.length ? true : false
}

function parse(str, separator) {
  if (str == null) {
    return []
  }
  return str.split(separator)
}

module.exports = {
  getIdFromURL: getIdFromURL,
  isEmptyArray: isEmptyArray,
  parse: parse,
}

module.exports.createStore = () => {
  const db = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // <<<<<<< YOU NEED THIS
      },
    },
    define: {
      timestamps: false, // sequelize adds timestamp colums
      freezeTableName: true, // sequelize add 's' to columns name by default
    },
  })

  try {
    db.authenticate()
    console.log("Connection has been established successfully.")
  } catch (error) {
    console.error("Unable to connect to the database:", error)
  }

  const region = db.define("regions", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    identifier: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })

  const pokemon = db.define("pokemon", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    identifier: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    species_id: {
      type: DataTypes.INTEGER,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    base_experience: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ordre: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_default: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type_1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type_2: {
      type: DataTypes.INTEGER,
    },
    abilities: {
      type: DataTypes.STRING,
    },
    evolve_from_pokemon_id: {
      type: DataTypes.INTEGER,
    },
    evolution_chain_id: {
      type: DataTypes.INTEGER,
    },
    category: {
      type: DataTypes.STRING,
    },
    picture: {
      type: DataTypes.STRING,
    },
    gender_distribution: {
      type: DataTypes.INTEGER,
    },
    capture_rate: {
      type: DataTypes.INTEGER,
    },
    base_happiness: {
      type: DataTypes.INTEGER,
    },
    growth_rate: {
      type: DataTypes.INTEGER,
    },
  })

  const sprites = db.define("pokemon_sprites", {
    pokemon_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sprite_url: {
      type: DataTypes.STRING,
    },
  })
  sprites.removeAttribute("id")

  const abilities = db.define("abilities", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    identifier: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    generation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    effect: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })

  const pokemon_abilities = db.define("pokemon_abilities", {
    pokemon_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    ability_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    is_hidden: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    slot: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  })

  const ability_flavor_text = db.define("ability_flavor_text", {
    ability_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    version_group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    flavor_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
  ability_flavor_text.removeAttribute("id")

  const evolutions = db.define("pokemon_evolution", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    evolved_pokemon_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    evolution_trigger: {
      type: DataTypes.INTEGER,
    },
    trigger_item: {
      type: DataTypes.INTEGER,
    },
    minimum_level: {
      type: DataTypes.INTEGER,
    },
    gender: {
      type: DataTypes.INTEGER,
    },
    location: {
      type: DataTypes.INTEGER,
    },
    held_item: {
      type: DataTypes.INTEGER,
    },
    time_of_day: {
      type: DataTypes.STRING,
    },
    known_move: {
      type: DataTypes.INTEGER,
    },
    known_move_type: {
      type: DataTypes.INTEGER,
    },
    minimum_happiness: {
      type: DataTypes.INTEGER,
    },
    minimum_beauty: {
      type: DataTypes.INTEGER,
    },
    minimum_affection: {
      type: DataTypes.INTEGER,
    },
    physical_stats: {
      type: DataTypes.INTEGER,
    },
    pokemon_in_party: {
      type: DataTypes.INTEGER,
    },
    pokemon_type_in_party: {
      type: DataTypes.INTEGER,
    },
    trading_species: {
      type: DataTypes.INTEGER,
    },
    overworld_rain: {
      type: DataTypes.INTEGER,
    },
    device_upside_down: {
      type: DataTypes.INTEGER,
    },
  })

  const stats = db.define("pokemon_stats", {
    pokemon_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stat_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    base_stat: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    effort: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  })
  stats.removeAttribute("id")

  const pokedex_numbers = db.define("pokemon_dex_numbers", {
    species_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pokedex_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pokedex_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  })
  pokedex_numbers.removeAttribute("id")

  return {
    db,
    pokemon,
    sprites,
    abilities,
    pokemon_abilities,
    ability_flavor_text,
    evolutions,
    stats,
    pokedex_numbers,
  }
}
