/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllPokemon
// ====================================================

export interface getAllPokemon_getAllPokemons_types {
  __typename: "Type";
  id: number | null;
  name: string;
}

export interface getAllPokemon_getAllPokemons_stats {
  __typename: "Stat";
  id: number | null;
  name: string;
  base: number | null;
  effort: number | null;
}

export interface getAllPokemon_getAllPokemons_abilities {
  __typename: "Ability";
  id: number | null;
  name: string;
  isHidden: boolean | null;
}

export interface getAllPokemon_getAllPokemons_versions {
  __typename: "Version";
  id: number | null;
  name: string | null;
}

export interface getAllPokemon_getAllPokemons_moves_details_version {
  __typename: "Version";
  id: number | null;
  name: string | null;
}

export interface getAllPokemon_getAllPokemons_moves_details {
  __typename: "MoveDetails";
  level: number;
  method: string | null;
  version: getAllPokemon_getAllPokemons_moves_details_version | null;
}

export interface getAllPokemon_getAllPokemons_moves {
  __typename: "Move";
  id: number | null;
  name: string;
  details: (getAllPokemon_getAllPokemons_moves_details | null)[] | null;
}

export interface getAllPokemon_getAllPokemons_pictures {
  __typename: "Picture";
  name: string;
  url: string | null;
}

export interface getAllPokemon_getAllPokemons {
  __typename: "Pokemon";
  id: number | null;
  name: string;
  height: number | null;
  weight: number | null;
  types: (getAllPokemon_getAllPokemons_types | null)[] | null;
  stats: (getAllPokemon_getAllPokemons_stats | null)[] | null;
  abilities: (getAllPokemon_getAllPokemons_abilities | null)[] | null;
  versions: (getAllPokemon_getAllPokemons_versions | null)[] | null;
  moves: (getAllPokemon_getAllPokemons_moves | null)[] | null;
  pictures: (getAllPokemon_getAllPokemons_pictures | null)[] | null;
}

export interface getAllPokemon {
  getAllPokemons: (getAllPokemon_getAllPokemons | null)[] | null;
}

export interface getAllPokemonVariables {
  first?: number | null;
  last?: number | null;
}
