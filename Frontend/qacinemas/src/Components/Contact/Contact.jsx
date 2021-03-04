import React from 'react';
import {useState} from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const Contact = (props) => {

    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

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
                    Email Us Here!
                </ToastHeader>
                <ToastBody>
                    <form action="" method="">
                        <div className="col-md">
                            <label className="form-check-label">Subject:</label>
                            <input type="text" name="subject" id="subject" class="form-control" 
                            value={subject} onChange={({target}) => setSubject(target.value)} required/>
                        </div>
                        <div class="col-md">
                            <label class="form-check-label">Message:</label>
                            <input type="text" name="message" id="message" class="form-control" 
                            value={message} onChange={({target}) => setMessage(target.value)} required/>
                        </div>
                        <button outline color="primary" type="submit">
                            <a href = {"mailto: savannah.vaithilingam@qa.com?subject=" + subject + "&body=" + message}>submit</a></button>
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
                17-18 Henrietta St, Covent Garden, London WC2E 8QH
                </ToastBody>
             </Toast>
      </div> 
      </div>
    </>
    )
}
export default Contact