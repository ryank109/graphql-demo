import React from 'react';
import { useParams } from 'react-router';
import { isEmpty } from 'ramda';

import { fetchGamesForGeneration } from '../api/game';
import { fetchGeneration } from '../api/generation';
import { Card } from '../common/Card';
import { GridContainer } from '../common/GridContainer';
import { Page } from '../common/Page';
import { useFetch } from '../hooks/use-fetch';

export const GenerationDetailPage = () => {
  const { generationName } = useParams<{ generationName: string }>();
  const generation = useFetch(fetchGeneration)(generationName);
  const games = useFetch(fetchGamesForGeneration, [])(isEmpty(generation) ? undefined : generation);

  return (
    <Page title="Detail">
      <Card title={generation?.name}>
        {generation?.main_region?.name}
      </Card>
      <Card title="Games">
        <GridContainer>
          {games.map(({ name }) => <div key={name}>{name}</div>)}
        </GridContainer>
      </Card>
    </Page>
  );
};
