/*!
 * Vendor
 */

import * as React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

/*!
 * Pages
 */

import Login from '../pages/auth/login';
import Registration from '../pages/auth/registration';

/*!
 * Expo
 */

const Auth = () => (
  <Switch>
    <Route path="/auth" component={Login} />
    <Route exact path="/auth/login" component={Login} />
    <Route exact path="/auth/registration" component={Registration} />
  </Switch>
);

export default Auth;

