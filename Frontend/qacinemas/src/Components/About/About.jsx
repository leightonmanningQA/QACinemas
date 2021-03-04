import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const About = (props) => {
  return (
  <>
  <h1 className="text-white" align="center">Meet The Team</h1>
  <Row xs="1" sm="2" md="4">
    <div className="p-3 my-2 rounded">
      <Toast>
        <ToastHeader>
          Emannuel Lomax
        </ToastHeader>
        <ToastBody>
          <p>Github:<a class="nav-link" href="https://github.com/qamanny" target="_blank">Manny</a></p>
        </ToastBody>
      </Toast>
      
      <Toast>
        <ToastHeader>
          Leighton Manning
        </ToastHeader>
        <ToastBody>
         <p>Github:<a class="nav-link" href="https://github.com/leightonmanningQA" target="_blank">Leighton</a></p>
        </ToastBody>
      </Toast>
        
      <Toast>
        <ToastHeader>
          Rianna Johnson
        </ToastHeader>
        <ToastBody>
          <p>Github:<a class="nav-link" href="https://github.com/RQAJohnson" target="_blank">Rianna</a></p>
        </ToastBody>
      </Toast>
        
      <Toast>
        <ToastHeader>
          William McCudden-Hughes
        </ToastHeader>
        <ToastBody>  
          <p>Github:<a class="nav-link" href="https://github.com/willmccuddenQA" target="_blank">Will</a></p>
        </ToastBody>
      </Toast>
    </div>
  </Row>
  
  <div>
    <p className="text-white">Follow the link below to our contact page</p>
    <ul>
      <li><Link to="/Contact">Contact Us</Link></li>
    </ul>
  </div>

  <div>
    <h3 className="text-white" align="center">What is Scrum?</h3>
  </div>

</>  

    )
}
export default About;