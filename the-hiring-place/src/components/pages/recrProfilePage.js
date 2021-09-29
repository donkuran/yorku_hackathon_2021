import React, { useEffect, useState } from "react";
import { Row, Col, Button, Container } from "reactstrap";
import recr_ProfilePhoto from '../../images/profile2.png';
import '../../css/recrProfilePage.css';

const RecrProfilePage = () => {
  return (
    <Container>

        <Row>
          <hr></hr>
            <p className="your-dashboard">Your Dashboard</p>
            <hr></hr>
        </Row>

        <div className="recr_row">
              <div className="recr_leftcolumn">
                <form>
                  <div className="recr_card">
                       <div className="recr_cardTitle-myProfile">My Profile</div>
                        <div className="recr_profilePicture-container">
                            <img className="recr_profilePhoto" src={ recr_ProfilePhoto } alt="recr_profilePhoto"/>   
                            <input id="recr_upload" type="button" onclick="upload()" value="Upload" />
                        </div>
               
                        <div className="recr_profile-detail-container">
                            <label className="label">Name</label> <br />
                            <input id="recr_name" type="text" placeholder="Name" />  <br /> <br />

                            <label className="label">Pronouns</label>
                            <label className="recr_roleTitle-label">Role/Title</label> <br />
                            
                            <input id="recr_pronouns" type="text" placeholder="Pronouns" />
                            <input id="recr_roleTitle" 
                                  style={{margin: "0px 14px"}} 
                                  type="text" 
                                  placeholder="Role/Title" 
                            /> <br /> <br />
                            <label className="label">Company name</label> <br />
                            <input id="recr_companyName" type="text" placeholder="Company name" />  <br /> <br />
                            
                            <input id="recr_myprofile-save" type="button" onclick="myprofile_save()" value="Save" />

                        </div>
                  </div>
                </form>
            </div>

            <div className="recr_rightcolumn">
                  <div className="recr_card">
                    <div className="cardTitle-favourites">Favourites</div>

                      <div className="table-container">

                        
                        <table>
                        
                            <thead>
                        
                                <tr>
                                    {/* <th>
                                        <bold></bold>
                                    </th>
                                    <th>
                                        <bold>Program</bold>
                                    </th>
                                    <th>
                                        <bold>Role/Title</bold>
                                    </th> */}
                                </tr>
                            </thead>

                        
                            <tbody>
                                <tr className="tr1">
                                    <td>
                                      <div className="fav_image-wrapper">   
                                          <div className="fav_img-container">
                                             <img className="recr_profilePhoto" src={ recr_ProfilePhoto } alt="profilePhoto"/>  
                                          </div>   
                                          <div className="fav_text-container">Name</div>
                                      </div>
                                    </td>
                                    <td>Program    Role/Title</td>
                                    <td>City        Province</td>
                                    <td>
                                      <button className="viewComments">View Comments</button>
                                    </td>
                                </tr>
                                <tr className="tr1">
                                    <td>
                                      <div className="fav_image-wrapper">   
                                          <div className="fav_img-container">
                                             <img className="recr_profilePhoto" src={ recr_ProfilePhoto } alt="profilePhoto"/>  
                                          </div>   
                                          <div className="fav_text-container">Name</div>
                                      </div>
                                    </td>
                                    <td>Program    Role/Title</td>
                                    <td>City        Province</td>
                                    <td>
                                      <button className="viewComments">View Comments</button>
                                    </td>
                                </tr>
                                <tr className="tr1">
                                    <td>
                                      <div className="fav_image-wrapper">   
                                          <div className="fav_img-container">
                                             <img className="recr_profilePhoto" src={ recr_ProfilePhoto } alt="profilePhoto"/>  
                                          </div>   
                                          <div className="fav_text-container">Name</div>
                                      </div>
                                    </td>
                                    <td>Program    Role/Title</td>
                                    <td>City        Province</td>
                                    <td>
                                      <button className="viewComments">View Comments</button>
                                    </td>
                                </tr>
                                <tr className="tr1">
                                    <td>
                                      <div className="fav_image-wrapper">   
                                          <div className="fav_img-container">
                                             <img className="recr_profilePhoto" src={ recr_ProfilePhoto } alt="profilePhoto"/>  
                                          </div>   
                                          <div className="fav_text-container">Name</div>
                                      </div>
                                    </td>
                                    <td>Program    Role/Title</td>
                                    <td>City        Province</td>
                                    <td>
                                      <button className="viewComments">View Comments</button>
                                    </td>
                                </tr>
                                <tr className="tr1">
                                    <td>
                                      <div className="fav_image-wrapper">   
                                          <div className="fav_img-container">
                                             <img className="recr_profilePhoto" src={ recr_ProfilePhoto } alt="profilePhoto"/>  
                                          </div>   
                                          <div className="fav_text-container">Name</div>
                                      </div>
                                    </td>
                                    <td>Program    Role/Title</td>
                                    <td>City        Province</td>
                                    <td>
                                      <button className="viewComments">View Comments</button>
                                    </td>
                                </tr>                                                                
                            </tbody>
                        </table>

                      </div>                  
                    

         
                  </div>
            </div>
          </div>
    </Container>
  );
};

export default RecrProfilePage;