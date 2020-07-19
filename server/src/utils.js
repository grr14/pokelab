const { Sequelize, DataTypes } = require("sequelize")

function getIdFromURL(url) {
  const url_ = url.slice(0, -1) // removing the last character of the url (it's always "/")
  const id = url_.substring(url_.lastIndexOf("/") + 1)
  return !isNaN(id) ? id : -1
}

function isEmptyArray(array) {
  return Array.isArray(array) && !array.length ? true : false
}

module.exports = {
  getIdFromURL: getIdFromURL,
  isEmptyArray: isEmptyArray,
}

module.exports.createStore = () => {
  const db = new Sequelize({
    database: "pokemon",
    username: "admin",
    password: "fba6FkB3ucaKX",
    host: "rg225961-001.dbaas.ovh.net",
    port: 35614,
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
    const auth = db.authenticate()
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

  const language = db.define("languages", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    iso639: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    iso3166: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    identifier: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    official: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ordre: {
      type: DataTypes.INTEGER,
    },
  })

  const language_names = db.define("language_names", {
    language_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: "language",
      referencesKey: "id",
    },
    local_language_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: "language",
      referencesKey: "id",
    },
    name: {
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

  return { db, pokemon, sprites /*region, language, language_names*/ }
}
