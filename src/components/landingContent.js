import React from "react";
import { Grid, Cell } from "react-mdl";

const LandingContent = () => {
  return (
    <div>
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
              <p
                style={{
                  textAlign: "center",
                  marginTop: "-25px",
                  fontStyle: "italic"
                }}
              >
                Tu energia en buenas manos
              </p>
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default LandingContent;
