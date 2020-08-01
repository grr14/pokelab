/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPokemonPartialById
// ====================================================

export interface getPokemonPartialById_pokemonPartial {
  __typename: "Pokemon";
  id: number;
  identifier: string;
  picture: string | null;
}

export interface getPokemonPartialById {
  pokemonPartial: getPokemonPartialById_pokemonPartial | null;
}

export interface getPokemonPartialByIdVariables {
  id: number;
}
