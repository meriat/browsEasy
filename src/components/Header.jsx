import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Header(){

  return (
    <div>
      <style jsx>{`
      margin-top: 3%;
      color: white;
      .row {
        background-color: black;
      }
      .col-3{
        text-align: center;
        margin-top: 8px;
      }

      @media screen and (max-width: 600px) {
        h3,h4{
          font-size: small;
        }

        }

      `} </style>
      
      <div className='row'>
        <div className='col-3'>
          <Link to='user'><h3>BrowsEasy</h3></Link>
        </div>
        <div className='col-3'>
          <h3>username!</h3>
        </div>
        <div className='col-3'>
          <Link to='profile'><h3>Profile</h3></Link>
        </div>
        <div className='col-3'>
          <Link className='btn'  to='/'><h4>Log-Out</h4></Link>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  onHandleNav: PropTypes.func
};

export default Header;


      {/* <div className="w3-top">
        <div className="w3-bar w3-red w3-card w3-left-align w3-large">
          <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-black" href="javascript:void(0);" onClick={props.onHandleNav} title="Toggle Navigation Menu"><i className="fa fa-bars"></i></a>
          <Link to="#" className="w3-bar-item w3-button w3-padding-large w3-white">BrowsEasy</Link>
          <Link to="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Link 1</Link>
          <Link to="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Link 2</Link>
          <Link to="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Link 3</Link>
          <Link to="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Link 4</Link>
        </div>

        <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large">
          <Link to="#" className="w3-bar-item w3-button w3-padding-large">Link 1</Link>
          <Link to="#" className="w3-bar-item w3-button w3-padding-large">Link 2</Link>
          <Link to="#" className="w3-bar-item w3-button w3-padding-large">Link 3</Link>
          <Link to="#" className="w3-bar-item w3-button w3-padding-large">Link 4</Link>
        </div>
      </div> */}