import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';


// Layout
import App from 'layouts/app';

// Components
import Home from "ui/home";

render(
  <Router history={browserHistory}>
<<<<<<< HEAD
    <Route component={App}>
      <Route path="/" component={Home} />
=======
    <Route path="/" component={App}>   
>>>>>>> 325d927c0f40583979b51115e3452ee6923c55e5
    </Route>
  </Router>
,document.getElementById('app'));