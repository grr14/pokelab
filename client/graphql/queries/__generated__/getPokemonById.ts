/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPokemonById
// ====================================================

export interface getPokemonById_getPokemon_types {
  __typename: "Type";
  id: number | null;
  name: string;
}

export interface getPokemonById_getPokemon_stats {
  __typename: "Stat";
  id: number | null;
  name: string;
  base: number | null;
  effort: number | null;
}

export interface getPokemonById_getPokemon_abilities {
  __typename: "Ability";
  id: number | null;
  name: string;
  isHidden: boolean | null;
}

export interface getPokemonById_getPokemon_versions {
  __typename: "Version";
  id: number | null;
  name: string | null;
}

export interface getPokemonById_getPokemon_moves_details_version {
  __typename: "Version";
  id: number | null;
  name: string | null;
}

export interface getPokemonById_getPokemon_moves_details {
  __typename: "MoveDetails";
  level: number;
  method: string | null;
  version: getPokemonById_getPokemon_moves_details_version | null;
}

export interface getPokemonById_getPokemon_moves {
  __typename: "Move";
  id: number | null;
  name: string;
  details: (getPokemonById_getPokemon_moves_details | null)[] | null;
}

export interface getPokemonById_getPokemon_pictures {
  __typename: "Picture";
  name: string;
  url: string | null;
}

export interface getPokemonById_getPokemon {
  __typename: "Pokemon";
  id: number | null;
  name: string;
  height: number | null;
  weight: number | null;
  types: (getPokemonById_getPokemon_types | null)[] | null;
  stats: (getPokemonById_getPokemon_stats | null)[] | null;
  abilities: (getPokemonById_getPokemon_abilities | null)[] | null;
  versions: (getPokemonById_getPokemon_versions | null)[] | null;
  moves: (getPokemonById_getPokemon_moves | null)[] | null;
  pictures: (getPokemonById_getPokemon_pictures | null)[] | null;
}

export interface getPokemonById {
  getPokemon: getPokemonById_getPokemon | null;
}

export interface getPokemonByIdVariables {
  id: number;
}
