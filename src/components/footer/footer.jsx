import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Link } from "react-scroll";
import "./footer.scss";

import Arrow from '../../assets/footer/arrow.svg';

const partnerBox = () => (
  <div className="footer">
    <div className="wrapper">
      <Row>
        <Col xs={6} sm={6} md={6}>
          <div className="footer-box">
            <p>
              © 2020 - Built by
              <a href="https://nico-bebop.web.app/"> &lt;bebop /&gt;</a>             
            </p>
          </div>
        </Col>
        <Col xs={6} sm={6} md={6}>
          <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
            <div className="footer-box back-to-top">
              <p>AL INICIO</p>
              <img src={Arrow} alt="arrow" />
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  </div>
);
export default partnerBox;
