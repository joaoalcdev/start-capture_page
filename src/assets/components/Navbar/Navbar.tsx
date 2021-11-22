/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'

// Navbar Change Background
const Navbar: React.FC = () => {
  const [show, setShow] = useState(false)
  const controlNavbar = () => {
    if (window.scrollY > 40) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])

  // Toggle Navbar Mobile
  // const shoot = () => {
  //   alert('Funcionando')
  // }

  const [active, setMode] = useState(false)
  const ToggleMode = () => {
    setMode(!active)
  }

  return (
    <div className="noselect">
      <nav className={`navbar-container ${show && 'navbar-onchange'}`}>
        <div className="imagem">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="logo-start.svg"
              alt="Logo Start English Academy"
              className="logo"
            ></img>
          </a>
        </div>
        <div className="opcoes">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Sobre o curso
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            Planos
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            Érika Gondim
          </a>

          {/* <a className="destaque">Entrar</a> */}
        </div>
        <div className="menu">
          <div
            className={active ? 'icon iconActive' : 'icon'}
            onClick={ToggleMode}
          >
            <div className="hamburguer hamburguerIcon"></div>
            {/* <img className="abrir" src="closeMenu.svg" /> */}
          </div>

          <div className={active ? 'menu menuOpen' : 'menu menuClose'}>
            {/* <img className="fechar" src="closeMenu.svg"/> */}
            <div className="list">
              <ul className="listItems">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Sobre o curso
                </a>
                <br />
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Planos
                </a>
                <br />
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Érika Gondim
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="menu_opcoes">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Sobre o curso
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            Planos
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            Érika Gondim
          </a>

          {/* <a className="destaque">Entrar</a> */}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
