import { createApi } from './create-api';
import { ListResponse, Resource } from './common';

export type Pokemon = {
  abilities: Resource[];
  base_experience: number;
  forms: Resource[];
  game_indices: Resource[];
  height: number;
  held_items: Resource[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Resource[];
  name: string;
  order: number;
  species: Resource;
  sprites: Resource;
  stats: Resource[];
  types: Resource[];
  weight: number;
};

export const pokemonApi = createApi('pokemon');

export const fetchPokemons = async () => {
  const { results } = await pokemonApi<ListResponse>();
  return results;
};

export const fetchPokemon = async (name: string) => {
  return await pokemonApi<Pokemon>(name);
};
