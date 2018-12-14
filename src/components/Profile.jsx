import React from 'react';

function Profile() {
  return (
    <div>
      <style jsx> {`
      body {
      background-image: url('https://images.pexels.com/photos/947795/pexels-photo-947795.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
      background-color: pink;
      }
      h1{
          text-align: center;   
      }
        `}
      </style>
      <h1 className='jumbotron'>Give us your Info</h1>
    <div className='container'>
        <form>
          <label>Your name</label>
          <input
            type='text'
            id='names'
            className='form-control'
            placeholder='Your name'/><br />

          <label>Give your Size</label>
          <input
            type='text'
            id='size'
            className='form-control'
            placeholder='Size - S,M,L,XL'/><br/>
          <button className='btn btn-primary' type='submit'>Done!</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;

