import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import ProductList from './ProductList';
import NewTicketControl from './NewTicketControl';
import SplashPage from './SplashPage';
import Profile from './Profile';

function App() {
  return (
    <div>
      <style global jsx> {`

        `}
      </style>
      <Switch>
        <Route path='/user' component={ProductList} />
        <Route exact path='/' component={SplashPage} />
        <Route path='/profile' component={Profile} />
        <Route path='/newticket' component={NewTicketControl} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
