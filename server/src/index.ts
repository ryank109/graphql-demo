import express from 'express';
import DataLoader from 'dataloader';
import { graphqlHTTP } from 'express-graphql';

import { fetchGeneration } from './data/generation';
import { fetchVersion } from './data/version';
import { fetchVersionGroup } from './data/version-group';
import { fetchRegion } from './data/region';
import schema from './schema';

const createDataLoader = callback => new DataLoader(keys => Promise.all(keys.map(callback)));

const loaders = {
  generation: createDataLoader(fetchGeneration),
  region: createDataLoader(fetchRegion),
  versionGroup: createDataLoader(fetchVersionGroup),
  version: createDataLoader(fetchVersion),
};

const app = express();
app.use(graphqlHTTP({
  context: { loaders },
  schema,
  graphiql: true,
}));

app.listen(5000);
