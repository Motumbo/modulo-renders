import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";

import InstagramIcon from "../../../assets/contact/instagram.svg";
import LinkedinIcon from "../../../assets/contact/linkedin.svg";

const contactSocial = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={6} lg={1} className="contact__social">
          <a href="https://www.instagram.com/modulo.renders"><img src={InstagramIcon} alt="Instagram" /></a>
        </Col>
        <Col xs={6} lg={1} className="contact__social">
          <a href="https://www.linkedin.com/in/camila-bibbo"><img src={LinkedinIcon} alt="LinkedIn" /></a>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactSocial;
