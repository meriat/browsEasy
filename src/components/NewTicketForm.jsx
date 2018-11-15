import React from 'react';

function NewTicketForm() {
  return (
    <div className='container'>
      <style jsx>{`
        input{
            margin-top: 4%;
            margin-bottom:3%;
        }
        `}</style>
      <form>
        <input className='form-control' type='text' id='names' placeholder='Pair Names' /><br/>
        <input className='form-control' type='text' id='location' placeholder='Location' /><br/>
        <textarea className='form-control' id='issue' placeholder='Describe your issue' /><br/>
        <button className='btn btn-success' type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewTicketForm;