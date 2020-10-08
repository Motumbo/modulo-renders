import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";

import InstagramIcon from "../../../assets/contact/instagram.svg";
import LinkedinIcon from "../../../assets/contact/linkedin.svg";

const contactSocial = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={6} lg={3} className="contact__social">
          <img src={InstagramIcon} alt="Instagram" />
        </Col>
        <Col xs={6} lg={1} className="contact__social">
          <img src={LinkedinIcon} alt="LinkedIn" />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactSocial;
