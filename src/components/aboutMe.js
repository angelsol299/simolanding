import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div className="contact-body" style={{ marginBottom: "250px" }}>
        <Grid className="contact-grid">
          <Cell col={10}>
            <h2>hola! Bienvenido</h2>
            <p
              style={{
                //width: "75%",
                margin: "auto",
                paddingTop: "1em",
                fontSize: "30px"
              }}
            >
              {" "}
              <span className="full-text">
                Somos una empresa 100% <strong>mexicana</strong> que busca
                satisfacer las necesidades de la industria proporcionando
                soluciones eléctricas integrales, brindando seguridad y
                confianza a nuestros clientes, manteniendo en un estado óptimo
                de operación su negocio en armonía con el medio ambiente.
                <br />
                <br />
                Nuestra <strong> misión </strong> es ser un concepto único en el
                mercado eléctrico que brinda soluciones integrales innovadoras
                de calidad y amplio rendimiento económico.
                <br />
                <br />
                Nuestros <strong> valores </strong>son:  Responsabilidad 
                Compromiso  Respeto  Honestidad  Creatividad e innovación
              </span>
            </p>
            <p
              style={{
                //width: "75%",
                margin: "auto",
                //paddingTop: "1em",
                fontSize: "30px"
              }}
            >
              {" "}
              <span className="short-text">
                I've studied management, entrepreneurship, economics and latelty
                <b> Front End Development.</b> I've discover my passion for
                technology since I was a teenagare but I've never developed a
                professional interest about it untill the past year.
              </span>
              <br />
              <br />
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
