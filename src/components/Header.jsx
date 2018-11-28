import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
      h1{
        background-color: red;
      }
      `} </style>
      <h1>Help Queue</h1>
      <div className='container'>
        <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
      </div>
    </div>
  );
}

export default Header;
