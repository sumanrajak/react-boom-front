import React from 'react'
import logo from "./boom.png"
import Container from 'react-bootstrap/Container'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';

import './home.css';



function Home() {
  return (
    <div style={{ }} className="home" >
        
        <Container fluid="sm" spacing={2} justify="center"  >
  <Row xs={1} md={2} className="justify-content-center" >
    <Col sm xs={12} md={8} className="d-flex flex-column" ><h2>Stay Connected With <strong style={{color:'deepskyblue'}}>BOOM MEETS</strong></h2>
                               <p > CERATE YOUR  OWN CUSTOMISED ROOM</p>
                               <div >
                                <a href="./Login"  className="btn-get-started"><Button variant="outline-primary">QUICK START</Button></a>
                               </div></Col>
    
    <Col sm xs={{ order: 1 }} md={4}><img src={logo}  alt=""  style={{padding:'5px'}}/></Col>
  </Row>
</Container>

    </div>
  );
}

export default Home;
