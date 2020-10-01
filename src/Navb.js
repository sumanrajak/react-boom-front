import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



function Navb() {
  return (
    <div >
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <Navbar.Brand href="./"><strong>BOOM MEET </strong></Navbar.Brand>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     
      
    </Nav>
    <Nav>
    <Nav.Link href="./About">About</Nav.Link>
      <Nav.Link href="./Contact">Contact</Nav.Link>
    <Nav.Link href="./Login"><strong>ROOM</strong></Nav.Link>
    <Nav.Link href="./">HOME</Nav.Link>



      
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
}

export default Navb;
