import React from "react";
import FloatingMenuBar from "./FloatingMenuBar";
import FooterSegment from "./FooterSegment";
import Home from "./Home";
import MenuBar from "./MenuBar";
import ServicesPage from "./ServicesPage";
import LoginPage from "./LoginPage";

class App extends React.Component {
  render() {
    return (
      <div className="pusher">
        {/* <FloatingMenuBar /> */}
        <MenuBar />
        <LoginPage />
        <FooterSegment />
      </div>
    );
  }
}

export default App;
