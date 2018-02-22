import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Login from './Components/Login';
import AccountContainer from './Components/AccountContainer';

export default <Fragment>
  <Route exact path="/" component={Login} />
  <Route path="/account" component={AccountContainer} />
</Fragment>