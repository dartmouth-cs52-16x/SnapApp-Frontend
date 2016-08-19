import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Main from './containers/main';
import CreateSnap from './containers/create-snap.js';
import ShowSnap from './containers/show-snap.js';
import Settings from './containers/settings.js';
import Profile from './containers/profile.js';
import RequireAuth from './containers/require-auth';
import { SignIn, SignUp } from './components/login';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="snaps/new" component={RequireAuth(CreateSnap)} />
    <Route path="snaps/:id" component={RequireAuth(ShowSnap)} />
    <Route path="/settings" component={RequireAuth(Settings)} />
    <Route path="/profile" component={RequireAuth(Profile)} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </Route>
);
