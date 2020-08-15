/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPokemonById
// ====================================================

export interface getPokemonById_pokemon_abilities {
  __typename: "Ability";
  id: number;
  identifier: string;
}

export interface getPokemonById_pokemon {
  __typename: "Pokemon";
  id: number;
  identifier: string;
  species_id: number | null;
  height: number | null;
  weight: number | null;
  base_experience: number | null;
  ordre: number | null;
  is_default: number | null;
  type_1: number | null;
  type_2: number | null;
  abilities: (getPokemonById_pokemon_abilities | null)[] | null;
  picture: string | null;
  evolution_chain_id: number | null;
}

export interface getPokemonById {
  pokemon: getPokemonById_pokemon | null;
}

export interface getPokemonByIdVariables {
  id: number;
}
