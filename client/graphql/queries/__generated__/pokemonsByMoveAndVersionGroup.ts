/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: pokemonsByMoveAndVersionGroup
// ====================================================

export interface pokemonsByMoveAndVersionGroup_pokemonsByMoveAndVersionGroup_moves {
  __typename: "MoveDetail";
  learning_method: number | null;
  level_learned: number | null;
}

export interface pokemonsByMoveAndVersionGroup_pokemonsByMoveAndVersionGroup {
  __typename: "Pokemon";
  id: number;
  identifier: string;
  type_1: number | null;
  type_2: number | null;
  picture: string | null;
  moves: (pokemonsByMoveAndVersionGroup_pokemonsByMoveAndVersionGroup_moves | null)[] | null;
}

export interface pokemonsByMoveAndVersionGroup {
  pokemonsByMoveAndVersionGroup: (pokemonsByMoveAndVersionGroup_pokemonsByMoveAndVersionGroup | null)[] | null;
}

export interface pokemonsByMoveAndVersionGroupVariables {
  moveId?: number | null;
  versionGroupId?: number | null;
}
