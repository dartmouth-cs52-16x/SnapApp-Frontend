import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Main from './containers/main';
import CreateSnap from './containers/create-snap.js';
import ShowSnap from './containers/show-snap.js';
import Settings from './containers/settings.js';
import Profile from './containers/profile.js';
import Groups from './containers/groups.js';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="snaps/new" component={CreateSnap} />
    <Route path="snaps/:id" component={ShowSnap} />
    <Route path="/settings" component={Settings} />
    <Route path="/profile" component={Profile} />
    <Route path="/groups" component={Groups} />
  </Route>
);
