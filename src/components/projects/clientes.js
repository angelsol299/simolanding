import React, { Component } from "react";
import { Card, CardTitle } from "react-mdl";

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
        </Card>
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
        </Card>
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
        </Card>
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
        </Card>
      </div>
    );
  }
}

export default Clientes;
