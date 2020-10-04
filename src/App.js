import React from 'react';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import * as ROUTES from './constants/routes' 
import { Home, Browse, SignIn, SignUp } from './pages';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home/>
        </Route>
        <Route path={ROUTES.SIGN_IN}>
          <SignIn/>
        </Route>
      </Switch>
      <Route path={ROUTES.SIGN_UP}>
        <SignUp/>
      </Route>
      <Route path={ROUTES.BROWSE}>
        <Browse/>
      </Route>
    </Router>
  );
}
