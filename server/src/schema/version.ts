import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';

import { Version } from '../data/version';

import { resourceResolver } from './common';

import { VersionGroupType } from './version-group';

export const VersionType = new GraphQLObjectType<Version>({
  name: 'Version',
  description: 'Pokemon Game Version',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    versionGroup: {
      type: VersionGroupType,
      resolve: resourceResolver<Version>('versionGroup', 'version_group'),
    },
  }),
});
