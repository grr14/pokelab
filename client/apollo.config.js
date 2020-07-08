module.exports = {
  client: {
    name: "pokelab-graph",
    includes: ["./graphql/**/*.graphql"],
    service: "pokelab-graph",
  },
}

// generate __generated__ files
// apollo client:codegen --target typescript --key service:pokelabGraph:VQTg0LS5hZUH2BkLmDtPbw
