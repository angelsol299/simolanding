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

class Reactjs extends Component {
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
              background: "url(https://bit.ly/2uKNA52) center / cover"
            }}
          />
          <CardText>
            <b>
              <span style={{ fontSize: "20px", color: "#0099cc" }}>
                Iluminación
              </span>
            </b>{" "}
            <br />
            Estudios de iluminación en centros de trabajo
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
              background: "url(https://bit.ly/2UgWfLy) center / cover"
            }}
          />
          <CardText>
            <b>
              <span style={{ fontSize: "20px", color: "#0099cc" }}>
                Sistemas contra descargas
              </span>
            </b>
            <br />
            Medición e instalación de sistemas contra descargas atmosféricas.
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
        {/*project 3 */}
        <Card shadow={0} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "176px",
              width: "100%",
              background: "url(https://bit.ly/2CTUJo7) center / cover"
            }}
          />
          <CardText>
            <b>
              <span style={{ fontSize: "20px", color: "#0099cc" }}>
                Correciones
              </span>
            </b>
            <br />
            Corrección de factor de potencia.
          </CardText>
          <CardActions border>
            <Button
              href="https://github.com/angelsol299/React-redux-todoapp"
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

export default Reactjs;
