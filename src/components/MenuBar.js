import React from "react";

const MenuBar = () => {
  return (
    <div className="pusher">
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui container">
          <div className="ui large secondary inverted pointing menu">
            <a className="toc item">
              <i className="sidebar icon"></i>
            </a>
            <a className="active item">Home</a>
            <a className="item">Services</a>
            <a className="item">Donate</a>
            <div className="right item">
              <a className="ui inverted button">Log in</a>
              <a className="ui inverted button">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
