/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: pokemonsInRange
// ====================================================

export interface pokemonsInRange_pokemonsInRange {
  __typename: "Pokemon";
  id: number;
  identifier: string;
  type_1: number | null;
  type_2: number | null;
  picture: string | null;
}

export interface pokemonsInRange {
  pokemonsInRange: (pokemonsInRange_pokemonsInRange | null)[] | null;
}

export interface pokemonsInRangeVariables {
  firstId?: number | null;
  lastId?: number | null;
}
