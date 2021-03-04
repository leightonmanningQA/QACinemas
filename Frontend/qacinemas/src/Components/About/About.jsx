import React from 'react';
import { Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const About = (props) => {
  return (
  <>
  <h1 className="text-white" align="center">Meet The Team</h1>
  <Row xs="1" sm="2" md="4">
    <div align="center" className="container">
    {/* //className="p-3 my-2 rounded" align="center" */}
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
  </Row><br></br>

  <div align="center" className="container">
    <h3 className="text-white" align="center">What is Scrum?</h3>
    <p className="text-white">Scrum is a framework which is used to allow teams to work together in an agile way. The goal being to productively solve problems 
      and work on projects via sprints, which on average last between 2 weeks and a month. Before the start of any sprint a meeting is usually held, 
      allowing team members the opportunity to discuss how long each sprint will last for and which tasks to begin. 
      <br></br>
      Within each day during a sprint, a stand up/scrum meeting is held (by the scrum master) which usually lasts around 15 minutes, allowing 
      team members the opportunity to discuss what they are aiming to complete that day; what they have already completed from the following day and if they 
      have any blockers (computer crashed, internet connection issues) that may prevent them from completing the tasks that they need to.</p>
      <br></br>

      <h4 className="text-white" align="center">Team Monsters Approach</h4>
      <p className="text-white">As a team we took a positive and motivated approach. We quickly rallied around and had a basic template of code to work with for each team member. 
      Once completed it allowed us to play to our strengths and volunteer/assign tasks to get the project completed. With every scrum meeting we each took turns 
      to discuss what had been done the previous day and what we were looking to complete for that day. 
      Throughout each day we ensured that we were regularly communicating about the duration of work we had done and whether there had been any major changes to 
      the git branches that we were working on collectively, this meant that at every stage of the building process, we were able to pull down the most current 
      changes to the application whilst continuing to work in our own way.</p>
      <br></br>
    <p className="text-white" align="center">For more information please follow:<a class="nav-link" 
    href="https://www.scrum.org/" target="_blank">Scrum</a></p>
  </div>

  <div>
    <p className="text-white">Follow the link below to our contact page</p>
    <ul>
      <li><Link to="/Contact">Contact Us</Link></li>
    </ul>
  </div>

</>  

    )
}
export default About;