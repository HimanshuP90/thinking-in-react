import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch   } from 'react-router-dom';
// import './index.css';
import App from './components/App';
import MyComponent from './components/MyComponent';
import Pagination from './components/Pagination';
import MyNewsApp from './components/MyNewsApp';

import Home from './Home'
import registerServiceWorker from './registerServiceWorker';

render((
 <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/MyNewsApp" component={MyNewsApp} />
        <Route exact path="/Pagination" component={Pagination} />
      </Switch>
    </App>
  </Router>
), document.getElementById('root'));﻿
registerServiceWorker();
