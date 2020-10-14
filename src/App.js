import React from 'react';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import * as ROUTES from './constants/routes' 
import { Home, Browse, SignIn, SignUp } from './pages';
import { IsUserRequired, ProtectedRoute } from './helpers/routes'

export default function App() {
  
  const user = { name : "Kaustuv"};

  return (
    <Router>
      <Switch>
          <IsUserRequired user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
            <Home/>
          </IsUserRequired>
          <IsUserRequired user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
            <SignIn/>
          </IsUserRequired>
        <IsUserRequired user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <SignUp/>
        </IsUserRequired>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse/>
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}
