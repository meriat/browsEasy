import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Error404 from './Error404';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import c from './../constants';

class App extends React.Component {

  render() {
    return (
      <div>
        <style global jsx> {`

        `}
        </style>
        <Header />
        <Switch>
          <Route component={Error404} />
        </Switch>
        <hr />
      </div>
    );
  }
}

export default App();
