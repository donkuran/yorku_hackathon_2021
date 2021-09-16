/* URL: http://localhost:3000/gradProfileView */
import React, { useEffect, useState } from "react";
import { Row, Col, Button, Container } from "reactstrap";
import '../../css/gradProfileView.css';
import profilePhoto from '../../images/profile2.png';

const GradProfileView = () => {
  return (
    <Container>
  
      <div className="gradProfile-wrapper">
        <form>

          <div className="myheader">
              <h1>Header to be added here</h1>
          </div>

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
                        <div className="profilePicture">
                            <img src={ profilePhoto } alt="profilePhoto"/>   
                        </div>
                        <label className="name">Name</label>
                        <input id="name" type="text" placeholder="Name" />
              
                        <label className="pronouns">Pronouns</label>
                        <input id="pronouns" type="text" placeholder="Pronouns" />

                        <label className="roleTitle">Role/Title</label>
                        <input id="roleTitle" type="text" placeholder="Role/Title" />

                        <label className="program">Program</label>
                        <input id="program" type="text" placeholder="Program" />

                        <label className="graduationYear">Program</label>
                        <input id="graduationYear" type="text" placeholder="YYYY" />

                        <label className="location">Location</label>
                        <label className="cityAndProvince">City, Province</label>

                        <label for="country">Country</label>
                        <select id="country" name="country">        
                          <option value="canada">Canada</option>
                          <option value="usa">USA</option>
                        </select>


                  </div>
                  <div className="card">
                        <h2>TITLE HEADING</h2>
                        <h5>Title description, Sep 2, 2017</h5>
                        <div className="fakeimg" style={{height:"200px"}}>Image</div>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
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


    </Container>
  );
};

export default GradProfileView;