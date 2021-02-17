import React from "react";
import SideBar from "./SideBar";
import Modal from "./Modal";

class ManageServicesPage extends React.Component {
  constructor() {
    super();
    this.state = { showModal: true };
    // this.RenderModal = this.RenderModal.bind(this);
  }

  render() {
    return (
      <div>
        <Modal />
        {/* <div className="ui mobile only padded grid"></div>
        <div className="ui padded grid">
          <SideBar activePage="services" />
          <div
            className="sixteen wide mobile thirteen wide tablet thirteen wide computer right floated column"
            id="content"
          >
            <div className="ui padded grid">
              <div className="ui hidden section divider"></div>
              <div className="row">
                <h1 className="ui huge dividing header">Service Management</h1>
              </div>
              <div className="row">
                <table className="ui single line striped selectable unstackable table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Host</th>
                      <th>Price</th>
                      <th>Location</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1,001</td>
                      <td>Art Class</td>
                      <td>Kevin Buell</td>
                      <td>$100</td>
                      <td>sit</td>
                      <td>
                        <i
                          className="ui icon edit"
                          // onClick={this.setState({ showModal: true })}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>1,002</td>
                      <td>Spanish Class</td>
                      <td>Devon Meza</td>
                      <td>$100</td>
                      <td>elit</td>
                      <td>
                        <i className="ui icon edit" />
                      </td>
                    </tr>
                    <tr>
                      <td>1,003</td>
                      <td>Wedding Space Rental</td>
                      <td>Rotating</td>
                      <td>$100</td>
                      <td>Praesent</td>
                      <td>
                        <i className="ui icon edit" />
                      </td>
                    </tr>
                    <tr>
                      <td>1,003</td>
                      <td>Equipment Rental</td>
                      <td>N/A</td>
                      <td>$100</td>
                      <td>ante</td>
                      <td>
                        <i className="ui icon edit" />
                      </td>
                    </tr>
                    <tr>
                      <td>1,004</td>
                      <td>Community Meeting Space Rental</td>
                      <td>John Doe</td>
                      <td>$100</td>
                      <td>nisi</td>
                      <td>
                        <i className="ui icon edit" />
                      </td>
                    </tr>
                    <tr>
                      <td>1,005</td>
                      <td>Funeral Space</td>
                      <td>Reverend John</td>
                      <td>$100</td>
                      <td>at</td>
                      <td>
                        <i className="ui icon edit" />
                      </td>
                    </tr>
                    <tr>
                      <td>1,006</td>
                      <td>nibh</td>
                      <td>elementum</td>
                      <td>$100</td>
                      <td>Duis</td>
                      <td>
                        <i className="ui icon edit" />
                      </td>
                    </tr>
                    <tr>
                      <td>1,007</td>
                      <td>sagittis</td>
                      <td>ipsum</td>
                      <td>$100</td>
                      <td>mauris</td>
                      <td>
                        <i className="ui icon edit" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
    );
  }
}

export default ManageServicesPage;
