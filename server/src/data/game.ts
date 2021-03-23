import { Generation } from './generation';
import { fetchVersion } from './version';
import { fetchVersionGroup } from './version-group';

export const fetchGamesForGeneration = async (generation: Generation) => {
  const versions = await Promise.all(generation.version_groups.map(async ({ name }) => {
    const versionGroup = await fetchVersionGroup(name);
    return await Promise.all(versionGroup.versions.map(({ name }) => fetchVersion(name)));
  }));
  return versions.flat();
};
