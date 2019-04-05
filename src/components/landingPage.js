import React, { Component } from "react";
import LandingContent from "./landingContent";
import Projects from "./projects/projects";
import About from "./aboutMe";
import FooterPage from "./footerPage";
import Aspects from "./aspects";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <LandingContent />
        <About className="about" />
        <Aspects />
        <Projects />

        <FooterPage />
      </div>
    );
  }
}
export default LandingPage;
