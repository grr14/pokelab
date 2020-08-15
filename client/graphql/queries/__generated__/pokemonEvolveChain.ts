/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: pokemonEvolveChain
// ====================================================

export interface pokemonEvolveChain_pokemonEvolveChain_evolution {
  __typename: "EvolutionSummary";
  evolved_pokemon_id: number | null;
  evolution_trigger: number | null;
  trigger_item: number | null;
  minimum_level: number | null;
  gender: number | null;
  location: number | null;
  held_item: number | null;
  time_of_day: string | null;
  known_move: number | null;
  known_move_type: number | null;
  minimum_happiness: number | null;
  minimum_beauty: number | null;
  minimum_affection: number | null;
  physical_stats: number | null;
  pokemon_in_party: number | null;
  pokemon_type_in_party: number | null;
  trading_species: number | null;
  overworld_rain: number | null;
  device_upside_down: number | null;
}

export interface pokemonEvolveChain_pokemonEvolveChain {
  __typename: "Pokemon";
  id: number;
  identifier: string;
  type_1: number | null;
  type_2: number | null;
  evolve_from_pokemon_id: number | null;
  evolution_chain_id: number | null;
  picture: string | null;
  evolution: pokemonEvolveChain_pokemonEvolveChain_evolution | null;
}

export interface pokemonEvolveChain {
  pokemonEvolveChain: (pokemonEvolveChain_pokemonEvolveChain | null)[] | null;
}

export interface pokemonEvolveChainVariables {
  id?: number | null;
}
