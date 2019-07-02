import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'common/pages/home/containers';
import Edit from 'common/pages/edit/containers';

import 'antd/dist/antd.css';
// import './styles/main.less';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/edit" component={Edit} />
  </Switch>
);

export default App;
