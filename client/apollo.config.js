module.exports = {
  client: {
    name: "pokelab-graph",
    includes: ["./graphql/**/*.graphql"],
    service: "pokelab-graph",
  },
}

// generate __generated__ files
// apollo client:codegen --target typescript --key service:pokelab-graph:QC_fG3_pSPQcZsLE5y_PLA
