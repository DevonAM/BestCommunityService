import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import FloatingMenuBar from "./FloatingMenuBar";
import FooterSegment from "./FooterSegment";
import Home from "./Home";
import MenuBar from "./MenuBar";
import ServicesPage from "./ServicesPage";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import DonatePage from "./DonatePage";
import AServicePage from "./AServicePage";
import CheckoutPage from "./CheckoutPage";
import ManageServicesPage from "./ManageServicesPage";
import ManageEmployeesPage from "./ManageEmployeesPage";
import AccountPage from "./AccountPage";
import ThankYouPage from "./ThankYouPage";
import ThankYouPageDonation from "./ThankYouPageDonation";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <MenuBar />
          <ThankYouPageDonation />
          {/* <div>
            <Route path="/" exact component={Home} />
            <Route path="/services" exact component={ServicesPage} />
            <Route path="/donate" exact component={DonatePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/signup" exact component={SignUpPage} />
            <Route path="/service" component={AServicePage} />
            <Route path="/checkout" component={CheckoutPage} />
            <Route path="/manageservices" component={ManageServicesPage} />
            <Route path="/manageemployees" component={ManageEmployeesPage} />
            <Route path="/account" component={AccountPage} />
            <Route path="/thankyou" component={ThankYouPage} />
          </div> */}
          <FooterSegment />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
