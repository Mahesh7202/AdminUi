import React from "react";
import Form from "../Form/Form";
import "./styles.css";

function Modal({ user, setShowModal }) {
  return (
    <div className="modalContainer">
      <div className="titleCloseBtn">
        <div className="title">
          <h1>Edit User</h1>
        </div>


        <button
          onClick={() => {
            setShowModal(false);
          }}
        >
          X
        </button>
      </div>

      <div className="body">
        <Form user={user} setShowModal={setShowModal}/>
      </div>
    </div>
  );
}

export default Modal;

      