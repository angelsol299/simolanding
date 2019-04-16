import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            style={{ position: "fixed" }}
            className="header-color"
            title={
              <Link
                style={{
                  textDecoration: "none",
                  color: "white"
                }}
                to="/"
              >
                Home
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="#resume">Nosotros</Link>
              <a href="#about">Nuestra experiencia</a>
              <Link to="#projects">Proyectos</Link>
              <Link to="#contact">Contacto</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Home
              </Link>
            }
          >
            <Navigation className="nav-side">
              <Link to="#resume">Resume</Link>
              <a href="#about">Nosotros</a>
              <Link to="#projects">Proyectos</Link>
              <Link to="#contact">Contacto</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
