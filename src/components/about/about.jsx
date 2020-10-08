import React from "react";
import "./about.scss";
// Components
import Title from "../ui-components/title/title";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="Nosotros." />
      <p className="font14">
        Nos dedicamos a la visualización de imágenes arquitectónicas a través de modelado 3d, renders exteriores e interiores, y post-producción. <br /><br />
        Nuestro servicio está orientado a estudios de arquitectura, estudiantes, inmobiliarias, empresas constructoras y clientes particulares que quieran visualizar sus ideas.
      </p>
    </div>
  </div>
);

export default about;
