/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: moveById
// ====================================================

export interface moveById_moveById_flavor_textes {
  __typename: "FlavorText";
  text: string | null;
  version_group: number | null;
}

export interface moveById_moveById_detailed_effect {
  __typename: "FlavorText";
  text: string | null;
}

export interface moveById_moveById {
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
  flavor_textes: (moveById_moveById_flavor_textes | null)[] | null;
  detailed_effect: moveById_moveById_detailed_effect | null;
}

export interface moveById {
  moveById: moveById_moveById | null;
}

export interface moveByIdVariables {
  id?: number | null;
}
