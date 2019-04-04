import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <div className="alignFooterLeft">
              <h5 className="title">
                <strong>Contáctanos</strong>
              </h5>
              <p>
                (322) 222 6207 (Oficina) <br /> (322) 173 9634 (Celular) <br />
                (322)155 9546 (Celular) <br /> simegrupo@gmail.com
              </p>
            </div>
          </MDBCol>
          <MDBCol md="4">
            <div className="alignFooterLeft">
              <h5 className="title">
                {" "}
                <strong>Grupo SIME</strong>
              </h5>
              <p>
                ISO 90010
                <br /> Establecido en 2010 <br />
                Empresa socialmente responsable <br />
                Espcialización en desarrollo de estructuras electricas
              </p>
            </div>
          </MDBCol>
          <MDBCol md="4">
            <div className="alignFooterLeft">
              <h5 className="title">
                {" "}
                <strong>Otros servicios</strong>
              </h5>
              <div style={{ marginRight: "40px" }}>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">Servicios</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Asesorias</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Estudios</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Desarrollos</a>
                  </li>
                </ul>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <span style={{ fontSize: "15px" }}>
          Costa Rica No. 1407 Col. 5 de Diciembre CP. 48350 Puerto Vallarta,
          Jalisco.
        </span>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://github.com/angelsol299"> Angel Osoria </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
