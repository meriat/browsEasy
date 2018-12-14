import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
      margin-top: 4%;
      color: white;
      .row {
        background-color: black;
      }
      .col-md-3{
        text-align: center;
        margin-top: 8px;
      }
      .col-md-5{
          text-align: center;
          margin-top: 8px;
      }
      .col-md-2{
        text-align: center;
        margin-top: 8px;
      }
      `} </style>
      <div className='row'>
        <div className='col-md-3'>
          <Link to='user'><h3>BrowsEasy</h3></Link>
        </div>
        <div className='col-md-5'>
          <h3>Welcome, username</h3>
        </div>
        <div className='col-md-2'>
          <Link to='profile'><h3>Profile</h3></Link>
        </div>
        <div className='col-md-2'>
          <Link className='btn'  to='/'><h4>Log-Out</h4></Link>
        </div>
      </div>
    </div>
  );
}

export default Header;