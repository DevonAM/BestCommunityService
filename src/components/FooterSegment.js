import React from "react";

const FooterSegment = () => {
  return (
    <div className="pusher">
      <div className="ui inverted vertical footer segment">
        <div className="ui container">
          <div className="ui stackable inverted divided equal height stackable grid">
            <div className="three wide column">
              <h4 className="ui inverted header">About</h4>
              <div className="ui inverted link list">
                <a href="#" className="item">
                  Sitemap
                </a>
                <a href="#" className="item">
                  Contact Us
                </a>
                <a href="#" className="item">
                  Events
                </a>
                <a href="#" className="item">
                  Plans
                </a>
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">Services</h4>
              <div className="ui inverted link list">
                <a href="#" className="item">
                  Temporary
                </a>
                <a href="#" className="item">
                  FAQ
                </a>
                <a href="#" className="item">
                  How To Access
                </a>
                <a href="#" className="item">
                  Favorites
                </a>
              </div>
            </div>
            <div className="seven wide column">
              <h4 className="ui inverted header">Footer Header</h4>
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSegment;
