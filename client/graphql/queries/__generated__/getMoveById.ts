/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMoveById
// ====================================================

export interface getMoveById_getMove_appearedIn {
  __typename: "Version";
  id: number | null;
  name: string | null;
}

export interface getMoveById_getMove_class {
  __typename: "MoveClass";
  id: number | null;
  name: string | null;
}

export interface getMoveById_getMove_type {
  __typename: "Type";
  id: number | null;
  name: string;
}

export interface getMoveById_getMove_statsChanges {
  __typename: "Stat";
  id: number | null;
  name: string;
  changeValue: number | null;
}

export interface getMoveById_getMove_metadata {
  __typename: "MoveMetadata";
  statusChange: string | null;
  statusChangeChance: number | null;
  critRate: number | null;
  drain: number | null;
  flinchChance: number | null;
  healing: number | null;
  maxHits: number | null;
  maxTurns: number | null;
  minHits: number | null;
  minTurns: number | null;
  category: string | null;
  targetStatsChange: number | null;
}

export interface getMoveById_getMove {
  __typename: "Move";
  id: number | null;
  name: string;
  flavorText: string | null;
  appearedIn: getMoveById_getMove_appearedIn | null;
  class: getMoveById_getMove_class | null;
  type: getMoveById_getMove_type | null;
  power: number | null;
  pp: number | null;
  accuracy: number | null;
  priority: number | null;
  statsChanges: (getMoveById_getMove_statsChanges | null)[] | null;
  metadata: getMoveById_getMove_metadata | null;
}

export interface getMoveById {
  getMove: getMoveById_getMove | null;
}

export interface getMoveByIdVariables {
  id: number;
}
