import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import ProductList from './ProductList';
import SplashPage from './SplashPage';

function App() {
  return (
    <div>
      <style global jsx> {`

        `}
      </style>
      <Switch>
        <Route exact path='/user' component={ProductList} />
        <Route path='/' component={SplashPage} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
