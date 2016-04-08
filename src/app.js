import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';


// Layout
import App from 'layouts/app';

// Components
import Home from "ui/home";

render(
  <Router history={browserHistory}>
    <Route component={App}>
    	<Route path="/" component={App} />   
    </Route>
  </Router>
,document.getElementById('app'));