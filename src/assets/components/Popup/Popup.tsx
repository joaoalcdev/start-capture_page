/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// /* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React from 'react'
import Subscribe from '../Subscribe/Subscribe'

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            className="text-white text-bold close-button"
            onClick={() => {
              setOpenModal(false)
            }}
          >
            X
          </button>
        </div>
        <div className="header-popup">
          <img className="start-img-popup" src="start.svg" alt="START LOGO" />
          <h1 className="text-yellow text-jornada-popup">Jornada Start</h1>
        </div>
        <div className="">
          <p className="text-white text-thin text-subs-popup">
            Preencha os campos abaixo para ser notificado sobre as lives.
          </p>
        </div>
        {/* <div className="form-section-popup">
          <input
            className="input-form"
            type="text"
            name="name"
            placeholder="Digite seu nome completo"
            autoComplete="off"
          />
          <input
            className="input-form"
            type="text"
            name="name"
            placeholder="Digite seu e-mail"
            autoComplete="off"
          />
        </div> */}
        {/* <div className="footer">
        </div> */}
        <Subscribe />
      </div>
    </div>
  )
}

export default Modal
