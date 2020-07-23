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
      allowNull: false,
    },
    abilities: {
      type: DataTypes.STRING,
    },
    picture: {
      type: DataTypes.STRING,
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
    flavor_text_1: {
      type: DataTypes.STRING,
    },
    flavor_text_2: {
      type: DataTypes.STRING,
    },
    flavor_text_3: {
      type: DataTypes.STRING,
    },
    flavor_text_4: {
      type: DataTypes.STRING,
    },
    text_changed_in_version: {
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

  return { db, pokemon, sprites, abilities, pokemon_abilities /*region,*/ }
}
