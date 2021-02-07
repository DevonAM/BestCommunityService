import React from "react";
import { Link } from "react-router-dom";

// const sidebarConfig = {
//   employees: {
//     text: "",
//   },
// };

class SideBar extends React.Component {
  render() {
    return (
      <div
        class="three wide tablet only three wide computer only column"
        id="sidebar"
      >
        <div class="ui vertical borderless fluid text menu">
          <Link to="/manageservices" class="item">
            Manage Services
          </Link>
          <Link to="/manageemployees" class="item">
            Manage Employees
          </Link>
          {/* <div class="ui hidden divider"></div>
        <a class="item">Nav item</a> <a class="item">Nav item again</a>
        <a class="item">One more nav</a> <a class="item">Another nav item</a>
        <a class="item">More navigation</a>
        <div class="ui hidden divider"></div>
        <a class="item">Macintosh</a> <a class="item">Linux</a>
        <a class="item">Windows</a> */}
        </div>
      </div>
    );
  }
}

export default SideBar;
