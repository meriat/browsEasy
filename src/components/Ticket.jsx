import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Ticket(props){
  return (
    <div className='container'>
      <style jsx>{`
        .color-toggle {
          background-color: cyan;
        }
        .color-toggle:hover {
          background-color: pink;
        }
        .bg{
          color: red;
        }
        h4{
          color: white;
        }
        `} </style>
      <h3 className="color-toggle">{props.location} - {props.names}</h3>
      <h4>{displayTimeOpen(props.timeOpen)} ago</h4>
      <p className="bg"><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

function displayTimeOpen(timeOpen) {
  return timeOpen.from(new Moment(), true);
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  timeOpen: PropTypes.instanceOf(Moment).isRequired
};

export default Ticket;
