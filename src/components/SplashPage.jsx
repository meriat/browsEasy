import React from 'react';
import {Link} from 'react-router-dom';

function SplashPage() {
  return (
    <div>
      <style global jsx> {`
        body{
        background-image: url('https://images.pexels.com/photos/947795/pexels-photo-947795.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        font-family: 'Fira Mono', monospace;
        }
        h2{
            background-color: rgba(0,0,0,0.6);
            box-shadow: 8px 0 50px 5px white;
            color:#ebf441;
            margin-top: 40px;
            text-align: center;
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%)
          }
          `}
      </style>
      <Link to='user'><h2>User login here!!</h2></Link>
    </div>
  );
}

export default SplashPage;
// https://images.unsplash.com/photo-1518314144686-36a36d62a13c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80