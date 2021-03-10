import React from 'react';
import { Link } from 'react-router-dom';
import { Github } from 'react-bootstrap-icons';

const About = (props) => {
  return (
  <>
  <br></br>
  <br></br>
  <h1 className="text-white text-center display-4">Meet The Team</h1>

   <div className="container" align="center">
    <p className="lead text-center text-white pt-2 mb-5">Who Are We? | What is Scrum? | Our Approach.</p>

    <div class="row">
      <div class="col-md-3 mb-4">

        <div class="view z-depth-1 mb-4">
          <img src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
          class="img-fluid mx-auto" alt="smaple image"/>
        </div>

        <h6 class="font-weight-bold text-white">Emmanuel Lomax</h6>
        <small class="text-white">Developer</small>
        <p class="mt-3 text-white">Sed ut perspiciatis unde omnis natus accusantium.</p>
        <ul class="list-unstyled d-flex justify-content-center mt-3 mb-0 text-muted">
        <li><a class="nav-link" href="https://github.com/qamanny" target="_blank">
          <Github className="mx-3"color="white" size={40}/></a></li>
        </ul>

      </div>
      
      <div class="col-md-3 mb-4">

        <div class="view z-depth-1 mb-4">
          <img src="https://images.unsplash.com/photo-1610433572201-110753c6cff9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fHByb2dyYW1taW5nfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
          class="img-fluid mx-auto" alt="smaple image"/>
        </div>
        <h6 class="font-weight-bold text-white">Leighton Manning</h6>
        <small class="text-white">Scrum Master & Developer</small>
        <p class="mt-3 text-white">Sed ut perspiciatis unde omnis natus accusantium.</p>
        <ul class="list-unstyled d-flex justify-content-center mt-3 mb-0 text-muted">
        <li><a class="nav-link" href="https://github.com/leightonmanningQA" target="_blank">
          <Github className="mx-3"color="white" size={40}/></a></li>
        </ul>

      </div>
      
      <div class="col-md-3 mb-4">

        <div class="view z-depth-1 mb-4">
          <img src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2dyYW1taW5nfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
          class="img-fluid mx-auto" alt="smaple image"/>
        </div>

        <h6 class="font-weight-bold text-white">Rianna Johnson</h6>
        <small class="text-white">Developer</small>
        <p class="mt-3 text-white">Sed ut perspiciatis unde omnis natus accusantium.</p>
        <ul class="list-unstyled d-flex justify-content-center mt-3 mb-0 text-muted">
        <li><a class="nav-link" href="https://github.com/RQAJohnson" target="_blank">
          <Github className="mx-3"color="white" size={40}/></a></li>
        </ul>

      </div>
      
      <div class="col-md-3 mb-4">

        <div class="view z-depth-1 mb-4">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGF0YXxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
           class="img-fluid mx-auto" alt="smaple image"/>
        </div>

        <h6 class="font-weight-bold text-white">William McCudden-Hughes</h6>
        <small class="text-white">Developer</small>
        <p class="mt-3 text-white">Sed ut perspiciatis unde omnis natus accusantium.</p>
        <ul class="list-unstyled d-flex justify-content-center mt-3 mb-0 text-muted">

        <li><a class="nav-link" href="https://github.com/willmccuddenQA" target="_blank">
          <Github className="mx-3"color="white" size={40}/></a></li>
        </ul>

      </div>
      

    </div>
    <hr class="w-header my-4"/>
</div>
  
  

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

      <h4 className="text-white" align="center">-Team Monsters Approach-</h4>
      <p className="text-white">As a team we took a positive and motivated approach. We quickly rallied around and had a basic template of code to work with for each team member. 
      Once completed it allowed us to play to our strengths and volunteer/assign tasks to get the project completed. With every scrum meeting we each took turns 
      to discuss what had been done the previous day and what we were looking to complete for that day. 
      Throughout each day we ensured that we were regularly communicating about the duration of work we had done and whether there had been any major changes to 
      the git branches that we were working on collectively, this meant that at every stage of the building process, we were able to pull down the most current 
      changes to the application whilst continuing to work in our own way.</p>
      <br></br>
      <span className="block-example border border-dark">
    <p className="text-white" align="center"><i>For more information please follow:</i><a class="nav-link" 
    href="https://www.scrum.org/" target="_blank">Scrum</a></p></span>
  </div>

  {/* <div>
    <p className="text-white">Follow the link below to our contact page</p>
    <ul>
      <li><Link to="/Contact">Contact Us</Link></li>
    </ul>
  </div> */}
 
</>  

    )
}
export default About;