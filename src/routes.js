import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Main from './containers/main';
import CreateSnap from './containers/create-snap.js';
import ShowSnap from './containers/show-snap.js';
import Settings from './containers/settings.js';
import Profile from './containers/profile.js';
<<<<<<< HEAD
import Groups from './containers/groups.js';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="snaps/new" component={CreateSnap} />
    <Route path="snaps/:id" component={ShowSnap} />
    <Route path="/settings" component={Settings} />
    <Route path="/profile" component={Profile} />
    <Route path="/groups" component={Groups} />
=======
import RequireAuth from './containers/require-auth';
import SignUp from './containers/sign-up';
import SignIn from './containers/sign-in';


export default(
  <Route path="/" component={App}>
    <Route path="snaps" component={RequireAuth(Main)} />
    <Route path="snaps/new" component={RequireAuth(CreateSnap)} />
    <Route path="snaps/:id" component={RequireAuth(ShowSnap)} />
    <Route path="/settings" component={RequireAuth(Settings)} />
    <Route path="/profile" component={RequireAuth(Profile)} />
    <Route path="/signup" component={SignUp} />
    <Route path="/signin" component={SignIn} />
>>>>>>> deec8d4c18bae63d09426d8214e4ec6a1ec515b4
  </Route>
);
