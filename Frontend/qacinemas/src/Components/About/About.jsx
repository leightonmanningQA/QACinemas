import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const About = (props) => {
    return (
        <>
        <h1>Meet The Team</h1>
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
        {/* ------------------------------------------- */}
        <Toast>
          <ToastHeader>
            Leighton Manning
          </ToastHeader>
          <ToastBody>
         <p>Github:<a class="nav-link" href="https://github.com/leightonmanningQA" target="_blank">Leighton</a></p>
          </ToastBody>
        </Toast>
        {/* ---------------------------------------------- */}
        <Toast>
          <ToastHeader>
            Rianna Johnson
          </ToastHeader>
          <ToastBody>
          <p>Github:<a class="nav-link" href="https://github.com/RQAJohnson" target="_blank">Rianna</a></p>
          </ToastBody>
        </Toast>
        {/* ---------------------------------------------- */}
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
        <p>Follow the link below to our contact page</p>
        <ul>
            <li><Link to="/Contact">Contact Us</Link></li>
        </ul>
    </div>
</>
        /* <Col>
        <Card>
        <CardHeader>Team Monster</CardHeader>
            <CardBody>
                <CardTitle tag="h5">Emmanuel Lomax</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <a class="nav-link" href="https://github.com/qamanny" target="_blank">Manny</a>
            </CardBody>
            <CardFooter>Footer</CardFooter>
        </Card> 
        </Col>
        <Col>
        <Card>
            <CardHeader>Team Monster</CardHeader>
            <CardBody>
                <CardTitle tag="h5">Leighton Manning</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <a class="nav-link" href="https://github.com/leightonmanningQA" target="_blank">Leighton</a>
            </CardBody>
            <CardFooter>Footer</CardFooter>
         </Card> 
        </Col>
        <Col>
        <Card>
            <CardHeader>Team Monster</CardHeader>
            <CardBody>
                <CardTitle tag="h5">Rianna Johnson</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <a class="nav-link" href="https://github.com/RQAJohnson" target="_blank">Rianna</a>
            </CardBody>
            <CardFooter>Footer</CardFooter>
        </Card> 
        </Col>
        <Col>
        <Card>
            <CardHeader>Team Monster</CardHeader>
            <CardBody>
                <CardTitle tag="h5">William McCudden-Hughes</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <a class="nav-link" href="https://github.com/willmccuddenQA" target="_blank">Will</a>
            </CardBody>
            <CardFooter>Footer</CardFooter>
        </Card> 
        </Col> */
     
   

    )
}
export default About;