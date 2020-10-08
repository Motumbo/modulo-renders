import React from "react";
import "./modal.scss";

const successModal = (props) => (
  <div className="sucess__modal">
    <p>¡Enviado!</p>
    <p>
      Gracias por tu mensaje.<br></br>Estaremos respondiendo a la brevedad.
    </p>
    <div role="button" tabIndex={0} className="modal__btn flex-center" onClick={props.closeModal} onKeyDown={props.closeModal}>
      <p>Ok</p>
    </div>
  </div>
);

export default successModal;
