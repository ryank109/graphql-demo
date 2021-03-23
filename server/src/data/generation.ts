import { createApi } from './create-api';
import { ListResponse, Resource } from './common';

export type Generation = {
  abilities: Resource[];
  id: number;
  main_region: Resource;
  moves: Resource[];
  name: string;
  names: Resource[];
  pokemon_species: Resource[];
  types: Resource[];
  version_groups: Resource[];
};

export const generationApi = createApi('generation');

export const fetchGenerations = async () => {
  const { results } = await generationApi<ListResponse>();
  return results;
};

export const fetchGeneration = async (name: string) => {
  return await generationApi<Generation>(name);
};
