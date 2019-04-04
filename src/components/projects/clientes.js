import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardActions,
  CardText,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Clientes extends Component {
  render() {
    return (
      <div className="projects-grid" style={{ marginTop: "40px" }}>
        {/*Project 1 */}
        <Card shadow={0} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "176px",
              width: "100%",

              background:
                "url(http://www.plazavacationpromocion.com/wp-content/uploads/2017/04/Logo-plaza-pelicanos-01-1024x379.png) center / cover"
            }}
          />
          <CardText>
            <b>
              <span style={{ fontSize: "20px", color: "#0099cc" }}>
                App: Under Development
              </span>
            </b>{" "}
            <br />
            Technologies: under development
          </CardText>
          <CardActions border>
            <Button
              href="https://github.com/angelsol299/react-redux-poketimes"
              colored
              target="_blank"
            >
              Github
            </Button>
            <Button colored>CodePen</Button>
            <Button colored>LivedDemo</Button>
          </CardActions>
          <CardMenu style={{ color: "black" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        {/*project 2 */}
        <Card shadow={0} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "176px",
              width: "100%",
              background:
                "url(http://www.loscabosguide.com/wp-content/uploads/2017/03/PlazaBonita-liverpool-logo-1.jpg) center / cover"
            }}
          />
          <CardText>
            <b>
              <span style={{ fontSize: "20px", color: "#0099cc" }}>
                Journal
              </span>
            </b>
            <br />
            Technologies: PHP and MySQL.
          </CardText>
          <CardActions border>
            <Button
              href="https://github.com/angelsol299/tictactoeapp"
              colored
              target="_blank"
            >
              Github
            </Button>
            <Button colored>CodePen</Button>
            <Button colored>LivedDemo</Button>
          </CardActions>
          <CardMenu style={{ color: "black" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        {/*Project 3 */}
        <Card shadow={0} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "176px",
              width: "100%",
              background:
                "url(http://www.lasmasinnovadoras.com/sectorprivado/wp-content/uploads/aeropuertiario.jpg) center / cover"
            }}
          />
          <CardText>
            <b>
              <span style={{ fontSize: "20px", color: "#0099cc" }}>
                App: Under Development
              </span>
            </b>{" "}
            <br />
            Technologies: under development
          </CardText>
          <CardActions border>
            <Button
              href="https://github.com/angelsol299/react-redux-poketimes"
              colored
              target="_blank"
            >
              Github
            </Button>
            <Button colored>CodePen</Button>
            <Button colored>LivedDemo</Button>
          </CardActions>
          <CardMenu style={{ color: "black" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
    );
  }
}

export default Clientes;
