import { createApi } from './create-api';
import { ListResponse, Resource } from './common';

export type Region = {
  id: number;
  locations: Resource[];
  main_generation: Resource;
  name: string;
  names: any[];
  pokedexes: Resource[];
  version_groups: Resource[];
};

export const regionApi = createApi('region');

export const fetchRegions = async () => {
  const { results } = await regionApi<ListResponse>();
  return results;
};

export const fetchRegion = async (name: string) => {
  return await regionApi<Region>(name);
};
