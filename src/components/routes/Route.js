import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SearchComponent } from '../search/index';
import { AuthorComponent } from '../author/index';

const RoutesApp = () => (
  <Switch>
    <Redirect exact from="/" to="search" />
    <Route exact path="/search" component={SearchComponent} />
    <Route exact path="/author/:id" component={AuthorComponent} />
  </Switch>
);

export default RoutesApp;