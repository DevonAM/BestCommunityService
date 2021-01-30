import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
  render() {
    return (
      <div class="ui segment middle aligned center aligned grid">
        <div class="column">
          <h2 class="ui blue image header">
            <img src="./logo512.png" class="image" />
            <div class="content">Log-in to your account</div>
          </h2>
          <form class="ui large form">
            <div class="ui stacked segment">
              <div class="field">
                <div class="ui left icon input">
                  <i class="user icon"></i>
                  <input
                    type="text"
                    name="email"
                    placeholder="E-mail address"
                  />
                </div>
              </div>
              <div class="field">
                <div class="ui left icon input">
                  <i class="lock icon"></i>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div class="ui fluid large blue submit button">Login</div>
            </div>

            <div class="ui error message"></div>
          </form>

          <div class="ui message">
            New to us? <Link to="signup">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
