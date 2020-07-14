require("dotenv").config()

const { ApolloServer } = require("apollo-server")
const typeDefs = require("./schema")
const resolvers = require("./resolvers")
const pokemonAPI = require("./datasources/pokemon")
const pokemonDB = require("./datasources/pokemonDB")

const { createStore } = require("./utils")
const store = createStore()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    pokemonAPI: new pokemonAPI(),
    pokemonDB: new pokemonDB({ store }),
  }),
  engine: {
    reportSchema: true,
  },
})

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
