import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PrivateRoute from '../components/PrivateRoute';
import Home from '../views/Home';
import Login from '../views/Login';

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/home" component={Home} />
    </Router>
  );
}
