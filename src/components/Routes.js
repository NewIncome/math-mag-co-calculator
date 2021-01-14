import React, {} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import App from './App';
import DayQuote from './DayQuote';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/calculator" component={App} />
      <Route path="/dayquote" component={DayQuote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
