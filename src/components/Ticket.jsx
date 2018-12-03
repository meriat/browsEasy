import React from 'react';
import PropTypes from 'prop-types';

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
      <h4>{props.formattedWaitTime}</h4>
      <p className="bg"><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
};

export default Ticket;
