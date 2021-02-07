import React from "react";
import { Link } from "react-router-dom";

class SignUpPage extends React.Component {
  render() {
    const logo = "./logo512.png";

    return (
      <div class="ui segment middle aligned center aligned grid">
        <div class="column">
          <h2 class="ui blue image header">
            <img src={logo} alt="sign up" class="image" />
            <div class="content">Sign Up</div>
          </h2>
          <form class="ui large form">
            <div class="ui stacked segment">
              <div class="field">
                <label>First Name</label>
                <input type="text" name="First Name" />
              </div>
              <div class="field">
                <label>Last Name</label>
                <input type="text" name="Last Name" />
              </div>
              <div class="field">
                <label>Email Address</label>
                <input type="email" name="Email Address" />
              </div>
              <div class="field">
                <label>Password</label>
                <input type="password" name="Password" />
              </div>

              <div class="field">
                <div class="ui checkbox">
                  <input type="checkbox" tabindex="0" class="hidden" />
                  <label>I agree to the Terms and Conditions</label>
                </div>
              </div>

              <div class="ui fluid large blue submit button">Submit</div>
            </div>

            <div class="ui error message"></div>
          </form>

          <div class="ui message">
            Already a member? <Link to="login">Log In</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
