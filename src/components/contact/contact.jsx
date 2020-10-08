import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contact.scss";
import * as emailjs from "emailjs-com";
import Title from "../ui-components/title/title";
import ContactSocial from './contactInfo/contactSocial';
import Modal from '../contact-modal/Modal';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      sending: false,
      successModal: false,
      errorModal: false,
    };
  }

  inputHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    var self = this;
    this.setState({ sending: true });
    e.preventDefault();

    var template_params = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };




    // YOUR EMAIL.JS API KEY IN FORMAT user_xxxxxxxxxxxxxxxxxx
    let API_KEY = "";

    // YOUR EMAIL.JS TEMPLATE ID
    let TEMPLATE_ID = "";




    emailjs.send("default_service", TEMPLATE_ID, template_params, API_KEY).then(
      function (response) {
        if (response.status === 200) {
          self.showSuccessModal();
        } else {
          self.showErrorModal();
        }
      },
      function (error) {
        self.showErrorModal();
      }
    );
  };

  // SUCCESS MODAL
  showSuccessModal = () => {
    this.setState({ successModal: true, sending: false });
    this.resetForm();
  };
  // ERROR MODAL
  showErrorModal = () => {
    this.setState({ errorModal: true, sending: false });
    this.resetForm();
  };
  // RESET CONTACT FORM
  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }
  // CLOSE ALL MODALS
  closeModal = () => {
    this.setState({ successModal: false, errorModal: false });
  };

  resetForm = () => {
    this.setState({ name: "", email: "", message: "" });
  };

  render() {
    let submitButtonRender = (
      <div className="small__button">
        <button aria-label="send message" type="submit" value="Send Message">
          Enviar Mensaje
        </button>
      </div>
    );
    if (this.state.sending) {
      submitButtonRender = (
        <div className="small__button sending-btn">
          <div className="flex-center">
            <div className="sbl-circ"></div>
          </div>
        </div>
      );
    }
    let modalRender = null;
    if (this.state.successModal) {
      modalRender = <Modal closeModal={this.closeModal} status="success" />;
    } else if (this.state.errorModal) {
      modalRender = <Modal closeModal={this.closeModal} status="error" />;
    }
    return (
      <div id="contact">
        {modalRender}
        <div className="wrapper">
          <Title title="Contactanos." />
          <p className="font14">
          Para recibir tu presupuesto contanos de qué se trata tu proyecto, envianos la documentación (planos, cortes, vistas y/o fotos), la cantidad de imágenes que vas a necesitar, y la fecha de entrega del producto.
          </p>

          <Row className="padding40">
            <Col md={12} lg={6}>
              <form id="contact-form" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Nombre" required name="name" value={this.state.name} onChange={this.inputHandler} />
                <input type="email" placeholder="Email" required name="email" value={this.state.email} onChange={this.inputHandler} />
                <textarea
                  rows="6"
                  cols="50"
                  placeholder="Mensaje..."
                  required
                  name="message"
                  value={this.state.message}
                  onChange={this.inputHandler}
                ></textarea>
                {submitButtonRender}
              </form>
            </Col>
          </Row>
          <ContactSocial />
        </div>
      </div>
    );
  }
};

export default Contact;
