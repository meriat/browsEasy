import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
      color:white;
      margin-top: 4%;
      h1{
        font-weight: bold;
        font-size:60px;
        color: black;
        text-shadow: 2px 2px 8px white;
        padding-top: 0px;
        margin: 0px;
      }
      .banner {
        background-color: black;
      }
      li{
          list-style-type: none;
          display: inline;
      }
      `} </style>
      <div className='banner'>
        <ul>
            <li><Link className='home' to='/'><h3>BrowsEasy</h3></Link></li>
            <li><h4>Welcome, username</h4></li>
            <li><Link className='btn' to='/profile'>Profile</Link></li>
            <li><Link className='btn btn-info'  to='/'>Log-Out</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;