/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: EncountersByPokemonAndVersion
// ====================================================

export interface EncountersByPokemonAndVersion_encountersByPokemonAndVersion_location {
  __typename: "Location";
  id: number | null;
  region: number | null;
  identifier: string | null;
}

export interface EncountersByPokemonAndVersion_encountersByPokemonAndVersion {
  __typename: "Encounter";
  id: number | null;
  version: number | null;
  location: EncountersByPokemonAndVersion_encountersByPokemonAndVersion_location | null;
  method: number | null;
  level_min: number | null;
  level_max: number | null;
  rarity: number | null;
}

export interface EncountersByPokemonAndVersion {
  encountersByPokemonAndVersion: (EncountersByPokemonAndVersion_encountersByPokemonAndVersion | null)[] | null;
}

export interface EncountersByPokemonAndVersionVariables {
  pokemonId?: number | null;
  versionId?: number | null;
}
