import React from "react";
import SideBar from "./SideBar";

class ManageEmployeesPage extends React.Component {
  render() {
    return (
      <div>
        <div className="ui mobile only padded grid"></div>
        <div className="ui padded grid">
          <SideBar activePage="employee" />
          <div
            className="sixteen wide mobile thirteen wide tablet thirteen wide computer right floated column"
            id="content"
          >
            <div className="ui padded grid">
              <div className="row">
                <h1 className="ui huge dividing header">Employee Management</h1>
              </div>
              <div className="row">
                <table className="ui single line striped selectable unstackable table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>ID</th>
                      <th>Position</th>
                      <th>Status</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Devon Acree-Meza</td>
                      <td>123</td>
                      <td>Employee</td>
                      <td>dolor</td>
                      <td>
                        <i className="ui icon edit" />
                      </td>
                    </tr>
                    <tr>
                      <td>Kevin Buell</td>
                      <td>122</td>
                      <td>Employee</td>
                      <td>adipiscing</td>
                      <td>
                        <i className="ui icon edit" />
                      </td>
                    </tr>
                    <tr>
                      <td>John Doe</td>
                      <td>1456</td>
                      <td>Volunteer</td>
                      <td>odio</td>
                      <td>
                        <i className="ui icon edit" />
                      </td>
                    </tr>
                    <tr>
                      <td>Jane Johnson</td>
                      <td>6456</td>
                      <td>Employee</td>
                      <td>cursus</td>
                      <td>
                        <i className="ui icon edit" />
                      </td>
                    </tr>
                    <tr>
                      <td>Batman</td>
                      <td>8987</td>
                      <td>Volunteer</td>
                      <td>Sed</td>
                      <td>
                        <i className="ui icon edit" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageEmployeesPage;
