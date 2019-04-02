import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <img
            src="../../pics/power.jpg"
            alt=""
            style={{ width: "100%", height: "400px" }}
          />
          <Cell col={12}>
            <div className="MiddleBanner">
              <div className="banner-text">
                <h1>Grupo SIME</h1>
                <p style={{ textAlign: "center" }}>
                  Tu energia en buenas manos
                </p>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
