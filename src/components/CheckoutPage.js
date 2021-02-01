import React from "react";

class CheckoutPage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div class="ui custom button">Show custom popup</div>
        </div>
        <div class="ui custom popup top left transition hidden">
          I'm not on the same level as the button, but i can still be found.
        </div>
      </div>
    );
  }
}

export default CheckoutPage;
