import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import ProductList from './ProductList';

function App() {
  return (
    <div>
      <style global jsx> {`

        `}
      </style>
      <Switch>
        <Route  exact path='/' component={ProductList} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
