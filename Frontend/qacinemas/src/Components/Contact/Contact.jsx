import React from 'react';
import { Table } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const Contact = (props) => {
    return (
    <>
    <h1 className="text-white" textAlign="centre">Contact Us</h1>
    <div>
        <div className="p-3 my-2 rounded">
            <Toast>
                <ToastHeader>
                    Phone Number
                </ToastHeader>
                <ToastBody>
                    02086295348
                </ToastBody>
            </Toast>
      </div> 
      <div className="p-3 my-2 rounded">
            <Toast>
                <ToastHeader>
                    Email Address
                </ToastHeader>
                <ToastBody>
                    <form action="" method="">
                        <div class="col-md">
                            <label class="form-check-label">Email:</label>
                            <input type="email" name="email" id="email" class="form-control" required/>
                        </div>
                        <div className="col-md">
                            <label className="form-check-label">Subject:</label>
                            <input type="text" name="subject" id="subject" class="form-control" required/>
                        </div>
                        <button outline color="primary" type="submit">
                            <a href = "mailto: savannah.vaithilingam@qa.com?subject=Issue with website&body=To Monster Cinema,">submit</a></button>
                    </form>
                </ToastBody>
            </Toast>
      </div> 
      <div className="p-3 my-2 rounded">
            <Toast>
                <ToastHeader>
                    Site Address
                </ToastHeader>
                <ToastBody>
                    25 Langbury Lane, T12 M58
                </ToastBody>
             </Toast>
      </div> 
      </div>
    </>
    )
}
export default Contact