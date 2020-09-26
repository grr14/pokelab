/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: encountersByPokemon
// ====================================================

export interface encountersByPokemon_encountersByPokemon_location {
  __typename: "Location";
  id: number | null;
  region: number | null;
  identifier: string | null;
}

export interface encountersByPokemon_encountersByPokemon {
  __typename: "Encounter";
  id: number | null;
  version: number | null;
  location: encountersByPokemon_encountersByPokemon_location | null;
  method: number | null;
  level_min: number | null;
  level_max: number | null;
  rarity: number | null;
}

export interface encountersByPokemon {
  encountersByPokemon: (encountersByPokemon_encountersByPokemon | null)[] | null;
}

export interface encountersByPokemonVariables {
  pokemonId?: number | null;
}
