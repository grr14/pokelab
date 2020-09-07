/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: pokemonsByAbilityId
// ====================================================

export interface pokemonsByAbilityId_pokemonsByAbilityId_abilities {
  __typename: "Ability";
  is_hidden: number | null;
}

export interface pokemonsByAbilityId_pokemonsByAbilityId {
  __typename: "Pokemon";
  id: number;
  identifier: string;
  type_1: number | null;
  type_2: number | null;
  picture: string | null;
  abilities: (pokemonsByAbilityId_pokemonsByAbilityId_abilities | null)[] | null;
}

export interface pokemonsByAbilityId {
  pokemonsByAbilityId: (pokemonsByAbilityId_pokemonsByAbilityId | null)[] | null;
}

export interface pokemonsByAbilityIdVariables {
  id?: number | null;
}
