import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardText,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Php extends Component {
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
                "url(http://mtlgeotecniasac.com/web/wp-content/uploads/2017/10/Para-que-sirve-un-estudio-de-Suelos.jpg) center / cover"
            }}
          />
          <CardText>
            <b>
              <span style={{ fontSize: "20px", color: "#0099cc" }}>
                Estudio de tierras
              </span>
            </b>{" "}
            <br />
            Se realizó el estudio y análisis del sistema de tierras
          </CardText>

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
                "url(https://at3w.com/upload/imagenes/proteccion_contra_el_rayo_pdc.jpg) center / cover"
            }}
          />
          <CardText>
            <b>
              <span style={{ fontSize: "20px", color: "#0099cc" }}>
                Instalación de pararrayos
              </span>
            </b>
            <br />
            Diseño e instalación de sistema contra descargas atmosféricas.
          </CardText>

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
                "url(https://thumb.bibliocad.com/images/content/00110000/8000/118344.jpg) center / cover"
            }}
          />
          <CardText>
            <b>
              <span style={{ fontSize: "20px", color: "#0099cc" }}>
                Instalación de diagramas
              </span>
            </b>{" "}
            <br />
            Se realizó el levantamiento técnico y criterio normativo vigente.
          </CardText>

          <CardMenu style={{ color: "black" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
    );
  }
}

export default Php;
