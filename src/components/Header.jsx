import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function Header(props){

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

      .topnav {
        background-color: #333;
        overflow: hidden;
      }
      
      /* Style the links inside the navigation bar */
      .topnav a {
        float: left;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
      }
      
      /* Change the color of links on hover */
      .topnav a:hover {
        background-color: #ddd;
        color: black;
      }
      
      /* Hide the link that should open and close the topnav on small screens */
      .topnav .icon {
        display: none;
            }

      @media screen and (max-width: 600px) {
        .topnav a:not(:first-child) {display: none;}
        .topnav a.icon {
          float: right;
          display: block;
        }
      }

      @media screen and (max-width: 600px) {
        .topnav.responsive {position: relative;}
        .topnav.responsive a.icon {
          position: absolute;
          right: 0;
          top: 0;
        }
        .topnav.responsive a {
          float: none;
          display: block;
          text-align: left;
        }
        #dropdown {
          display: none;
          position: absolute;
          top: 50px;
          right: 0px;
          z-index: 10;
          background-color: white;
          width: 100px;
          height: 100px;
          color: black;
        }
      }
      `} </style>
      <div className="topnav" id="myTopnav">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="javascript:void(0);" className="icon" onClick={props.onMyFunction}>
          <i className="fa fa-bars"></i></a>
        {/* <div id="dropdown">Dropdown menu</div> */}
    </div>
      {/* <div className='row'>
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
      </div> */}
    </div>
  );
}

Header.propTypes = {
  onMyFunction: PropTypes.func
}

export default Header;