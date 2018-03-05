import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch   } from 'react-router-dom';
import './index.css';
import App from './components/App';
import MyNewsApp from './components/MyNewsApp';
import Home from './Home' 
import registerServiceWorker from './registerServiceWorker';

render((
 <Router>
    <App>
      <Switch>
        <Route exact path="/" component={MyNewsApp} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </App>
  </Router>
), document.getElementById('root'));﻿
registerServiceWorker();
