import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Login from './Components/Login';
import Account from './Components/Account';

export default <Fragment>
  <Route exact path="/" component={Login} />
  <Route path="/account" component={Account} />
</Fragment>