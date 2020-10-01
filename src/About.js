import React, { useState } from 'react';
import './App.css';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Image from 'react-bootstrap/esm/Image';
import logo from "./creator.jpg"

import Col from 'react-bootstrap/Col'

function About() {
   
  
    return (
      <div>
          <Container style={{padding:'10px'}}>
            <Row>
<Col><Card border="primary">
  <Card.Header>About Developer</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
      Hola , its Suman here I'm glad you are here to check out .. one of my projects..</p><hl/> 
      <p>
       I am a Full Stack Web Developer</p><hl/> 
      <p>Enjoy the app
         </p>
      <footer className="blockquote-footer">
      <strong> SUMAN RAJAK </strong><cite title="Source Title">(Developer)</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
</Col>
<Col xs={6} md={4              }>
      <Image src={logo} thumbnail />
    </Col>
            </Row>
            <Row>
<Col><Card>
  <Card.Header>About APP</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
    <h4>Features </h4>
      <ul style={{color:"gray" , listStyleType:'cycle'}}>
        <li> - Realtime video calls</li>
        <li> - create your own video chat room</li>
        <li> -real time group chat</li>
        <li>- Easy to use</li>
        <li>- mute audio and video</li>




      </ul>
      
    </blockquote>
  </Card.Body>
</Card>
</Col>
<Col><Card>
  <Card.Header>About Version</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
    <h3>Version 1.2.0</h3>
      <ul>
        <li> <h4>New</h4></li>
        <li> -copy link feature added</li><hl/>
        <li>-view optimised</li><hl/>
        <li>-chat optimised</li>

      </ul>
      
    </blockquote>
  </Card.Body>
</Card>
</Col>

            </Row>
            <Row><Col><Card>
  <Card.Header>Technology Used</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
    
      <ul>
        <li>- Node.js</li>
        <li>- React.js</li>
        <li>- Socket.io</li>
        <li>- Express.js</li>
        <li>- webRTC</li>




      </ul>
      
    </blockquote>
  </Card.Body>
</Card>
</Col></Row>
<Row><Col><Card>
  <Card.Header>How To Use</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
    
      <ul>
        <li> <h3>Step 1:</h3> Go to <strong>home</strong> and click quick start or go to<strong> room</strong></li>
        <li> <h3>Step 2: </h3>click on  <strong>Create Room</strong></li>
        <li> <h3>Step 3:</h3><strong>BOOM </strong> you just created a room</li>
        <li> <h3>Step 4:</h3>now tap the copy button in the invite section to copy the invite link</li>
        <li> <h3>Step 5:</h3> finally !! share the link </li>



      </ul>
      <footer className="blockquote-footer">
        Don't forget to give review in contact <cite title="Source Title"> :)Enjoy </cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
</Col></Row>
          </Container>
    <div className="features">
      
    </div>
      </div>
      );
  }
  
 

export default About;
