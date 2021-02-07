import React from "react";
import { Link } from "react-router-dom";

// const logo = "./logo512.png";

const renderContent = () => {
  return (
    <div className="pusher" style={{ marginBottom: "4em" }}>
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui container">
          <div className="ui inverted borderless top fixed fluid menu">
            {/* <a className="toc item">
              <i className="sidebar icon"></i>
            </a> */}
            <Link to="/" className="active item">
              Home
            </Link>
            <Link to="/services" className="item">
              Services
            </Link>
            <Link to="/donate" className="item">
              Donate
            </Link>
            <div className="right item">
              <Link to="/login" className="ui inverted button">
                Log in
              </Link>
              <Link to="signup" className="ui inverted button">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

class MenuBar extends React.Component {
  state = { activePage: null };
  render() {
    return renderContent();
  }
}

export default MenuBar;
