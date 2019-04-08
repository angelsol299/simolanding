import React from "react";
import { Grid, Cell } from "react-mdl";

const Casos = () => {
  return (
    <div
      style={{
        textAlign: "center",
        width: "100%",
        height: "350px",
        backgroundColor: "#edf4ff"
      }}
    >
      <br />
      <h1 style={{ fontSize: "50px" }}>Casos</h1>
      <br />
      <p
        style={{
          margin: "0 450px 0 450px",
          fontSize: "18px",
          textAlign: "justify"
        }}
      >
        A continuación presentamos algunos de los muchos casos de éxito en
        conjunto con nuestro curriculum con los que en conjunto con nuestros
        clientes hemos logrado y a los cuales agradecemos su confianza a lo
        largo de los años.
      </p>
      <br />
      <br />
      <button
        style={{
          border: "none",
          backgroundColor: "#b9dee5",
          borderRadius: "8px",
          color: "white",
          width: "90px",
          height: "25px"
        }}
      >
        Descargar
      </button>
    </div>
  );
};

export default Casos;