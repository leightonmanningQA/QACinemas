import React from 'react';
import { Table } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

const Contact = (props) => {
    return (
    <>
    <h1>Contact Us</h1>   

    <Container>
    <Table>
        <thead>
            <tr>
          <th>Phone Number: </th>
            <th>
    <form action="" method="">
    <div class="col-md">
        <label class="form-check-label">First Name:</label>
        <input type="text" name="username" id="username" class="form-control" required/>
    </div>
    <div class="col-md">
        <label class="form-check-label">Email:</label>
        <input type="email" name="email" id="email" class="form-control" required/>
    </div>
    <div class="col-md">
        <label class="form-check-label">Subject:</label>
        <input type="text" name="subject" id="subject" class="form-control" required/>
    </div>
        <button outline color="primary" type="submit"><a href = "mailto: RJohnson@qa.com">submit</a></button>
    </form>
    </th>

    <th>Site Address: </th>
            </tr>
        </thead>
    </Table>
    </Container> */
    


    {/* <Container>
    <Table>
        <thead>
            <tr>
          <th>Phone Number: </th>
          <th><a href = "mailto: RJohnson@qa.com">Email Address</a></th> */}
        
   
    </>
    )
}
export default Contact