import React from 'react';
import './footer.css';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Footer() {
  return (
    <div  className="footer">
    
     <Container>
         <Row>
             <Col> <h3>Contacts</h3>
             <ul>
             <li>Developer:<strong> SUMAN RAJAK </strong></li>

                 <li> Email: <a href="mailto:1806261@kiit.ac.in">1806261@kiit.ac.in</a></li>
                <li>Personal email:<a href="mailto:sumanrajak2001@gmail.com"> sumanrajak2001@gmail.com</a> </li>
                <li>Newtown, Kolkata,WB</li>
                <li>+91 7001396147</li>

                     </ul></Col>
             
             <Col> <h3>Links</h3>
             <ul>
                 <li><a href="https://www.instagram.com/bong_boy_sr/?hl=en">Instagram</a></li>
                 <li><a href="https://www.facebook.com/sumanrajak2001/">Facebook</a></li>
                 <li><a href="https://www.linkedin.com/in/suman-rajak-730021196/">LinkedIn</a></li>
                 <li><a href="https://github.com/sumanrajak ">Github</a></li>
             </ul>
             </Col>
             <Col>
         <p className="copyright">© BOOM MEETING 2020</p>  </Col>

         </Row>
         <br/>
         
         
         <Row> </Row>
     </Container>
    
    </div>
  );
}

export default Footer;
