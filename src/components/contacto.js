import React from "react";
import { Grid } from "react-mdl";

const Contacto = () => {
  return (
    <div>
      <hr style={{ border: "solid 1.5px", color: "grey" }} />
      <h1 style={{ textAlign: "center", fontSize: "60px" }}>Contacto</h1>

      <div>
        <form
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
          action="https://formspree.io/angelsol299@hotmail.com"
          method="POST"
        >
          Nombre <input type="text" style={{ width: "300px" }} name="nombre" />
          <br />
          Telefono{" "}
          <input type="text" style={{ width: "300px" }} name="telefono" />
          <br />
          email <input type="text" style={{ width: "300px" }} name="email" />
          <br />
          <button
            value="send"
            type="submit"
            style={{ border: "none", backgroundColor: "grey", color: "white" }}
          >
            Enviar
          </button>
        </form>
      </div>
      <br />
    </div>
  );
};

export default Contacto;
