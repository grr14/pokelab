/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getTypeById
// ====================================================

export interface getTypeById_getType_weakTo {
  __typename: "Type";
  id: number | null;
  name: string;
}

export interface getTypeById_getType_resistantTo {
  __typename: "Type";
  id: number | null;
  name: string;
}

export interface getTypeById_getType_strongAgainst {
  __typename: "Type";
  id: number | null;
  name: string;
}

export interface getTypeById_getType_weakAgainst {
  __typename: "Type";
  id: number | null;
  name: string;
}

export interface getTypeById_getType_cannotDoDamageTo {
  __typename: "Type";
  id: number | null;
  name: string;
}

export interface getTypeById_getType_cannotTakeDamageFrom {
  __typename: "Type";
  id: number | null;
  name: string;
}

export interface getTypeById_getType_appearedIn {
  __typename: "Version";
  id: number | null;
  name: string | null;
}

export interface getTypeById_getType {
  __typename: "Type";
  id: number | null;
  name: string;
  weakTo: (getTypeById_getType_weakTo | null)[] | null;
  resistantTo: (getTypeById_getType_resistantTo | null)[] | null;
  strongAgainst: (getTypeById_getType_strongAgainst | null)[] | null;
  weakAgainst: (getTypeById_getType_weakAgainst | null)[] | null;
  cannotDoDamageTo: (getTypeById_getType_cannotDoDamageTo | null)[] | null;
  cannotTakeDamageFrom: (getTypeById_getType_cannotTakeDamageFrom | null)[] | null;
  appearedIn: getTypeById_getType_appearedIn | null;
}

export interface getTypeById {
  getType: getTypeById_getType | null;
}

export interface getTypeByIdVariables {
  id: number;
}
