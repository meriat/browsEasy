import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function NewTicketForm(props) {
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({names: _names.value, location: _location.value, issue: _issue.value, timeOpen: new Moment()});
    _names.value = '';
    _location.value = '';
    _issue.value = '';

  }
  return (
    <div className='container'>
      <style jsx>{`
        input{
            margin-top: 4%;
            margin-bottom:3%;
        }
        `}</style>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input className='form-control' type='text' id='names' placeholder='Pair Names' ref = {(input) => {_names = input;}}/><br/>

        <input className='form-control' type='text' id='location' placeholder='Location' ref = {(input) => {_location = input;}}/><br/>

        <textarea className='form-control' id='issue' placeholder='Describe your issue' ref = {(textarea) => {_issue = textarea;}}/><br/>
        <button className='btn btn-success' type='submit'>Help!</button>
      </form>
    </div>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;