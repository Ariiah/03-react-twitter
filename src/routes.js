import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import Feed from './components/Feed';

export default (
  <Switch>
    <Route exact path={'/'} component={App} />
      <Route exact path={'/feed'} component={Feed} />
  </Switch>
);
