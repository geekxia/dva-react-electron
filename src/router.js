import React from 'react';
import {Router, Route, Switch} from 'dva/router';

import App from './components/App';
import Login from './routes/Login/login';
import Welcome from './routes/Welcome/welcome';
import First from './routes/First/first';
import Second from './routes/Second/second';

function RouterConfig({history}) {
  return (<Router history={history}>
    <App>
      <Switch>
        <Route path="/login" exact component={Login}/>
        <Route path="/" exact component={Welcome}/>
        <Route path="/first" exact component={First}/>
        <Route path="/second" exact component={Second}/>
      </Switch>
    </App>

  </Router>);
}

export default RouterConfig;
