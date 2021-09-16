/* URL: http://localhost:3000/gradProfileView */
import React, { useEffect, useState } from "react";
import { Row, Col, Button, Container, FormGroup } from "reactstrap";
import '../../css/gradProfileView.css';
import profilePhoto from '../../images/profile2.png';
import tooltip from '../../images/tooltip.png';


const GradProfileView = () => {

  const images = [profilePhoto, tooltip];
  const [selectedImage, setSelectedImage] = useState(null);

  
  return (


    // <Container>
  
      <div className="gradProfile-wrapper">
        <div className="myheader">
            <h1>Header to be added here</h1>
        </div>
        <form>
          <div className="topnav">
            <a id="profile" href="#">Profile</a>
            <a id="workPreference" href="#">Work Preference</a>
            {/* <a href="#" style={{float:"right"}}>View</a>
            <a href="#" style={{float:"right"}}>Edit</a>
            <a href="#" style={{float:"right"}}>Save</a> */}
             
            <input id="view" type="button" style={{float:"right"}} onclick="viewGradProfile()" value="View" />
            <input id="edit" type="button" style={{float:"right"}} onclick="editGradProfile()" value="Edit" />
            <input id="save" type="button" style={{float:"right"}} onclick="saveGradProfile()" value="Save" />
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
                            <label className="roleTitle-label">Role/Title</label> <br />
                            
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
                       <input id="linkedIn" type="text" placeholder="LinkedIn" />
                       <input id="websitePortfolio" type="text" placeholder="Website Or Portfolio" />
                       <input id="twitter" type="text" placeholder="Twitter" />
                       <input id="instagram" type="text" placeholder="Instagram" />
                       <input id="dummyContainer" type="text" />
                  </div>
            </div>

            <div className="rightcolumn">
                  <div className="card">
                    <div className="cardTitle-aboutMe">About Me</div>

                  {/*  aboutMe-tooltip-content="Tooltip: Remember this is an opportunity to tell recruiters about why you
                                    would be a great addition to a team/company" */}
                    <div className="aboutMe-tooltip-container" >
                           <img className="aboutMe-tooltip" src={ tooltip } alt="tooltip image"/>   
                    </div>   

                    <div className="aboutMeDesc-container">
                         <textarea id="aboutMeDescription" type="text" placeholder="Description" required />
                    </div>
                  </div>
                  <div className="card">
                       <div className="cardTitle">Education</div>
                       <input id="programCourse" type="text" placeholder="Program / Course" required />

                       <label className="startDate-label">Start Date</label>
                       <label className="endDate-label">End Date</label>
                            
                        <input id="startDate" className="input-text" type="text" placeholder="MM / YYYY" />
                        <input id="endDate" className="input-text" type="text" placeholder="MM / YYYY" />
                        {/* <input id="roleTitle" 
                                  className="input-text" 
                                  style={{margin: "0px 14px"}} 
                                  ype="text" placeholder="Role/Title" 
                        /> */}
                         
                  </div>

                  <div className="card">
                    <div className="cardTitle">Technical Skills</div>
                    <div className="techSkills-container"></div>
                    <input id="enterSkills" type="text" placeholder="Enter Skills" required />
                    <input id="addTechSkills" type="button" onclick="addTechSkills()" value="Add" />

                  
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