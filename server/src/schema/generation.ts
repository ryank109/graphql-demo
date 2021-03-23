import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';

import { ListResponse } from '../data/common';
import { fetchGeneration, Generation } from '../data/generation';
import { fetchRegion } from '../data/region';
import { fetchVersionGroup } from '../data/version-group';

import { resourceListResolver, resourceResolver } from './common';
import { RegionType } from './region';
import { VersionGroupType } from './version-group';

export const GenerationType = new GraphQLObjectType<Generation>({
  name: 'Generation',
  description: 'Pokemon Generations',
  fields: () => ({
    id: { type: GraphQLInt },
    mainRegion: {
      type: RegionType,
      resolve: resourceResolver<Generation>('region', 'main_region'),
    },
    name: { type: GraphQLString },
    versionGroups: {
      type: new GraphQLList(VersionGroupType),
      resolve: resourceListResolver<Generation>('versionGroup', 'version_groups'),
    },
  }),
});

export const GenerationListType = new GraphQLObjectType<ListResponse>({
  name: 'GenerationList',
  description: 'All Generations',
  fields: () => ({
    count: { type: GraphQLInt },
    next: { type: GraphQLString },
    prev: { type: GraphQLString },
    results: {
      type: new GraphQLList(GenerationType),
      resolve: resourceListResolver<ListResponse>('generation', 'results'),
    },
  })
})
