/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getStatsById
// ====================================================

export interface getStatsById_getStatsByPokemonId_hp {
  __typename: "Stat";
  base_stat: number | null;
  effort: number | null;
}

export interface getStatsById_getStatsByPokemonId_attack {
  __typename: "Stat";
  base_stat: number | null;
  effort: number | null;
}

export interface getStatsById_getStatsByPokemonId_defense {
  __typename: "Stat";
  base_stat: number | null;
  effort: number | null;
}

export interface getStatsById_getStatsByPokemonId_special_attack {
  __typename: "Stat";
  base_stat: number | null;
  effort: number | null;
}

export interface getStatsById_getStatsByPokemonId_special_defense {
  __typename: "Stat";
  base_stat: number | null;
  effort: number | null;
}

export interface getStatsById_getStatsByPokemonId_speed {
  __typename: "Stat";
  base_stat: number | null;
  effort: number | null;
}

export interface getStatsById_getStatsByPokemonId {
  __typename: "Stats";
  hp: getStatsById_getStatsByPokemonId_hp | null;
  attack: getStatsById_getStatsByPokemonId_attack | null;
  defense: getStatsById_getStatsByPokemonId_defense | null;
  special_attack: getStatsById_getStatsByPokemonId_special_attack | null;
  special_defense: getStatsById_getStatsByPokemonId_special_defense | null;
  speed: getStatsById_getStatsByPokemonId_speed | null;
}

export interface getStatsById {
  getStatsByPokemonId: getStatsById_getStatsByPokemonId | null;
}

export interface getStatsByIdVariables {
  id: number;
}
