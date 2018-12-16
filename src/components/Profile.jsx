import React from 'react';
import Header from './Header';

function Profile() {
  return (
    <div>
      <style global jsx> {`
      body {
      background-image: url('https://images.unsplash.com/photo-1431263154979-0982327fccbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80');
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
      background-color: pink;
      }
      .jumbotron{
          text-align: center;   
        //   background: transparent;
          height: 50px;
      }
      Header{
          margin-top: 0px;
          margin-bottom: 100px;
      }
        `}
      </style>
      <h1 className='jumbotron'>Give us your Info</h1>
      <Header/>
    <div className='container'>
        <form>
          <label>Your name</label>
          <input type='text' id='names' className='form-control' placeholder='Your name'/><br />

          <label>Give your Size</label>
          <input type='text' id='size' className='form-control' placeholder='Size - S,M,L,XL'/><br/>
          <button className='btn btn-primary' type='submit'>Done!</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;

// https://images.unsplash.com/photo-1494280257169-55829fedd76e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80