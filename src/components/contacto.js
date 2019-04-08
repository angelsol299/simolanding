import React from "react";
import { Grid } from "react-mdl";

const Contacto = () => {
  return (
    <div>
      <hr style={{ border: "solid 1.5px", color: "#d9dce0" }} />
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
          Nombre{" "}
          <input
            type="text"
            style={{
              width: "300px",
              border: "none",
              backgroundColor: "#f4f7fc"
            }}
            name="nombre"
          />
          <br />
          Telefono{" "}
          <input
            type="text"
            style={{
              width: "300px",
              border: "none",
              backgroundColor: "#f4f7fc"
            }}
            name="telefono"
          />
          <br />
          email{" "}
          <input
            type="text"
            style={{
              width: "300px",
              border: "none",
              backgroundColor: "#f4f7fc"
            }}
            name="email"
          />
          <br />
          Comentarios
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            style={{
              width: "300px",
              border: "none",
              backgroundColor: "#f4f7fc"
            }}
          />
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
