import { GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';

import { fetchGeneration, fetchGenerations } from '../data/generation';

import { resourceListResolver } from './common';
import { GenerationType } from './generation';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query',
  fields: () => ({
    allGenerations: {
      type: new GraphQLList(GenerationType),
      resolve: async (root, args, context) => {
        const results = await fetchGenerations();
        return resourceListResolver('generation', 'results')({ results }, args, context);
      },
    },
    generation: {
      type: GenerationType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (root, args, { loaders }) => loaders.generation.load(args.id),
    },
  }),
});

export default new GraphQLSchema({
  query: QueryType,
});
