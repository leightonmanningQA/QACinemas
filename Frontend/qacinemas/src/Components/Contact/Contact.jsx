import React from 'react';
import {useState} from 'react';
import { Input } from 'reactstrap';
import { Phone, Mailbox} from 'react-bootstrap-icons';


const Contact = (props) => {

    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    return (
    <>
    <div class="container my-5 py-5 z-depth-1">
    <h1 className="text-white text-center display-3">Get in Touch</h1>
    <br></br>

  <div class="row">
    <div class="col-md-9 mb-md-0 mb-5">
      <form>
        <div class="row" className="text-white">

          <div class="col-md-12">
            <div class="md-form mb-0">
            <label className="form-check-label">Subject:</label>
            <input type="text" name="subject" id="subject" class="form-control" 
            value={subject} onChange={({target}) => setSubject(target.value)} required/>
            </div>
          </div>
        </div>
       
        <div class="row" className="text-white">
          <div class="col-md-12">
            <div class="md-form">
            <label class="form-check-label">Message:</label>
            <Input type="textarea" className="form-control"
              placeholder="How can we help?"value={message}onChange={({target})=>setMessage(target.value)} required/>
                         
            </div>
          </div>
        </div>
      </form>
      <br></br>

      <div class="text-center text-md-left">
        <button variant="primary"><a href = {"mailto: savannah.vaithilingam@qa.com?subject=" + subject + "&body=" + message}>Send</a></button> 
      </div>
    </div>    

    <div class="col-md-3">
      
          <Mailbox color="white"size={25}/>
          <p className="text-white">17-18 Henrietta St, Covent Garden, London WC2E 8QH</p>
        
        
          <Phone color="white"size={25}/>
          <p className="text-white">0873 435 9061</p>
        
    
    </div>
  </div>
  <div>
        <br></br>
    <iframe width="400" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas"
    src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=17-18%20Henrietta%20St%20London+(Monster%20Cinema)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">        
    </iframe>
    </div>
</div>  
    </>
    )
}
export default Contact;