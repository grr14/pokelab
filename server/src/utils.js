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
    database: "dl0r555gq11tv",
    username: "ewwqzhqyeifqfn",
    password:
      "9e9c048a8e32af9a917026b426b00fa8f7117894ccf30e2a47801b7691b61bfb",
    host: "ec2-54-217-206-236.eu-west-1.compute.amazonaws.com",
    port: 5432,
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
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_default: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  })

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

  db.getQueryInterface()
    .showAllSchemas()
    .then((tableObj) => {
      console.log("// Tables in database", "==========================")
      console.log(tableObj)
    })
    .catch((err) => {
      console.log("showAllSchemas ERROR", err)
    })

  return { db, pokemon, region, language, language_names }
}
