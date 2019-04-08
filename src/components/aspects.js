import React from "react";

const Aspects = () => {
  return (
    <div>
      <hr style={{ border: "solid 1.5px", color: "#d9dce0" }} />
      <br />
      <br />
      <h1 style={{ textAlign: "center", fontSize: "60px" }}>
        Nuestra Experiencia
      </h1>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          textAlign: "center",
          marginBottom: "100px",
          marginLeft: "100px",
          marginRight: "100px"
        }}
      >
        <div style={{ flex: "2" }}>
          <img
            src="https://previews.123rf.com/images/alexwhite/alexwhite1304/alexwhite130404302/19227534-industry-blue-circle-web-glossy-icon.jpg"
            width="130px"
            height="130px"
            alt=""
          />
          <h1>Industrial</h1>
        </div>
        <div style={{ flex: "2" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpZum1fbg4wZkRdvU7FEjFBJ8bBZdCzxISAfYXBWY6IT06fKn"
            width="130px"
            height="130px"
            alt=""
          />
          <h1>Turística</h1>
        </div>
        <div style={{ flex: "2" }}>
          <img
            src="http://www.williamscreek.net/wp-content/uploads/2015/04/Power-Energy-Provider-Circle-Icon-No-Text.png"
            width="130px"
            height="130px"
            alt=""
          />
          <h1>Lineas de transmición</h1>
        </div>
        <br />
      </div>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          marginBottom: "100px",
          marginLeft: "100px",
          marginRight: "100px"
        }}
      >
        <div style={{ flex: "2" }}>
          <img
            src="https://previews.123rf.com/images/rastudio/rastudio1512/rastudio151205270/49878122-farm-buildings-line-icon-for-web-mobile-and-infographics-vector-white-icon-on-the-light-blue-circle-.jpg"
            width="130px"
            height="130px"
            alt=""
          />
          <h1>Megadesarrollos</h1>
        </div>
        <div style={{ flex: "2" }}>
          <img
            src="https://cdn0.iconfinder.com/data/icons/car-circle/512/9-512.png"
            width="130px"
            height="130px"
            alt=""
          />
          <h1>Subestación de potencia</h1>
        </div>
        <div style={{ flex: "2" }}>
          <img
            src="https://previews.123rf.com/images/alexwhite/alexwhite1304/alexwhite130404362/19228120-money-blue-circle-web-glossy-icon.jpg"
            width="130px"
            height="130px"
            alt=""
          />
          <h1>Centros de negocios</h1>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Aspects;
