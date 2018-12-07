import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Error404 from './Error404';
import Header from './Header';

function App() {
  return (
    <div>
      <style global jsx> {`

        `}
      </style>
      <Header />
      <Switch>
        {/* <Route component={Error404} /> */}
      </Switch>
      <hr />
    </div>
  );
}

export default App;
