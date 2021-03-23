import { createApi } from './create-api';
import { ListResponse, Resource } from './common';

export type Version = {
  id: number;
  name: string;
  names: Resource[];
  version_group: Resource;
};

export const versionApi = createApi('version');

export const fetchVersions = async () => {
  const { results } = await versionApi<ListResponse>();
  return results;
};

export const fetchVersion = async (name: string) => {
  return await versionApi<Version>(name);
};
