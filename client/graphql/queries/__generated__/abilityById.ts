/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: abilityById
// ====================================================

export interface abilityById_abilityById_flavor_textes {
  __typename: "FlavorText";
  text: string | null;
  version_group: number | null;
}

export interface abilityById_abilityById {
  __typename: "Ability";
  id: number;
  identifier: string;
  effect: string | null;
  flavor_textes: (abilityById_abilityById_flavor_textes | null)[] | null;
}

export interface abilityById {
  abilityById: abilityById_abilityById | null;
}

export interface abilityByIdVariables {
  id?: number | null;
}
