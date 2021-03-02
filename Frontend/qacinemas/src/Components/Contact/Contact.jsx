import React from 'react';
import { Table } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

const Contact = (props) => {
    return (
    <>
    <h1>Contact Us</h1>   
    <div class="container">
    <form action="" method="">
            <div class="row">
                <div class="form-group col-md-4">
                    <label>Select Title: </label>
                    <select id="title" class="form-control">
                    <option selected>Choose...</option>
                    <option>Mrs</option>
                    <option>Miss</option>
                    <option>Ms</option>
                    <option>Mr</option>
                  </select>
                </div>

                <div class="col-md">
                    <label class="form-check-label">First Name:</label>
                    <input type="text" name="username" id="username" class="form-control" required/>
                </div>
                <div class="col-md">
                    <label class="form-check-label">Email:</label>
                    <input type="email" name="email" id="email" class="form-control" required/>
                </div>
               <button outline color="primary" type="submit"><a href = "mailto: RJohnson@qa.com">submit</a></button>
                </div>
                </form>
                </div>


    <Container>
    <Table>
        <thead>
            <tr>
          <th>Phone Number: </th>
          <th>Site Address: </th>
            </tr>
        </thead>
    </Table>
    </Container> */
   
    </>
    )
}
export default Contact