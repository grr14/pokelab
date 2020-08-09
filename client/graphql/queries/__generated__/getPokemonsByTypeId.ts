/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPokemonsByTypeId
// ====================================================

export interface getPokemonsByTypeId_pokemonByTypeId {
  __typename: "Pokemon";
  id: number;
  identifier: string;
  type_1: number | null;
  type_2: number | null;
  picture: string | null;
}

export interface getPokemonsByTypeId {
  pokemonByTypeId: (getPokemonsByTypeId_pokemonByTypeId | null)[] | null;
}

export interface getPokemonsByTypeIdVariables {
  id: number;
}
