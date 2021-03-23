import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';

import { fetchGeneration } from '../data/generation';
import { fetchRegion } from '../data/region';
import { VersionGroup } from '../data/version-group';
import { fetchVersion } from '../data/version';

import { resourceListResolver, resourceResolver } from './common';
import { GenerationType } from './generation';
import { RegionType } from './region';
import { VersionType } from './version';

export const VersionGroupType = new GraphQLObjectType<VersionGroup>({
  name: 'VersionGroup',
  description: 'Pokemon Version Groups',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    order: { type: GraphQLInt },
    generation: {
      type: GenerationType,
      resolve: resourceResolver<VersionGroup>('generation', 'generation'),
    },
    regions: {
      type: new GraphQLList(RegionType),
      resolve: resourceListResolver<VersionGroup>('region', 'regions'),
    },
    versions: {
      type: new GraphQLList(VersionType),
      resolve: resourceListResolver<VersionGroup>('version', 'versions'),
    },
  }),
});
