import { createApi } from './create-api';
import { ListResponse, Resource } from './common';

export type VersionGroup = {
  id: number;
  name: string;
  order: number;
  generation: Resource;
  move_learn_methods: Resource[];
  pokedexes: Resource[];
  regions: Resource[];
  versions: Resource[];
};

export const versionGroupApi = createApi('version-group');

export const fetchVersionGroups = async () => {
  const { results } = await versionGroupApi<ListResponse>();
  return results;
};

export const fetchVersionGroup = async (name: string) => {
  return await versionGroupApi<VersionGroup>(name);
};
