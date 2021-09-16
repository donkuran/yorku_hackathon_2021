/* URL: http://localhost:3000/gradProfileView */
import React, { useEffect, useState } from "react";
import { Row, Col, Button, Container, FormGroup } from "reactstrap";
import '../../css/gradProfileView.css';
import profilePhoto from '../../images/profile2.png';

const GradProfileView = () => {
  return (
    // <Container>
  
      <div className="gradProfile-wrapper">
        <div className="myheader">
            <h1>Header to be added here</h1>
        </div>
        <form>
          <div className="topnav">
            <a href="#">Profile</a>
            <a href="#">Work Preference</a>
            <a href="#" style={{float:"right"}}>View</a>
            <a href="#" style={{float:"right"}}>Edit</a>
            <a href="#" style={{float:"right"}}>Save</a>
          </div>

          <div className="row">
              <div className="leftcolumn">
                  <div className="card">
                    
                        <div className="profilePicture-container">
                            <img className="profilePhoto" src={ profilePhoto } alt="profilePhoto"/>   
                        </div>
                        <div className="profile-detail-container">
                            <label className="label">Name</label> <br />
                            <input id="name" className="input-text" type="text" placeholder="Name" />  <br />

                            <label className="label">Pronouns</label>
                            <label className="label" style={{padding: "0px 110px"}}>Role/Title</label> <br />
                            
                            <input id="pronouns" className="input-text" type="text" placeholder="Pronouns" />
                            <input id="roleTitle" 
                                  className="input-text" 
                                  style={{margin: "0px 14px"}} 
                                  ype="text" placeholder="Role/Title" 
                            />
                            <label className="label">Program</label> <br />
                            <input id="program" className="input-text" type="text" placeholder="Program" />  <br />
                            
                            <label className="label">Graduation Year (Or Expected)</label>
                            <input id="graduationYear" className="input-text" type="text" placeholder="YYYY" /> <br />

                            <label className="label">Location</label> <br />
                            <input id="location" className="input-text" type="text" placeholder="City, Province" />
                                   
                            {/* <label for="country">Country</label> */}
                            <select id="country" name="country" style={{margin: "0px 10px"}}>        
                              <option value="canada">Canada</option>
                              <option value="usa">USA</option>
                            </select>

                        </div>
                  </div>
                  <div className="card">
                       <div className="cardTitle">Links</div>
                       <input id="linkedIn" type="text" placeholder="LinkedIn" required />
                       <input id="websitePortfolio" type="text" placeholder="Website Or Portfolio" required />
                       <input id="twitter" type="text" placeholder="Twitter" required />
                       <input id="instagram" type="text" placeholder="Instagram" required />

                        {/* <h2>TdfadsfadsfdsfEADING</h2>
                        <h5>Title description, Sep 2, 2017</h5>
                        <div className="fakeimg" style={{height:"200px"}}>Image</div>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p> */}


                  </div>
            </div>

            <div className="rightcolumn">
                  <div className="card">
                    <div className="cardTitle">About Me</div>
                    {/* <div className="aboutMeDesc-container"> */}
                         <input id="aboutMeDescription" type="text" placeholder="Description" required />
                    {/* </div> */}
                  </div>
                  <div className="card">
                    <div className="cardTitle">About Me</div>
                    <div className="fakeimg"><p>Image</p></div>
                    <div className="fakeimg"><p>Image</p></div>
                    <div className="fakeimg"><p>Image</p></div>
                  </div>
                  <div className="card">
                    <h3>Follow Me</h3>
                    <p>Some text..</p>
                  </div>
              </div>
          </div>

        </form>

          <div class="footer">
            <h2>Footer to be added here</h2>
          </div>


        </div>  


    // </Container>
  );
};

export default GradProfileView;