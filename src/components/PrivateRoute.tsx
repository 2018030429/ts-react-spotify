import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { isAuthenticated as isAuthenticatedAtom } from '../recoil/auth/atoms';

export default function PrivateRoute({
  component: Component,
  logout,
  ...privateProps
}:any) {
  const [isAuthenticated] = useRecoilState(isAuthenticatedAtom);
  return (
    <Route {...privateProps} render={props => {
      if (isAuthenticated) {
        return <Component logout={logout} />
      } else {
        return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      }
    }} />
  );
}

