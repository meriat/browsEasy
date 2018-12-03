import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import { Switch, Route } from 'react-router-dom';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import Moment from 'moment';
import Admin from './Admin';
import { v4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: {},
      selectedTicket: null
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() => 
      this.updateTicketElapsedWaitTime(), 60000
    );
  }

  updateTicketElapsedWaitTime() {
    var newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    Object.keys(newMasterTicketList).forEach(ticketId => {
      newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
    });
    this.setState({masterTicketList: newMasterTicketList});
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  handleAddingNewTicketToList(newTicket){
    var newTicketId = v4();
    var newMasterTicketList = Object.assign({}, this.state.masterTicketList, {
      [newTicketId]: newTicket
    });
    newMasterTicketList[newTicketId].formattedWaitTime = newMasterTicketList[newTicketId].timeOpen.fromNow(true);
    this.setState({masterTicketList: newMasterTicketList});
  }

  handleChangingSelectedTicket(ticket){
    this.setState({selectedTicket: ticket});
  }

  render() {
    console.log(this.state.masterTicketList);
    return (
      <div>
        <style global jsx> {`
        body{
          background-color: white;
        }
        `}
        </style>
        <Header />
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route path='/admin' render={(props)=><Admin ticketList={this.state.masterTicketList} currentRouterPath={props.location.pathname} onTicketSelection={this.handleChangingSelectedTicket}
            selectedTicket={this.state.selectedTicket} />} />
          <Route component={Error404} />
        </Switch>
        <hr />
      </div>
    );
  }
}

export default App;
