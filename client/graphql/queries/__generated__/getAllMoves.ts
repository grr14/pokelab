/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllMoves
// ====================================================

export interface getAllMoves_getAllMoves {
  __typename: "Move";
  id: number;
  identifier: string;
  generation_id: number | null;
  type_id: number | null;
  power: number | null;
  pp: number | null;
  accuracy: number | null;
  damage_class_id: number | null;
}

export interface getAllMoves {
  getAllMoves: (getAllMoves_getAllMoves | null)[] | null;
}
