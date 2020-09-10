/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: movesByPokemonAndVersion
// ====================================================

export interface movesByPokemonAndVersion_movesByPokemonAndVersion_move {
  __typename: "Move";
  id: number;
  identifier: string;
  generation_id: number | null;
  type_id: number | null;
  power: number | null;
  pp: number | null;
  accuracy: number | null;
  priority: number | null;
  target_id: number | null;
  damage_class_id: number | null;
  effect_id: number | null;
  effect_chance: number | null;
}

export interface movesByPokemonAndVersion_movesByPokemonAndVersion {
  __typename: "MoveDetail";
  learning_method: number | null;
  level_learned: number | null;
  order: number | null;
  move: movesByPokemonAndVersion_movesByPokemonAndVersion_move | null;
}

export interface movesByPokemonAndVersion {
  movesByPokemonAndVersion: (movesByPokemonAndVersion_movesByPokemonAndVersion | null)[] | null;
}

export interface movesByPokemonAndVersionVariables {
  pokemonId?: number | null;
  versionId?: number | null;
}
