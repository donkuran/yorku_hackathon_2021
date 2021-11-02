import React, { useEffect, useState } from "react";
import { Form, Row, Col, Label, Input, Button, Container, FormGroup, FormFeedback } from "reactstrap";
import recr_ProfilePhoto from '../../images/profile2.png';
import '../../css/recrProfilePage.css';

const RecrProfilePage = () => {
  return (
    <Container fluid>
      <main>
        <Row className="my-8">
          <hr></hr>
          <p className="your-dashboard">Your Dashboard</p>
          <hr></hr>
          <Col md="6">
            <Form>
              <div className="recr_card">
                  <div className="recr_cardTitle-myProfile">My Profile</div>
                    <div className="recr_profilePicture-container">
                        <img className="recr_profilePhoto" src={ recr_ProfilePhoto } alt="recr_profilePhoto"/>   
                        <input id="recr_upload" type="button" onclick="upload()" value="Upload" />
                    </div>
                    <div className="recr_profile-detail-container">
                        <FormGroup>
                            <Label for="recrProfile_name">Name</Label>
                            <Input id="recrProfile_name" type="text" placeholder="Name" required /> 
                        </FormGroup>

                          <FormGroup>
                            <Label for="recrProfile_pronouns">Pronouns</Label>                                    
                            <Input id="recrProfile_pronouns" type="text" placeholder="Pronouns" required />
                          </FormGroup>
                                                    
                        <FormGroup>
                          <Label for="recrProfile_roleTitle">Role/Title</Label>
                          <Input id="recrProfile_roleTitle" 
                          
                                type="text" 
                                placeholder="Role/Title" 
                          />
                          </FormGroup>

                        <FormGroup>
                          <Label for="recrProfile_companyName">Company Name</Label>
                          <Input id="recrProfile_companyName" type="text" placeholder="Company name" required/>
                        </FormGroup> <br />
                        
                        {/* <input id="recr_myprofile-save" type="button" onclick="myprofile_save()" value="Save" /> */}

                        <Button>
                            Submit
                        </Button>

                    </div>
              </div>
            </Form>
          </Col>  

          <Col md="6">
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
            </Col>    
        </Row> 
       </main>   
    </Container>
  );
};

export default RecrProfilePage;