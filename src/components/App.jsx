import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';

function App(){
  return (
    <div>
      <style global jsx> {`
      body{
        background-color: black;
      }
      `}
      </style>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />
      </Switch>
      <hr/>
    </div>
  );
}

export default App;
