import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div className="contact-body">
        <span
          style={{
            //width: "75%",
            margin: "auto",
            paddingTop: "1em",
            textAlign: "center"
          }}
        >
          <h2 style={{ fontSize: "80px", color: "#085078" }}>
            Bien<span style={{ color: "grey" }}>ve</span>
            <span style={{ color: "black" }}>nido</span>
          </h2>
        </span>
        <Grid
          className="contact-grid"
          style={{
            display: "flex"
          }}
        >
          <Cell col={6} style={{ flex: "2" }}>
            <p
              style={{
                //width: "75%",
                margin: "auto",
                paddingTop: "1em",
                fontSize: "25px",
                marginRight: "60px"
              }}
            >
              {" "}
              <span className="full-text">
                Somos una empresa 100% <strong>mexicana</strong> que busca
                satisfacer las necesidades de la industria proporcionando
                soluciones eléctricas integrales, brindando seguridad y
                confianza a nuestros clientes, manteniendo en un estado óptimo
                de operación su negocio en armonía con el medio ambiente.
              </span>
            </p>

            <p
              style={{
                //width: "75%",
                margin: "auto",
                //paddingTop: "1em",
                fontSize: "30px",
                float: "right"
              }}
            >
              {" "}
              <span className="short-text">
                Somos una empresa 100% <strong>mexicana</strong> que busca
                satisfacer las necesidades de la industria proporcionando
                soluciones eléctricas integrales, brindando seguridad y
                confianza a nuestros clientes.
              </span>
              <br />
              <br />
            </p>
          </Cell>
          <Cell col={6} style={{ flex: "2" }}>
            <p
              style={{
                //width: "75%",
                margin: "auto",
                paddingTop: "1em",
                fontSize: "25px",
                color: "black"
              }}
            >
              <span className="full-text">
                Nuestra <strong> misión </strong> es ser un concepto único en el
                mercado eléctrico que brinda soluciones integrales innovadoras
                de calidad y amplio rendimiento económico.
                <br />
                Nuestros <strong> valores </strong>son:  Responsabilidad 
                Compromiso  Respeto  Honestidad  Creatividad e innovación
              </span>
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
