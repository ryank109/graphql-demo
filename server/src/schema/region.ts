import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';

import { fetchGeneration } from '../data/generation';
import { Region } from '../data/region';
import { fetchVersionGroup } from '../data/version-group';
import { resourceListResolver, resourceResolver } from './common';

import { GenerationType } from './generation';
import { VersionGroupType } from './version-group';

export const RegionType = new GraphQLObjectType<Region>({
  name: 'Region',
  description: 'Pokemon Regions',
  fields: () => ({
    id: { type: GraphQLInt },
    mainGeneration: {
      type: GenerationType,
      resolve: resourceResolver<Region>('generation', 'main_generation'),
    },
    name: { type: GraphQLString },
    versionGroups: {
      type: new GraphQLList(VersionGroupType),
      resolve: resourceListResolver<Region>('versionGroup', 'version_groups'),
    },
  }),
});
