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

        <div className="row">
              <div className="leftcolumn">
                <form>
                  <div className="card">
                       <div className="cardTitle-myProfile">My Profile</div>
                        <div className="profilePicture-container">
                            <img className="profilePhoto" src={ recr_ProfilePhoto } alt="profilePhoto"/>   
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
                            
                            <input id="myprofile-save" type="button" onclick="myprofile_save()" value="Save" />

                        </div>
                  </div>
                </form>
            </div>

            <div className="rightcolumn">
                  <div className="card">
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
                                             <img className="profilePhoto" src={ recr_ProfilePhoto } alt="profilePhoto"/>  
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
                                             <img className="profilePhoto" src={ recr_ProfilePhoto } alt="profilePhoto"/>  
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
                                             <img className="profilePhoto" src={ recr_ProfilePhoto } alt="profilePhoto"/>  
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
                                             <img className="profilePhoto" src={ recr_ProfilePhoto } alt="profilePhoto"/>  
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
                                             <img className="profilePhoto" src={ recr_ProfilePhoto } alt="profilePhoto"/>  
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
