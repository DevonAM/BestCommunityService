import React from "react";
import SideBar from "./SideBar";

class ManageServicesPage extends React.Component {
  render() {
    return (
      <div>
        <div class="ui mobile only padded grid"></div>
        <div class="ui padded grid">
          <SideBar activePage="services" />
          <div
            class="sixteen wide mobile thirteen wide tablet thirteen wide computer right floated column"
            id="content"
          >
            <div class="ui padded grid">
              <div class="ui hidden section divider"></div>
              <div class="row">
                <h1 class="ui huge dividing header">Service Management</h1>
              </div>
              <div class="row">
                <table class="ui single line striped selectable unstackable table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Host</th>
                      <th>Price</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1,001</td>
                      <td>Art Class</td>
                      <td>Kevin Buell</td>
                      <td>$100</td>
                      <td>sit</td>
                    </tr>
                    <tr>
                      <td>1,002</td>
                      <td>Spanish Class</td>
                      <td>Devon Meza</td>
                      <td>$100</td>
                      <td>elit</td>
                    </tr>
                    <tr>
                      <td>1,003</td>
                      <td>Wedding Space Rental</td>
                      <td>Rotating</td>
                      <td>$100</td>
                      <td>Praesent</td>
                    </tr>
                    <tr>
                      <td>1,003</td>
                      <td>Equipment Rental</td>
                      <td>N/A</td>
                      <td>$100</td>
                      <td>ante</td>
                    </tr>
                    <tr>
                      <td>1,004</td>
                      <td>Community Meeting Space Rental</td>
                      <td>John Doe</td>
                      <td>$100</td>
                      <td>nisi</td>
                    </tr>
                    <tr>
                      <td>1,005</td>
                      <td>Funeral Space</td>
                      <td>Reverend John</td>
                      <td>$100</td>
                      <td>at</td>
                    </tr>
                    <tr>
                      <td>1,006</td>
                      <td>nibh</td>
                      <td>elementum</td>
                      <td>$100</td>
                      <td>Duis</td>
                    </tr>
                    <tr>
                      <td>1,007</td>
                      <td>sagittis</td>
                      <td>ipsum</td>
                      <td>$100</td>
                      <td>mauris</td>
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

export default ManageServicesPage;
