import React from 'react';
import Resume from './resume2020';

//React Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//exporting class Routes
export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Resume} />
        </Switch>
      </div>
    </Router>
  );
}
