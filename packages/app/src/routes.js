import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './views/Login';
import RoleRouter from './RoleRouter'

const Routes = () => {

  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <RoleRouter/>
    </Switch>
  );
};

export default Routes;
