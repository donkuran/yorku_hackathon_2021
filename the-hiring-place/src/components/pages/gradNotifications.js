import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Container,
  Form,
  Card,
  CardBody,
  CardText,
} from "reactstrap";
import { NavLink as RouteLink } from "react-router-dom";
import "../../css/settings.css";
import "../../css/gradNotifications.css";
import Navigation2 from "../shared/navigation2";
import "bootstrap/dist/css/bootstrap.min.css";
import recruiter_ProfilePhoto from '../../images/profile2.png';

const GradNotifications = () => {
  const [notification, setNotification] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [auth, setAuth] = useState(true);
  const [auth, setAuth] = useState("");

    
    

  const SignInSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/notifications", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ notification }),
    });
    const payload = await response.json();
    if (response.status >= 400) {
      setAuth(false);
      alert(`Oops! Error ${response.status}:  ${payload.message}`);
    } else {
      sessionStorage.setItem("token", payload.token);
    }
    setNotification("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Navigation2 />
      <Container>
        <div className="notificationCenter">
          <div className="header-box">
          <div className="header-text">Notification Center</div>
          <div className="text-box">
            <p className="text">New recruiter connection and updates</p>
            </div>
            </div>
          <div className="frame12">
          <div className="table-container">
            <div className="rectangle146">
                <table>
                  <tbody>
                              <tr className="recruiter1">
                                  <td>
                                    <div className="recruiter_image-wrapper">   
                                        <div className="recruiter_img-container">
                                          <img className="recruiter_profilePhoto" src={ recruiter_ProfilePhoto } alt="recruiterProfilePhoto"/>  
                                        </div> 
                                        </div>
                                        </td>
                                        <td>
                                        <tr>
                                        <div className="recruiter_text-container">Recruiter Name</div>
                                        </tr>
                                        <tr>Sent you a message to your e-mail address</tr>
                                  </td>
                                  <td>Timestamp  
                                  </td>
                              </tr>  
                              </tbody>
                              </table>
                              </div>
                              <div className="rectangle147">
                                <table>
                                  <tbody>

                              <tr className="admin1">
                                  <td>
                                    <div className="admin_image-wrapper">   
                                        <div className="admin_img-container">
                                          <img className="recruiter_profilePhoto" src={ recruiter_ProfilePhoto } alt="recruiterProfilePhoto"/>  
                                        </div> 
                                        </div>
                                        </td>
                                        <td>
                                        <tr>
                                        <div className="admin_text-container">Admin Name</div>
                                        </tr>
                                        <tr>New Updates</tr>
                                  </td>
                                  <td>Timestamp  
                                  </td>
                              </tr>     
                              </tbody>
                              </table>
                              </div>
                         

                             
            </div>
          
            </div>
            <div>
            <input
          id="button-seeMore"
          type="button"
          onclick="See More()"
          value="See More"
          style={{ marginTop: "1rem" }}
        />{" "} 
  </div>
  </div>
   </Container>  
   
      </> 
  );
};

export default GradNotifications;
