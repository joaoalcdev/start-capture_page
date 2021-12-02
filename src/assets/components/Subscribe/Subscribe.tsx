/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const SubscribeContainer = styled.div`
  margin: 20px 0px;
  padding: 24px;
  max-width: 768px;
  box-sizing: border-box;
  border: 1px solid #d0d0032e;
  background: #fbfc1c47;

  .sub-header {
    font-size: 1.25rem;
    font-weight: bold;
  }
  .sub-text {
    margin-top: 10px;
    margin-bottom: 20px;
    color: #2d3748;
    line-height: 1.5;
  }
`
const SubFormContainer = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  @media (max-width: 531px) {
    width: 100%;
    display: block;
  }

  .form-input {
    width: 78%;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    font-size: 16px;
    @media (max-width: 531px) {
      display: block;
    }
  }
  .form-input input {
    outline: #f9fafb;
    display: block;
    width: 100%;
    background-color: #f9fafb;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 4px;
    border: 1px solid #6a4feb2e;
    font-size: 16px;

    @media (max-width: 531px) {
      width: 100%;
      margin-bottom: 10px;
    }
  }
  .sub-form-btn {
    margin-left: 10px;

    .form-btn {
      padding-top: 0.7rem;
      padding-bottom: 0.7rem;
      padding-left: 1.2rem;
      padding-right: 1.2rem;
      border: none;
      border-radius: 4px;
      font-weight: bold;
      background: #7f5bd5b0;
      color: #ff0;
      cursor: pointer;

      :disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
    @media (max-width: 531px) {
      margin-top: 10px;
      margin-left: 0;
    }
  }
`
const SuccessState = styled.p`
  color: #3cff39;
  padding-top: 20px;
`
const ErrorState = styled.p`
  color: #ff5171;
  padding-top: 20px;
`

function Subscribe() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')
  const [errorMsg, setErrorMsg] = useState(null)

  const subscribe = async e => {
    e.preventDefault()

    setState('Loading')

    try {
      const response = await axios.post('/api/subscribe', { email })
      setState('Success')
      setEmail('')
    } catch (e) {
      setErrorMsg(e.response.data.error)
      setState('Error')
    }
  }

  return (
    <div className="">
      <form
        onSubmit={subscribe}
        action="https://gmail.us20.list-manage.com/subscribe/post?u=bb37b613774a0dc19016a9842&amp;id=17cbe5a34e"
      >
        <div className="">
          <div className="form-section-popup">
            <div className="form-input">
              <input
                required
                id="email-input"
                className="input-form"
                name="email"
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="security-popup">
              <img className="cadeado-img" src="security.svg" alt="CADEADO" />
              <p className="text-white text-thin text-security">
                Seus dados estão seguros conosco.
              </p>
            </div>
            <div className="sub-form-btn footer">
              <button
                disabled={state === 'Loading'}
                type="submit"
                className="form-btn"
                onClick={subscribe}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
        {state === 'Error' && (
          <ErrorState className="error-state">
            <span className="text-yellow">Você já está inscrito!</span>
            <br />
            <span className="msgError-2 text-ultra-sm">
              Fique de olho no e-mail para receber nossas atualizaçõs{' '}
            </span>
            {/* {errorMsg} */}
          </ErrorState>
        )}
        {state === 'Success' && (
          <SuccessState>
            <div className="sucess-container">
              <h1 className="msg-sucess"> Obrigado por inscrever-se. </h1>
              <a
                href="https://chat.whatsapp.com/DOQmLG6tdYD4T3iMtmnz2g"
                target="_blank"
                rel="noreferrer"
                className="msg-sucess-2"
              >
                Acesse nosso grupo do whatsApp clicando aqui
              </a>
            </div>
          </SuccessState>
        )}
      </form>
    </div>
  )
}

export default Subscribe
