import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/calculator" component={Calculator} />
      <Route exact path="/quote-of-the-day" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
