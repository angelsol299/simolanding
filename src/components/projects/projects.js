import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import Reactjs from "./react";
import Php from "./php";
import Clientes from "./clientes";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return <Php />;
    } else if (this.state.activeTab === 1) {
      return <Reactjs />;
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <Clientes />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs" style={{ marginTop: "0px" }}>
        <hr />
        <Tabs
          style={{ backgroundColor: "white" }}
          className="tabs-bar"
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Proyectos</Tab>
          <Tab>Servicios especializados</Tab>
          <Tab>Clientes</Tab>
        </Tabs>
        f
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()} </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
