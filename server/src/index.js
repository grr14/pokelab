const { ApolloServer, gql } = require("apollo-server")
const typeDefs = require("./schema")
const resolvers = require("./resolvers")
const pokemonAPI = require("./datasources/pokemon")

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
