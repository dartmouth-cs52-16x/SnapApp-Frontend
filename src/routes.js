import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Main from './containers/main';
import CreateSnap from './containers/create-snap.js';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="snaps/new" component={CreateSnap} />
  </Route>
);
