import React from "react";
import { Grid } from "react-mdl";

const Contacto = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "60px" }}>Contacto</h1>

      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        Nombre <input type="text" style={{ width: "300px" }} />
        <br />
        Telefono <input type="text" style={{ width: "300px" }} />
        <br />
        email <input type="text" style={{ width: "300px" }} />
        <br />
        <button
          style={{ border: "none", backgroundColor: "grey", color: "white" }}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Contacto;
