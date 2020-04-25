import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './views/Login';
import PrivateRoute from './PrivateRoute';
import MentorHomePage from './views/Mentor/Home'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <PrivateRoute path="/" component={MentorHomePage} />
    </Switch>
  );
};

export default Routes;
