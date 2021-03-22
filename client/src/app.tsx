import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { GenerationListPage } from './pages/generation-list';

export const App = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Poke Encylopedia</a>
      </div>
    </nav>
    <Switch>
      <Route path="/generation" component={GenerationListPage} />
      <Redirect exact path="/" to="/generation" />
    </Switch>
  </div>
)
