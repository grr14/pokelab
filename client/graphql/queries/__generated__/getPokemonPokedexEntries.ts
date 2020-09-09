/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPokemonPokedexEntries
// ====================================================

export interface getPokemonPokedexEntries_getPokemonPokedexEntries {
  __typename: "FlavorText";
  text: string | null;
  version_group: number | null;
}

export interface getPokemonPokedexEntries {
  getPokemonPokedexEntries: (getPokemonPokedexEntries_getPokemonPokedexEntries | null)[] | null;
}

export interface getPokemonPokedexEntriesVariables {
  id?: number | null;
}
