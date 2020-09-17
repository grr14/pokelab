/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: movesById
// ====================================================

export interface movesById_moveById {
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

export interface movesById {
  moveById: movesById_moveById | null;
}

export interface movesByIdVariables {
  id?: number | null;
}
