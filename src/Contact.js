import React, { useState } from 'react';

import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import './home.css';
import emailjs from 'emailjs-com';




function Contact() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
      emailjs.sendForm('gmail', 'boom', event.target, 'user_7HDMkOGuTrNq4FP63qrFE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
    };
    console.log(validated)
  
    return (
        <div style= {{display: 'flex', justifyContent: 'center',marginTop:'20px',padding:'6px'} } className = "contact">
          
      <Form noValidate validated={validated} onSubmit={handleSubmit} justify="center" className="d-flex flex-column">
         <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" name="email"/>
    </Col>
  </Form.Group>

        <Form.Row className="d-flex flex-column">
            
          <Form.Group   controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              name="namef"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group  md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              name="namel"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group  md="4" controlId="validationCustomUsername">
            <Form.Label>Comments</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="comments"
                aria-describedby="inputGroupPrepend"
                required
                name="coments"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a comment
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required name="city" />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required  name="state"/>
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required name="zip" />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        
        <Button type="submit">Submit form</Button>
      </Form>
      </div>
    );
  }
  
  export default Contact;
