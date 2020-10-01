import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

function Login() {
  return (
    <div >
      <div class="center">

      <p> To get started .. create a room and then Share the   
        <strong> BOOM </strong> invite link</p>
      <a href="https://boom-meeting.herokuapp.com/"  className="btn-get-started"><Button variant="outline-primary" size="lg">CREATE  ROOM</Button></a>



</div>
    </div>
  );
}

export default Login;
