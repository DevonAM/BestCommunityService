import React from "react";
import SideBar from "./SideBar";

class ManageServicesPage extends React.Component {
  constructor() {
    super();
    this.state = { showModal: true };
    this.renderModal = this.renderModal.bind(this);
  }
  renderModal = () => {
    <div class="ui modal">
      <i class="close icon"></i>
      <div class="header">Profile Picture</div>
      <div class="image content">
        <div class="ui medium image">
          <img src="/images/avatar/large/chris.jpg" />
        </div>
        <div class="description">
          <div class="ui header">
            We've auto-chosen a profile image for you.
          </div>
          <p>
            We've grabbed the following image from the{" "}
            <a href="https://www.gravatar.com" target="_blank">
              gravatar
            </a>{" "}
            image associated with your registered e-mail address.
          </p>
          <p>Is it okay to use this photo?</p>
        </div>
      </div>
      <div class="actions">
        <div class="ui black deny button">Nope</div>
        <div class="ui positive right labeled icon button">
          Yep, that's me
          <i class="checkmark icon"></i>
        </div>
      </div>
    </div>;
  };

  render() {
    return (
      <div>
        {this.state.showModal ? this.renderModal() : null}
        <div className="ui mobile only padded grid"></div>
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
        </div>
      </div>
    );
  }
}

export default ManageServicesPage;
