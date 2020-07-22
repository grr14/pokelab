/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPokemonSpritesById
// ====================================================

export interface getPokemonSpritesById_pokemonSprites {
  __typename: "Sprite";
  pokemon_id: number;
  description: string;
  sprite_url: string | null;
}

export interface getPokemonSpritesById {
  pokemonSprites: (getPokemonSpritesById_pokemonSprites | null)[] | null;
}

export interface getPokemonSpritesByIdVariables {
  id: number;
}
