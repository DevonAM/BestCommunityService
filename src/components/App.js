import React from "react";
import FloatingMenuBar from "./FloatingMenuBar";
import FooterSegment from "./FooterSegment";
import Content from "./Content";
import MenuBar from "./MenuBar";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <FloatingMenuBar /> */}
        <MenuBar />
        <Content />
        <FooterSegment />
      </div>
    );
  }
}

export default App;
