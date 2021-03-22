import React from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';

import { fetchGenerations } from '../api/generation';
import { Card } from '../common/Card';
import { GridContainer } from '../common/GridContainer';
import { Page } from '../common/Page';
import { useFetch } from '../hooks/use-fetch';

import { GenerationDetailPage } from './generation-detail';

export const GenerationListPage = () => {
  let { url } = useRouteMatch();
  const generations = useFetch(fetchGenerations, [])();
  return (
    <Page title="Generations">
      <GridContainer>
        {generations.map(({ name }) => (
          <Link key={name} to={`${url}/${name}`}>
            <Card title={name}>Need info</Card>
          </Link>
        ))}
      </GridContainer>
      <Route path={`${url}/:generationName`} component={GenerationDetailPage} />
    </Page>
  );
};
