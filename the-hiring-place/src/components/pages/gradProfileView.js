import React, { useEffect, useState } from "react";
import { Row, Col, Button, Container, FormGroup } from "reactstrap";
import '../../css/gradProfileView.css';
import profilePhoto from '../../images/profile2.png';
import tooltip from '../../images/tooltip.png';
import settings from '../../images/settings.svg';
import profile from '../../images/profile.svg';
import alert from '../../images/alert.svg';


const GradProfileView = () => {

  const images = [profilePhoto, tooltip];
  const [selectedImage, setSelectedImage] = useState(null);

  
  return (

    <Container>
      <div className="gradProfile-wrapper">
          <div className="header">
              <span className="header-yoh">YOH</span>
              <input id="logout" type="button" style={{float:"right"}} onclick="logout()" value="Logout" />
              <img id="settings" src={ settings } alt="settings icon" style={{float:"right"}} onclick="settings()" />
              <img id="profile" src={ profile } alt="profile icon" style={{float:"right"}} onclick="profile()" />
              <img id="alert" src={ alert } alt="alert icon" style={{float:"right"}} onclick="alert()" />
          </div>

        <form>
          <div className="topnav">
            <a id="profile" href="#">Profile</a>
            <a id="workPreference" href="#">Work Preference</a>
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
                        <input id="upload" type="button" onclick="upload()" value="Upload" />
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
                      <input id="resume" type="text" placeholder="Resume Link" />
                  </div>
            </div>

            <div className="rightcolumn">
                  <div className="card">
                    <div className="cardTitle-aboutMe">About Me</div>

                  {/*  aboutMe-tooltip-content="Tooltip: Remember this is an opportunity to tell recruiters about why you
                                    would be a great addition to a team/company" */}
                    <div className="aboutMe-tooltip-container" >
                          <img className="aboutMe-tooltip" src={ tooltip } alt="tooltip icon"/>   
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
                  </div>

                  <div className="card">
                    <div className="techskills-container">
                        <div className="cardTitle">Technical Skills</div>
                        <div className="techSkills">This is where the added skills will be displayed</div>
                        <input id="enterTechSkills" type="text" placeholder="Enter Skills" required />
                        <input id="addTechSkills" type="button" onclick="addTechSkills()" value="Add" />
                    </div>
                    <div className="personalSkills-container">
                        <div className="cardTitle">Personal Skills</div>
                        <div className="personalSkills">This is where the added skills will be displayed</div>
                        <input id="enterPersonalSkills" type="text" placeholder="Enter Skills" required />
                        <input id="addPersonalTechSkills" type="button" onclick="addPersonalSkills()" value="Add" />
                    </div>

                    <div className="languages">
                        <div className="cardTitle">Languages</div>
                        <input id="languages" type="text" placeholder="Languages" required />
                    </div>                    


                  </div>
              </div>
          </div>
        </form>

        <div class="footer">
            <span className="yoh1">YOH</span> <br />
            <span className="yoh2">York Opportunity Hub</span> <br />
            <input id="contact" type="button" onclick="Contact()" value="Contact" /> <br />
            <span className="privacy-policy">Privacy Policy</span> <br />
            <span className="terms-and-conditions">Terms and Conditions</span> <br />
            <span className="copyright">Yok University | School of Continuing Studies. All Rights Reserved. 2021</span>
        </div>
      </div>  

</Container>

  );
};

export default GradProfileView;


