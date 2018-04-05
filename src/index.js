import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch   } from 'react-router-dom';
import App from './components/App';
import Parent from './components/Parent';
import Home from './Home'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

render((
 <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Parent" component={Parent} />
      </Switch>
    </App>
  </Router>
), document.getElementById('root'));﻿
registerServiceWorker();
