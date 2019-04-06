import React, { Component } from "react";
import LandingContent from "./landingContent";
import Projects from "./projects/projects";
import About from "./aboutMe";
import FooterPage from "./footerPage";
import Aspects from "./aspects";
import Contacto from "./contacto";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <LandingContent />
        <About className="about" />
        <Aspects />
        <Projects />
        <Contacto />
        <FooterPage />
      </div>
    );
  }
}
export default LandingPage;
