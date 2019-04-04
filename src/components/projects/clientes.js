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
        {/*Project 4 */}
        <Card shadow={0} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "176px",
              width: "100%",

              background:
                "url(http://www.papelpotosi.com.mx/Imagenes/Servilleta%20Publicitaria/Clientes/Hoteles/fiesta_americana_logo1.png) center / cover"
            }}
          />
        </Card>
        {/*Project 5 */}
        <Card shadow={0} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "176px",
              width: "100%",

              background:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5_yrOZHEWe1QU32qAA3YCzYRMtMLrRDsXiUEmOu5CMt-0Mdq9) center / cover"
            }}
          />
        </Card>
        {/*Project 6 */}
        <Card shadow={0} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "176px",
              width: "100%",

              background:
                "url(https://manoamano.com/attachments/c38284650cde7a5e5722a4f181ea9a37aaf84633/store/fit/400/400/7779c5c86ae89e6d718b2a918d52c48430ec5001d368fa729b0fd9df7cfe/logo.gif) center / cover"
            }}
          />
        </Card>
      </div>
    );
  }
}

export default Clientes;
