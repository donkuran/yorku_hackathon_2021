import React, { Component } from "react";
class Signup extends Component {
constructor(props){
    super(props);
    this.state = { email: "", password: "", confirm_password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(evt) {
    this.setState({ 
        [evt.target.name]: evt.target.value 
    });
}
handleSubmit(evt) {
    evt.preventDefault();
    //alert(`You typed: ${this.state.name}`);
this.setState({name: ''});
}    
render()  {
        return (
            <div className="signup-wrapper">
            <h1 className="title">Sign Up</h1>
            <div className="signupGoogle-container">
          <input id="signupGoogle" type="button" value="Sign up with Google" />
        </div>          
        <div className="signupLinkedIn-container">
          <input id="signuplinkedIn" type="button" value="Sign up with LinkedIn " />
        </div>
        <div className="inputForm">
            <form onSubmit={this.handleSubmit}>
                <input id='email'
                type='email' placeholder='Email Address' 
                name='email'
                value={this.state.name}
                onChange={this.handleChange}
                />
                <input id='password'
                type='password' placeholder='Password'    
                name='password'
                value={this.state.name}
                onChange={this.handleChange} 
                />
                   <input id='password'
                type='password' placeholder='Confirm Password'
                name='confirm_password'
                value={this.state.name}
                onChange={this.handleChange}
                />
                <form>
<br/>
<div className="form-check">
    I am a:
  <label>
    <input
      type="radio"
      name="graduate"
      value="option1"
      checked={true}
      className="form-check-input"
    />
    Graduate looking for work
  </label>
</div>
<div className="form-check">
  <label>
    <input
      type="radio"
      name="recruiter"
      value="option2"
      className="form-check-input"
    />
    Recruiter looking to hire
  </label>
</div>
</form>
                <button id="signup">Sign Up</button>
                <div>
                    <div className="smallPrint">
                <p>By continuing you accept our standard <a id="terms" href="#">terms and conditions</a> and our <a id="terms" href="#">privacy policy.</a></p>
</div>
<br/>
            <div className="haveAccount-container">
            <a id="haveAccount" href="#">Have an account?</a>
            <a id="login" href="#">Login</a>
            </div>
            </div>
 </form>
 </div>
 </div>
        )}
        }
export default Signup;
