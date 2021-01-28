import React from "react";

const FloatingMenuBar = (props) => {
  return (
    <div className="ui large top fixed hidden menu">
      <div className="ui container">
        <a className="active item">Home</a>
        <a className="item">Services</a>
        <a className="item">Donate</a>
        <div className="right menu">
          <div className="item">
            <a className="ui button">Log In</a>
          </div>
          <div className="item">
            <a className="ui button">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingMenuBar;
