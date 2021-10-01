import React, { useEffect, useState } from "react";
import { Row, Col, Button, Container, FormGroup } from "reactstrap";
import '../../css/gradProfileView.css';
import profilePhoto from '../../images/profile2.png';
import tooltip from '../../images/tooltip.png';
import "bootstrap/dist/css/bootstrap.min.css";


const GradProfileView = () => {

  const images = [profilePhoto, tooltip];
  const [selectedImage, setSelectedImage] = useState(null);

  
  return (

    <Container>
      <div className="gradProfile-wrapper">
        <form>
          <div className="row">
              <div className="leftcolumn">

                  <div className="card">
                      <div className="jobPreference">Describe what you are looking for in your next role</div>

                       {/*  aboutMe-tooltip-content="Tooltip: Remember this is an opportunity to tell recruiters about why you
                                      would be a great addition to a team/company" */}
                        <div className="jobPreference-tooltip-container" >
                            <img className="jobPreference-tooltip" src={ tooltip } alt="tooltip icon"/>   
                       </div>   
                       <div className="jobPreference-desc-container">
                           <textarea id="jobPreference-description" type="text" placeholder="Description" required />
                         </div>
                  </div>

                  <div className="card">
                      <div className="interests-container">

                          <div className="cardTitle">Interests</div>
                          <div className="drop-down">                     
                              <select id="accomplishments">
                                  <option value="" disabled selected hidden>A professional accomplishment I'm proud of is...</option>
                                  <option value="1">Option1</option>
                                  <option value="2">Option2</option>
                                  <option value="3">Option3</option>
                              </select> 
                              <input id="accomplishments" className="textbox" type="text" placeholder="Your Answer" />   
                          </div>
                          <div className="drop-down">  
                              <select id="superpower">
                                  <option value="" disabled selected hidden>My professional superpower is...</option>
                                  <option value="1">Option1</option>
                                  <option value="2">Option2</option>
                                  <option value="3">Option3</option>
                              </select> 
                              <input id="superpower" className="textbox" type="text" placeholder="Your Answer" />                        
                          </div>
                          <div className="drop-down">  
                              <select id="iLikeTo">
                                  <option value="" disabled selected hidden>When not working I like to...</option>
                                  <option value="1">Option1</option>
                                  <option value="2">Option2</option>
                                  <option value="3">Option3</option>
                              </select> 
                              <input id="iLikeTo" className="textbox" type="text" placeholder="Your Answer" />                        
                          </div>
                      </div>                 
                  </div>

                  <div className="card">
                      <div className="cardTitle">How important is it that your next role has a flexible remote work policy?</div>
                      <label class="radio-button-container">
                         <input type="radio" checked="checked"/>
                         <span className="checkmark">Not Important</span>
                      </label>
                      <label className="radio-button-container">
                         <input type="radio"/>
                         <span className="checkmark">Very Important</span>
                      </label>
                  </div>

                  <div className="card">
                     <div className="industry-container">
                        <div className="cardTitle">Which markets are you most interested in working in</div>
                        <div className="industry">This is where the added Industry will be displayed</div>
                        <input id="enterIndustry" type="text" placeholder="Industry" required />
                        <input id="addIndustry" type="button" onclick="addIndustry()" value="Add" />
                     </div>
                  </div>
            </div>

            <div className="rightcolumn">

                  <div className="card">
                        <div className="cardTitle">What type of positions are you interested in?</div>
                        <label class="checkmark-container">
                          <input type="checkbox" />
                          <span className="checkmark">internship</span>
                        </label>
                        <label className="checkmark-container">
                          <input type="checkbox"/>
                          <span className="checkmark">Contract</span>
                        </label>
                        <label className="checkmark-container">
                          <input type="checkbox"/>
                          <span className="checkmark">Full time</span>
                        </label>
                        <label className="checkmark-container">
                          <input type="checkbox"/>
                          <span className="checkmark">Part time</span>
                        </label>                                                
                    </div>

                    <div className="card">
                        <div className="cardTitle">What size of company would you like to work in?</div>
                        <label class="checkmark-container">
                          <input type="checkbox"/>
                          <span className="checkmark">Small (1-10 employees)</span>
                        </label>
                        <label className="checkmark-container">
                          <input type="checkbox"/>
                          <span className="checkmark">CMid-size (50-200 employees)</span>
                        </label>
                        <label className="checkmark-container">
                          <input type="checkbox"/>
                          <span className="checkmark">Large (201-500 employees)</span>
                        </label>
                        <label className="checkmark-container">
                          <input type="checkbox"/>
                          <span className="checkmark">Very Large (501-1000+ employees)</span>
                        </label>                                                
                    </div>

                    <div className="card">
                      <div className="cardTitle">What is your desired annual salary?</div>
                      <input id="desiredSalary" className="textbox" type="text" placeholder="$" />   
                  </div>

                  <div className="card">
                     <div className="workLocation-container">
                        <div className="cardTitle">Which locations do you want to work in?</div>
                        <div className="workLocation">This is where the added City will be displayed</div>
                        <input id="enterWorkLocation" type="text" placeholder="City" required />
                        <input id="addWorkLocation" type="button" onclick="addWorkLocation()" value="Add" />
                        <label class="checkmark-container">
                          <input type="checkbox" />
                          <span className="checkmark">Open to working remotely</span>
                        </label>
                     </div>
                  </div>   

                  <div className="card">
                      <div className="cardTitle">What is important to you in your next role?</div>
                      <label class="checkmark-container">
                        <input type="checkbox" />
                        <span className="checkmark">Mentorshiip</span>
                      </label>
                      <label className="checkmark-container">
                        <input type="checkbox"/>
                        <span className="checkmark">Growth within the company</span>
                      </label>
                      <label className="checkmark-container">
                        <input type="checkbox"/>
                        <span className="checkmark">Challenging problems to solve</span>
                      </label>
                      <label className="checkmark-container">
                        <input type="checkbox"/>
                        <span className="checkmark">Having a voice in the company or team direction</span>
                      </label>  
                      <label className="checkmark-container">
                        <input type="checkbox"/>
                        <span className="checkmark">Opportunities to learn and develop new skills</span>
                      </label>  
                      <label className="checkmark-container">
                        <input type="checkbox"/>
                        <span className="checkmark">A company with a strong growth trajectory</span>
                      </label>                                                                                                
                  </div>
              </div>
              <section>
                  <input id="submit" type="button" onclick="submit()" value="Submit" />
                  <p>That's it!</p>
                  <p>Click Submit and your profile is ready to be seen by recruiters.</p>
                  <p>Use this link to add your YOH! Profile URL to share.</p>
              </section>                            
          </div>

        </form>
      </div>  

</Container>

  );
};

export default GradProfileView;


