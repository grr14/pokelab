/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getEncountersByLocationAndVersion
// ====================================================

export interface getEncountersByLocationAndVersion_encountersByLocationAndVersion_location_location_area {
  __typename: "LocationArea";
  id: number | null;
  identifier: string | null;
}

export interface getEncountersByLocationAndVersion_encountersByLocationAndVersion_location {
  __typename: "Location";
  id: number | null;
  identifier: string | null;
  region: number | null;
  location_area: getEncountersByLocationAndVersion_encountersByLocationAndVersion_location_location_area | null;
}

export interface getEncountersByLocationAndVersion_encountersByLocationAndVersion_pokemon {
  __typename: "Pokemon";
  id: number;
  identifier: string;
  type_1: number | null;
  type_2: number | null;
  picture: string | null;
}

export interface getEncountersByLocationAndVersion_encountersByLocationAndVersion {
  __typename: "Encounter";
  id: number | null;
  version: number | null;
  location: getEncountersByLocationAndVersion_encountersByLocationAndVersion_location | null;
  method: number | null;
  level_min: number | null;
  level_max: number | null;
  rarity: number | null;
  pokemon: getEncountersByLocationAndVersion_encountersByLocationAndVersion_pokemon | null;
}

export interface getEncountersByLocationAndVersion {
  encountersByLocationAndVersion: (getEncountersByLocationAndVersion_encountersByLocationAndVersion | null)[] | null;
}

export interface getEncountersByLocationAndVersionVariables {
  locationId?: number | null;
  versionId?: number | null;
}
